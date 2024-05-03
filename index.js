require('dotenv').config();

const fs = require('fs');
const path = require('path');
const rawData = fs.readFileSync(process.env.INPUT_JSON_FILE);
const data = JSON.parse(rawData);
const outputDir = './output';

const users = []
data["employees"].forEach(el => {
    let workPlace = []

    if (el["profile"]) {
         el.profile.forEach(item => {
             workPlace.push(item["jobTitleId"])
        })
    }

    if (el["workPlaces"]) {
        el["workPlaces"].forEach(item => {
            workPlace.push(item["jobTitleId"])
        })
    }

    users.push({
        "fio": el["fio"],
        "userName": el["userName"],
        "jobTitleIds": Array.from(new Set(workPlace))
    })
})

const selectedData = {
    users: users
};

// Проверить существование директории output
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

const outputFile = path.join(outputDir, process.env.OUTPUT_JSON_FILE);
fs.writeFileSync(outputFile, JSON.stringify(selectedData, null, 4));
console.log('Файл успешно записан в директорию output.');
