import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const {
      // Personal Info
      fullName, dateOfBirth, gender, nationality, email, mobile,
      addressLine1, addressLine2, city, state, postalCode, country,

      // Academic Info
      schoolName, board, yearOfPassing, percentage,
      collegeName, degree, collegeYear, collegePercentage,
      examName, rollNumber, examYear, score,

      // Program Info
      school, programLevel, program, specialization, academicYear, intake
    } = req.body;

    // Insert Personal Info
    const personalInfo = await prisma.personalInfo.create({
      data: {
        fullName, dateOfBirth, gender, nationality, email, mobile,
        addressLine1, addressLine2, city, state, postalCode, country,
      },
    });

    // Insert Academic Info linked to Personal Info
    const academicInfo = await prisma.academicInfo.create({
      data: {
        personalInfoId: personalInfo.id,
        schoolName, board, yearOfPassing, percentage,
        collegeName, degree, collegeYear, collegePercentage,
        examName, rollNumber, examYear, score,
      },
    });

    // Insert Program Info linked to Personal Info
    const programInfo = await prisma.programInfo.create({
      data: {
        personalInfoId: personalInfo.id,
        school, programLevel, program, specialization, academicYear, intake,
      },
    });

    res.status(201).json({
      message: "Admission form submitted successfully",
      personalInfo,
      academicInfo,
      programInfo,
    });
  } catch (error: any) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
}
