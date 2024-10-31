// import express from 'express';
// import fetch from "node-fetch";
// const app = express();
// const PORT = 3000;

// // 環境変数からAPIキーを取得
// const API_KEY = process.env.API_KEY || "AIzaSyB0KKjDxEyTtdG4lOq6oaOVPKmGYxDYuqg";

// app.use(express.json());
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Content-Type");
//     next();
// });

// // Gemini APIを呼び出すエンドポイント
// app.post("/api/gemini", async (req, res) => {
//     const { query } = req.body;

//     try {
//         const response = await fetch(
//             "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateText",
//             {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Authorization": `Bearer ${API_KEY}`
//                 },
//                 body: JSON.stringify({
//                     prompt: query
//                 })
//             }
//         );

//         const result = await response.json();
//         res.json({ response: result.choices[0].text || "エラーが発生しました。" });
//     } catch (error) {
//         console.error("Gemini API エラー:", error);
//         res.status(500).send("APIリクエストに失敗しました");
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//     next();
// });

// require('dotenv').config();
// import { GoogleGenerativeAI } from "@google/generative-ai";
// export async function callAI(query) {
//     const cors = require('cors');
//     app.use(cors());
//     const { GoogleGenerativeAI } = require("@google/generative-ai");
    
//     const genAI = new GoogleGenerativeAI(process.env.API_KEY);
//     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//     const prompt = query;

//     const result = await model.generateContent(prompt);
//     console.log(result.response.text());
// }

// server.js
// const express = require("express");
// const cors = require("cors");
// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const app = express();
// app.use(cors());
// app.use(express.json());

// const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// app.post("/api/call-gemini", async (req, res) => {
//     try {
//         const { query } = req.body;
//         const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
//         const result = await model.generateContent(query);

//         res.json({ response: result.response.text });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "エラーが発生しました" });
//     }
// });

// app.listen(5000, () => console.log("Server running on http://localhost:5000"));


