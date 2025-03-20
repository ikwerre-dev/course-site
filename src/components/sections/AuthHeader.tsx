'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export const AuthHeader = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <header className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white shadow-lg">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold">
          <span className="text-amber-400">Wealth</span> Accelerator
        </Link>
        <nav className="flex items-center space-x-8">
          <Link href="/dashboard" className="hover:text-amber-400 transition-colors">
            Dashboard
          </Link>
          <Link href="/profile" className="hover:text-amber-400 transition-colors">
            My Profile
          </Link>
          <button
            onClick={handleLogout}
            className="bg-amber-500 text-indigo-900 px-6 py-2 rounded-lg font-semibold hover:bg-amber-400 transition-all transform hover:scale-105"
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default AuthHeader;