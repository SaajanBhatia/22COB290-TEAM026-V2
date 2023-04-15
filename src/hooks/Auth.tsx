import { SessionProvider, useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export type AuthProps = {
    children: React.ReactNode;
};

const Auth = ({ children }: AuthProps): JSX.Element => {
    const router = useRouter();
    const { data: session, status } = useSession();
    const isUser = !!session?.user;
    useEffect(() => {
        if (status === 'loading') return; // Do nothing while loading
        if (!isUser) router.push('/login'); //Redirect to login
    }, [isUser, status, router]);

    return isUser ? <>{children}</> : <div>Loading...</div>; // Return a valid React element here
};

export default Auth;
