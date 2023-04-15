import React from 'react';
import { useRouter } from 'next/router'
import { useState, useRef } from 'react'
import { signIn, useSession } from 'next-auth/react';

// Import Login Component
import LoginCard from '@/components/LoginCard';

const Login = () => {
    const { status } = useSession()
    const router = useRouter()

    // Error State
    const [error, setError] = useState(false)

    // Field States
    const emailRef = useRef()
    const passwordRef = useRef()

    const [emailInput, setEmailInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")

    // Push to home page if already authenticated
    if (status === 'authenticated') {
        router.push('/')
    }

    const handleSignIn = async(e: React.FormEvent<HTMLFormElement>) => {
        // Prevent Refresh
        e.preventDefault();

        console.log("form submission")

        const result = await signIn('credentials', {
            redirect: false,
            username: emailInput,
            password: passwordInput,
            callbackUrl: "/"
        })
        console.log(result)
    }

    return (
        <>
            {status === "unauthenticated" && (
                <>
                    <LoginCard
                        email={emailInput}
                        password={passwordInput}
                        setEmail={setEmailInput}
                        setPassword={setPasswordInput}
                        formSubmission={handleSignIn}
                        error={""}
                    />
                </>
            )}
        </>
    );
};

export default Login;