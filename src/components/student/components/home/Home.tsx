"use client"
import React, { useState } from 'react';

export default function Home() {
    const [activeTab, setActiveTab] = useState('login');

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md flex flex-col gap-3 bg-white border rounded-lg p-6">
                <div className="flex gap-2">
                    <button
                        className={`px-4 rounded-lg text-sm py-2 ${activeTab === 'login' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
                        onClick={() => setActiveTab('login')}
                    >
                        Login
                    </button>
                    <button
                        className={`px-4 rounded-lg text-sm py-2 ${activeTab === 'signup' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
                        onClick={() => setActiveTab('signup')}
                    >
                        Sign Up
                    </button>
                </div>

                {activeTab === 'login' && (
                    <div>
                        <h1 className="text-2xl font-bold text-primary mb-4">Login</h1>
                        <form method="post" action="/login" className="space-y-4">
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
                                <input type="text" id="username" name="username" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                                <input type="password" id="password" name="password" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
                            </div>
                            <button type="submit" className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-md shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-75">Login</button>
                        </form>
                    </div>
                )}

                {activeTab === 'signup' && (
                    <div>
                        <h1 className="text-2xl font-bold text-primary mb-4">Sign Up</h1>
                        <form method="post" action="/signup" className="space-y-4">
                            <div>
                                <label htmlFor="newUsername" className="block text-sm font-medium text-gray-700">Username:</label>
                                <input type="text" id="newUsername" name="newUsername" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">Password:</label>
                                <input type="password" id="newPassword" name="newPassword" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
                            </div>
                            <button type="submit" className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-md shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-75">Sign Up</button>
                        </form>
                    </div>
                )}

                <div className='flex flex-col gap-1'>
                    <span className='text-sm text-gray-500'>navigation links</span>
                    <div className='flex gap-2'>
                        <a href="/students" className='text-sm text-primary'>Student</a>
                        <a href="/teacher" className='text-sm text-primary'>Teacher</a>
                    </div>
                </div>
            </div>
        </div>
    );
}