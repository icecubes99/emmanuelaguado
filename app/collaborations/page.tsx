import CollabCard from '@/components/collaboration-card'
import CollabHeroSection from '@/components/collaboration-hero-section'
import Footer from '@/components/footer'
import UniversalLayout from '@/components/margin'
import NavBar from '@/components/navbar'
import React from 'react'

interface CollabData {
    page: number
    per_page: number
    total: number
    total_pages: number
    data: CollabUser[]
    support: {
        url: string
        text: string
    }
}

export interface CollabUser {
    id: number
    email: string
    first_name: string
    last_name: string
    avatar: string
}

async function fetchUsers(): Promise<CollabData | null> {
    try {
        const response = await fetch('https://reqres.in/api/users?page=2')
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
    } catch (error) {
        console.error('Error fetching users:', error)
        return null
    }
}

async function Collaborations() {
    const data = await fetchUsers()

    return (
        <div>
            <NavBar />
            <CollabHeroSection />
            <UniversalLayout>
                <CollabCard collabUser={data?.data || []} />
            </UniversalLayout>
            <Footer />
        </div>
    )
}

export default Collaborations
