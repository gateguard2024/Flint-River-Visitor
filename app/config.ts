export const SITE_CONFIG = {
  // Using NEXT_PUBLIC allows the browser to read these from Vercel
  propertyName: process.env.NEXT_PUBLIC_PROPERTY_NAME || "Flint River Apartments",
  propertyAddress: process.env.NEXT_PUBLIC_PROPERTY_ADDRESS || "",
  officePhone: process.env.NEXT_PUBLIC_OFFICE_PHONE || "",
  emergencyPhone: process.env.NEXT_PUBLIC_EMERGENCY_PHONE || "",
  footerText: "SECURED BY GATE GUARD",
  hours: {
    weekdays: { open: 10, close: 17 },
    saturday: { open: 10, close: 16 },
    sunday: { closed: true }
  }
};

