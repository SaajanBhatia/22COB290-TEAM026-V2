//this file is used to repopulate the database with example data
//run command: npx prisma db seed --preview-feature

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcrypt";

async function main() {
  const tom = await prisma.user.create({
    data: {
      email: "TOM@TEST.COM",
      firstName: "Tom",
      lastName: "Whitticase",
      role: "EMPLOYEE",
      password: await bcrypt.hash("Password_123", 10),
    },
  });
  const niel = await prisma.user.create({
    data: {
      email: "NIEL@TEST.COM",
      firstName: "Niel",
      lastName: "Cordes",
      role: "EMPLOYEE",
      password: await bcrypt.hash("Password_123", 10),
    },
  });
  const laurence = await prisma.user.create({
    data: {
      email: "LAURENCE@TEST.COM",
      firstName: "Laurence",
      lastName: "Ashcroft",
      role: "EMPLOYEE",
      password: await bcrypt.hash("Password_123", 10),
    },
  });
  const naeem = await prisma.user.create({
    data: {
      email: "NAEEM@TEST.COM",
      firstName: "Naeem",
      lastName: "Mujeeb",
      role: "EMPLOYEE",
      password: await bcrypt.hash("Password_123", 10),
    },
  });
  const charlie = await prisma.user.create({
    data: {
      email: "CHARLIE@TEST.COM",
      firstName: "Charlie",
      lastName: "Leech",
      role: "EMPLOYEE",
      password: await bcrypt.hash("Password_123", 10),
    },
  });
  const safin = await prisma.user.create({
    data: {
      email: "SAFIN@TEST.COM",
      firstName: "Safin",
      lastName: "Gurung",
      role: "EMPLOYEE",
      password: await bcrypt.hash("Password_123", 10),
    },
  });
  const saajan = await prisma.user.create({
    data: {
      email: "SAAJAN@TEST.COM",
      firstName: "Saajan",
      lastName: "Bhatia",
      role: "EMPLOYEE",
      password: await bcrypt.hash("Password_123", 10),
    },
  });

  const manager = await prisma.user.create({
    data: {
      email: "MANAGER@TEST.COM",
      firstName: "Manager",
      lastName: "Manager",
      role: "MANAGER",
      password: await bcrypt.hash("Password_123", 10),
    },
  });
  const teamLeader = await prisma.user.create({
    data: {
      email: "TEAMLEADER@TEST.COM",
      firstName: "TeamLeader",
      lastName: "TeamLeader",
      role: "TEAMLEADER",
      password: await bcrypt.hash("Password_123", 10),
    },
  });
  const employee = await prisma.user.create({
    data: {
      email: "EMPLOYEE@TEST.COM",
      firstName: "Employee",
      lastName: "Employee",
      role: "EMPLOYEE",
      password: await bcrypt.hash("Password_123", 10),
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
