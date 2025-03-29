import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY || ""; // Add your secret key in `.env`

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ error: "Empty request body" });
    }

    const { firstName, lastName, email, phone, subject, message, agreeToTerms, recaptchaToken } = req.body;
    const agreeToTermsBoolean = Boolean(agreeToTerms);

    // **Step 1: Verify reCAPTCHA**
    if (!recaptchaToken) {
      return res.status(400).json({ error: "reCAPTCHA token missing" });
    }

    const recaptchaResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: RECAPTCHA_SECRET_KEY,
        response: recaptchaToken,
      }),
    });

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return res.status(403).json({ error: "reCAPTCHA verification failed" });
    }

    // **Step 2: Insert into database**
    const contact = await prisma.contact.create({
      data: { firstName, lastName, email, phone, subject, message, agreeToTerms: agreeToTermsBoolean },
    });

    res.status(201).json({ message: "Success", contact });
  } catch (error: any) {
    console.error("Error:", error);

    if (error.code === "P2002") {
      return res.status(409).json({ error: "Duplicate entry, email must be unique" });
    }

    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
}
