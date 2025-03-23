'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FaStar, FaCopy, FaBitcoin, FaEthereum } from 'react-icons/fa';
import Footer from '@/components/sections/Footer';
import { BiDollar } from 'react-icons/bi';
import { AuthHeader } from '@/components/sections/AuthHeader';
const reviews = [
    {
        id: 1,
        name: "John Smith",
        rating: 4,
        comment: "Great impact to my life. I wanna be your penpal for life, so I can share all the great and positive way you impacted my life through your secret strategies to crypto investment.",
        date: "2y ago",
        verified: true
    },
    {
        id: 2,
        name: "Jack Romer",
        rating: 5,
        comment: "A big star from me. Nice mentorship class kiyosaki 👋",
        date: "2y ago",
        verified: true
    },
    {
        id: 3,
        name: "Tom Myers",
        rating: 3,
        comment: "Perfect time comes. I wish I found a way to get a mentorship class from you earlier Mr kiyosaki, but im glad i found you, let me say at a prefect timing.",
        date: "2y ago",
        verified: true
    },
    {
        id: 4,
        name: "James Spencer",
        rating: 2,
        comment: "Not fan of Brian Rose. I'm just a follower on making the crypto money, but not a fan of Robert teaching, so I only just got the link from a friend to come get secret so i actually did it without been a fan. so yeah!!! It's a win for me.",
        date: "1y ago",
        verified: true
    },
    {
        id: 5,
        name: "Mike stern",
        rating: 4,
        comment: "Great investment decision!",
        date: "25 jul",
        verified: true
    }
];

const cryptoOptions = [
    {
        id: 'btc',
        name: 'Bitcoin (BTC)',
        icon: FaBitcoin,
        address: 'bc1qakvyg0mv6c0xacx3p0pyj8vp64zklk46rvgzdz'
    },
    {
        id: 'eth',
        name: 'Ethereum (ETH)',
        icon: FaEthereum,
        address: '0x512c561A75d2fDC1955D12e67A794e8F281Ee9FC'
    },
    {
        id: 'usdt',
        name: 'Tether usdt',
        icon: BiDollar,
        address: '0x512c561A75d2fDC1955D12e67A794e8F281Ee9FC'
    }
];

// Add authenticated header component

