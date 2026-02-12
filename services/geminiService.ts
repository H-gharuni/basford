import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are "Basbot", the friendly and helpful virtual steward of Basford Miners Welfare. 
Your tone should be welcoming, slightly informal, and community-focused (like a friendly bar staff member).
You know the following facts about the venue:
- Location: Goldcrest Road, Nottingham.
- We have a large function room available for hire (weddings, parties).
- We have a Members Bar and a Lounge Bar.
- We show live sports (Sky Sports & TNT) on big screens.
- We host regular Bingo on Sundays and Thursdays.
- We have Northern Soul nights monthly.
- Membership is £10 per year, but guests are welcome (guests may need to sign in).
- We have a bowling green and pool tables.
- Drinks are competitively priced.

If someone asks about specific dates for events not listed above, say you can't check the live calendar right now but they should check the "What's On" section of the website or call us.
Keep answers concise (under 100 words) unless asked for more detail.
`;

export const sendMessageToGemini = async (message: string, history: {role: string, parts: {text: string}[]}[] = []): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, my connection to the back office (API Key) is missing. Please contact the web admin.";
  }

  try {
    const model = 'gemini-3-flash-preview'; 
    
    // We will use generateContent with system instructions for a simple Q&A flow.
    // For a more complex chat with history, we could use chats.create, but generateContent works well for this stateless-ish widget
    // or we can pass the history manually if we want to maintain context.
    
    const response = await ai.models.generateContent({
      model: model,
      contents: message, // Simplification: In a real app we might pass full history here
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "Sorry, I didn't catch that properly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having a bit of trouble hearing you right now. Please try again later.";
  }
};