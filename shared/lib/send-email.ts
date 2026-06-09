import { Resend } from 'resend'
import React from 'react'

export const sendEmail = async (to: string, subject: string, template: React.ReactNode) => {
    const resend = new Resend(process.env.RESEND_API_KEY)

    const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to,
        subject,
        react: template,
    })

    if (error) {
        const message = typeof error === 'string' ? error : (error.message ?? JSON.stringify(error))
        throw new Error(message)
    }

    return data
}
