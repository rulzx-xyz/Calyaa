
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generatePoem = async (name: string): Promise<string> => {
  try {
    const prompt = `Write a short, sweet, and romantic two-line poem for someone named ${name}. The poem should be less than 25 words. Be creative and heartfelt.`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          temperature: 0.9,
          topP: 1,
          topK: 1,
        }
    });

    const text = response.text;
    if (!text) {
        throw new Error("Empty response from API.");
    }
    
    // Clean up potential markdown or unwanted characters
    return text.replace(/["*]/g, '').trim();

  } catch (error) {
    console.error(`Error generating poem for ${name}:`, error);
    throw new Error("Failed to communicate with the AI model.");
  }
};
