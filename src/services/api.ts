// import type { NextApiRequest, NextApiResponse } from "next";
// import fs from "fs";
// import path from "path";

// const API_URL = "https://api.openai.com/v1/chat/completions";
// const API_KEY = process.env.OPENAI_API_KEY as string;

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method Not Allowed" });
//   }

//   try {
//     const { prompt, filename } = req.body;

//     if (!prompt) {
//       return res.status(400).json({ error: "Prompt is required" });
//     }

//     console.log('3 server')
//     const response = await fetch(API_URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${API_KEY}`,
//       },
//       body: JSON.stringify({
//         model: "gpt-4-turbo",
//         messages: [{ role: "system", content: "Eres un experto en simulaciones económicas y políticas." }, { role: "user", content: prompt }],
//         temperature: 0.7,
//       }),
//     });
//     console.log('4 server')


//     if (!response.ok) {
//       throw new Error(`API Error: ${response.statusText}`);
//     }

//     const data = await response.json();

//     // Guardar el JSON en /public/data/
//     const filePath = path.join(process.cwd(), "public", "data", filename || "response.json");
//     fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

//     return res.status(200).json({ message: "File saved", filePath, data });
//   } catch (error: any) {
//     return res.status(500).json({ error: error.message });
//   }
// }
