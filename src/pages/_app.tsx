import type { AppProps } from 'next/app'
import NextComponentType from "next/app"
import { SessionProvider } from "next-auth/react";
import Auth from '@/hooks/Auth';
import "@/styles/globals.css";


type NextAuthComponentType = NextComponentType & {
  auth?: boolean;
};

export default function App({ Component, pageProps }: AppProps & {
  Component: NextAuthComponentType;
}): JSX.Element {
  return (
    <SessionProvider session={pageProps.session}>
      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}