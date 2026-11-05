# ProBird Sports — Sunlight Host Deployment Guide

This guide explains how to host **ProBird Sports** on **Sunlight Host** with zero server complexity, and how to activate the MySQL database in the future when you are ready.

---

## 🚀 Instant Deployment (Static Mode — Recommended)

Because you do not need the database connected right now, the website is configured for **Static HTML Export**. 

This means:
* **No Node.js daemon** to keep running in cPanel.
* **No Phusion Passenger or port configuration**.
* **Zero 403 Forbidden errors**: standard `index.html` files are generated for the homepage and every single product.
* **100% of features work**: all Framer Motion athletic animations, product catalogs, filters, and direct WhatsApp quote consultation desk work immediately.

### How to deploy on Sunlight Host:

#### Option 1: Using cPanel Git Version Control (Easiest)
1. In your Sunlight Host cPanel, open **Git Version Control**.
2. Pull / update the repository to `main`.
3. In cPanel **File Manager**, navigate to your domain's document root (e.g. `public_html`).
4. If you cloned the whole repo directly into `public_html`, our pre-configured `.htaccess` will automatically and transparently serve the static site from `out/`.
5. *(Alternative best practice)*: Copy the contents of the `out/` folder directly into `public_html`.

#### Option 2: Using cPanel File Manager / FTP
1. On your computer, run `npm run build` (already done; files are inside the `out/` folder).
2. Compress or upload the files inside the `out/` folder directly into your Sunlight Host `public_html`.
3. Ensure `.htaccess` is uploaded into `public_html`.
4. Open `https://probirdsports.com/` — your website will load immediately with status 200 OK!

---

## 🛡️ Why HTTP 403 Forbidden happened & how it is solved

* **Why it happened**: Sunlight Host uses Apache web server. When someone visits `https://probirdsports.com/`, Apache looks for an `index.html` file. In raw React/Next.js source code, there is no `index.html` in the root folder, so Apache displayed `403 Forbidden`.
* **How it's solved**: Next.js now compiles the whole website into pure `index.html` pages inside `out/`. We also provided a dual-mode `.htaccess` that directs Apache straight to `index.html` with clean URLs and security protections.

---

## 🔮 Future: Activating Sunlight Host MySQL Database

Whenever you are ready to connect your Sunlight Host MySQL database to store buyer inquiries:

1. **Restore API Routes**:
   Move `server_api/api` back into `app/api`.
2. **Remove Static Output in `next.config.ts`**:
   Remove `output: "export"` from `next.config.ts`.
3. **Configure Sunlight Host MySQL**:
   * Create database & user in cPanel -> **MySQL Databases**.
   * Import `database/schema.sql` via phpMyAdmin.
   * Add database credentials to `.env`:
     ```env
     DB_HOST=localhost
     DB_PORT=3306
     DB_USER=your_db_user
     DB_PASSWORD=your_db_password
     DB_NAME=your_db_name
     ```
4. **Run via Node.js Selector**:
   * In cPanel -> **Setup Node.js App**, set startup file to `server.js` and click **Start Application**.
