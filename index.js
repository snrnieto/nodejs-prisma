import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const newUser = await prisma.user.create({
    data: {
      name: "Juan",
      email: "juan@gmail.com",
    },
  });
  console.log(newUser);
}

main();
