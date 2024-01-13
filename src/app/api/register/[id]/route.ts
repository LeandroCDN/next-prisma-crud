import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    message: "Getting single user",
  });
}

export function DELETE() {
  return NextResponse.json({
    message: "Delete a user",
  });
}

export function UPDATE() {
  return NextResponse.json({
    message: "UPDATE a user",
  });
}
