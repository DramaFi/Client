'use client';
import { usePrivy } from '@privy-io/react-auth';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { login, authenticated } = usePrivy();
  const router = useRouter();

  // Redirect if already authenticated
  if (authenticated) {
    router.push('/dashboard');
    return null;
  }

  return (
    <main className="flex min-h-screen min-w-full">
      <div className="flex bg-privy-light-blue flex-1 p-6 justify-center items-center">
        <div>
          <div className="mt-6 flex justify-center text-center">
            <button
              className="bg-violet-600 hover:bg-violet-700 py-3 px-6 text-white rounded-lg"
              onClick={login}
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}