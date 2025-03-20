'use client';
import { useState, useEffect } from 'react';
import AuthHeader from '@/components/sections/AuthHeader';
import Footer from '@/components/sections/Footer';
import Image from 'next/image';
 
export default function Profile() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        joinDate: '',
        coursesAccess: false
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('/api/user/profile');
                if (response.ok) {
                    const data = await response.json();
                    setUser(data);
                }
            } catch (error) {
                console.error('Failed to fetch user data:', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
            <AuthHeader />
            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="bg-gradient-to-r from-indigo-900 to-purple-900 px-8 py-12">
                            <div className="flex items-center gap-8">
                                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white">
                                    <Image
                                        src="/profile.png"
                                        alt={user.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h1 className="text-3xl font-bold text-white mb-2">{user.name}</h1>
                                    <p className="text-indigo-200">Member since {user.joinDate}</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Account Information</h2>
                                    <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-500">Email</label>
                                            <p className="mt-1 text-lg text-gray-900">{user.email}</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Course Access</h2>
                                    <div className="bg-gray-50 rounded-xl p-6">
                                       
                                            <div className="text-gray-500">
                                                <p>No courses purchased yet</p>
                                            </div>
                                     </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}