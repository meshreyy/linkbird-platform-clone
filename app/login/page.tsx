'use client'

import { FormEvent } from 'react'
import { redirect, useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

export default function LoginPage() {
    const router = useRouter()

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')?.toString() || ""
        const password = formData.get('password')?.toString() || ""

        const result = await signIn('credentials', {
          //  redirect: false,
            email,
            password,
        })

        if (result?.error) {
            alert("Login failed:" + result.error)
        } else {
            // Handle errors
            router.push('/profile')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <div>
                <button type="submit">Login</button> <br></br>
                <button type="button"
                    onClick={() => signIn('google', {callbackUrl: '/profile'})}>
                    Sign in with Google</button>
            </div>
        </form>


    )

}
