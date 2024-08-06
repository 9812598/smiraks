import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "Заявка с сайта <donotreply@smiraks.com>",
      to: ["smiraks756@gmail.com"],
      subject: "Запрос с сайта smiraks.com",
      react: EmailTemplate({
        name: "Иванов Иван",
        tel: "+79999888888",
        email: "test@gmail.com",
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
