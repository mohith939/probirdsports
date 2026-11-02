import { NextResponse } from "next/server";
import { testConnection } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  const dbStatus = await testConnection();

  return NextResponse.json({
    status: "ok",
    service: "ProBird Sports",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    database: {
      provider: "Sunlight Host MySQL",
      ...dbStatus,
    },
  });
}
