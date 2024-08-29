import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const newUser = await prisma.user.create({
  //   data: {
  //     name: "Juan",
  //     email: "juan@gmail.com",
  //   },
  // });
  // console.log(newUser);

  const users = await prisma.user.findMany();
  console.log(users);

  const user = await prisma.user.findFirst({
    where: {
      // id: 2,
      // OR: [
      //   {
      //     id: 1,
      //   },
      //   {
      //     email: "maria@gmail.com",
      //   },
      // ],
    },
  });

  console.log(user);
}

main();
