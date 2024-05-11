const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Проверка наличия переменных окружения
if (!process.env.INPUT_JSON_FILE || !process.env.OUTPUT_JSON_FILE) {
    console.error("Необходимо указать пути к входному и выходному файлам в переменных окружения.");
    process.exit(1);
}

// Чтение входных данных из файла
const rawData = fs.readFileSync(process.env.INPUT_JSON_FILE);
const data = JSON.parse(rawData);

// Функция для извлечения списка идентификаторов должностей из профиля и мест работы
function extractJobTitleIds(employee) {
    const jobTitleIds = new Set();

    if (employee.profile) {
        employee.profile.forEach(item => {
            jobTitleIds.add(item.jobTitleId);
        });
    }

    if (employee.workPlaces) {
        employee.workPlaces.forEach(item => {
            jobTitleIds.add(item.jobTitleId);
        });
    }

    return Array.from(jobTitleIds);
}

const extractDepartmentId = (employee) => {
    const departmentIds = new Set
    if (!employee["workPlaces"].length) return null

    employee["workPlaces"].forEach((el) => {
        departmentIds.add(el["departmentId"])
    })

    return Array.from(departmentIds)
}

// Формирование списка пользователей с их данными
const users = data.employees.map(employee => ({
    fio: employee.fio,
    userName: employee.userName,
    jobTitleIds: extractJobTitleIds(employee),
    departmentIds: extractDepartmentId(employee)
}));

// Формирование объекта с выбранными данными
const selectedData = { users };

// Создание директории output, если она не существует
const outputDir = './output';
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// Запись выбранных данных в выходной файл
const outputFile = path.join(outputDir, process.env.OUTPUT_JSON_FILE);
fs.writeFileSync(outputFile, JSON.stringify(selectedData, null, 4));
console.log('Файл успешно записан в директорию output.');
