import prisma from "@/database/prisma";
import { useRouter } from "next/router";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const product = await prisma.product.findUnique({
    where: { id: Number(id) },
  });

  if (product) {
    return NextResponse.json(product);
  }

  return NextResponse.json(
    "There is no product with this id. Please, provide a valid id to continue",
    { status: 400 }
  );
}
