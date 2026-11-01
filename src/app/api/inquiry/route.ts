import { NextResponse } from "next/server";
import { SITE_CONFIG } from "@/data/permonicek";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      type = "ukazkova-lekce",
      selectedItem = "",
      parentName = "",
      email = "",
      phone = "",
      childInfo = "",
      note = "",
    } = body ?? {};

    if (!parentName || (!email && !phone)) {
      return NextResponse.json(
        { error: "Chybí jméno nebo kontaktní údaj (e-mail či telefon)." },
        { status: 400 }
      );
    }

    const recipientEmail =
      type === "ctvrtecni-herna"
        ? SITE_CONFIG.contacts.playroomEmail
        : SITE_CONFIG.contacts.coordinatorEmail;

    const typeLabels: Record<string, string> = {
      "ukazkova-lekce": "Přihláška na ukázkovou lekci zdarma",
      "ctvrtecni-herna": "Rezervace čtvrteční herny",
      seminar: "Rezervace místa na seminář",
      "detska-skupina": "Zájem o Dětskou skupinu Permoníček",
      "clenstvi-dotaz": "Členství / dotaz z webu MC Permoníček",
    };

    const subject = `${typeLabels[type] ?? "Přihláška MC Permoníček"} — ${selectedItem}`;
    const summaryText = [
      `Dobrý den,`,
      ``,
      `zasílám přihlášku / poptávku z webu MC Permoníček:`,
      `• Typ: ${typeLabels[type] ?? type}`,
      `• Vybraný program: ${selectedItem}`,
      `• Jméno: ${parentName}`,
      phone ? `• Telefon: ${phone}` : null,
      email ? `• E-mail: ${email}` : null,
      childInfo ? `• Dítě / počet osob: ${childInfo}` : null,
      note ? `• Poznámka: ${note}` : null,
      ``,
      `Děkuji a těším se na zprávu!`,
    ]
      .filter(Boolean)
      .join("\n");

    // Optional webhook / Resend integration when env vars are set in production on Vercel
    const webhookUrl = process.env.INQUIRY_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          recipientEmail,
          subject,
          parentName,
          email,
          phone,
          selectedItem,
          childInfo,
          note,
          createdAt: new Date().toISOString(),
        }),
      }).catch(() => null);
    }

    const mailtoUrl = `mailto:${encodeURIComponent(recipientEmail)}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(summaryText)}`;

    return NextResponse.json({
      ok: true,
      recipientEmail,
      mailtoUrl,
      summaryText,
    });
  } catch {
    return NextResponse.json(
      { error: "Nepodařilo se zpracovat formulář." },
      { status: 500 }
    );
  }
}
