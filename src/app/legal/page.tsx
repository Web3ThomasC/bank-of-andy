export default function Legal() {
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <main className="flex min-h-screen flex-col items-center p-5 lg:p-12">
            <div className="max-w-4xl w-full">
                <h1 className="text-4xl font-bold mb-8 text-center">Legal Information</h1>

                {/* Crypto Disclaimers Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Cryptocurrency Disclaimers</h2>

                    <div className="space-y-6">
                        {/* Non-Custodial Notice */}
                        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center">
                                <span className="text-2xl mr-2">⚠️</span>
                                Non-Custodial Service Notice
                            </h3>
                            <div className="space-y-4">
                                <p className="font-semibold">Bank of Andy is a non-custodial service. This means:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>We do not store, control, or have access to user private keys</li>
                                    <li>Users are solely responsible for securing their private keys and wallet credentials</li>
                                    <li>We cannot recover lost funds or private keys</li>
                                    <li>We cannot reverse or modify blockchain transactions</li>
                                    <li>We cannot access user wallets</li>
                                    <li>We cannot freeze accounts</li>
                                    <li>We cannot recover stolen funds</li>
                                    <li>We do not store your private information</li>
                                </ul>
                            </div>
                        </div>

                        {/* Risk Warning */}
                        <div className="bg-red-50 border-2 border-red-400 rounded-lg p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center">
                                <span className="text-2xl mr-2">🚨</span>
                                Risk Warning
                            </h3>
                            <div className="space-y-4">
                                <p className="font-semibold">Cryptocurrency investments involve significant risks:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Cryptocurrency values can be highly volatile</li>
                                    <li>Past performance does not guarantee future results</li>
                                    <li>You may lose all your invested capital</li>
                                    <li>The Blast L2 network and smart contracts may have undiscovered vulnerabilities</li>
                                    <li>Network congestion may affect transaction timing and fees</li>
                                    <li>Regulatory changes may impact cryptocurrency usage and value</li>
                                </ul>
                            </div>
                        </div>

                        {/* Security Best Practices */}
                        <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center">
                                <span className="text-2xl mr-2">🔐</span>
                                Security Best Practices
                            </h3>
                            <div className="space-y-4">
                                <p className="font-semibold">To protect your assets, always:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Use a strong, unique password for all accounts</li>
                                    <li>Enable two-factor authentication where available</li>
                                    <li>Store private keys offline in a secure location</li>
                                    <li>Never share private keys or recovery phrases with anyone</li>
                                    <li>Verify all transaction details before confirming</li>
                                    <li>Be cautious of phishing attempts and fake websites</li>
                                    <li>Keep your device&apos;s software and security up to date</li>
                                    <li>Use hardware wallets for significant amounts</li>
                                    <li>Regularly backup wallet information</li>
                                </ul>
                            </div>
                        </div>

                        {/* Transaction Guidelines */}
                        <div className="bg-green-50 border-2 border-green-400 rounded-lg p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center">
                                <span className="text-2xl mr-2">🔄</span>
                                Transaction Guidelines
                            </h3>
                            <div className="space-y-4">
                                <p className="font-semibold">When conducting transactions:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Double-check all wallet addresses before sending</li>
                                    <li>Start with small test transactions</li>
                                    <li>Be aware of network fees and minimums</li>
                                    <li>Ensure sufficient funds for gas fees</li>
                                    <li>Keep transaction records for tax purposes</li>
                                    <li>Monitor transaction status until confirmed</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Terms of Service */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Terms of Service</h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">1. ACCEPTANCE OF TERMS</h3>
                            <p>By accessing and using Bank of Andy (&quot;Service&quot;), you agree to these Terms of Service and all applicable laws and regulations.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">2. DESCRIPTION OF SERVICE</h3>
                            <p>Bank of Andy provides a Telegram-based interface for cryptocurrency transactions and related services on the Blast L2 network.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">3. USER OBLIGATIONS</h3>
                            <ul className="list-disc pl-6">
                                <li>You must be at least 18 years old</li>
                                <li>Provide accurate information</li>
                                <li>Maintain the security of your account</li>
                                <li>Comply with all applicable laws and regulations</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">4. LIMITATIONS OF LIABILITY</h3>
                            <p>The Service is provided &quot;as is&quot; without warranties of any kind. We are not liable for any damages arising from the use of our service.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">5. THIRD-PARTY SERVICES</h3>
                            <p>We integrate with third-party services including MoonPay and Telegram. Users are subject to their respective terms of service.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">6. MODIFICATIONS</h3>
                            <p>We reserve the right to modify these terms at any time. Continued use constitutes acceptance of modifications.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">7. TERMINATION</h3>
                            <p>We reserve the right to terminate service to any user for any reason.</p>
                        </div>
                    </div>
                </section>

                {/* Privacy Policy */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Privacy Policy</h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">1. INFORMATION WE COLLECT</h3>
                            <ul className="list-disc pl-6">
                                <li>Telegram user information</li>
                                <li>Wallet addresses</li>
                                <li>Transaction data</li>
                                <li>Usage analytics</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">2. HOW WE USE INFORMATION</h3>
                            <ul className="list-disc pl-6">
                                <li>To provide and improve our services</li>
                                <li>To comply with legal obligations</li>
                                <li>To communicate with users</li>
                                <li>To prevent fraud and ensure security</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">3. INFORMATION SHARING</h3>
                            <p>We share information with:</p>
                            <ul className="list-disc pl-6">
                                <li>Service providers (MoonPay, etc.)</li>
                                <li>Legal authorities when required</li>
                                <li>Affiliated business partners</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">4. DATA SECURITY</h3>
                            <p>We implement reasonable security measures to protect user data.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">5. USER RIGHTS</h3>
                            <p>Users have the right to:</p>
                            <ul className="list-disc pl-6">
                                <li>Access their data</li>
                                <li>Request data deletion</li>
                                <li>Opt-out of communications</li>
                                <li>Report privacy concerns</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">6. CONTACT</h3>
                            <p>For privacy inquiries: <a href="mailto:contact@bankofandy.com" className="text-blue-500 hover:underline">contact@bankofandy.com</a></p>
                        </div>
                    </div>
                </section>

                <div className="text-sm text-gray-600 mt-8">
                    Last Updated: {currentDate}
                </div>
            </div>
        </main>
    );
}