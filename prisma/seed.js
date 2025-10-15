// prisma/seed.js
const { PrismaClient } = require("../app/generated/prisma");
const prisma = new PrismaClient();

async function main() {
  const users = [
    {
      name: "Alice",
      email: "alice@example.com",
      products: { create: [{ name: "Product A1", price: 9.99 }] },
    },
    {
      name: "Bob",
      email: "bob@example.com",
      products: { create: [{ name: "Product B1", price: 14.99 }] },
    },
    {
      name: "Charlie",
      email: "charlie@example.com",
      products: { create: [{ name: "Product C1", price: 29.99 }] },
    },
  ];

  for (const user of users) {
    await prisma.user.create({ data: user });
  }

  console.log("Seeded database with users and products!");
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
