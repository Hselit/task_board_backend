import { prisma } from "../../src/utils/prisma";

async function main() {
  const lists = [
    { name: "To Do" },
    { name: "In Progress" },
    { name: "Done" },
  ];

  for (const list of lists) {
    await prisma.list.upsert({
      where: {
        name: list.name,
      },
      update: {},
      create: list,
    });
  }

  console.log("✅ List seeded successfully");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });