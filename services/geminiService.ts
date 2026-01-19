
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || "";

export const sendMessageToGemini = async (message: string) => {
  if (!apiKey) {
    return "The AI is resting right now. (API Key not configured)";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: "You are Lumina, a world-class AI academic tutor. You are encouraging, clear, and concise. Explain complex topics simply. Use Markdown for formatting.",
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });

    return response.text || "I'm sorry, I couldn't generate an answer.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Oops! I encountered an error. Please try again later.";
  }
};
