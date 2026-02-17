"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AUTH_STORAGE_KEY = "cbre_analytics_auth";

interface PasswordGateProps {
    children: React.ReactNode;
    password: string; // Store this in an environment variable
    redirectTo?: string;
    title?: string;
    submitButtonText?: string;
}

const PasswordGate: React.FC<PasswordGateProps> = ({
    children,
    password,
    redirectTo = "/#projects",
    title = "CBRE Analytics Engine",
    submitButtonText = "Access Project"
}) => {
    const [inputPassword, setInputPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // Check if user is already authenticated (shared with CBRE)
        const authStatus = localStorage.getItem(AUTH_STORAGE_KEY);
        if (authStatus === 'authenticated') {
            setIsAuthenticated(true);
        }
        setIsLoading(false);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (inputPassword === password) {
            localStorage.setItem(AUTH_STORAGE_KEY, 'authenticated');
            setIsAuthenticated(true);
        } else {
            setError('Incorrect password. Please try again.');
            setInputPassword('');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem(AUTH_STORAGE_KEY);
        setIsAuthenticated(false);
        setInputPassword('');
        router.push(redirectTo);
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-custom-cream">
                <div className="text-custom-darkOlive">Loading...</div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-custom-cream px-4">
                <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-custom-darkOlive mb-2">
                            {title}
                        </h1>
                        <p className="text-custom-olive">
                            This is password protected
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-semibold text-custom-darkOlive mb-2"
                            >
                                Enter Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={inputPassword}
                                onChange={(e) => setInputPassword(e.target.value)}
                                className="w-full px-4 py-3 border-2 border-custom-olive/50 rounded-lg focus:outline-none focus:border-custom-lightOlive text-custom-darkOlive"
                                placeholder="Password"
                                autoFocus
                            />
                            {error && (
                                <p className="mt-2 text-sm text-red-600">{error}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-custom-darkOlive text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                        >
                            {submitButtonText}
                        </button>
                    </form>

                    <div className="mt-6 space-y-3">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-custom-olive/20"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-custom-olive">or</span>
                            </div>
                        </div>

                        <a
                            href={`mailto:John.Luke8054@gmail.com?subject=${encodeURIComponent(`Password Request - ${title}`)}&body=${encodeURIComponent(`Hi John,\n\nI would like to request access to ${title}. Could you please share the password?\n\nThank you!`)}`}
                            className="flex items-center justify-center gap-2 w-full border-2 border-custom-olive/50 text-custom-darkOlive py-3 rounded-lg font-semibold hover:bg-custom-olive/10 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Request Password via Email
                        </a>
                    </div>

                    <div className="mt-6 text-center">
                        <button
                            onClick={() => router.push(redirectTo)}
                            className="text-sm text-custom-olive hover:text-custom-darkOlive transition-colors"
                        >
                            ← Back to Projects
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            {children}
            {/* Optional: Add a logout button */}
            <div className="fixed bottom-4 right-4 z-50">
                <button
                    onClick={handleLogout}
                    className="bg-custom-darkOlive/80 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-custom-darkOlive transition-colors"
                >
                    Logout
                </button>
            </div>
        </>
    );
};

export default PasswordGate;
