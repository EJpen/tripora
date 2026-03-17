import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactEmailPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function sendContactEmail(payload: ContactEmailPayload) {
  const { name, email, phone, message } = payload;

  const currentYear = new Date().getFullYear();

  const { data, error } = await resend.emails.send({
    from: "Tripora <onboarding@resend.dev>",
    to: [process.env.CONTACT_EMAIL_TO!],
    replyTo: email,
    subject: `New Travel Inquiry from ${name}`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Travel Inquiry</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6;">
          <tr>
            <td align="center" style="padding: 40px 16px;">
              <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%;">

                <!-- Logo Header -->
                <tr>
                  <td align="center" style="padding: 0 0 32px 0;">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td align="center" valign="middle" style="padding-right: 10px;">
                          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"/>
                            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
                          </svg>
                        </td>
                        <td align="center" valign="middle">
                          <span style="font-size: 28px; font-weight: 700; letter-spacing: -0.5px; color: #111827;">Tripora</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Main Card -->
                <tr>
                  <td style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.06);">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">

                      <!-- Accent Bar -->
                      <tr>
                        <td style="height: 4px; background: linear-gradient(90deg, #111827 0%, #374151 50%, #6b7280 100%);"></td>
                      </tr>

                      <!-- Header Section -->
                      <tr>
                        <td style="padding: 40px 40px 0 40px;">
                          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                              <td>
                                <p style="margin: 0 0 4px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1.5px; color: #9ca3af;">Travel Inquiry</p>
                                <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #111827; line-height: 1.3;">New message from ${name}</h1>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <!-- Divider -->
                      <tr>
                        <td style="padding: 24px 40px;">
                          <hr style="margin: 0; border: none; border-top: 1px solid #e5e7eb;" />
                        </td>
                      </tr>

                      <!-- Contact Details -->
                      <tr>
                        <td style="padding: 0 40px;">
                          <p style="margin: 0 0 16px 0; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1.5px; color: #9ca3af;">Contact Details</p>
                          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #f3f4f6; border-radius: 12px; overflow: hidden;">
                            <tr>
                              <td style="padding: 16px 20px; background-color: #f9fafb; border-bottom: 1px solid #f3f4f6; width: 120px;">
                                <p style="margin: 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: #6b7280;">Name</p>
                              </td>
                              <td style="padding: 16px 20px; background-color: #f9fafb; border-bottom: 1px solid #f3f4f6;">
                                <p style="margin: 0; font-size: 15px; font-weight: 600; color: #111827;">${name}</p>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 16px 20px; border-bottom: 1px solid #f3f4f6; width: 120px;">
                                <p style="margin: 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: #6b7280;">Email</p>
                              </td>
                              <td style="padding: 16px 20px; border-bottom: 1px solid #f3f4f6;">
                                <a href="mailto:${email}" style="margin: 0; font-size: 15px; color: #111827; text-decoration: none; font-weight: 500;">${email}</a>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 16px 20px; width: 120px;">
                                <p style="margin: 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: #6b7280;">Phone</p>
                              </td>
                              <td style="padding: 16px 20px;">
                                <a href="tel:${phone}" style="margin: 0; font-size: 15px; color: #111827; text-decoration: none; font-weight: 500;">${phone}</a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <!-- Message Section -->
                      <tr>
                        <td style="padding: 32px 40px 0 40px;">
                          <p style="margin: 0 0 12px 0; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1.5px; color: #9ca3af;">Message</p>
                          <div style="background-color: #f9fafb; border: 1px solid #f3f4f6; border-radius: 12px; padding: 24px; color: #374151; font-size: 15px; line-height: 1.7;">
                            ${message.replace(/\n/g, "<br />")}
                          </div>
                        </td>
                      </tr>

                      <!-- Reply CTA -->
                      <tr>
                        <td style="padding: 32px 40px;">
                          <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                              <td align="center">
                                <a href="mailto:${email}" style="display: inline-block; background-color: #111827; color: #ffffff; font-size: 14px; font-weight: 600; text-decoration: none; padding: 14px 32px; border-radius: 8px; letter-spacing: 0.3px;">Reply to ${name}</a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                    </table>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="padding: 32px 40px 0 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td align="center">
                          <p style="margin: 0 0 8px 0; font-size: 13px; color: #9ca3af; line-height: 1.5;">This inquiry was submitted through the Tripora website contact form.</p>
                          <p style="margin: 0 0 16px 0; font-size: 13px; color: #9ca3af;">
                            <a href="mailto:inquiries@tripora.com" style="color: #6b7280; text-decoration: underline;">inquiries@tripora.com</a>
                          </p>
                          <hr style="margin: 0 0 16px 0; border: none; border-top: 1px solid #e5e7eb;" />
                          <p style="margin: 0; font-size: 12px; color: #d1d5db;">&copy; ${currentYear} Tripora. All rights reserved.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
