'use client';

import { useState } from 'react';
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Logo from './logo2.png';
import google from './google.png';

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email')?.toString() || '';
    const password = formData.get('password')?.toString() || '';

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  } // <-- Closing brace here to properly close handleSubmit

  async function handleGoogleSignIn() {
    setIsLoading(true);
    setError(null);

    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push('/dashboard');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900">
      {/* Background blur overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-0"></div>

      {/* Login form container */}
      <div className="relative z-10 w-full max-w-md bg-black rounded-lg shadow-md p-8">
        <div className="flex justify-center mb-6">
          <Image src={Logo} alt="LinkBird Logo" width={30} height={30} />
        </div>
        <h1 className="text-center text-2xl font-semibold mb-2">Welcome</h1>
        <p className="text-center text-gray-400 mb-6 text-sm">
          Log in to auth0-tenant-demo to continue to Auth0 React SDK Sample.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
            className="border border-gray-300 p-3 rounded focus:outline-blue-500"
            disabled={isLoading}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="border border-gray-300 p-3 rounded focus:outline-blue-500"
            disabled={isLoading}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <a href="/forgot-password" className="text-blue-600 text-sm underline cursor-pointer">
            Forgot password?
          </a>
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? 'Loading...' : 'Continue'}
          </button>
        </form>
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-gray-400 text-xs">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center border border-gray-300 py-2 rounded w-full font-semibold hover:bg-gray-100"
          disabled={isLoading}
        >
          <Image
            src={google}
            alt="Google Logo"
            className="w-5 h-5 mr-2"
          />
          Continue with Google
        </button>
        <p className="text-center mt-6 text-gray-500 text-sm">
          Don&apos;t have an account?{' '}
          <a href="/signup" className="text-blue-600 underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
