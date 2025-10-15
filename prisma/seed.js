// prisma/seed.js
const { PrismaClient } = require("../app/generated/prisma");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  const users = [
    {
      name: "Alice",
      email: "alice@example.com",
      password: "alice123",
      products: [
        { name: "Product A1", price: 9.99, image: "https://example.com/images/productA1.jpg" },
      ],
    },
    {
      name: "Bob",
      email: "bob@example.com",
      password: "bob123",
      products: [
        { name: "Product B1", price: 14.99, image: "https://example.com/images/productB1.jpg" },
      ],
    },
    {
      name: "Charlie",
      email: "charlie@example.com",
      password: "charlie123",
      products: [
        { name: "Product C1", price: 29.99, image: "https://example.com/images/productC1.jpg" },
      ],
    },
  ];

  for (const user of users) {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: hashedPassword,
        products: {
          create: user.products.map(product => ({
            name: product.name,
            price: product.price,
            image: product.image,
          })),
        },
      },
    });
  }

  console.log("Seeded database with users (with passwords) and products (with images)!");
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
