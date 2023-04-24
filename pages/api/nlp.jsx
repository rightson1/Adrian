import { NlpManager } from "node-nlp";
import { model } from "../../lib/nlp";
import path from 'path'
const fs = require('fs/promises');


// model(manager);


// (async () => {
//     await manager.train();
//     manager.save();
// })();
const predict = async (name) => {

    const manager = new NlpManager({ languages: ['en'] });
    const modelPath = path.join(process.cwd(), 'model.nlp')
    const data = await fs.readFile(modelPath, 'utf8');
    manager.import(data);
    const response = await manager.process('en', `${name}`);
    const score1 = response.classifications.map(score => score);

    const score = Math.max(...score1.map(score => score.score))
    return { score1, score, response }
}
export default async function handler(req, res) {
    const { method } = req;
    switch (method) {
        case 'GET':
            res.status(200).json({ name: 'John Doe' })
            break;
        case 'POST':
            try {
                const { name } = req.body
                const { score1, score, response } = await predict(name);
                const doubts = score1.filter((item) => item.score > 0.02).filter((item) => item.score != score)
                const defaultAnswer = "I'm not sure, can you please rephrase your question?";
                if (!response.answer) {
                    res.status(200).json({ answer: defaultAnswer, doubts })
                }
                else if (score > 0) {
                    res.status(200).json({ answer: response.answer, doubts });
                }
                else {
                    res.status(200).json({ answer: defaultAnswer, doubts })
                }


            } catch (error) {
                console.log(error)
                res.status(500).json({ error: 'Something went wrong', error })
            }
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
            break;
    }
}