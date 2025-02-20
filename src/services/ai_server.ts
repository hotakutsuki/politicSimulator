// Please install OpenAI SDK first: `npm install openai`

import OpenAI from "openai";
import {apikey} from '../../apikey'

const openai = new OpenAI({
        baseURL: 'https://api.deepseek.com',
        apiKey: apikey,
        dangerouslyAllowBrowser: true
});

export async function askToAi() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "deepseek-chat",
  });
  console.log('response:')
  console.log(completion.choices[0].message.content);
}