export default function Dashboard() {
    // Add new state for review modal
    const [showReviewModal, setShowReviewModal] = useState(false);
    const [reviewSubmitted, setReviewSubmitted] = useState(false);
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(5);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [selectedCrypto, setSelectedCrypto] = useState(cryptoOptions[0]);
    const [paymentStatus, setPaymentStatus] = useState('');
    const [paymentProof, setPaymentProof] = useState<File | null>(null);

    const handleCopyAddress = async (address: string) => {
        await navigator.clipboard.writeText(address);
        alert('Address copied to clipboard!');
    };

    const handlePaymentSubmit = async () => {
        try {
            if (!paymentProof) {
                throw new Error('Please upload proof of payment');
            }

            const formData = new FormData();
            formData.append('proof', paymentProof);
            formData.append('amount', '150');
            formData.append('currency', selectedCrypto.id);
            formData.append('walletAddress', selectedCrypto.address);

            const response = await fetch('/api/payments/create', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Payment submission failed');
            }

            setPaymentStatus('success');
            setTimeout(() => {
                setShowPaymentModal(false);
                setPaymentStatus('');
            }, 3000);
        } catch (err: Error | unknown) {
            alert(err instanceof Error ? err.message : 'An error occurred');
            setPaymentStatus('error');
        }
    };

    const handleReviewSubmit = async () => {
        try {
            setReviewSubmitted(true);
            setTimeout(() => {
                setShowReviewModal(false);
                setReviewSubmitted(false);
                setReviewText('');
            }, 3000);
        } catch (error) {
            console.error('Failed to submit review:', error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
            <AuthHeader />
            <main className="flex-grow container mx-auto px-4 py-8">
                {/* Course Section */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <div className="relative h-[400px] w-full">
                        <Image
                            src="/1.png"
                            alt="Money Makers Course"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="p-12 bg-white">
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-900 to-purple-900 bg-clip-text text-transparent">
                                BRIAN ROSE CASHFLOW SECRET
                            </h1>
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Wen&apos;re excited to introduce you to a groundbreaking CASHFLOW strategy that has transformed countless lives. This comprehensive program, inspired by  Brian rose and &quot;Cashflow,&quot; offers you exclusive access to proven wealth-building techniques. Learn how to master Steady CashFlow (S.C.F.) directly from brain rose mentorship, whether you prefer reading or listening.
                                <br /><br />
                                This isnn&apos;t just another financial course - itn&apos;s your gateway to financial independence. Wen&apos;ve included advanced strategies for passive income generation, real estate investing, and cryptocurrency opportunities. Plus, as a special bonus, you&apos;ll receive a mystery book that complements your learning journey.
                            </p>
                            <div className="flex items-center gap-8 mb-8">
                                <div className="flex flex-col">
                                    <span className="text-2xl text-gray-500 line-through">Regular Price</span>
                                    <span className="text-3xl text-gray-400 line-through">$250</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-2xl text-indigo-900">Early Bird Price</span>
                                    <span className="text-4xl font-bold text-indigo-900">$150</span>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowPaymentModal(true)}
                                className="w-full bg-gradient-to-r from-indigo-900 to-purple-900 text-white px-8 py-4 rounded-xl font-bold text-xl hover:opacity-90 transition-all transform hover:scale-105 shadow-lg"
                            >
                                GET INSTANT ACCESS NOW
                            </button>
                            <p className="text-center text-gray-600 mt-4">
                                Limited Time Offer • One-Time Payment • Lifetime Access
                            </p>
                        </div>
                    </div>
                </div>

                {/* Reviews Section */}
                <div className="mt-12">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
                            <div className="flex items-center mt-2">
                                <div className="flex text-amber-400">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                </div>
                                <span className="ml-2 text-gray-600">5.00 out of 5</span>
                            </div>
                        </div>
                        <button
                            onClick={() => setShowReviewModal(true)}
                            className="bg-amber-500 text-indigo-900 px-6 py-3 rounded-xl font-semibold hover:bg-amber-400 transition-all transform hover:scale-105"
                        >
                            Write a review
                        </button>
                    </div>

                    {/* Review Modal */}
                    {showReviewModal && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                            <div className="bg-white rounded-2xl p-8 max-w-md w-full">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Write Your Review</h2>

                                {reviewSubmitted ? (
                                    <div className="text-center text-green-600">
                                        <p className="text-xl font-semibold">Thank you for your review!</p>
                                        <p className="mt-2">Your review will be published after moderation.</p>
                                    </div>
                                ) : (
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Rating
                                            </label>
                                            <div className="flex gap-2">
                                                {[...Array(5)].map((_, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => setRating(index + 1)}
                                                        className={`text-2xl ${index < rating ? 'text-amber-400' : 'text-gray-300'
                                                            }`}
                                                    >
                                                        <FaStar />
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Your Review
                                            </label>
                                            <textarea
                                                value={reviewText}
                                                onChange={(e) => setReviewText(e.target.value)}
                                                rows={4}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                placeholder="Share your experience..."
                                            />
                                        </div>

                                        <button
                                            onClick={handleReviewSubmit}
                                            className="w-full bg-amber-500 text-indigo-900 py-3 rounded-xl font-semibold hover:bg-amber-400 transition-all transform hover:scale-105"
                                        >
                                            Submit Review
                                        </button>
                                    </div>
                                )}

                                <button
                                    onClick={() => setShowReviewModal(false)}
                                    className="mt-4 w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}

                    <div className="space-y-6">
                        {reviews.map((review) => (
                            <div key={review.id} className="bg-white p-6 rounded-xl shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center">
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'} />
                                            ))}
                                        </div>
                                        <span className="ml-2 text-gray-600">{review.date}</span>
                                    </div>
                                </div>
                                <div className="flex items-center mb-3">
                                    <span className="font-semibold text-gray-900">{review.name}</span>
                                    {review.verified && (
                                        <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full">
                                            Verified
                                        </span>
                                    )}
                                </div>
                                <p className="text-gray-700">{review.comment}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Payment Modal */}
                {showPaymentModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                        <div className="bg-white rounded-2xl p-8 max-w-md w-full">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Your Purchase</h2>

                            {paymentStatus === 'success' ? (
                                <div className="text-center text-green-600">
                                    <p className="text-xl font-semibold">Payment Submitted Successfully!</p>
                                    <p className="mt-2">Thank you for your purchase.</p>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Select Payment Method
                                        </label>
                                        <div className="space-y-3">
                                            {cryptoOptions.map((crypto) => (
                                                <button
                                                    key={crypto.id}
                                                    onClick={() => setSelectedCrypto(crypto)}
                                                    className={`w-full flex items-center p-3 rounded-lg border ${selectedCrypto.id === crypto.id
                                                        ? 'border-blue-500 bg-blue-50'
                                                        : 'border-gray-200'
                                                        }`}
                                                >
                                                    <crypto.icon className="text-2xl" />
                                                    <span className="ml-3">{crypto.name}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Upload Payment Proof
                                        </label>
                                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                                            <div className="space-y-1 text-center">
                                                <svg
                                                    className="mx-auto h-12 w-12 text-gray-400"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    viewBox="0 0 48 48"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                <div className="flex text-sm text-gray-600">
                                                    <label
                                                        htmlFor="file-upload"
                                                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                    >
                                                        <span>Upload a file</span>
                                                        <input
                                                            id="file-upload"
                                                            name="file-upload"
                                                            type="file"
                                                            className="sr-only"
                                                            accept="image/*,.pdf"
                                                            onChange={(e) => setPaymentProof(e.target.files?.[0] || null)}
                                                        />
                                                    </label>
                                                    <p className="pl-1">or drag and drop</p>
                                                </div>
                                                <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
                                            </div>
                                        </div>
                                        {paymentProof && (
                                            <p className="mt-2 text-sm text-green-600">
                                                File selected: {paymentProof.name}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Send Payment To
                                        </label>
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="text"
                                                value={selectedCrypto.address}
                                                readOnly
                                                className="flex-1 p-3 bg-gray-50 rounded-lg border border-gray-200"
                                            />
                                            <button
                                                onClick={() => handleCopyAddress(selectedCrypto.address)}
                                                className="p-3 text-blue-600 hover:bg-blue-50 rounded-lg"
                                            >
                                                <FaCopy />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="text-center font-semibold">
                                        Amount: $150
                                    </div>

                                    <button
                                        onClick={handlePaymentSubmit}
                                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                    >
                                        Confirm Payment
                                    </button>

                                    {paymentStatus === 'error' && (
                                        <p className="mt-4 text-red-600 text-center">
                                            Error processing payment. Please try again.
                                        </p>
                                    )}
                                </div>
                            )}

                            <button
                                onClick={() => setShowPaymentModal(false)}
                                className="mt-4 w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}