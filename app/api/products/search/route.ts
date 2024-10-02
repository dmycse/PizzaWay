import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
  let query = req.nextUrl.searchParams.get("q") || "";
  
  let products = await prisma.product.findMany({
    where: {
      name: {
        contains: query,
        mode: "insensitive"
      }
    },
    take: 5
  });
  console.log(query)
  return NextResponse.json(products);
}