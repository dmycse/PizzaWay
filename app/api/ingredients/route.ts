import { prisma } from "@/prisma/prisma-client";
export async function GET() {
  let ingredients = await prisma.ingredient.findMany();

  return Response.json(ingredients);
}