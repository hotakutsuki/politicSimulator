import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { stringify } from "querystring";

// const API_URL = "https://api.openai.com/v1/chat/completions";
// const API_URL = "https://api.deepseek.com/v1/chat/completions";
const API_URL = "http://localhost:11434/v1/chat/completions";

const API_KEY = process.env.OPENAI_API_KEY as string;
// const API_KEY = process.env.DEEPSEEK_API_KEY as string;


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 1000000);

  try {
    const { prompt, filename } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    // const messages = [{ role: "system", content: "Eres un experto en simulaciones económicas y políticas." }, { role: "user", content: prompt }]
    const messages = [{ role: "system", content: "Eres un experto en simulaciones económicas y políticas." }]
    console.log('server 3', messages)

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "deepseek-r1:7b",
        messages,
        temperature: 0.7,
      }),
      // signal: AbortSignal.timeout(1000000)
      signal: controller.signal, 
    });

    clearTimeout(timeout); // Limpia el timeout si la respuesta llega antes

    console.log('server 4', response)
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    // 🔍 Verifica la respuesta en texto antes de parsearla
    const rawText = await response.text();
    console.log("🔍 Raw Response:", rawText);

    // 🔹 Convertir la respuesta JSON a un objeto
    const data = JSON.parse(rawText);
    console.log("🔹 Data recibida como objeto:", data);
    
    // Guardar el JSON en /public/data/
    const filePath = path.join(process.cwd(), "public", "data", filename || "response.json");
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return res.status(200).json({ message: "File saved", filePath, data });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}
