import { useState } from 'react'
import './App.css'
import { GoogleGenerativeAI } from "@google/generative-ai";

//const geminiApiKey = process.env.GEMINI_API_KEY; 
//const genAI = new GoogleGenerativeAI(geminiApiKey);

function App() {
  const [count, setCount] = useState(0)

  /*const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt = "Explain how AI works in a few words";
  const result = await model.generateContent(prompt) || 0;
  const response = await result.response;
  console.log(response.text());*/

  return (
    <>
      <div className=''>Hello</div>
    </>
  )
}

export default App
