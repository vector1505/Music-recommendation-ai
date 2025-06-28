import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GoogleGenerativeAI } from "@google/generative-ai";

const geminiApiKey = env.GEMINI_API_KEY; 
const genAI = new GoogleGenerativeAI(geminiApiKey);

async function App() {
  const [count, setCount] = useState(0)

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt = "Explain how AI works in a few words";
  const result = await model.generateContent(prompt);
  const response = await result.response;
  console.log(response.text());

  return (
    <>
      <h1>{response || "Waiting..."}</h1>
    </>
  )
}

export default App
