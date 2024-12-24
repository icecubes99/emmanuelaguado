import React from 'react'
import { Card, CardContent } from './ui/card'
import { Mail, MapPin, Phone } from 'lucide-react'
import { ContactInfo } from '@/lib/enums'
import ContactFormComponent from './contact-form-component'

const ContactFormSection = () => {
    return (
        <div>
            <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto mb-16">
                <Card>
                    <CardContent className="pt-6">
                        <div className="text-center">
                            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                <Mail className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="font-medium mb-1">Email</h3>
                            <p className="text-sm text-muted-foreground">
                                {ContactInfo.Email}
                            </p>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <div className="text-center">
                            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                <Phone className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="font-medium mb-1">Phone</h3>
                            <p className="text-sm text-muted-foreground">
                                {ContactInfo.Phone}
                            </p>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <div className="text-center">
                            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                <MapPin className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="font-medium mb-1">Location</h3>
                            <p className="text-sm text-muted-foreground">
                                {ContactInfo.Location}
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className='mb-12'>
                <ContactFormComponent />
            </div>

        </div>
    )
}

export default ContactFormSection