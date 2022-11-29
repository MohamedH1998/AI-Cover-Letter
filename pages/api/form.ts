import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const body = req.body;
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: generatePrompt(body),
        temperature: 0.7,
        max_tokens: 200,

    });

    res.status(200).json({ result: completion.data.choices[0].text})

    function generatePrompt(body: FormFields) {
        return `${process.env.PROMPT} Name: ${body.fullName}, Years of Experience: ${body.yearsOfExperience}, Name of company applying for: ${body.nameOfCompany}, Role applying for: ${body.nameOfRole}, Why I'm excited for the role: ${body.reasonForApplying}, My greatest strengths: ${body.greatestStrength}`
    }
}

