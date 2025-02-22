// Please install OpenAI SDK first: `npm install openai`

import OpenAI from "openai";
import { env } from "process";

const openai = new OpenAI({
        baseURL: 'https://api.deepseek.com',
        apiKey: env.DEEPSEEK_API_KEY,
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
