import { Resend } from "resend";
import EmailTemplate from "@/components/Util/email";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// eslint-disable-next-line import/no-anonymous-default-export
export const POST = async (req, res) => {
  try {
   
    const body = await req.json();    

    console.log(body)

    const { fullName, email, message } = body;

    const commonEmailOptions = {
      from: "tendercontrol@studiobromo.hu",
      subject: "Üzenet érkezett",
      react: EmailTemplate({ firstName: fullName, message, email }),
    };

    const dataPromises = [
      resend.emails.send({
        ...commonEmailOptions,
        to: ["hello@studiobromo.hu"],
      }),
    ];

    const [data, toSender] = await Promise.all(dataPromises);

    res.status(200).json({ data, toSender });
    return new NextResponse(
      JSON.stringify({ data, toSender }),
      { status: 200 },
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Error processing request" }),
      { status: 500 },
    );
  }
};