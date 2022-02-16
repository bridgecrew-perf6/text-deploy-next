
import fs from 'fs'
import path from 'path'

export default function handler(req, response) {

    if (req.method === "GET") {

        const filePath = path.join(process.cwd(), 'data', 'lists.json');
        const fileData = fs.readFileSync(filePath);
        const data = JSON.parse(fileData)

        response.status(200).json(data)

    } else if (req.method === "POST") {
        const enWord = req.body.en;
        const frWord = req.body.fr;

        const newWord = {
            en: enWord,
            fr: frWord
        }

        const filePath = path.join(process.cwd(), 'data', 'lists.json');
        const fileData = fs.readFileSync(filePath);
        const data = JSON.parse(fileData)
        
        data.englishList[0].data.push(newWord)
        fs.writeFileSync(filePath, JSON.stringify(data))

        response.status(201).json({message:"Succès !"})
    }
}