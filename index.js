require('dotenv').config();

const fs = require('fs');
const path = require('path');
const rawData = fs.readFileSync(process.env.INPUT_JSON_FILE);
const data = JSON.parse(rawData);
const outputDir = './output';

const users = []
data["employees"].forEach(el => {
    if (el["userName"]) users.push(el["userName"])
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
