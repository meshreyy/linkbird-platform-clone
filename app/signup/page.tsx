'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Logo from './logo3.png';
import { auth } from '@/lib/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export default function SignupPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name')?.toString() || "";
    const email = formData.get('email')?.toString() || "";
    const password = formData.get('password')?.toString() || "";

try {
      // Create user with Firebase
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: name });
      }

      // Redirect to dashboard on signup success
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900">
      <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 w-full max-w-md bg-black rounded-lg shadow-md p-8">
        <div className="flex justify-center mb-6">
          <Image src={Logo} alt="Logo" width={30} height={30} />
        </div>
        <h1 className="text-center text-2xl font-semibold mb-2">Create Account</h1>
        <p className="text-center text-gray-400 mb-6 text-sm">Sign up to get started.</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="border border-gray-300 p-3 rounded focus:outline-blue-500"
            disabled={isLoading}
          />
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
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? 'Signing up...' : 'Sign up'}
          </button>
        </form>
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-gray-400 text-xs">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <p className="text-center mt-6 text-gray-500 text-sm">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}