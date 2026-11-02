import mysql, { Pool, RowDataPacket, ResultSetHeader } from "mysql2/promise";

/**
 * Sunlight Host MySQL Database Connection Pool
 * Configured via environment variables: DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME
 */

declare global {
  // eslint-disable-next-line no-var
  var __mysqlPool: Pool | undefined;
  // eslint-disable-next-line no-var
  var __tablesInitialized: boolean | undefined;
}

export function isDatabaseConfigured(): boolean {
  return Boolean(
    process.env.DB_NAME && 
    process.env.DB_USER
  );
}

export function getPool(): Pool | null {
  if (!isDatabaseConfigured()) {
    return null;
  }

  if (!global.__mysqlPool) {
    const port = parseInt(process.env.DB_PORT || "3306", 10);
    global.__mysqlPool = mysql.createPool({
      host: process.env.DB_HOST || "localhost",
      port: isNaN(port) ? 3306 : port,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD || "",
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      enableKeepAlive: true,
      keepAliveInitialDelay: 10000,
    });
  }

  return global.__mysqlPool;
}

/**
 * Auto-creates the enquiries table if it doesn't already exist in Sunlight Host MySQL.
 */
export async function ensureTablesExist(): Promise<void> {
  if (global.__tablesInitialized) return;

  const pool = getPool();
  if (!pool) return;

  const createEnquiriesSql = `
    CREATE TABLE IF NOT EXISTS enquiries (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NULL,
      phone VARCHAR(50) NULL,
      org_type VARCHAR(150) NULL,
      category VARCHAR(100) NULL,
      items_needed TEXT NULL,
      quantity VARCHAR(100) NULL,
      specifications TEXT NULL,
      source VARCHAR(50) DEFAULT 'quote_modal',
      status VARCHAR(50) DEFAULT 'new',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_status (status),
      INDEX idx_created (created_at)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  `;

  try {
    await pool.query(createEnquiriesSql);
    global.__tablesInitialized = true;
  } catch (error) {
    console.error("[Database] Failed to ensure tables exist:", error);
  }
}

/**
 * Execute a query with parameters against Sunlight Host MySQL.
 */
export async function executeQuery<T = RowDataPacket[] | ResultSetHeader>(
  sql: string,
  params: any[] = []
): Promise<T | null> {
  const pool = getPool();
  if (!pool) {
    console.warn("[Database] MySQL is not configured. Please set DB_HOST, DB_USER, DB_PASSWORD, DB_NAME in .env");
    return null;
  }

  await ensureTablesExist();
  const [results] = await pool.execute(sql, params);
  return results as T;
}

/**
 * Test connectivity to Sunlight Host MySQL.
 */
export async function testConnection(): Promise<{
  connected: boolean;
  message: string;
  enquiriesCount?: number;
  config?: { host: string; port: number; database: string; user: string };
}> {
  if (!isDatabaseConfigured()) {
    return {
      connected: false,
      message: "Database environment variables (DB_USER, DB_NAME) are not configured.",
    };
  }

  try {
    const pool = getPool();
    if (!pool) {
      return { connected: false, message: "Could not create database connection pool." };
    }

    await ensureTablesExist();

    const [rows] = await pool.query<RowDataPacket[]>("SELECT COUNT(*) AS count FROM enquiries");
    const count = rows[0]?.count ?? 0;

    return {
      connected: true,
      message: "Successfully connected to Sunlight Host MySQL Database.",
      enquiriesCount: Number(count),
      config: {
        host: process.env.DB_HOST || "localhost",
        port: parseInt(process.env.DB_PORT || "3306", 10),
        database: process.env.DB_NAME || "",
        user: process.env.DB_USER || "",
      },
    };
  } catch (error: any) {
    return {
      connected: false,
      message: `Database connection error: ${error.message || String(error)}`,
      config: {
        host: process.env.DB_HOST || "localhost",
        port: parseInt(process.env.DB_PORT || "3306", 10),
        database: process.env.DB_NAME || "",
        user: process.env.DB_USER || "",
      },
    };
  }
}
