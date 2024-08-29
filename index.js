import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const newUser = await prisma.user.create({
  //   data: {
  //     name: "Pedro",
  //     email: "pedro@gmail.com",
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

  try {
    const userDelete = await prisma.user.delete({
      where: {
        id: 1,
      },
    });
    console.log(userDelete);
  } catch (error) {
    console.log(error.meta.cause);
    console.log(error.code);
    if (error.code === "P2025") {
      console.log("User not found");
    }
  }
}

main();
