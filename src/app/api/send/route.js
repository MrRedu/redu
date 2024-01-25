import { Resend } from 'resend'
import { EmailTemplate } from '@/components/atoms/send/EmailTemplate'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req, res) {
  try {
    const formData = await req.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const companyName = formData.get('companyName')
    // const services = formData.getAll('services')
    const message = formData.get('message')

    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [process.env.PERSONAL_EMAIL],
      subject: 'Email from my portfolio',
      react: EmailTemplate({
        name,
        email,
        companyName,
        services: ['pepe', 'juan'],
        message,
      }),
    })

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'Something went wrong' },
      { status: 500 }
    )
  }
}
