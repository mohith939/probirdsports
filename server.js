/**
 * ProBird Sports — Production Server Entry Point
 * Designed for Sunlight Host (Node.js Application Manager / Phusion Passenger / cPanel)
 */

const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOSTNAME || "0.0.0.0";
const port = parseInt(process.env.PORT, 10) || 3000;

// Initialize Next.js app instance
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

console.log(`[Sunlight Host Server] Initializing ProBird Sports in ${dev ? "development" : "production"} mode...`);

app
  .prepare()
  .then(() => {
    const server = createServer(async (req, res) => {
      try {
        const parsedUrl = parse(req.url, true);
        await handle(req, res, parsedUrl);
      } catch (err) {
        console.error("[Sunlight Host Server] Error handling request:", req.url, err);
        res.statusCode = 500;
        res.end("Internal Server Error");
      }
    });

    server.listen(port, () => {
      console.log(`[Sunlight Host Server] ProBird Sports is running on port ${port}`);
      console.log(`[Sunlight Host Server] URL: http://${hostname === "0.0.0.0" ? "localhost" : hostname}:${port}`);
    });

    // Graceful shutdown handling
    const shutdown = (signal) => {
      console.log(`[Sunlight Host Server] Received ${signal}. Shutting down gracefully...`);
      server.close(() => {
        console.log("[Sunlight Host Server] Closed out remaining connections.");
        process.exit(0);
      });
    };

    process.on("SIGTERM", () => shutdown("SIGTERM"));
    process.on("SIGINT", () => shutdown("SIGINT"));
  })
  .catch((err) => {
    console.error("[Sunlight Host Server] Failed to prepare Next.js app:", err);
    process.exit(1);
  });
