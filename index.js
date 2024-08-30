import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await getUsers();
  // const createdUser = await createUser();
  // const user = await getUser();
  // await deleteUser();
  // await updateUser();
  // await upsertUser();
}

async function getUsers() {
  const users = await prisma.user.findMany();
  console.log(users);
}
async function createUser() {
  const newUser = await prisma.user.create({
    data: {
      name: "Joseph",
      email: "joseph@gmail.com",
    },
  });

  console.log(newUser);
  return newUser;
}

async function getUser() {
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
  console.log({ user });
  return user;
}

async function deleteUser() {
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

async function updateUser() {
  const updatedUser = await prisma.user.update({
    where: {
      id: 2,
    },
    data: {
      lastname: "Perez",
    },
  });

  console.log({ updatedUser });

  const result = await prisma.user.updateMany({
    where: {
      lastname: null,
    },
    data: {
      lastname: "Lastname",
    },
  });
  console.log({ result });
}
// Si se cumple el where se actualiza, si no se crea
async function upsertUser() {
  const upsertedUser = await prisma.user.upsert({
    where: {
      email: "john@gmail.com",
    },
    create: {
      name: "John",
      email: "john@gmail.com",
    },
    update: {
      lastname: "Carter",
    },
  });
  console.log({ upsertedUser });
}
main();
