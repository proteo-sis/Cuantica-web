import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs"; // asegurar entorno Node para nodemailer
export const dynamic = "force-dynamic"; // no cachear

function mask(value?: string | null, opts: { keepStart?: number; keepEnd?: number } = {}) {
  if (!value) return "";
  const { keepStart = 2, keepEnd = 2 } = opts;
  if (value.length <= keepStart + keepEnd) return "*".repeat(value.length);
  return (
    value.slice(0, keepStart) + "*".repeat(Math.max(1, value.length - keepStart - keepEnd)) + value.slice(-keepEnd)
  );
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      nombre,
      email,
      telefono,
      asunto,
      comentario,
      disciplinas = [],
    } = body || {};

    if (!nombre || !email || !asunto || !comentario) {
      return NextResponse.json(
        { message: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST as string;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER as string;
    const smtpPass = process.env.SMTP_PASS as string;
    const toEmail = process.env.SALES_EMAIL || "ventas1@cuantica-studio.mx";

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json(
        { message: "Configuración SMTP incompleta" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const subject = `[Contacto Web] ${asunto} - ${nombre}`;
    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222">
        <h2>Nuevo mensaje desde el formulario</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${telefono ? `<p><strong>Teléfono:</strong> ${telefono}</p>` : ""}
        <p><strong>Asunto:</strong> ${asunto}</p>
        <p><strong>Disciplinas de interés:</strong> ${
          Array.isArray(disciplinas) && disciplinas.length
            ? disciplinas.join(", ")
            : "(no seleccionadas)"
        }</p>
        <p><strong>Comentario:</strong></p>
        <p style="white-space: pre-wrap">${comentario}</p>
      </div>
    `;

    const fromEmail = process.env.FROM_EMAIL || smtpUser || toEmail;
    const info = await transporter.sendMail({
      from: `Cuántica Studio <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject,
      html,
    });

    // Log útil en servidor para depurar entregabilidad
    console.log("[contact] mail sent:", {
      messageId: info?.messageId,
      response: info?.response,
      accepted: info?.accepted,
      rejected: info?.rejected,
      envelope: info?.envelope,
    });

    return NextResponse.json({
      ok: true,
      accepted: info?.accepted || [],
      rejected: info?.rejected || [],
      response: info?.response,
      messageId: info?.messageId,
      envelope: info?.envelope,
    });
  } catch (error: any) {
    console.error("Error enviando correo:", error);
    return NextResponse.json(
      { message: "No se pudo enviar el correo" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const verify = url.searchParams.get("verify") === "1";
    const sendTest = url.searchParams.get("test") === "1";

    const smtpHost = process.env.SMTP_HOST || "";
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER || "";
    const smtpPass = process.env.SMTP_PASS || "";
    const toEmail = process.env.SALES_EMAIL || "";

    const baseInfo = {
      hasSMTP_HOST: Boolean(smtpHost),
      hasSMTP_PORT: Boolean(process.env.SMTP_PORT),
      hasSMTP_USER: Boolean(smtpUser),
      hasSMTP_PASS: Boolean(smtpPass),
      hasSALES_EMAIL: Boolean(toEmail),
      values: {
        SMTP_HOST: smtpHost,
        SMTP_PORT: smtpPort,
        SMTP_USER_masked: mask(smtpUser, { keepStart: 3, keepEnd: 2 }),
        SMTP_PASS_masked: smtpPass ? mask(smtpPass, { keepStart: 1, keepEnd: 1 }) : "",
        SALES_EMAIL: toEmail,
      },
    };

    if (!verify) {
      return NextResponse.json({ ok: true, ...baseInfo, note: "Agrega ?verify=1 para probar conexión SMTP" });
    }

    // Probar conexión SMTP
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: smtpUser && smtpPass ? { user: smtpUser, pass: smtpPass } : undefined,
    });

    try {
      const verified = await transporter.verify();

      if (sendTest) {
        await transporter.sendMail({
          from: `Cuántica Studio <${smtpUser || toEmail}>`,
          to: toEmail,
          subject: "[TEST] Verificación de correo - Cuántica Studio",
          text: "Este es un correo de prueba enviado desde el endpoint /api/contact (test=1).",
        });
      }

      return NextResponse.json({ ok: true, verified, sentTest: sendTest || undefined, ...baseInfo });
    } catch (err: any) {
      return NextResponse.json(
        {
          ok: false,
          verified: false,
          error: err?.message || "SMTP verify failed",
          ...baseInfo,
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    return NextResponse.json(
      { ok: false, message: error?.message || "Debug error" },
      { status: 500 }
    );
  }
}


