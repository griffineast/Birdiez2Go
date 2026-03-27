import { NextRequest } from "next/server";

// Maps our form field names → Zoho CRM WebToLeadForm field names.
// These come from the client's generated Web Form HTML (name attributes).
const FIELD_MAP: Record<string, string> = {
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email",
  phone: "Phone",
  eventTown: "LEADCF2",
  eventType: "LEADCF3",
  setupLocation: "LEADCF4",
  duration: "LEADCF5",
  message: "LEADCF6",
  heardAbout: "LEADCF8",
  guests: "LEADCF51",
  eventDate: "LEADCF116",
  source: "LEADCF9",
};

// Hidden fields required by Zoho CRM WebToLeadForm.
// These values are specific to the client's Zoho CRM org/form.
const ZOHO_HIDDEN_FIELDS: Record<string, string> = {
  xnQsjsdp: process.env.ZOHO_XN || "",
  xmIwtLD: process.env.ZOHO_XM || "",
  actionType: "TGVhZHM=",
  returnURL: "null",
};

// Zoho CRM expects dates in "MMM D, YYYY" format (e.g. "Mar 27, 2026")
function formatDateForZoho(dateStr: string): string {
  if (!dateStr) return "";
  const date = new Date(dateStr + "T00:00:00");
  if (isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Basic server-side validation
    const { firstName, lastName, email, phone } = body;
    if (!firstName || !lastName || !email || !phone) {
      return Response.json(
        { error: "First name, last name, email, and phone are required." },
        { status: 400 }
      );
    }

    // Build form-urlencoded payload
    const params = new URLSearchParams();

    // Add hidden fields
    for (const [key, value] of Object.entries(ZOHO_HIDDEN_FIELDS)) {
      params.append(key, value);
    }

    // Add form fields using Zoho's field names
    for (const [ourKey, zohoKey] of Object.entries(FIELD_MAP)) {
      if (body[ourKey] !== undefined && body[ourKey] !== "") {
        const value =
          ourKey === "eventDate"
            ? formatDateForZoho(body[ourKey])
            : String(body[ourKey]);
        params.append(zohoKey, value);
      }
    }

    const zohoUrl = process.env.ZOHO_FORM_URL;
    if (!zohoUrl) {
      console.error("ZOHO_FORM_URL environment variable is not set");
      return Response.json(
        { error: "Server configuration error. Please try again later." },
        { status: 500 }
      );
    }

    const zohoResponse = await fetch(zohoUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

    // Zoho CRM WebToLeadForm returns 200 with a redirect/HTML page on success.
    // A non-200 means something went wrong.
    if (!zohoResponse.ok) {
      const text = await zohoResponse.text();
      console.error("Zoho CRM error:", zohoResponse.status, text);
      return Response.json(
        { error: "Failed to submit inquiry. Please try again." },
        { status: 502 }
      );
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Inquiry submission error:", err);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
