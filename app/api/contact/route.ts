import { NextResponse } from "next/server";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN || "8999295363:AAFEUtk3_fmRCZAd0BR1l--OALmZUFgpVVs";
    const chatId = process.env.TELEGRAM_CHAT_ID || "7307299784";

    const cleanName = escapeHtml(name.trim());
    const cleanEmail = escapeHtml(email.trim());
    const cleanSubject = subject ? escapeHtml(subject.trim()) : "N/A";
    const cleanMessage = escapeHtml(message.trim());

    const telegramMessage = `
<b>📬 New Portfolio Inquiry</b>

<b>👤 Name:</b> ${cleanName}
<b>✉️ Email:</b> ${cleanEmail}
<b>📌 Subject:</b> ${cleanSubject}

<b>📝 Message:</b>
${cleanMessage}
`.trim();

    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: "HTML",
        }),
      }
    );

    const data = await response.json();

    if (!response.ok || !data.ok) {
      console.error("Telegram API Error:", data);
      return NextResponse.json(
        { error: "Failed to dispatch message via Telegram." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error in contact API route:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
