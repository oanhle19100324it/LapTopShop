import { prisma } from "./client";

const initDatabase = async () => {
  const constUser = await prisma.user.count();
  const constRole = await prisma.role.count();

  if (constUser === 0) {
    {
      await prisma.user.createMany({
        data: [
          {
            username: "admin",
            password: "admin123",
            accountType: "ADMIN",
            fullName: "Administrator",
            address: "System Address",
            phone: "000-000-0000",
          },
          {
            username: "user",
            password: "user123",
            accountType: "USER",
            fullName: "Regular User",
            address: "User Address",
            phone: "111-111-1111",
          },
        ],
      });
    }
  }
  if (constRole === 0) {
    {
      await prisma.role.createMany({
        data: [
          {
            name: "ADMIN",
          },
          {
            name: "USER",
          },
        ],
      });
    }
  } else {
    console.log("Database already ");
  }
};

export { initDatabase };
