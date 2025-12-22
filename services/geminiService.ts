
import { GoogleGenAI } from "@google/genai";
import { PortfolioData } from "../types";

export const getPortfolioResponse = async (userMessage: string, data: PortfolioData) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

  const context = `
    Tu es l'assistant personnel IA de ${data.userInfo.name}. 
    ${data.userInfo.name} est un ${data.userInfo.title} basé à ${data.userInfo.location}.
    
    À propos de lui: ${data.userInfo.bio}
    
    Projets:
    ${data.projects.map(p => `- ${p.title}: ${p.description} (Stack: ${p.tags.join(", ")})`).join("\n")}
    
    Compétences:
    ${data.skills.map(s => `- ${s.name}: Niveau ${s.level}%`).join("\n")}
    
    Expérience:
    ${data.experiences.map(e => `- ${e.company} (${e.period}): ${e.role} - ${e.description}`).join("\n")}
    
    Instructions:
    - Réponds TOUJOURS en français.
    - Sois professionnel, utile et amical.
    - Réponds avec précision en te basant uniquement sur les données fournies.
    - Si tu ne connais pas la réponse, suggère de contacter ${data.userInfo.name} par email à ${data.userInfo.email}.
    - Garde des réponses concises.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: context,
        temperature: 0.7,
      },
    });

    return response.text || "Désolé, je ne peux pas traiter cette demande actuellement.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "L'assistant est actuellement hors ligne. Réessayez plus tard.";
  }
};
