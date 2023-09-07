import prisma from "@/database/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page");
  const limit = searchParams.get("limit");

  if (limit && page) {
    const products = await prisma.product.findMany({
      take: Number(limit),
      skip: Number(page),
    });

    return NextResponse.json(products);
  }

  const products = await prisma.product.findMany({});

  return NextResponse.json(products);
}
