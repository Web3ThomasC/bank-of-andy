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
