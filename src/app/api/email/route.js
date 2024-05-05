import { Resend } from "resend";
import EmailTemplate from "@/components/Util/email";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (req = NextRequest, res) => {
  try {
    const body = await req.json();

    const { fullName, email, message, acceptedTerms } = body;

    const commonEmailOptions = {
      from: "tendercontrol@studiobromo.hu",
      subject: "Üzenet érkezett",
      react: EmailTemplate({ firstName: fullName, message, email, acceptedTerms }),
    };

    const dataPromises = [
      resend.emails.send({
        ...commonEmailOptions,
        to: ["hello@studiobromo.hu"],
      }),
    ];

    const [data] = await Promise.all(dataPromises);

    return new NextResponse(JSON.stringify({ data }), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Error processing request" }),
      { status: 500 },
    );
  }
};
