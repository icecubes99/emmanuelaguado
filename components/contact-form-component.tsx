'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Send } from 'lucide-react'
import { submitContactForm } from '@/app/actions/submit-contact-form'
import { useToast } from '@/hooks/use-toast'

export default function ContactFormComponent() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false)
    const { toast } = useToast()

    useEffect(() => {
        const submitted = localStorage.getItem('formSubmitted')
        if (submitted === 'true') {
            setIsSubmitSuccessful(true)
        }
    }, [])

    const handleInputChange = () => {
        setIsSubmitSuccessful(false)
        localStorage.removeItem('formSubmitted')
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Store form data before any resets
        const form = e.currentTarget
        const formData = new FormData(form)
        const result = await submitContactForm(formData)

        setIsSubmitting(false)

        if (result.success) {
            setIsSubmitSuccessful(true)
            localStorage.setItem('formSubmitted', 'true')
            toast({
                title: "Message Sent",
                description: result.message,
            })
            form.reset()
        } else {
            toast({
                title: "Error",
                description: result.message,
                variant: "destructive",
            })
        }
    }

    return (
        <div className="max-w-2xl mx-auto px-4">
            <Card>
                <CardHeader>
                    <CardTitle>Send me a message</CardTitle>
                    <CardDescription>
                        Fill out the form below and I&apos;ll get back to you as soon as possible.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">First name</Label>
                                <Input
                                    id="firstName"
                                    name="firstName"
                                    placeholder="John"
                                    required
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName">Last name</Label>
                                <Input
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Doe"
                                    required
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="john@example.com"
                                required
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="subject">Subject</Label>
                            <Input
                                id="subject"
                                name="subject"
                                placeholder="Project Inquiry"
                                required
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                                id="message"
                                name="message"
                                placeholder="Tell me about your project..."
                                className="min-h-[150px]"
                                required
                                onChange={handleInputChange}
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={isSubmitting || isSubmitSuccessful}
                        >
                            <Send className="w-4 h-4 mr-2" />
                            {isSubmitting ? 'Sending...' : isSubmitSuccessful ? 'Message Sent' : 'Send Message'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

