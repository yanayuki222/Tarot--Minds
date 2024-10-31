

// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// async function run() {
//   // For text-only input, use the gemini-pro model
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

//   const prompt = "こんにちわ。あなたは誰？";

//   const result = await model.generateContentStream(prompt);

//   let text = '';
//   for await (const chunk of result.stream) {
//     //const chunkText = chunk.text();
//     const chunkText = chunk.text();
//     console.log(chunkText);
//     text += chunkText;
//   }
// }

// run();

// server.js
require('dotenv').config();
const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const port = 5000;
const app = express();
app.use(cors());
app.use(express.json());

// app.use((req, res, next) => {
//   res.set("Cache-Control", "no-store, no-cache, must-revalidate, private");
//   next();
// });


const genAI = new GoogleGenerativeAI(process.env.API_KEY);

app.post("/api/node.js", async (req, res) => {
  // console.log("Request received:", req.body);
    try {
        const { query } = req.body;
        // console.log("query:", query);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        
        const result = await model.generateContentStream(query);

        let text = '';
        for await (const chunk of result.stream) {
            text += chunk.text();
        }
        // console.log(text);
        res.json({ response: text });

    } catch (error) {
        // console.error("Error:", error);
        res.status(500).json({ error: "エラーが発生しました" });
    }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
