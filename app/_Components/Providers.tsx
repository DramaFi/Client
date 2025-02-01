'use client';
import { PrivyProvider } from '@privy-io/react-auth';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!}
      config={{
        appearance: {
          theme: 'light',
          accentColor: '#676FFF',
          // logo: 'https://your-logo-url', // Optional
        },
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
        loginMethods: ['email', 'wallet'],
      }}
    >
      {children}
    </PrivyProvider>
  );
}