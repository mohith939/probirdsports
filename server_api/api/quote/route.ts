import { NextRequest, NextResponse } from "next/server";
import { executeQuery, isDatabaseConfigured } from "@/lib/db";
import type { ResultSetHeader, RowDataPacket } from "mysql2/promise";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim() || null;
    const phone = String(body.phone || "").trim() || null;
    const orgType = String(body.orgType || "Institutional Buyer").trim();
    const category = String(body.category || "General").trim();
    const itemsNeeded = String(body.itemsNeeded || "").trim();
    const quantity = String(body.quantity || "").trim() || null;
    const specifications = String(body.specifications || "").trim() || null;
    const source = String(body.source || "quote_modal").trim();

    // Basic validation: name or contact information should be provided
    if (!name && !phone && !email && !itemsNeeded) {
      return NextResponse.json(
        { success: false, error: "Please provide your name or contact details." },
        { status: 400 }
      );
    }

    if (!isDatabaseConfigured()) {
      // Database credentials not configured yet in .env
      console.info("[Quote API] Received quote request (DB not configured):", {
        name,
        orgType,
        itemsNeeded,
        quantity,
      });

      return NextResponse.json({
        success: true,
        savedToDb: false,
        message: "Enquiry received. Note: Sunlight Host MySQL credentials are not yet set in .env.",
      });
    }

    const insertSql = `
      INSERT INTO enquiries (
        name, email, phone, org_type, category, items_needed, quantity, specifications, source, status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'new')
    `;

    const result = await executeQuery<ResultSetHeader>(insertSql, [
      name || "Wholesale Buyer",
      email,
      phone,
      orgType,
      category,
      itemsNeeded || "Multi-category equipment",
      quantity,
      specifications,
      source,
    ]);

    return NextResponse.json({
      success: true,
      savedToDb: true,
      id: result?.insertId,
      message: "Enquiry successfully recorded in Sunlight Host MySQL database.",
    });
  } catch (error: any) {
    console.error("[Quote API] Error processing quote request:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to record enquiry to database.",
        details: process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    if (!isDatabaseConfigured()) {
      return NextResponse.json({
        success: false,
        message: "Database not configured yet in .env",
      });
    }

    const rows = await executeQuery<RowDataPacket[]>(
      "SELECT id, name, email, phone, org_type, category, items_needed, quantity, specifications, source, status, created_at FROM enquiries ORDER BY id DESC LIMIT 50"
    );

    return NextResponse.json({
      success: true,
      count: rows?.length || 0,
      enquiries: rows || [],
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
