# ProBird Sports — Sunlight Host Deployment & Database Guide

This guide walks you through deploying the **ProBird Sports** Next.js application on **Sunlight Host** and connecting it to your **Sunlight Host MySQL Database**.

---

## Architecture Overview

* **Application Runtime:** Node.js (v18.x or v20.x recommended) running via Sunlight Host's Node.js Application Manager (Phusion Passenger).
* **Startup File:** `server.js` (custom production server configured for port binding).
* **Database:** Sunlight Host MySQL / MariaDB managed via phpMyAdmin.
* **Lead Storage:** All quote requests from the **Bulk Quote Modal** and **Contact Page** are saved into the `enquiries` table in MySQL while simultaneously triggering the WhatsApp consultation link.
* **Diagnostics:** Visit `https://yourdomain.com/api/health` anytime to check live database connectivity.

---

## Step 1: Create MySQL Database on Sunlight Host

1. Log in to your **Sunlight Host Control Panel / cPanel**.
2. Under the **Databases** section, click **MySQL Databases** (or **MySQL Database Wizard**).
3. **Create Database**:
   * Example name: `sunlightuser_probird`
   * Click **Create Database**.
4. **Create Database User**:
   * Example username: `sunlightuser_dbadmin`
   * Set a strong password and save it securely.
   * Click **Create User**.
5. **Add User to Database**:
   * Select your user and database.
   * Check **ALL PRIVILEGES**.
   * Click **Make Changes**.

> [!NOTE]
> On Sunlight Host, the database host is usually `localhost` and the port is `3306`.

---

## Step 2: Import Database Schema (via phpMyAdmin)

1. In your Sunlight Host panel, click **phpMyAdmin**.
2. Select your newly created database from the left sidebar (e.g., `sunlightuser_probird`).
3. Click the **Import** tab at the top.
4. Click **Choose File** and select:
   * `database/schema.sql` (located in the project folder).
5. Click **Import / Go** at the bottom.
   * The `enquiries`, `categories`, and `products` tables will be created.
6. *(Optional)* If you would like sample product and category data pre-filled in MySQL, import `database/seed.sql` as well.

> [!TIP]
> Even if you skip manual import, the application's `lib/db.ts` will automatically execute `CREATE TABLE IF NOT EXISTS enquiries` the first time a quote is submitted.

---

## Step 3: Create the Node.js Application in Sunlight Host

1. In your Sunlight Host panel, search for **Setup Node.js App** (or **Node.js Selector**).
2. Click **Create Application**.
3. Configure the following fields:
   * **Node.js Version:** Select `20.x` or `18.x`.
   * **Application Mode:** Select `Production`.
   * **Application Root:** Enter your folder path (e.g., `probirdsports` or `public_html`).
   * **Application URL:** Select your domain name (e.g., `probirdsports.com`).
   * **Application Startup File:** Enter `server.js`.
4. Click **Create**.

---

## Step 4: Upload Application Files

Upload the project files to your Sunlight Host Application Root directory (via Git, File Manager, or SSH):

* Upload all project files **except** `.git` and `node_modules`.
* Make sure `server.js`, `package.json`, `app`, `components`, `public`, and `lib` are present.

---

## Step 5: Configure Environment Variables

Create or edit the `.env` file in your application root on Sunlight Host:

```env
# ProBird Sports Environment Settings
NODE_ENV=production
PORT=3000

# WhatsApp Procurement Number (without + or spaces)
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210

# Sunlight Host MySQL Database Credentials
DB_HOST=localhost
DB_PORT=3306
DB_USER=sunlightuser_dbadmin
DB_PASSWORD=your_actual_password_here
DB_NAME=sunlightuser_probird
```

> [!IMPORTANT]
> Replace `sunlightuser_dbadmin`, `your_actual_password_here`, and `sunlightuser_probird` with your actual Sunlight Host database credentials.

---

## Step 6: Install Dependencies & Build

In the Sunlight Host Node.js Application panel (or via SSH terminal):

1. Click **Run NPM Install** (or run `npm install` in terminal).
2. Build the Next.js production bundle:
   ```bash
   npm run build
   ```
3. In the Node.js Application panel, click **Restart Application**.

---

## Step 7: Verify Live Database Connectivity

1. In your web browser, navigate to:
   ```
   https://yourdomain.com/api/health
   ```
2. You will receive a JSON response confirming database status:
   ```json
   {
     "status": "ok",
     "service": "ProBird Sports",
     "timestamp": "2026-11-02T14:45:00.000Z",
     "environment": "production",
     "database": {
       "provider": "Sunlight Host MySQL",
       "connected": true,
       "message": "Successfully connected to Sunlight Host MySQL Database.",
       "enquiriesCount": 1,
       "config": {
         "host": "localhost",
         "port": 3306,
         "database": "sunlightuser_probird",
         "user": "sunlightuser_dbadmin"
       }
     }
   }
   ```

---

## Step 8: View Submitted Quotes in phpMyAdmin

Whenever a buyer submits a request through the **Request a Bulk Quote** modal or the **Contact Page**:

1. Log in to Sunlight Host **phpMyAdmin**.
2. Open the `enquiries` table.
3. Every submission will be listed with:
   * Buyer Name
   * Organization Type
   * Contact (Email / Phone)
   * Equipment Required & Quantity
   * Custom Specifications & Notes
   * Lead Status (`new`)
   * Submission Timestamp
