import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const users = await prisma?.user.findMany();
  console.log(users);
  return NextResponse.json(users);
}
export async function POST(request: Request) {
  const { wallet, balance } = await request.json();
  // console.log(body)
  const newUser = await prisma?.user.create({
    data: {
      wallet,
      balance,
    },
  });

  return NextResponse.json(newUser);
}
