/**
 * WhatsApp Centralized Conversion Utility for ProBird Sports.
 * Follows strict B2B enquiry standards without fabricated numbers or broken endpoints.
 */

// Reads official number from environment, with empty fallback if unconfigured
export const WHATSAPP_BUSINESS_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";

/**
 * Returns whether a real WhatsApp number has been configured.
 */
export function hasConfiguredWhatsApp(): boolean {
  const sanitized = WHATSAPP_BUSINESS_NUMBER.replace(/\D/g, "");
  return sanitized.length >= 8;
}

/**
 * Generates an official WhatsApp click-to-chat URL with safe URI encoding.
 */
export function generateWhatsAppUrl(message: string): string {
  const sanitizedNumber = WHATSAPP_BUSINESS_NUMBER.replace(/\D/g, "");
  const encodedText = encodeURIComponent(message.trim());
  
  if (sanitizedNumber.length >= 8) {
    return `https://wa.me/${sanitizedNumber}?text=${encodedText}`;
  }
  
  // If no number is configured, link to public WhatsApp chat prompt or return empty
  return `https://api.whatsapp.com/send?text=${encodedText}`;
}

/**
 * General bulk enquiry template
 */
export function buildGeneralBulkEnquiryMessage(): string {
  return [
    "Hello ProBird Sports,",
    "",
    "I would like to enquire about bulk sports equipment for our organization.",
    "Please help share your wholesale catalogue, bulk pricing structure, and order procedures.",
    "",
    "— Enquiring from ProBird Sports Website",
  ].join("\n");
}

/**
 * Product-specific bulk quotation template
 */
export function buildProductEnquiryMessage(params: {
  productName: string;
  productUrl?: string;
  quantity?: string | number;
  variant?: string;
  organizationType?: string;
}): string {
  const lines = [
    `Hello ProBird Sports,`,
    ``,
    `I am interested in requesting a bulk quotation for:`,
    `• Product: ${params.productName}`,
  ];

  if (params.variant) {
    lines.push(`• Variant/Spec: ${params.variant}`);
  }
  if (params.quantity) {
    lines.push(`• Estimated Quantity: ${params.quantity}`);
  }
  if (params.organizationType) {
    lines.push(`• Buyer Type: ${params.organizationType}`);
  }
  if (params.productUrl) {
    lines.push(`• Product Reference: ${params.productUrl}`);
  }

  lines.push(``);
  lines.push(`Please share bulk pricing, lead times, and availability details.`);
  lines.push(`— Sent via ProBird Sports Portal`);

  return lines.join("\n");
}

/**
 * Category-specific enquiry template
 */
export function buildCategoryEnquiryMessage(categoryName: string): string {
  return [
    `Hello ProBird Sports,`,
    ``,
    `We are looking to source bulk equipment in the ${categoryName.toUpperCase()} category for our institution / club.`,
    `Please share your available models, institutional bulk rates, and specification sheets.`,
    ``,
    `— Sent via ProBird Sports Portal`,
  ].join("\n");
}
