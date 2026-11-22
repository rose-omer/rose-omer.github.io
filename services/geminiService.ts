import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { portfolioData } from "../data";

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    // Note: In a real production app, ensure this key is restricted or use a backend proxy.
    // For this demo, we assume process.env.API_KEY is available.
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }
  return aiClient;
};

// Construct a system prompt based on the portfolio data
const getSystemInstruction = () => {
  return `
    Sen ${portfolioData.name}'in portfolyo web sitesindeki yapay zeka asistanısın.
    Amacın, site ziyaretçilerinin ${portfolioData.name} hakkındaki sorularını yanıtlamaktır.
    
    Aşağıdaki bilgileri kullanarak yanıt ver:
    
    İsim: ${portfolioData.name}
    Ünvan: ${portfolioData.title}
    Biyografi: ${portfolioData.bio}
    Yetenekler: ${portfolioData.skills.map(s => s.name).join(", ")}
    Projeler: ${portfolioData.projects.map(p => p.title + " (" + p.shortDescription + ")").join(", ")}
    Deneyim: ${portfolioData.experience.map(e => e.role + " @ " + e.company).join(", ")}
    
    Kurallar:
    1. Kibar, profesyonel ve kısa yanıtlar ver.
    2. Sadece ${portfolioData.name} ve yazılım mühendisliği ile ilgili soruları yanıtla.
    3. Eğer cevabı bilmiyorsan, ziyaretçiyi "İletişim" sayfasına yönlendir.
    4. Yanıtların Türkçe olsun.
  `;
};

export const streamChatResponse = async function* (userMessage: string) {
  const ai = getClient();
  
  if (!process.env.API_KEY) {
    yield "API Key bulunamadı. Lütfen yapılandırmayı kontrol edin.";
    return;
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: getSystemInstruction(),
      }
    });

    const result = await chat.sendMessageStream({ message: userMessage });
    
    for await (const chunk of result) {
      const c = chunk as GenerateContentResponse;
      if (c.text) {
        yield c.text;
      }
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    yield "Üzgünüm, şu anda yanıt veremiyorum. Lütfen daha sonra tekrar deneyin.";
  }
};