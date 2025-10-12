import { hashPassword } from "services/Admin/user.services";
import { prisma } from "./client";
import { ACCOUNT_TYPE } from "./constant";

const initDatabase = async () => {
  const constUser = await prisma.user.count();
  const constRole = await prisma.role.count();

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

  if (constUser === 0) {
    const defaultPassword = await hashPassword("123456");
    const adminRole = await prisma.role.findFirst({
      where: { name: "ADMIN" },
    });
    if (adminRole) {
      await prisma.user.createMany({
        data: [
          {
            email: "oanh@gmail.com",
            password: defaultPassword,
            accountType: ACCOUNT_TYPE.SYSTEM,
            fullName: "Administrator",
            address: "System Address",
            phone: "000-000-0000",
            roleId: adminRole.id,
          },
          {
            email: "julia@gmail.com",
            password: defaultPassword,
            accountType: ACCOUNT_TYPE.SYSTEM,
            fullName: "Regular User",
            address: "User Address",
            phone: "111-111-1111",
            roleId: adminRole.id,
          },
        ],
      });
    }
  }
};

export { initDatabase };
