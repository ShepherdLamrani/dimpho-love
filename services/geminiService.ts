
import { GoogleGenAI } from "@google/genai";

// Initialize with the environment variable exactly as prescribed in the guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateRomanticNote = async (prompt: string): Promise<string> => {
  try {
    // Using ai.models.generateContent directly with the specified model and contents.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are writing a deeply heartfelt, sincere, and romantic note for a woman named Dimpho Diphoko. 
      The person writing this is expressing their pure, unadulterated love and explaining exactly why they want her in their life forever.
      Prompt context: ${prompt}
      Tone: Gentle, passionate, sincere, and deeply personal. 
      Length: Short paragraph (3-4 sentences). 
      Focus: Why she is the one, the beauty of her soul, and the desire for a shared future.`,
      config: {
        temperature: 0.8,
        topP: 0.9,
      }
    });
    // The text property is a getter, not a method. Access it directly.
    return response.text || "Dimpho, every moment with you is a gift. You are the woman I've always dreamed of, and I want to spend every day showing you how much you mean to me.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Dimpho, you are the most beautiful part of my life. I love you deeply and I want to build a lifetime of memories by your side.";
  }
};
