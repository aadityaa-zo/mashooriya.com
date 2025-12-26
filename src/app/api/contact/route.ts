export const runtime = "nodejs";

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export async function POST(req: Request) {
  try {
    const body: FormData = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing fields" },
        { status: 400 }
      );
    }
    console.log("fields are okay")
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });
    console.log("env clear")
    await transporter.sendMail({
      from: `"Website Form" <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      replyTo: email,
      subject: "New Form Submission",
      text: `
      you got a new form submission on your website mashooriya.com
          Name: ${name}
          Email: ${email}
          Message: ${message}
      `,
    });
    console.log("sent")
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Email failed" },
      { status: 500 }
    );
  }
}
