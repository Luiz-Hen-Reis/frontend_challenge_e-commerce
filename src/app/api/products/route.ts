import prisma from "@/database/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.nextUrl);
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
