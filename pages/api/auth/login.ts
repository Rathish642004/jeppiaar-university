import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method Not Allowed" });

  const { email, password } = req.body;

  try {
    const admin = await prisma.admin.findUnique({ where: { email } });

    if (!admin || !(await bcrypt.compare(password, admin.password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  } finally {
    await prisma.$disconnect();
  }
}
