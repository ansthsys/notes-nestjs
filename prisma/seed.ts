import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy notes
  const note1 = await prisma.notes.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: 'How to run node.js project',
      content: 'execute the following command: `npm run dev`',
      status: true,
    },
  });

  const note2 = await prisma.notes.upsert({
    where: { id: 2 },
    update: {},
    create: {
      title: 'Install library from npm',
      content: 'execute command `npm install <library-name>`',
      status: true,
    },
  });

  console.log({ note1, note2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
