const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function createAdmin() {
  const name = "Rathish";
  const email = "rathish642004@gmail.com";
  const password = "Rathish@123";

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const admin = await prisma.admin.create({
      data: { name, email, password: hashedPassword },
    });
    console.log("Admin created:", admin);
  } catch (error) {
    console.error("Error creating admin:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin();
