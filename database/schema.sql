-- ====================================================================
-- ProBird Sports — Sunlight Host MySQL Database Schema
-- Compatible with MySQL 5.7+ / 8.0+ / MariaDB 10.3+ via phpMyAdmin
-- Character Set: utf8mb4 (Full Emoji & Multilingual Support)
-- ====================================================================

SET FOREIGN_KEY_CHECKS = 0;

-- --------------------------------------------------------------------
-- 1. ENQUIRIES & QUOTE REQUESTS TABLE
-- Records buyer lead data submitted via Bulk Quote Modal & Contact Page
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `enquiries` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL COMMENT 'Full name of purchasing officer or buyer',
  `email` VARCHAR(255) NULL COMMENT 'Buyer email address',
  `phone` VARCHAR(50) NULL COMMENT 'Buyer mobile / WhatsApp number',
  `org_type` VARCHAR(150) NULL COMMENT 'Type of institution: School, Academy, Retailer, Club',
  `category` VARCHAR(100) NULL COMMENT 'Sport category: Football, Cricket, Basketball, etc.',
  `items_needed` TEXT NULL COMMENT 'Product name or specific equipment list',
  `quantity` VARCHAR(100) NULL COMMENT 'Estimated units or batch tier requested',
  `specifications` TEXT NULL COMMENT 'Custom notes, weights, grades, delivery requests',
  `source` VARCHAR(50) DEFAULT 'quote_modal' COMMENT 'Where the lead originated: modal_whatsapp_submit, contact_page_submit',
  `status` VARCHAR(50) DEFAULT 'new' COMMENT 'Lead status: new, in_review, quoted, closed',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_status` (`status`),
  INDEX `idx_category` (`category`),
  INDEX `idx_created` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------------------
-- 2. SPORTS CATEGORIES TABLE
-- Stores sport categories, display names, taglines and hero images
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `categories` (
  `id` VARCHAR(50) PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `tagline` VARCHAR(255) NOT NULL,
  `description` TEXT NULL,
  `hero_image` VARCHAR(500) NOT NULL,
  `icon_name` VARCHAR(50) NULL,
  `product_count` INT DEFAULT 0,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------------------
-- 3. PRODUCTS CATALOG TABLE
-- Stores official ProBird Sports equipment specs, tiers and images
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `products` (
  `id` VARCHAR(100) PRIMARY KEY,
  `slug` VARCHAR(255) NOT NULL UNIQUE,
  `name` VARCHAR(255) NOT NULL,
  `category` VARCHAR(50) NOT NULL,
  `category_display_name` VARCHAR(100) NOT NULL,
  `badge` VARCHAR(50) NULL,
  `short_description` TEXT NULL,
  `full_description` TEXT NULL,
  `suggested_bulk_tier` VARCHAR(100) NULL,
  `image` VARCHAR(500) NOT NULL,
  `target_buyer` VARCHAR(255) NULL,
  `featured` BOOLEAN DEFAULT FALSE,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX `idx_prod_category` (`category`),
  INDEX `idx_prod_featured` (`featured`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

SET FOREIGN_KEY_CHECKS = 1;
