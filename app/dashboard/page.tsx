'use client';
import { usePrivy } from '@privy-io/react-auth';
import { useRouter } from 'next/navigation';
interface UserDisplayProps {
    user: {
      email?: string | null;
      wallet?: {
        address?: string;
      } | null;
    } | null;
  }

export default function DashboardPage() {
  const { authenticated, user, logout } = usePrivy();
  const router = useRouter();
  if (!authenticated) {
    router.push('/');
    return null;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="mb-4">
        Welcome!
      </div>
      <button
        className="bg-red-600 hover:bg-red-700 py-2 px-4 text-white rounded-lg"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}