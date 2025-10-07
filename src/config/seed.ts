import { hashPassword } from "services/user.services";
import { prisma } from "./client";
import { ACCOUNT_TYPE } from "./constant";

const initDatabase = async () => {
  const constUser = await prisma.user.count();
  const constRole = await prisma.role.count();

  if (constUser === 0) {
    const defaultPassword = await hashPassword("123456");
    {
      await prisma.user.createMany({
        data: [
          {
            username: "admin",
            password: defaultPassword,
            accountType: ACCOUNT_TYPE.SYSTEM,
            fullName: "Administrator",
            address: "System Address",
            phone: "000-000-0000",
          },
          {
            username: "user",
            password: defaultPassword,
            accountType: ACCOUNT_TYPE.SYSTEM,
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
