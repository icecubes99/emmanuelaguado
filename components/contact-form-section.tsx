import React from "react"
import { Card, CardContent } from "./ui/card"
import { Mail, MapPin, Phone } from "lucide-react"
import { ContactInfo } from "@/lib/enums"
import ContactFormComponent from "./contact-form-component"

const ContactFormSection = () => {
    return (
        <div>
            <div className="mx-auto mb-16 grid max-w-4xl gap-8 md:grid-cols-3">
                <Card>
                    <CardContent className="pt-6">
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="mb-1 font-medium">Email</h3>
                            <p className="text-sm text-muted-foreground">{ContactInfo.Email}</p>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="mb-1 font-medium">Phone</h3>
                            <p className="text-sm text-muted-foreground">{ContactInfo.Phone}</p>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="mb-1 font-medium">Location</h3>
                            <p className="text-sm text-muted-foreground">{ContactInfo.Location}</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="mb-12">
                <ContactFormComponent />
            </div>
        </div>
    )
}

export default ContactFormSection
