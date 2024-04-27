1. Клонируешь к себе
2. Делаешь:
```     npm install      ```
3. Копируешь фаил .env.example
4. Добавляешь его рядом с названием .env
5. Закидываешь json из которого тебе нужно распарсить, тоже в корень проекта
6. В .env меняешь
```INPUT_JSON_FILE=test.json```
на 
```INPUT_JSON_FILE={название_своего_файла}```
если нужно меняешь ещё 
```OUTPUT_JSON_FILE=output.json```
на
```OUTPUT_JSON_FILE={название_файла_котрое_хочешь_в_реультате}```
7. Открываешь терминал в папке проекта
{ можно проверить командой ```ls``` в теримнале -> должно вывестись что-то типо: </br>
```README.md               index.js                node_modules            output                  package-lock.json       package.json            users.json```}
8. Запускаешь команду ```npm run dev```
9. Получаешь результат в папке /output
<img src="https://ca-times.brightspotcdn.com/dims4/default/efaecdc/2147483647/strip/true/crop/3962x2080+0+0/resize/1200x630!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F03%2F84%2F4788b80f4bf88294e91df874de96%2Frev-1-bar-tt3-0104-high-res-jpeg.jpeg">