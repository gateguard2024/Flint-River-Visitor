import { NextResponse } from 'next/server';

// TEMPORARY diagnostic — reports which env vars the LIVE deployment can see.
// Returns booleans + value lengths only (never the secret values). Delete after.

export const dynamic = 'force-dynamic';

export async function GET() {
  const keys = [
    'TWILIO_ACCOUNT_SID', 'TWILIO_AUTH_TOKEN', 'TWILIO_PHONE_NUMBER',
    'BRIVO_CLIENT_ID', 'BRIVO_CLIENT_SECRET', 'BRIVO_API_KEY',
    'BRIVO_USERNAME', 'BRIVO_PASSWORD', 'BRIVO_DOOR_ID',
    'GATE_WEBHOOK_SECRET', 'RESPONDER_PIN', 'NEXT_PUBLIC_RESPONDER_PIN',
    'NEXT_PUBLIC_PROPERTY_NAME', 'NEXT_PUBLIC_OFFICE_PHONE', 'NEXT_PUBLIC_EMERGENCY_PHONE',
  ];
  const present: Record<string, boolean> = {};
  const length: Record<string, number> = {};
  for (const k of keys) {
    const v = process.env[k] || '';
    present[k] = v.trim().length > 0;
    length[k] = v.length;
  }
  return NextResponse.json({
    note: 'true = the deployment sees this var. Values are never shown.',
    twilioReady: present.TWILIO_ACCOUNT_SID && present.TWILIO_AUTH_TOKEN && present.TWILIO_PHONE_NUMBER,
    present,
    length,
  });
}
