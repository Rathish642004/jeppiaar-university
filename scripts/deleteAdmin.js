const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function deleteAdmin() {
  const email = "rathish642004@gmail.com"; // Change this to the admin's email you want to delete

  try {
    const deletedAdmin = await prisma.admin.delete({
      where: { email },
    });

    console.log("Admin deleted:", deletedAdmin);
  } catch (error) {
    console.error("Error deleting admin:", error);
  } finally {
    await prisma.$disconnect();
  }
}

deleteAdmin();
