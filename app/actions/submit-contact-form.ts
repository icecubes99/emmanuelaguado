'use server'

import { put } from '@vercel/blob'
import { revalidatePath } from 'next/cache'

export async function submitContactForm(formData: FormData) {
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const email = formData.get('email') as string
    const subject = formData.get('subject') as string
    const message = formData.get('message') as string

    const submission = {
        firstName,
        lastName,
        email,
        subject,
        message,
        timestamp: new Date().toISOString(),
    }

    try {
        const { url } = await put(
            `contact-submissions/${Date.now()}.json`,
            JSON.stringify(submission),
            { access: 'public' }
        )

        console.log('Submission stored at', url)

        revalidatePath('/contact')
        return { success: true, message: 'Your message has been sent successfully!' }
    } catch (error) {
        console.error('Error storing submission:', error)
        return { success: false, message: 'There was an error sending your message. Please try again.' }
    }
}

