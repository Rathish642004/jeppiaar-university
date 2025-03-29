import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { page = "1", limit = "10", startDate, endDate } = req.query;

    const pageNumber = parseInt(page as string) || 1;
    const pageSize = parseInt(limit as string) || 10;
    const skip = (pageNumber - 1) * pageSize;

    const whereClause: any = {};

    // Filter by date range if provided
    if (startDate && endDate) {
      whereClause.createdAt = {
        gte: new Date(startDate as string),
        lte: new Date(endDate as string),
      };
    }

    // Fetch paginated data
    const contact = await prisma.contact.findMany({
      where: whereClause,
      skip,
      take: pageSize,
      orderBy: {
        createdAt: "desc",
      },
    });

    // Get total count for pagination
    const totalRecords = await prisma.contact.count({ where: whereClause });

    res.status(200).json({
      data: contact,
      totalRecords,
      totalPages: Math.ceil(totalRecords / pageSize),
      currentPage: pageNumber,
    });
  } catch (error) {
    console.error("Error fetching contact:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
}
