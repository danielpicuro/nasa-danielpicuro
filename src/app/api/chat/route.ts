import { GoogleGenerativeAI } from '@google/generai';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { history, message } = await req.json();

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Gemini API key not configured' }, { status: 500 });
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const chat = model.startChat({
      history: history.map((msg: { role: string; text: string }) => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      })),
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ text });
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return NextResponse.json({ error: 'Error communicating with AI' }, { status: 500 });
  }
}
