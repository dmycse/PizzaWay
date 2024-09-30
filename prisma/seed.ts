import { prisma } from '@/prisma/prisma-client';

async function generateData() {
  await prisma.user.createMany({
    data: [
      { 
        fullName: 'John Doe', 
        email: 'john@example.com',
        password: '11111',
        verified: new Date(),
        role: "USER"
      },
      {
        fullName: 'Piter Alison', 
        email: 'piter@example.com',
        password: '00000',
        verified: new Date(),
        role: "ADMIN"
      }
    ]
  });

}

async function cleanUpData() {
  const users = await prisma.user.findMany();
  console.log({ users });
}

async function main() {
  try {
    await cleanUpData();
    await generateData();
  } catch (error) {
      console.log(error)
  }
}