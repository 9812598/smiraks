import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type Data = {
  username: string;
  tel: string;
  email: string;
};

export async function POST(req: Request, res: Response) {
  try {
    const myData = await req.json();

    const { data, error } = await resend.emails.send({
      from: "Заявка с сайта <donotreply@smiraks.com>",
      to: ["smiraks756@gmail.com"],
      subject: "Запрос с сайта smiraks.com",
      react: EmailTemplate({
        name: myData.username,
        tel: myData.tel,
        email: myData.email,
      }),
    });
    console.log("data from api/send", data);

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
