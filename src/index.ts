import express, { type Request, type Response } from "express";
import { PrismaClient, type Prisma } from "@prisma/client";

// Build 'select' object
const userEmail: Prisma.UserSelect = {
  email: true,
  name: true
};

const prisma = new PrismaClient();

const app = express();
const port = 3000;

app.get("/", getUsers);

async function getUsers(req: Request, res: Response): Promise<void> {
  const users = await prisma.user.findMany({
    select: userEmail
  });

  res.json(users);
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
