import { Resend } from 'resend'
import { EmailTemplate } from '@/components/atoms/send/EmailTemplate'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['ejrb1234@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({
        name: 'Pepe',
        email: 'correo@gmail.com',
        companyName: 'Resend Company',
        services: ['pepe', 'juan'],
        message: 'Esto es un mensaje largo',
      }),
    })
    // console.log(data)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { message: 'Something went wrong' },
      { status: 500 }
    )
  }
}
