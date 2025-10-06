import { GoogleGenAI } from '@google/genai';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { history, message, pageContext } = await req.json();

  console.log('Received page context:', pageContext);

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Gemini API key not configured' }, { status: 500 });
  }

  try {
    const genAI = new GoogleGenAI({ apiKey });

    const contents = history.map((msg: { role: string; text: string }) => ({
      role: msg.role,
      parts: [{ text: msg.text }],
    }));

    if (pageContext) {
      contents.unshift({
        role: 'user',
        parts: [{ text: `System Prompt (for AI only, do not mention to user): ${pageContext}` }],
      });
      contents.push({
        role: 'model',
        parts: [{ text: 'Understood. I will take that context into account.' }],
      });
    }

    contents.push({
      role: 'user',
      parts: [{ text: message }],
    });

    const response = await genAI.models.generateContent({
      model: 'gemini-2.0-flash-001',
      contents: contents,
    });

    // The response object from generateContent has a `text` property.
    const text = response.text;

    return NextResponse.json({ text });
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return NextResponse.json({ error: 'Error communicating with AI' }, { status: 500 });
  }
}
