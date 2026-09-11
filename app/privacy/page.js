"use client";

import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F4F7F6] font-sans selection:bg-[#157A4F] selection:text-white pb-24">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200 py-8 md:py-16 mb-8 md:mb-12 shadow-sm">
        <div className="w-full px-4 sm:px-6 md:px-16 lg:px-32">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4 uppercase">
            PRIVACY POLICY — GOLO
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm font-semibold text-gray-500">
            <div className="flex items-center gap-2 bg-green-50 px-3 py-1.5 rounded-lg border border-green-100">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Effective Date: <span className="text-gray-900">[10/09/2026]</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Last Updated: <span className="text-gray-900">[09/09/2026]</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="w-full px-4 sm:px-6 md:px-16 lg:px-32">
        <div className="bg-white rounded-2xl md:rounded-[32px] shadow-sm border border-gray-100 p-6 sm:p-6 md:p-8 md:p-16 w-full space-y-10 md:space-y-16">
          
          {/* Section 1 */}
          <section>
            <h2 id="1-introduction" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 border-gray-100">
              1. Introduction
            </h2>
            <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                This Privacy Policy explains how Sukrut Atul Nigavekar, the individual proprietor and 
                operator of GOLO (the “Platform,” “GOLO,” “we,” “us,” or “our”), collects, uses, stores, 
                shares, protects, and otherwise processes personal data of individuals who access or use 
                the GOLO Platform as Users or Merchants.
              </p>
              <p>
                GOLO is a hyperlocal marketplace and discovery platform through which Users may 
                discover nearby Merchants, products, services, offers, deals, advertisements, and other 
                content. Merchants may create business listings, publish products, offers, deals, and 
                advertisements, and interact with Users through the Platform.
              </p>
              <p>
                This Policy is drafted with reference to applicable Indian data-protection and information
                technology laws, including the Information Technology Act, 2000, applicable rules made 
                thereunder, and the Digital Personal Data Protection Act, 2023 (“DPDP Act”), to the 
                extent applicable.
              </p>
              
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8 my-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Operator</h3>
                <p className="mb-4">
                  GOLO is currently operated by its individual proprietor:<br/>
                  <span className="text-xl font-extrabold text-black block mt-2">Sukrut Atul Nigavekar</span>
                </p>
                <p className="mb-4">
                  If ownership or operation of GOLO is transferred to a company, incorporated entity, or 
                  another legal person, this Privacy Policy will be updated to identify the applicable Data 
                  Fiduciary/operator and reflect the relevant processing arrangements.
                </p>
                <p>
                  By using GOLO, you acknowledge that you have read this Privacy Policy. Where consent is 
                  legally required for a particular processing activity, GOLO will obtain the applicable 
                  consent.
                </p>
                <div className="mt-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <p className="font-bold text-red-800 m-0">
                    If you do not agree with this Privacy Policy, please do not use the Platform.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 id="2-scope" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 border-gray-100">
              2. Scope
            </h2>
            <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-8">
              <p>
                This Privacy Policy applies to individuals interacting with GOLO in either of the following 
                roles:
              </p>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-[#157A4F]">2.1 Users</h3>
                <p className="mb-4 font-semibold">Users may:</p>
                <ul className="list-disc pl-8 space-y-3">
                  <li>browse nearby Merchants, products, services, offers, and deals;</li>
                  <li>search for products, services, businesses, and offers;</li>
                  <li>save products, offers, advertisements, or other content to a wishlist;</li>
                  <li>submit classified advertisements or “I Want” requests;</li>
                  <li>interact with Merchants through available Platform functionality;</li>
                  <li>participate in the GOLO Referral Program;</li>
                  <li>purchase or use eligible GOLO services;</li>
                  <li>receive service and promotional notifications where applicable.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-[#157A4F]">2.2 Merchants</h3>
                <p className="mb-4 font-semibold">Merchants may:</p>
                <ul className="list-disc pl-8 space-y-3">
                  <li>register and create a business profile;</li>
                  <li>list their store or business;</li>
                  <li>publish products and services;</li>
                  <li>create offers and deals;</li>
                  <li>publish advertisements and promotional content;</li>
                  <li>subscribe to applicable Merchant plans;</li>
                  <li>interact with Users;</li>
                  <li>participate in the GOLO Referral Program;</li>
                  <li>complete identity and business verification processes.</li>
                </ul>
              </div>
              <p className="bg-blue-50 p-6 rounded-xl border border-blue-100 italic text-blue-900">
                Where a particular processing activity applies only to Users or Merchants, this Policy 
                identifies the relevant role.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 id="3-data-fiduciary" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 border-gray-100">
              3. Data Fiduciary / Platform Operator
            </h2>
            <div className="text-base md:text-lg text-gray-700 leading-relaxed">
              <p className="mb-6">
                For personal data processed through GOLO, the applicable Data Fiduciary/operator is currently:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 className="text-3xl font-black mb-6 text-[#157A4F]">GOLO</h3>
                <div className="space-y-4 text-gray-700">
                  <p><strong className="text-gray-900 text-xl">Operated by:</strong> <br/>Sukrut Atul Nigavekar</p>
                  <p><strong className="text-gray-900 text-xl">Registered Office:</strong> <br/>[Mahalaxmi Nagar, Kolhapur, Maharashtra, PIN:416012 — India]</p>
                  <p><strong className="text-gray-900 text-xl">Privacy / Support Email:</strong> <br/><a href="mailto:GOLO.support@nexaprime.in" className="text-blue-600 hover:underline">[GOLO.support@nexaprime.in]</a></p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 id="4-data-collection" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 border-gray-100">
              4. Personal Data We Collect
            </h2>
            <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-8">
              <p className="text-xl">
                We collect information that is necessary to provide, secure, maintain, improve, and 
                administer GOLO and its services. The exact information collected may vary depending on whether you use GOLO as a User 
                or Merchant and which features you use.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 pt-4 border-t border-gray-100">4.1 Information Collected From Users</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:p-8">
                <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">A. Identity and Contact Information</h4>
                  <p className="font-semibold mb-2">We may collect:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>full name;</li>
                    <li>email address;</li>
                    <li>mobile/phone number.</li>
                  </ul>
                </div>
                  
                <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">B. Optional Demographic Information</h4>
                  <p className="font-semibold mb-2">Where provided by the User, we may collect:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>date of birth;</li>
                    <li>gender.</li>
                  </ul>
                  <p className="text-sm text-gray-500 italic">These fields may be optional unless a particular feature or applicable law requires otherwise.</p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">C. Authentication and Security Information</h4>
                  <p className="font-semibold mb-2">We may collect and process:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>passwords in protected/encrypted form;</li>
                    <li>password history where maintained for security purposes;</li>
                    <li>OAuth/social-login identifiers where Google, Facebook, or another supported authentication mechanism is used;</li>
                    <li>refresh tokens;</li>
                    <li>JWT/session-related information;</li>
                    <li>account authentication and security records.</li>
                  </ul>
                  <p className="text-sm text-gray-500 italic">Authentication information is used to authenticate Users, maintain secure sessions, prevent unauthorized access, and protect GOLO accounts.</p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">D. Address and Location Information</h4>
                  <p className="font-semibold mb-2">We may collect:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>saved addresses, including street, city, state, and PIN code;</li>
                    <li>GPS coordinates, where location access is granted;</li>
                    <li>approximate location where applicable.</li>
                  </ul>
                  <p className="text-sm text-gray-500 italic">Location information may be used to provide location-based discovery such as “Nearby Deals.”</p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">E. Search and Activity Information</h4>
                  <p className="font-semibold mb-2">We may collect:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>search queries;</li>
                    <li>search history;</li>
                    <li>wishlist information;</li>
                    <li>saved products;</li>
                    <li>saved offers;</li>
                    <li>saved advertisements;</li>
                    <li>“I Want” requests;</li>
                    <li>classified advertisements;</li>
                    <li>interactions with applicable Platform features.</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">F. Device and Technical Information</h4>
                  <p className="font-semibold mb-2">We may collect:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>IP address;</li>
                    <li>device platform;</li>
                    <li>browser information;</li>
                    <li>operating system/user-agent information;</li>
                    <li>app version;</li>
                    <li>FCM push-notification token;</li>
                    <li>crash and diagnostic information;</li>
                    <li>technical information required to maintain Platform security and performance.</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">G. Transaction and Credit Note Information</h4>
                  <p className="font-semibold mb-2">Where applicable, we may collect:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>transaction records;</li>
                    <li>payment transaction references;</li>
                    <li>Credit Note information;</li>
                    <li>Credit Note issuance and usage history;</li>
                    <li>eligible Credit Note amounts;</li>
                    <li>Credit Note validity/status.</li>
                  </ul>
                  <p className="text-sm font-bold text-[#157A4F] bg-green-100 p-3 rounded-lg">GOLO does not currently operate a cash-withdrawable wallet system.</p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">H. Referral Information</h4>
                  <p className="font-semibold mb-2">Where a User participates in the GOLO Referral Program, we may collect:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>referral code/link;</li>
                    <li>referral attribution;</li>
                    <li>referred account information necessary to administer the program;</li>
                    <li>onboarding/verification status;</li>
                    <li>qualifying referral counts;</li>
                    <li>reward status;</li>
                    <li>applicable anti-abuse and fraud-prevention information.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 id="5-merchant-information" className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-gray-100">
              5. Information Collected From Merchants
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:p-8 text-lg text-gray-700">
              
              <div className="bg-[#F8FAFC] p-6 md:p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">5.1 Identity and Contact Information</h3>
                <p className="font-semibold mb-3">We may collect:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>full name;</li>
                  <li>email address;</li>
                  <li>mobile/phone number.</li>
                </ul>
              </div>

              <div className="bg-[#F8FAFC] p-6 md:p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">5.2 Demographic Information</h3>
                <p className="font-semibold mb-3">Where provided by the registering individual or authorized representative:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>date of birth;</li>
                  <li>gender.</li>
                </ul>
              </div>

              <div className="bg-[#F8FAFC] p-6 md:p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">5.3 Authentication and Security Information</h3>
                <p className="font-semibold mb-3">We may collect:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>passwords in protected/encrypted form;</li>
                  <li>password history where maintained for security purposes;</li>
                  <li>OAuth/social-login information;</li>
                  <li>refresh tokens;</li>
                  <li>JWT/session-related information;</li>
                  <li>account security records.</li>
                </ul>
              </div>

              <div className="bg-[#F8FAFC] p-6 md:p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">5.4 Business Information</h3>
                <p className="font-semibold mb-3">We may collect:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>store/business name;</li>
                  <li>store/business description;</li>
                  <li>years in business;</li>
                  <li>operating hours;</li>
                  <li>business category;</li>
                  <li>business sub-category;</li>
                  <li>Merchant role, including Merchant, Service Provider, or Both;</li>
                  <li>products and services;</li>
                  <li>offers and deals;</li>
                  <li>advertisements and promotional content.</li>
                </ul>
              </div>

              <div className="bg-[#F8FAFC] p-6 md:p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">5.5 Business Address and Location</h3>
                <p className="font-semibold mb-3">We may collect:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>exact business/store address;</li>
                  <li>business/store GPS coordinates;</li>
                  <li>geographical location information stored in applicable location formats, including GeoJSON where used.</li>
                </ul>
                <p className="text-sm italic text-gray-500">This information may be displayed to Users to enable business discovery, map display, and nearby search functionality.</p>
              </div>

              <div className="bg-[#F8FAFC] p-6 md:p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">5.6 Merchant Verification and KYC Information</h3>
                <p className="font-semibold mb-3">For Merchant verification and compliance purposes, we may collect:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Aadhaar information/document images;</li>
                  <li>PAN information/document images;</li>
                  <li>GST registration information;</li>
                  <li>business registration documents;</li>
                  <li>business licences and other applicable verification documents.</li>
                </ul>
                <p className="text-sm italic text-gray-500">KYC information is used for identity verification, business legitimacy checks, fraud prevention, security, and compliance purposes.</p>
              </div>

              <div className="bg-[#F8FAFC] p-6 md:p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">5.7 Merchant Operational and Financial Information</h3>
                <p className="font-semibold mb-3">We may collect:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>subscription plan;</li>
                  <li>trial status;</li>
                  <li>billing cycle;</li>
                  <li>auto-renewal preference;</li>
                  <li>Credit Note information;</li>
                  <li>transaction references;</li>
                  <li>internal security and trust metrics;</li>
                  <li>risk scores;</li>
                  <li>content-restriction counters;</li>
                  <li>information necessary to detect fraud or policy violations.</li>
                </ul>
              </div>

              <div className="bg-[#F8FAFC] p-6 md:p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">5.8 Merchant Device and Technical Information</h3>
                <p className="font-semibold mb-3">We may collect:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>registration IP address;</li>
                  <li>last-login IP address;</li>
                  <li>device platform;</li>
                  <li>browser/user-agent information;</li>
                  <li>FCM push-notification tokens;</li>
                  <li>applicable technical and security information.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 id="6-auto-information" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 border-gray-100">
              6. Information Collected Automatically
            </h2>
            <div className="text-base md:text-lg text-gray-700 leading-relaxed bg-white border-2 border-gray-100 rounded-3xl p-6 md:p-10">
              <p className="mb-6 text-xl">
                When you access or use GOLO, certain technical information may be collected automatically.
                This may include:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8 mb-8 font-medium">
                <div className="flex items-center gap-3"><span className="w-2 h-2 bg-gray-400 rounded-full"></span> IP address</div>
                <div className="flex items-center gap-3"><span className="w-2 h-2 bg-gray-400 rounded-full"></span> device identifiers</div>
                <div className="flex items-center gap-3"><span className="w-2 h-2 bg-gray-400 rounded-full"></span> device platform</div>
                <div className="flex items-center gap-3"><span className="w-2 h-2 bg-gray-400 rounded-full"></span> operating system</div>
                <div className="flex items-center gap-3"><span className="w-2 h-2 bg-gray-400 rounded-full"></span> browser/user-agent</div>
                <div className="flex items-center gap-3"><span className="w-2 h-2 bg-gray-400 rounded-full"></span> application version</div>
                <div className="flex items-center gap-3"><span className="w-2 h-2 bg-gray-400 rounded-full"></span> crash logs</div>
                <div className="flex items-center gap-3"><span className="w-2 h-2 bg-gray-400 rounded-full"></span> diagnostic information</div>
                <div className="flex items-center gap-3"><span className="w-2 h-2 bg-gray-400 rounded-full"></span> general usage patterns</div>
                <div className="flex items-center gap-3 col-span-2 md:col-span-1"><span className="w-2 h-2 bg-gray-400 rounded-full"></span> session and security info</div>
              </div>
              <p className="text-gray-500 italic bg-gray-50 p-6 rounded-xl">
                This information may be collected through standard web technologies, application 
                functionality, analytics mechanisms, SDKs, and security systems used by GOLO.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 id="7-how-we-use" className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-gray-100">
              7. How We Use Personal Data
            </h2>
            <p className="text-xl text-gray-700 mb-8">GOLO may process personal data for the following purposes:</p>
            
            <div className="space-y-8 text-lg text-gray-700">
              <div className="pl-6 border-l-4 border-[#157A4F]">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">7.1 Account Creation and Authentication</h3>
                <p>To: create User and Merchant accounts; verify account information; authenticate users; maintain login sessions; secure accounts; prevent unauthorized access.</p>
              </div>

              <div className="pl-6 border-l-4 border-[#157A4F]">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">7.2 Hyperlocal Discovery</h3>
                <p>To: connect Users with nearby Merchants; display relevant products, services, offers, and deals; provide location-based search; support “Nearby Deals” functionality; display Merchant locations where applicable.</p>
              </div>

              <div className="pl-6 border-l-4 border-[#157A4F]">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">7.3 User Content and Requests</h3>
                <p>To allow Users to: submit “I Want” requests; create classified advertisements; create and manage wishlists; interact with applicable Merchant functionality.</p>
              </div>

              <div className="pl-6 border-l-4 border-[#157A4F]">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">7.4 Merchant Operations</h3>
                <p>To: create Merchant profiles; display business information; manage products and services; publish offers and deals; manage advertisements; administer Merchant subscriptions.</p>
              </div>

              <div className="pl-6 border-l-4 border-[#157A4F]">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">7.5 Verification and Fraud Prevention</h3>
                <p>To: verify Merchant identity; verify business legitimacy; detect suspicious activity; prevent fraud and abuse; enforce Platform policies; protect Users, Merchants, and GOLO.</p>
              </div>

              <div className="pl-6 border-l-4 border-[#157A4F]">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">7.6 Payments and Paid Services</h3>
                <p>To: process applicable paid services; maintain transaction records; administer subscriptions; administer Credit Notes; process eligible refund-related adjustments; maintain financial and accounting records.</p>
              </div>

              <div className="pl-6 border-l-4 border-[#157A4F]">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">7.7 Referral Program</h3>
                <p>To: track referrals; determine qualifying referrals; prevent referral abuse; administer eligible rewards; maintain referral and reward records.</p>
              </div>

              <div className="pl-6 border-l-4 border-[#157A4F]">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">7.8 Notifications</h3>
                <p>To send: service alerts; account notifications; transaction-related notifications; offer updates; promotional notifications where applicable and permitted.</p>
              </div>

              <div className="pl-6 border-l-4 border-[#157A4F]">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">7.9 Security</h3>
                <p>To: maintain secure sessions; detect unauthorized access; investigate suspicious activity; protect Platform infrastructure; prevent abuse and fraud.</p>
              </div>

              <div className="pl-6 border-l-4 border-[#157A4F]">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">7.10 Content Moderation</h3>
                <p>To: detect potentially prohibited or unsafe content; moderate User and Merchant submitted content; enforce Platform policies; protect Users and Merchants; support legal and safety requirements.</p>
              </div>

              <div className="pl-6 border-l-4 border-[#157A4F]">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">7.11 Analytics and Platform Improvement</h3>
                <p>To: understand Platform usage; diagnose technical problems; improve performance; improve features; maintain reliability; analyse Platform security and usage.</p>
              </div>

              <div className="pl-6 border-l-4 border-[#157A4F]">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">7.12 Legal and Regulatory Compliance</h3>
                <p>To: respond to lawful requests; comply with applicable laws; comply with court or government orders; maintain legally required records; protect GOLO’s legal rights and interests.</p>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <h2 id="8-legal-basis" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 border-gray-100">
              8. Legal Basis / Consent
            </h2>
            <div className="text-base md:text-lg text-gray-700 leading-relaxed bg-blue-50/50 p-6 md:p-10 rounded-3xl border border-blue-100 space-y-6">
              <p>Depending on the processing activity, GOLO may process personal data based on:</p>
              <ul className="list-disc pl-8 space-y-2 font-medium text-gray-800">
                <li>your consent, where consent is required;</li>
                <li>the need to provide requested Platform functionality or services;</li>
                <li>applicable legal obligations;</li>
                <li>legitimate purposes permitted under applicable law.</li>
              </ul>
              <p>
                Where processing is based on consent, you may withdraw consent where applicable. 
                Withdrawal of consent may affect the availability of a feature that requires the relevant 
                data.
              </p>
              <p className="font-bold text-gray-900">
                Withdrawal of consent does not affect the lawfulness of processing carried out before 
                withdrawal.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <h2 id="9-location" className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-gray-100">
              9. Location Data
            </h2>
            <div className="grid md:grid-cols-2 gap-6 md:p-8 text-lg text-gray-700">
              <div className="bg-white border border-gray-200 p-6 md:p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="bg-[#157A4F] text-white w-10 h-10 rounded-lg flex items-center justify-center">9.1</span>
                  Merchant Location
                </h3>
                <p className="mb-4">Merchant business/store location information may include precise GPS latitude and longitude.</p>
                <p className="font-semibold mb-2">This information is used to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>display the Merchant’s business location;</li>
                  <li>enable Users to discover the Merchant;</li>
                  <li>support nearby search;</li>
                  <li>provide location-based Platform functionality.</li>
                </ul>
                <p className="font-bold text-[#157A4F] bg-green-50 p-4 rounded-xl">Merchant business location is an important part of the Merchant listing.</p>
              </div>

              <div className="bg-white border border-gray-200 p-6 md:p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="bg-[#157A4F] text-white w-10 h-10 rounded-lg flex items-center justify-center">9.2</span>
                  User Location
                </h3>
                <p className="mb-4">Where a User grants permission, GOLO may collect precise or approximate device location to provide features such as:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Nearby Deals;</li>
                  <li>nearby Merchant discovery;</li>
                  <li>location-based search.</li>
                </ul>
                <p className="font-bold text-gray-900 mb-4">User location access is optional.</p>
                <p className="mb-4">Users may grant, deny, or revoke location permission through their device settings. If location permission is denied or revoked, certain location-based features may not be available, but the remainder of the Platform may continue to be accessible.</p>
                <p className="italic">GOLO will not use precise User location for purposes beyond those disclosed in this Privacy Policy without the applicable consent or other lawful basis.</p>
              </div>
            </div>
          </section>

          {/* Section 10 */}
          <section>
            <h2 id="10-kyc" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 border-gray-100">
              10. Merchant KYC and Sensitive Information
            </h2>
            <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-8">
              <p className="text-xl bg-gray-50 p-6 rounded-xl font-medium text-gray-800">
                Merchant verification may require sensitive identity and business information, including 
                Aadhaar, PAN, GST registration information, and business documents.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">10.1 Purpose</h3>
                  <p className="mb-3 font-semibold">KYC information is collected for purposes including:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Merchant identity verification;</li>
                    <li>business verification;</li>
                    <li>fraud prevention;</li>
                    <li>Platform safety;</li>
                    <li>compliance requirements.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">10.2 KYC Storage</h3>
                  <p className="mb-3">KYC documents submitted through GOLO may currently be stored as uploaded document/image files using GOLO’s hosting infrastructure.</p>
                  <p className="mb-3 bg-yellow-50 text-yellow-800 p-4 rounded-lg font-mono text-sm border border-yellow-200">Technical implementation and security controls must be verified before publication of this statement.</p>
                  <p>Where applicable, GOLO applies access restrictions and security measures designed to prevent unauthorized access.</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">10.3 Rejected KYC Applications</h3>
                  <p className="mb-3 font-semibold">Where a Merchant’s KYC submission is rejected, GOLO may retain the rejection reason for:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>communicating the result to the Merchant;</li>
                    <li>maintaining verification records;</li>
                    <li>fraud prevention;</li>
                    <li>security;</li>
                    <li>audit purposes.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">10.4 KYC Disclosure</h3>
                  <p className="mb-3 font-semibold">KYC information will not be disclosed except where necessary for:</p>
                  <ul className="list-disc pl-8 space-y-2 mb-4">
                    <li>authorized verification/KYC service providers;</li>
                    <li>legal or regulatory requirements;</li>
                    <li>law-enforcement requests;</li>
                    <li>protection of GOLO, Users, or Merchants;</li>
                    <li>other circumstances described in this Privacy Policy.</li>
                  </ul>
                  <p className="italic text-gray-500">Any actual third-party KYC provider should be identified in this Privacy Policy if one is used.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 11 */}
          <section>
            <h2 id="11-referral" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 border-gray-100">
              11. Referral Program
            </h2>
            <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-8">
              <p className="text-xl">GOLO may provide a Referral Program allowing Users and Merchants to invite others using referral codes or links.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:p-8">
                <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">11.1 Referral Information</h3>
                  <p className="font-semibold mb-3">GOLO may process:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>referral code/link;</li>
                    <li>referral attribution;</li>
                    <li>identity of accounts registering through a referral;</li>
                    <li>onboarding status;</li>
                    <li>verification status;</li>
                    <li>qualifying referral count;</li>
                    <li>reward status.</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">11.2 Referral Visibility</h3>
                  <p className="mb-4">A referred person will not ordinarily be shown the referrer’s complete personal profile merely because a referral exists.</p>
                  <p>Likewise, the referrer will not ordinarily receive access to the referred person’s complete profile. Referral participants may instead see information necessary to administer referral progress and rewards.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">11.3 Anti-Abuse Measures</h3>
                  <p className="font-semibold mb-3">GOLO may apply:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>verification periods;</li>
                    <li>account activity checks;</li>
                    <li>restriction history;</li>
                    <li>risk scoring;</li>
                    <li>other reasonable anti-abuse mechanisms.</li>
                  </ul>
                  <p className="italic text-gray-500">These measures are intended to prevent fraudulent or artificial referral activity.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">11.4 Rewards</h3>
                    <p className="mb-4">Eligible Merchant referrals may result in an applicable subscription-period reward subject to the rules and limits of the Referral Program.</p>
                    <p className="mb-4">Eligible User referrals may result in a Credit Note that can be applied toward eligible future GOLO services, such as applicable advertisements or classified-ad postings.</p>
                  </div>
                  <div className="bg-orange-50 text-orange-800 p-4 rounded-xl font-bold border border-orange-100">
                    Sharing a referral code alone does not necessarily qualify for a reward.
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm md:col-span-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">11.5 Referral Retention</h3>
                  <p className="font-semibold mb-3">Referral attribution and reward records may be retained as necessary to:</p>
                  <ul className="list-disc pl-6 space-y-2 md:columns-2">
                    <li>administer the Referral Program;</li>
                    <li>prevent fraud;</li>
                    <li>resolve disputes;</li>
                    <li>maintain audit records;</li>
                    <li>comply with applicable legal obligations.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 12 */}
          <section>
            <h2 id="12-credit-notes" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 border-gray-100">
              12. Credit Notes and Financial Information
            </h2>
            <div className="text-base md:text-lg text-gray-700 leading-relaxed bg-[#F8FAFC] p-6 md:p-10 rounded-2xl md:rounded-[32px] border border-gray-200">
              <h3 className="text-2xl font-black text-red-600 mb-6 flex items-center gap-3 bg-red-50 p-4 rounded-xl w-fit">
                GOLO does not currently operate a Wallet or withdrawable Wallet Credit system.
              </h3>
              
              <p className="mb-6 text-xl">
                Where a User or Merchant is eligible for a refund-related adjustment or reward, GOLO may 
                issue a Credit Note in accordance with its applicable Refund & Credit Note Policy.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 md:p-8 mt-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 text-xl">A Credit Note:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>is an accounting record;</li>
                    <li>represents an eligible amount;</li>
                    <li>may be applied toward eligible future GOLO services;</li>
                    <li>is not a cash balance;</li>
                    <li>is not a bank deposit;</li>
                    <li>is not withdrawable cash;</li>
                    <li>does not constitute a general-purpose payment wallet.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 text-xl">GOLO may maintain:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>transaction references;</li>
                    <li>Credit Note amounts;</li>
                    <li>issuance records;</li>
                    <li>usage history;</li>
                    <li>validity/status information.</li>
                  </ul>
                </div>
              </div>
              <p className="mt-8 italic text-gray-500 text-center w-full block">
                Any future introduction of a Wallet or other financial feature will be subject to appropriate 
                policy updates before such feature is introduced.
              </p>
            </div>
          </section>

          {/* Section 13 */}
          <section>
            <h2 id="13-notifications" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 border-gray-100">
              13. Push Notifications, Device and Session Data
            </h2>
            <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-8">
              <div className="bg-white p-6 md:p-8 border border-gray-200 rounded-2xl shadow-sm">
                <p className="font-semibold mb-4 text-xl text-gray-900">GOLO may collect FCM push-notification tokens to deliver:</p>
                <ul className="list-disc pl-8 space-y-2 mb-6 text-gray-600">
                  <li>service alerts;</li>
                  <li>account notifications;</li>
                  <li>transaction notifications;</li>
                  <li>promotional notifications where the User has opted in or where otherwise permitted.</li>
                </ul>
                <p className="bg-gray-100 p-4 rounded-xl italic">
                  Users may disable notifications through their device settings, subject to the functionality of 
                  the applicable operating system.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 border border-gray-200 rounded-2xl shadow-sm">
                <p className="font-semibold mb-4 text-xl text-gray-900">Refresh tokens and other session information may be used to:</p>
                <ul className="list-disc pl-8 space-y-2 text-gray-600">
                  <li>maintain secure authentication;</li>
                  <li>keep Users signed in;</li>
                  <li>detect anomalous access;</li>
                  <li>prevent unauthorized account use.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 14 */}
          <section>
            <h2 id="14-interactions" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 border-gray-100">
              14. User and Merchant Interactions
            </h2>
            <div className="text-base md:text-lg text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">Certain GOLO functionality may require information to be shared between Users and Merchants.</p>
              
              <div className="flex flex-col md:flex-row gap-6 md:p-8 items-stretch">
                <div className="flex-1 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
                  <p className="font-bold text-gray-900 mb-4">For example, where a User:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>claims an Offer;</li>
                    <li>submits a request;</li>
                    <li>follows a Merchant;</li>
                    <li>submits a Wishlist interaction;</li>
                    <li>submits an “I Want” request;</li>
                    <li>otherwise initiates a feature requiring Merchant interaction,</li>
                  </ul>
                  <p className="font-medium text-[#157A4F]">GOLO may provide the relevant Merchant with information necessary to respond to or fulfil that specific interaction.</p>
                </div>
                
                <div className="flex-1 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
                  <p className="font-bold text-gray-900 mb-4">Depending on the feature, this may include information such as:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-8">
                    <li>User name;</li>
                    <li>phone number;</li>
                    <li>applicable request information;</li>
                    <li>approximate location.</li>
                  </ul>
                  <p className="bg-red-50 text-red-800 p-4 rounded-xl border border-red-200 font-semibold text-sm">
                    Merchants are expected to use such information only for the applicable Platform 
                    interaction and in accordance with GOLO’s Terms and applicable law.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 15 */}
          <section>
            <h2 id="15-third-parties" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 border-gray-100">
              15. Third-Party Service Providers
            </h2>
            <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-8">
              <p className="text-xl font-medium">GOLO may use third-party service providers to operate particular Platform functions.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:p-8">
                {/* 15.1 */}
                <div className="bg-white border-2 border-gray-100 p-6 md:p-8 rounded-2xl shadow-sm hover:border-[#157A4F] transition-colors">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">15.1 Razorpay</h3>
                  <p className="mb-4">Razorpay may process applicable payment transactions.</p>
                  <p className="font-semibold mb-2">GOLO may retain transaction metadata such as:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-4 text-gray-600">
                    <li>payment ID;</li>
                    <li>order ID;</li>
                    <li>transaction reference;</li>
                    <li>payment status;</li>
                    <li>failure information;</li>
                    <li>other information necessary for transaction administration.</li>
                  </ul>
                  <p className="text-sm bg-gray-50 p-4 rounded-lg mb-4">Payment credentials such as card details, UPI credentials, or net-banking authentication information may be processed directly by the applicable payment service provider rather than stored by GOLO.</p>
                  <p className="text-sm italic">Users should review the applicable payment provider’s privacy practices for further information.</p>
                </div>

                {/* 15.2 */}
                <div className="bg-white border-2 border-gray-100 p-6 md:p-8 rounded-2xl shadow-sm hover:border-[#157A4F] transition-colors">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">15.2 Cloudinary</h3>
                  <p className="mb-4">GOLO may use Cloudinary or applicable cloud media infrastructure to host uploaded media, including:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-6 text-gray-600">
                    <li>profile images;</li>
                    <li>product images;</li>
                    <li>offer images;</li>
                    <li>advertisement media;</li>
                    <li>other uploaded Platform content;</li>
                    <li>Merchant verification documents where currently configured.</li>
                  </ul>
                  <p className="text-sm font-mono bg-yellow-50 text-yellow-800 p-4 rounded-lg border border-yellow-200">The exact categories of documents hosted through a third-party provider should be verified against the production implementation before publication.</p>
                </div>

                {/* 15.3 */}
                <div className="bg-white border-2 border-gray-100 p-6 md:p-8 rounded-2xl shadow-sm hover:border-[#157A4F] transition-colors">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">15.3 Firebase / Google Cloud</h3>
                  <p className="mb-4">GOLO may use Firebase and/or Google Cloud services for functions including:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-6 text-gray-600">
                    <li>push notifications;</li>
                    <li>application infrastructure;</li>
                    <li>social authentication/OAuth;</li>
                    <li>applicable analytics or diagnostic functionality.</li>
                  </ul>
                  <p className="text-sm font-mono bg-yellow-50 text-yellow-800 p-4 rounded-lg border border-yellow-200">The exact Firebase/Google SDKs enabled in the production applications should be reflected consistently in the Platform’s Google Play Data Safety disclosures.</p>
                </div>

                {/* 15.4 */}
                <div className="bg-white border-2 border-gray-100 p-6 md:p-8 rounded-2xl shadow-sm hover:border-[#157A4F] transition-colors">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">15.4 Google Gemini AI</h3>
                  <p className="mb-4">GOLO may use Google Gemini AI or applicable Google AI services to process User- or Merchant-submitted text and images for real-time content moderation and safety checks.</p>
                  <p className="mb-4 text-gray-600">This may include checking content for violations of GOLO’s content rules and applicable safety requirements.</p>
                  <p className="text-sm font-mono bg-yellow-50 text-yellow-800 p-4 rounded-lg border border-yellow-200">The exact categories of content sent to the AI service, retention settings, and applicable provider configuration should be verified against the production implementation before publication.</p>
                </div>

                {/* 15.5 */}
                <div className="md:col-span-2 bg-white border-2 border-gray-100 p-6 md:p-8 rounded-2xl shadow-sm hover:border-[#157A4F] transition-colors">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">15.5 Other Service Providers</h3>
                  <p className="mb-4">GOLO may engage additional service providers where reasonably necessary to operate, secure, maintain, or improve the Platform.</p>
                  <p>Where applicable, such providers may process personal data only for the services they provide to GOLO and subject to appropriate contractual or other protections.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 16 */}
          <section>
            <h2 id="16-disclosures" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 border-gray-100">
              16. Legal and Regulatory Disclosures
            </h2>
            <div className="text-base md:text-lg text-gray-700 leading-relaxed bg-[#F8FAFC] p-6 md:p-10 rounded-3xl border border-gray-200">
              <p className="text-xl font-bold text-gray-900 mb-6">GOLO may disclose personal data where necessary or legally required to:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 list-none mb-8">
                <li className="flex items-center gap-3"><span className="text-blue-500 font-bold">✓</span> comply with applicable law;</li>
                <li className="flex items-center gap-3"><span className="text-blue-500 font-bold">✓</span> comply with a valid court order;</li>
                <li className="flex items-center gap-3"><span className="text-blue-500 font-bold">✓</span> respond to lawful government or regulatory requests;</li>
                <li className="flex items-center gap-3"><span className="text-blue-500 font-bold">✓</span> investigate fraud;</li>
                <li className="flex items-center gap-3"><span className="text-blue-500 font-bold">✓</span> prevent abuse;</li>
                <li className="flex items-center gap-3"><span className="text-blue-500 font-bold">✓</span> protect the rights, safety, and property of GOLO;</li>
                <li className="flex items-center gap-3"><span className="text-blue-500 font-bold">✓</span> protect Users and Merchants;</li>
                <li className="flex items-center gap-3"><span className="text-blue-500 font-bold">✓</span> establish, exercise, or defend legal claims.</li>
              </ul>
              <div className="bg-green-100 text-green-800 text-2xl font-black p-6 rounded-2xl text-center border-2 border-green-200">
                GOLO does not sell personal data.
              </div>
            </div>
          </section>

          {/* Section 17 */}
          <section>
            <h2 id="17-business-transfers" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 border-gray-100">
              17. Business Transfers
            </h2>
            <div className="text-base md:text-lg text-gray-700 leading-relaxed">
              <p className="mb-6">If GOLO’s ownership, assets, operation, or business is transferred, personal data may be transferred as part of the relevant transaction where legally permitted.</p>
              <p className="font-semibold mb-4">Such transfer may occur in connection with:</p>
              <ul className="flex flex-wrap gap-4 list-none mb-6">
                <li className="bg-gray-100 px-4 py-2 rounded-full border border-gray-200">incorporation</li>
                <li className="bg-gray-100 px-4 py-2 rounded-full border border-gray-200">merger</li>
                <li className="bg-gray-100 px-4 py-2 rounded-full border border-gray-200">acquisition</li>
                <li className="bg-gray-100 px-4 py-2 rounded-full border border-gray-200">restructuring</li>
                <li className="bg-gray-100 px-4 py-2 rounded-full border border-gray-200">sale of assets</li>
                <li className="bg-gray-100 px-4 py-2 rounded-full border border-gray-200">transfer of business operations</li>
              </ul>
              <p className="italic">Where required, GOLO will update this Privacy Policy to identify the new operator or applicable Data Fiduciary.</p>
            </div>
          </section>

          {/* Section 18 */}
          <section>
            <h2 id="18-cookies" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 border-gray-100">
              18. Cookies, SDKs and Similar Technologies
            </h2>
            <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-6">
              <p className="text-xl">GOLO’s Website and Mobile Applications may use cookies, SDKs, local storage, device technologies, and similar mechanisms for purposes such as:</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-4 text-center font-semibold text-gray-800">maintaining sessions</div>
                <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-4 text-center font-semibold text-gray-800">remembering preferences</div>
                <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-4 text-center font-semibold text-gray-800">authentication</div>
                <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-4 text-center font-semibold text-gray-800">security</div>
                <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-4 text-center font-semibold text-gray-800">analytics</div>
                <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-4 text-center font-semibold text-gray-800">diagnostics</div>
                <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-4 text-center font-semibold text-gray-800 col-span-2 sm:col-span-3 md:col-span-2">Platform functionality</div>
              </div>
              <p className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                Website Users may manage cookies through browser settings.<br/>
                <span className="font-bold text-orange-600 block mt-2">Disabling certain technologies may affect Platform functionality.</span>
              </p>
              <p className="italic text-gray-500 text-sm mt-4">
                Third-party SDKs used in GOLO may independently process technical or other information 
                according to their applicable configurations and policies. GOLO remains responsible for 
                configuring and disclosing applicable SDK-related processing in accordance with 
                applicable requirements.
              </p>
            </div>
          </section>

          {/* Section 19 */}
          <section>
            <h2 id="19-security" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 border-gray-100">
              19. Data Security
            </h2>
            <div className="text-base md:text-lg text-gray-700 leading-relaxed bg-[#F8FAFC] p-6 md:p-10 rounded-2xl md:rounded-[32px] border border-gray-200 shadow-sm">
              <p className="text-xl text-gray-900 font-bold mb-8">
                GOLO implements reasonable technical and organizational measures designed to protect 
                personal data against:
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12 font-medium">
                <div className="flex items-center gap-3"><span className="text-red-500 font-bold">✖</span> unauthorized access</div>
                <div className="flex items-center gap-3"><span className="text-red-500 font-bold">✖</span> unauthorized disclosure</div>
                <div className="flex items-center gap-3"><span className="text-red-500 font-bold">✖</span> alteration</div>
                <div className="flex items-center gap-3"><span className="text-red-500 font-bold">✖</span> misuse</div>
                <div className="flex items-center gap-3"><span className="text-red-500 font-bold">✖</span> destruction</div>
                <div className="flex items-center gap-3"><span className="text-red-500 font-bold">✖</span> loss</div>
              </div>

              <p className="text-gray-900 font-bold mb-6 text-xl border-t border-gray-200 pt-8">Security measures may include:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none mb-10 text-gray-800 font-medium">
                <li className="bg-white px-6 py-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-3"><span className="text-[#157A4F]">🔒</span> access controls</li>
                <li className="bg-white px-6 py-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-3"><span className="text-[#157A4F]">🔒</span> authentication controls</li>
                <li className="bg-white px-6 py-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-3"><span className="text-[#157A4F]">🔒</span> password protection/encryption</li>
                <li className="bg-white px-6 py-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-3"><span className="text-[#157A4F]">🔒</span> secure transmission</li>
                <li className="bg-white px-6 py-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-3"><span className="text-[#157A4F]">🔒</span> restricted access to sensitive information</li>
                <li className="bg-white px-6 py-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-3"><span className="text-[#157A4F]">🔒</span> security monitoring</li>
                <li className="bg-white px-6 py-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-3"><span className="text-[#157A4F]">🔒</span> session management</li>
                <li className="bg-white px-6 py-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-3"><span className="text-[#157A4F]">🔒</span> fraud and abuse detection</li>
              </ul>

              <div className="bg-red-50 border border-red-200 p-6 rounded-xl text-center">
                <p className="text-red-900 font-bold mb-2">No method of transmission, storage, or electronic processing can be guaranteed to be completely secure.</p>
                <p className="text-red-800 text-sm font-medium">Accordingly, while GOLO takes reasonable measures to protect personal data, absolute security cannot be guaranteed.</p>
              </div>
            </div>
          </section>

          {/* Section 20 */}
          <section>
            <h2 id="20-deletion" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 border-gray-100">
              20. Account Deletion and Data Erasure
            </h2>
            <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-8">
              <p className="text-xl">
                GOLO provides Users and Merchants with an account deletion mechanism through the 
                Website and Mobile Applications. The purpose of this process is to provide a clear, deliberate, and transparent method for 
                requesting deletion of an account and applicable associated data.
              </p>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 bg-gray-100 inline-block px-6 py-2 rounded-full">20.1 User Account Deletion</h3>
                <p className="mb-6 font-medium text-xl">A User may initiate account deletion by navigating to:<br/>
                <span className="font-bold text-[#157A4F] bg-green-50 px-4 py-2 rounded-lg mt-2 inline-block">Profile / Account Settings → Delete Account</span></p>
                
                <p className="mb-6 italic text-gray-500">The deletion process includes the following steps.</p>
                
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                  
                  {/* Step 1 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-white text-gray-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-xl">1</div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-2">Step 1 — Open Delete Account</h4>
                      <p className="text-base text-gray-600">The User accesses the Delete Account option from the account/settings section.</p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-white text-gray-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-xl">2</div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-2">Step 2 — Select Deletion Reason</h4>
                      <p className="text-base text-gray-600">The User will be asked to select a reason for deleting the account. An “Other” option may be provided where applicable.<br/>The selected reason may be recorded for service improvement, security, audit, and operational purposes.</p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-white text-gray-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-xl">3</div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-red-200 shadow-sm bg-red-50">
                      <h4 className="font-bold text-red-900 mb-2">Step 3 — Deletion Warning</h4>
                      <p className="text-base text-red-700">Before final deletion, GOLO will display a clear warning explaining that the account is intended to be permanently deleted and that the User should continue only if they wish to proceed.</p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-white text-gray-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-xl">4</div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-2">Step 4 — Enter DELETE</h4>
                      <p className="text-base text-gray-600 mb-3">The User must manually enter the exact keyword:</p>
                      <div className="bg-gray-900 text-white font-mono text-center font-bold text-2xl py-2 rounded-lg tracking-widest">DELETE</div>
                      <p className="text-sm text-gray-500 mt-3">The final confirmation action will remain disabled until the keyword is entered correctly.</p>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-white text-gray-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-xl">5</div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-2">Step 5 — Final Confirmation and Backend Deletion</h4>
                      <p className="text-base text-gray-600 mb-2">After the User confirms deletion:</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 mb-3">
                        <li>the deletion request is validated;</li>
                        <li>the request is processed by the GOLO backend;</li>
                        <li>applicable account data is deleted, deactivated, anonymized, or retained according to this Privacy Policy and applicable legal requirements.</li>
                      </ul>
                      <p className="text-xs font-bold text-gray-800 bg-gray-100 p-2 rounded">Deletion is performed server-side and is not dependent solely on deletion performed by the Website or Mobile Application.</p>
                    </div>
                  </div>

                  {/* Step 6 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-green-500 bg-white text-green-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-xl">✓</div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border-2 border-green-400 shadow-sm bg-green-50">
                      <h4 className="font-bold text-green-900 mb-2">Step 6 — Completion</h4>
                      <p className="text-base text-green-800 mb-2">After successful deletion:</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-green-700">
                        <li>a deletion-completion message is displayed;</li>
                        <li>active sessions are terminated;</li>
                        <li>applicable refresh/authentication tokens are invalidated;</li>
                        <li>normal authentication/access to the deleted account is prevented.</li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* Section 21 */}
          <section>
            <h2 id="21-merchant-deletion" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 border-gray-100">
              21. Merchant Account Deletion
            </h2>
            <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-8 bg-[#F8FAFC] p-6 md:p-8 md:p-12 rounded-2xl md:rounded-[32px] border border-gray-200">
              <p className="text-xl font-medium">Merchants may initiate account deletion by navigating to:<br/>
              <span className="font-bold text-[#157A4F] bg-white border border-green-200 px-4 py-2 rounded-lg mt-3 inline-block shadow-sm">Merchant Profile / Settings → Delete Account</span></p>
              
              <p className="text-gray-600 italic">Because Merchant accounts may contain store information, products, offers, advertisements, business information, verification records, subscription information, and transaction information, the Merchant deletion flow contains additional warnings.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:p-8 mt-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-200">
                  <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2"><span>⚠️</span> 21.1 Important Data Warning</h3>
                  <p className="mb-3 text-sm font-semibold">Before proceeding, the Merchant will be shown a prominent warning explaining that deletion may permanently remove or make unavailable:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600 mb-3">
                    <li>Merchant account information;</li>
                    <li>store information;</li>
                    <li>products;</li>
                    <li>offers;</li>
                    <li>applicable advertisements;</li>
                    <li>other associated store information,</li>
                  </ul>
                  <p className="text-xs text-gray-500 italic bg-gray-50 p-2 rounded">subject to information that GOLO is legally required or otherwise permitted to retain.</p>
                </div>

                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">21.2 Select Deletion Reason</h3>
                    <p className="text-sm text-gray-600">The Merchant will select a reason for deleting the account. An “Other” option may be provided where applicable.</p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-200">
                    <h3 className="text-xl font-bold text-red-600 mb-2">21.3 Final Deletion Warning</h3>
                    <p className="text-sm text-gray-600">Before final confirmation, GOLO will clearly inform the Merchant that the Merchant account and applicable associated store information will be removed or made unavailable through normal User and Merchant flows.</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">21.4 Enter DELETE</h3>
                  <p className="mb-3 text-sm text-gray-600">The Merchant must manually enter:</p>
                  <div className="bg-gray-900 text-white font-mono text-center font-bold text-2xl py-2 rounded-lg tracking-widest mb-3">DELETE</div>
                  <p className="text-xs text-gray-500 italic">The final deletion action will remain disabled until the keyword matches exactly.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">21.5 Final Confirmation & Backend</h3>
                  <p className="text-sm text-gray-600 mb-2">After final confirmation:</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                    <li>GOLO validates the deletion request;</li>
                    <li>the backend processes the deletion;</li>
                    <li>applicable Merchant account data is deleted, deactivated, or anonymized;</li>
                    <li>associated store data is handled according to this Privacy Policy;</li>
                    <li>information required to be retained by law or for legitimate security, financial, accounting, fraud-prevention, or dispute purposes may be retained.</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">21.6 Session Termination</h3>
                  <p className="text-sm text-gray-600">Active Merchant sessions and applicable authentication/refresh tokens are terminated or invalidated.</p>
                </div>

                <div className="bg-green-50 p-6 rounded-2xl shadow-sm border-2 border-green-200">
                  <h3 className="text-xl font-bold text-green-900 mb-4">21.7 Completion</h3>
                  <p className="text-sm text-green-800 mb-2">After successful deletion:</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-green-700">
                    <li>GOLO displays a deletion-completion message;</li>
                    <li>the deleted Merchant account is no longer accessible through normal Merchant authentication;</li>
                    <li>the associated store is no longer available through normal User or Merchant flows, subject to legally required or otherwise permitted retained information.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 22 */}
          <section>
            <h2 id="22-retention-after-deletion" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 border-gray-100">
              22. Data Deleted, Anonymized or Retained After Account Deletion
            </h2>
            <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-8">
              <p className="text-xl">
                Account deletion does not necessarily mean that every record associated with an account 
                can be immediately and permanently deleted. Depending on the nature of the information, applicable law, and operational requirements, 
                GOLO may:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-red-100 p-6 md:p-8 rounded-2xl">
                  <h3 className="text-2xl font-black text-red-600 mb-3 uppercase tracking-wide">Delete</h3>
                  <p className="font-medium">Permanently remove applicable information from active systems.</p>
                </div>

                <div className="bg-white border-2 border-yellow-100 p-6 md:p-8 rounded-2xl">
                  <h3 className="text-2xl font-black text-yellow-600 mb-3 uppercase tracking-wide">Deactivate</h3>
                  <p className="font-medium">Remove information from normal Platform functionality while retaining it where necessary for a permitted purpose.</p>
                </div>

                <div className="bg-white border-2 border-gray-200 p-6 md:p-8 rounded-2xl md:col-span-2">
                  <h3 className="text-2xl font-black text-gray-600 mb-3 uppercase tracking-wide">Anonymize</h3>
                  <p className="font-medium">Modify information so that it can no longer reasonably be associated with an identifiable individual, where technically and operationally applicable.</p>
                </div>

                <div className="bg-white border-2 border-blue-100 p-6 md:p-8 rounded-2xl md:col-span-2">
                  <h3 className="text-2xl font-black text-blue-600 mb-4 uppercase tracking-wide">Retain</h3>
                  <p className="font-medium mb-4">Retain specific information for a limited period where necessary or permitted for purposes including:</p>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4 list-disc pl-6 text-base text-gray-600 font-semibold">
                    <li>legal compliance;</li>
                    <li>regulatory compliance;</li>
                    <li>tax requirements;</li>
                    <li>accounting requirements;</li>
                    <li>transaction records;</li>
                    <li>financial records;</li>
                    <li>fraud prevention;</li>
                    <li>security;</li>
                    <li>dispute resolution;</li>
                    <li>enforcement of legal rights;</li>
                    <li>establishment, exercise, or defence of legal claims.</li>
                  </ul>
                  <div className="mt-6 bg-blue-50 p-4 rounded-xl text-blue-900 text-sm font-semibold border border-blue-100">
                    Where information is retained after deletion, GOLO will not use it for ordinary account 
                    functionality except where necessary for the purpose for which it is retained or where 
                    otherwise permitted or required by law.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 23 */}
          <section>
            <h2 id="23-deletion-store-data" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 border-gray-100">
              23. Deletion of Merchant Store Data
            </h2>
            <div className="text-base md:text-lg text-gray-700 leading-relaxed">
              <p className="mb-4 text-xl font-medium">Merchant account deletion is intended to cover the Merchant account and associated store information identified in the deletion warning.</p>
              <p className="mb-4">Subject to applicable retention requirements, this may include:</p>
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 list-none mb-8">
                <li className="bg-gray-50 border border-gray-200 text-center py-3 rounded-xl font-bold">Merchant profile</li>
                <li className="bg-gray-50 border border-gray-200 text-center py-3 rounded-xl font-bold">store profile</li>
                <li className="bg-gray-50 border border-gray-200 text-center py-3 rounded-xl font-bold">store information</li>
                <li className="bg-gray-50 border border-gray-200 text-center py-3 rounded-xl font-bold">products</li>
                <li className="bg-gray-50 border border-gray-200 text-center py-3 rounded-xl font-bold">offers</li>
                <li className="bg-gray-50 border border-gray-200 text-center py-3 rounded-xl font-bold">advertisements</li>
                <li className="bg-gray-50 border border-gray-200 text-center py-3 rounded-xl font-bold">uploaded content</li>
                <li className="bg-gray-50 border border-gray-200 text-center py-3 rounded-xl font-bold text-sm flex items-center justify-center leading-tight">account-specific operational information</li>
              </ul>
              <p className="bg-yellow-50 text-yellow-900 p-6 rounded-2xl border border-yellow-200 font-medium">
                Information that must be retained for legal, tax, accounting, financial, security, fraud
                prevention, dispute-resolution, or regulatory purposes may continue to be retained for the 
                applicable period.
              </p>
            </div>
          </section>

          {/* Section 24 */}
          <section>
            <h2 id="24-secure-deletion" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 border-gray-100">
              24. Secure Deletion Request Processing
            </h2>
            <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-4 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
              <p className="font-semibold text-gray-900">GOLO requires an authenticated User or Merchant to initiate account deletion through the applicable account interface.</p>
              <p>GOLO processes deletion requests server-side after validation.</p>
              <p>The deletion mechanism is designed to protect against unauthorized deletion requests.</p>
              <p>GOLO may maintain a minimal deletion audit record to establish that a deletion request was initiated and processed. Such audit records will avoid retaining unnecessary personal information where reasonably possible.</p>
            </div>
          </section>

          {/* Section 25 */}
          <section>
            <h2 id="25-cancellation-deletion" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 border-gray-100">
              25. Cancellation of Deletion Before Final Confirmation
            </h2>
            <div className="text-base md:text-lg text-gray-700 leading-relaxed bg-blue-50 p-6 md:p-8 rounded-2xl border border-blue-100 text-blue-900">
              <p className="mb-4">Opening the Delete Account screen or selecting a deletion reason does not itself delete an account.</p>
              <p className="mb-4 font-bold">A User or Merchant may cancel or navigate away from the process before final confirmation.</p>
              <p>Deletion is executed only after the required confirmation steps have been completed and the final deletion request has been submitted.</p>
            </div>
          </section>

          {/* Section 26 */}
          <section>
            <h2 id="26-website-app-deletion" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 border-gray-100">
              26. Website and Mobile Application Deletion
            </h2>
            <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-6">
              <p className="font-semibold text-xl">GOLO’s account deletion mechanism is designed to be available on:</p>
              <div className="flex gap-4">
                <span className="bg-gray-900 text-white font-bold px-6 py-3 rounded-xl shadow">GOLO Website</span>
                <span className="bg-[#3DDC84] text-gray-900 font-bold px-6 py-3 rounded-xl shadow">Android Application</span>
                <span className="bg-gray-200 text-gray-900 font-bold px-6 py-3 rounded-xl shadow">iOS Application, where available</span>
              </div>
              <p>The deletion journey is intended to use consistent confirmation principles across supported Platforms.</p>
              <p>The Delete Account option will be accessible through the applicable account/settings area.</p>
              <p className="font-bold text-gray-900">The final deletion process is executed through GOLO’s backend systems after validation.</p>
            </div>
          </section>

          {/* Section 27 */}
          <section>
            <h2 id="27-retention" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 border-gray-100">
              27. Data Retention
            </h2>
            <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-8">
              <div className="bg-[#F8FAFC] p-6 md:p-8 rounded-3xl border border-gray-200">
                <p className="text-xl font-bold text-gray-900 mb-6">GOLO retains personal data for as long as reasonably necessary to:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-semibold text-gray-600 mb-8">
                  <div className="flex items-start gap-2"><span>•</span> provide Platform services;</div>
                  <div className="flex items-start gap-2"><span>•</span> maintain active accounts;</div>
                  <div className="flex items-start gap-2"><span>•</span> operate Platform functionality;</div>
                  <div className="flex items-start gap-2"><span>•</span> satisfy legal obligations;</div>
                  <div className="flex items-start gap-2"><span>•</span> maintain financial/accounting records;</div>
                  <div className="flex items-start gap-2"><span>•</span> prevent fraud;</div>
                  <div className="flex items-start gap-2"><span>•</span> protect Platform security;</div>
                  <div className="flex items-start gap-2"><span>•</span> resolve disputes;</div>
                  <div className="flex items-start gap-2"><span>•</span> enforce applicable agreements and policies.</div>
                </div>
                <p className="font-bold text-[#157A4F] bg-green-50 p-4 rounded-xl inline-block border border-green-100">
                  After account deletion, applicable information is processed according to Sections 20–25 of this Privacy Policy.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Retention Periods</h3>
                <p className="mb-4 font-semibold">The specific retention period for each category of data will depend on:</p>
                <ul className="list-disc pl-8 space-y-2 mb-8 font-medium">
                  <li>the nature of the data;</li>
                  <li>the purpose for which it was collected;</li>
                  <li>applicable legal requirements;</li>
                  <li>accounting and tax obligations;</li>
                  <li>security and fraud-prevention requirements;</li>
                  <li>dispute-resolution requirements.</li>
                </ul>
                
                <div className="space-y-4">
                  <div className="bg-yellow-50 text-yellow-900 p-6 rounded-xl border border-yellow-200 font-mono text-sm leading-relaxed">
                    <p className="mb-2">[Retained as necessary for verification, fraud prevention, dispute resolution and applicable legal/regulatory requirements; deleted when no longer required.]</p>
                    <p className="mb-2">[Retained for the period required by applicable tax, accounting, financial, legal and regulatory requirements.]</p>
                    <p className="mb-4">[Retained for a limited period necessary for security, audit, fraud prevention, dispute resolution and legal compliance.]</p>
                    <p className="font-bold font-sans text-lg border-t border-yellow-200 pt-4 text-center">GOLO should finalize these periods before publication of this Privacy Policy.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 28 */}
          <section>
            <h2 id="28-rights" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 border-gray-100">
              28. Your Privacy Rights
            </h2>
            <div className="text-base md:text-lg text-gray-700 leading-relaxed">
              <p className="text-xl mb-8 font-medium">Subject to applicable law, including the DPDP Act where applicable, you may have rights including:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:p-8">
                <div className="bg-white border-2 border-gray-100 p-6 md:p-8 rounded-2xl hover:border-blue-300 transition-colors">
                  <h3 className="text-2xl font-black text-gray-900 mb-3 text-blue-600">28.1 Access</h3>
                  <p>You may request information regarding the personal data processed by GOLO about you, subject to applicable legal limitations.</p>
                </div>
                
                <div className="bg-white border-2 border-gray-100 p-6 md:p-8 rounded-2xl hover:border-blue-300 transition-colors">
                  <h3 className="text-2xl font-black text-gray-900 mb-3 text-blue-600">28.2 Correction</h3>
                  <p>You may request correction or updating of inaccurate or incomplete personal data.</p>
                </div>
                
                <div className="bg-white border-2 border-gray-100 p-6 md:p-8 rounded-2xl hover:border-blue-300 transition-colors">
                  <h3 className="text-2xl font-black text-gray-900 mb-3 text-blue-600">28.3 Withdrawal of Consent</h3>
                  <p>Where processing is based on consent, you may withdraw consent subject to applicable law and technical limitations.</p>
                </div>
                
                <div className="bg-white border-2 border-gray-100 p-6 md:p-8 rounded-2xl hover:border-blue-300 transition-colors">
                  <h3 className="text-2xl font-black text-gray-900 mb-3 text-blue-600">28.4 Erasure / Account Deletion</h3>
                  <p>You may request deletion of your account and applicable personal data through the account deletion mechanism described in this Privacy Policy.<br/><span className="font-semibold text-gray-500 text-sm mt-2 block">Deletion remains subject to legally required or otherwise permitted retention.</span></p>
                </div>
                
                <div className="bg-white border-2 border-gray-100 p-6 md:p-8 rounded-2xl hover:border-blue-300 transition-colors">
                  <h3 className="text-2xl font-black text-gray-900 mb-3 text-blue-600">28.5 Nomination</h3>
                  <p>Where provided under applicable law, you may nominate another individual to exercise applicable rights in the event of death or incapacity.</p>
                </div>
                
                <div className="bg-white border-2 border-gray-100 p-6 md:p-8 rounded-2xl hover:border-blue-300 transition-colors bg-blue-50/30">
                  <h3 className="text-2xl font-black text-gray-900 mb-3 text-blue-600">28.6 Grievance</h3>
                  <p className="mb-4">You may raise a grievance with GOLO through the contact details provided below.</p>
                  <p className="font-bold text-gray-900 text-sm bg-white p-3 rounded-lg border border-blue-100">To exercise applicable rights, contact:<br/><a href="mailto:GOLO.support@nexaprime.in" className="text-blue-600 text-lg hover:underline mt-1 block">[GOLO.support@nexaprime.in]</a></p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 29 */}
          <section>
            <h2 id="29-children" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 border-gray-100">
              29. Children’s Privacy
            </h2>
            <div className="text-base md:text-lg text-gray-700 leading-relaxed bg-red-50/50 p-6 md:p-8 rounded-2xl border border-red-100">
              <p className="text-xl font-bold text-red-900 mb-4 flex items-center gap-3">
                <span className="text-2xl">🔞</span> GOLO is intended for individuals aged 18 years and above.
              </p>
              <p className="mb-4 font-medium">GOLO does not knowingly intend to provide its services to children below the applicable minimum age.</p>
              <p className="text-gray-600">If GOLO becomes aware that personal data belonging to a minor has been collected without an appropriate legal basis or consent, GOLO may take reasonable steps to delete or otherwise handle such information in accordance with applicable law.</p>
            </div>
          </section>

          {/* Section 30 */}
          <section>
            <h2 id="30-contact" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 border-gray-100">
              30. Grievance Officer / Data Protection Contact
            </h2>
            <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-8">
              <p className="text-xl font-medium">GOLO’s grievance and privacy contact is:</p>
              
              <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 md:p-10 shadow-sm max-w-2xl">
                <p className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-6">Grievance Officer</p>
                <p className="text-3xl font-black mb-6 text-[#157A4F]">[Sukrut A. Nigavekar]</p>
                <div className="space-y-4">
                  <p className="flex flex-col">
                    <span className="text-gray-500 text-sm font-bold uppercase mb-1">Email</span>
                    <a href="mailto:GOLO.support@nexaprime.in" className="text-xl font-bold text-gray-900 hover:text-[#157A4F] transition-colors">[GOLO.support@nexaprime.in]</a>
                  </p>
                  <p className="flex flex-col">
                    <span className="text-gray-500 text-sm font-bold uppercase mb-1 mt-2">Address</span>
                    <span className="text-lg text-gray-700 font-medium">[Mahalaxmi nagar, Kolhapur, Maharashtra, PIN: 416012 — India]</span>
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
                <p className="font-bold text-gray-900 mb-4 text-xl">Users and Merchants may contact the above address for:</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 font-semibold text-gray-600 mb-8">
                  <div className="bg-white px-4 py-3 rounded-lg border border-gray-100 text-center shadow-sm">privacy-related questions</div>
                  <div className="bg-white px-4 py-3 rounded-lg border border-gray-100 text-center shadow-sm">data requests</div>
                  <div className="bg-white px-4 py-3 rounded-lg border border-gray-100 text-center shadow-sm">account deletion issues</div>
                  <div className="bg-white px-4 py-3 rounded-lg border border-gray-100 text-center shadow-sm">correction requests</div>
                  <div className="bg-white px-4 py-3 rounded-lg border border-gray-100 text-center shadow-sm">grievances</div>
                  <div className="bg-white px-4 py-3 rounded-lg border border-gray-100 text-center shadow-sm text-sm flex items-center justify-center">questions concerning this Privacy Policy</div>
                </div>
                <p className="text-gray-800 font-medium mb-2">GOLO will handle grievances and requests in accordance with applicable law and applicable internal procedures.</p>
                <p className="text-gray-500 italic">[GOLO will comply with the timelines prescribed by applicable law and regulations.</p>
              </div>
            </div>
          </section>

          {/* Section 31 */}
          <section>
            <h2 id="31-storage-transfers" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 border-gray-100">
              31. Data Storage and Transfers
            </h2>
            <div className="text-base md:text-lg text-gray-700 leading-relaxed bg-[#F8FAFC] p-6 md:p-8 rounded-2xl border border-gray-200">
              <p className="mb-6 font-medium text-xl">Personal data collected through GOLO may be stored using GOLO’s own infrastructure and third-party service providers engaged to provide Platform functionality.</p>
              
              <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-xl shadow-sm w-fit mb-6 border border-gray-100">
                <span className="font-bold text-gray-500 uppercase tracking-wider text-sm">Current data-storage location:</span>
                <span className="font-black text-2xl text-gray-900">[India]</span>
              </div>
              
              <p className="mb-4 text-gray-600">Where personal data is transferred outside India, GOLO will take applicable measures required under Indian law and applicable contractual/data-protection requirements.</p>
              <p className="bg-yellow-50 text-yellow-800 p-4 rounded-lg font-mono text-sm border border-yellow-200">The exact data locations and international transfer arrangements should be confirmed against GOLO’s production infrastructure before this Policy is published.</p>
            </div>
          </section>

          {/* Section 32 */}
          <section>
            <h2 id="32-sharing" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 border-gray-100">
              32. Data Sharing and Disclosure Summary
            </h2>
            <div className="text-base md:text-lg text-gray-700 leading-relaxed">
              <p className="text-xl font-bold text-gray-900 mb-6">GOLO may share or provide access to personal data only where necessary for legitimate Platform purposes, including:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 list-none mb-10 text-gray-600 font-medium">
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-gray-400"></span> Users and Merchants interacting through Platform functionality;</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-gray-400"></span> payment service providers;</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-gray-400"></span> cloud hosting/media providers;</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-gray-400"></span> authentication providers;</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-gray-400"></span> notification providers;</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-gray-400"></span> analytics/diagnostic providers;</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-gray-400"></span> content moderation providers;</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-gray-400"></span> security/fraud-prevention providers;</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-gray-400"></span> legal, regulatory, government, or law-enforcement authorities where legally required;</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-gray-400"></span> business transferees where legally permitted.</li>
              </ul>
              <div className="bg-[#157A4F] text-white text-2xl font-black p-6 md:p-8 rounded-2xl text-center shadow-lg">
                GOLO does not sell personal data.
              </div>
            </div>
          </section>

          {/* Section 33 */}
          <section>
            <h2 id="33-third-party-links" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 border-gray-100">
              33. Third-Party Links and Services
            </h2>
            <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-4 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
              <p className="font-semibold text-gray-900 text-xl mb-2">GOLO may contain links, integrations, or functionality provided by third parties.</p>
              <p>Third-party services may operate under their own privacy policies and terms.</p>
              <p className="font-bold text-gray-800">GOLO is not responsible for the privacy practices of third-party services outside GOLO’s control.</p>
              <p className="bg-white p-4 rounded-lg border border-gray-100 text-gray-500 italic text-center shadow-sm">Users should review the applicable third-party privacy policies before using those services.</p>
            </div>
          </section>

          {/* Section 34 */}
          <section>
            <h2 id="34-relationship" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 border-gray-100">
              34. Relationship With Other GOLO Policies
            </h2>
            <div className="text-base md:text-lg text-gray-700 leading-relaxed">
              <p className="text-xl font-medium mb-6">This Privacy Policy should be read together with applicable GOLO policies, including:</p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="bg-[#F8FAFC] border border-gray-200 px-5 py-2.5 rounded-xl font-bold text-gray-800 shadow-sm">Terms & Conditions</span>
                <span className="bg-[#F8FAFC] border border-gray-200 px-5 py-2.5 rounded-xl font-bold text-gray-800 shadow-sm">User Conduct Policy</span>
                <span className="bg-[#F8FAFC] border border-gray-200 px-5 py-2.5 rounded-xl font-bold text-gray-800 shadow-sm">Merchant Terms</span>
                <span className="bg-[#F8FAFC] border border-gray-200 px-5 py-2.5 rounded-xl font-bold text-gray-800 shadow-sm">Merchant Agreement</span>
                <span className="bg-[#F8FAFC] border border-gray-200 px-5 py-2.5 rounded-xl font-bold text-gray-800 shadow-sm">Payment Policy</span>
                <span className="bg-[#F8FAFC] border border-gray-200 px-5 py-2.5 rounded-xl font-bold text-gray-800 shadow-sm">Refund Policy</span>
                <span className="bg-[#F8FAFC] border border-gray-200 px-5 py-2.5 rounded-xl font-bold text-gray-800 shadow-sm">Cancellation Policy</span>
                <span className="bg-[#F8FAFC] border border-gray-200 px-5 py-2.5 rounded-xl font-bold text-gray-800 shadow-sm">Credit Note Policy</span>
                <span className="bg-[#F8FAFC] border border-gray-200 px-5 py-2.5 rounded-xl font-bold text-gray-800 shadow-sm">Merchant policies</span>
                <span className="bg-[#F8FAFC] border border-gray-200 px-5 py-2.5 rounded-xl font-bold text-gray-800 shadow-sm">other applicable Platform policies</span>
              </div>
              <p className="bg-blue-50 text-blue-900 p-6 rounded-2xl border border-blue-100 font-medium">
                Where another policy describes a specific GOLO service, this Privacy Policy governs how 
                personal data associated with that service is collected, used, stored, shared, and protected.
              </p>
            </div>
          </section>

          {/* Section 35 */}
          <section>
            <h2 id="35-changes" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 border-gray-100">
              35. Changes to This Privacy Policy
            </h2>
            <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-8">
              <p className="text-xl font-medium">GOLO may update this Privacy Policy from time to time to reflect:</p>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 font-semibold text-gray-600 mb-8">
                <li className="bg-gray-50 border border-gray-100 p-4 rounded-xl text-center">changes in Platform functionality</li>
                <li className="bg-gray-50 border border-gray-100 p-4 rounded-xl text-center">changes in data-processing practices</li>
                <li className="bg-gray-50 border border-gray-100 p-4 rounded-xl text-center">changes in third-party services</li>
                <li className="bg-gray-50 border border-gray-100 p-4 rounded-xl text-center">changes in business structure</li>
                <li className="bg-gray-50 border border-gray-100 p-4 rounded-xl text-center">changes in applicable law</li>
                <li className="bg-gray-50 border border-gray-100 p-4 rounded-xl text-center">security or operational requirements</li>
              </ul>
              <div className="bg-[#F8FAFC] p-6 md:p-8 rounded-3xl border border-gray-200 text-center">
                <p className="font-bold text-gray-900 mb-6 text-xl">The Last Updated date will be revised when this Policy is materially updated.</p>
                <p className="text-gray-600 mb-4">Where required, GOLO may provide notice of material changes through:</p>
                <div className="flex flex-wrap justify-center gap-3 font-medium text-gray-500">
                  <span className="bg-white px-4 py-2 rounded-lg border border-gray-100 shadow-sm">the Platform</span>
                  <span className="bg-white px-4 py-2 rounded-lg border border-gray-100 shadow-sm">Website</span>
                  <span className="bg-white px-4 py-2 rounded-lg border border-gray-100 shadow-sm">Mobile Application</span>
                  <span className="bg-white px-4 py-2 rounded-lg border border-gray-100 shadow-sm">email</span>
                  <span className="bg-white px-4 py-2 rounded-lg border border-gray-100 shadow-sm">push notification</span>
                  <span className="bg-white px-4 py-2 rounded-lg border border-gray-100 shadow-sm">other appropriate communication methods</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 36 */}
          <section>
            <h2 id="36-contact-us" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 border-gray-100">
              36. Contact Us
            </h2>
            <div className="text-base md:text-lg text-gray-700 leading-relaxed bg-[#F8FAFC] border border-gray-200 rounded-2xl md:rounded-[32px] p-6 md:p-14 shadow-sm">
              <p className="text-2xl font-bold text-gray-900 mb-8">For questions regarding this Privacy Policy or GOLO’s privacy practices:</p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl font-black text-[#157A4F] tracking-tight mb-2">GOLO</h3>
                  <p className="text-gray-600 font-medium">Operated by: <span className="text-gray-900 text-xl font-bold block mt-1">Sukrut Atul Nigavekar</span></p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 md:p-8 border-t border-gray-200 pt-8">
                  <div>
                    <p className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-2">Privacy / Support Email</p>
                    <a href="mailto:GOLO.support@nexaprime.in" className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors block">[GOLO.support@nexaprime.in]</a>
                  </div>
                  <div>
                    <p className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-2">Registered Office</p>
                    <p className="text-lg text-gray-900 font-medium">[Mahalaxmi nagar, Kolhapur, Maharashtra, PIN: 416012 — India]</p>
                  </div>
                </div>
              </div>
            </div>
          </section>


          
        </div>
      </main>

      {/* Modern minimal footer */}
      <div className="mt-12 text-center text-sm text-gray-500 pb-12">
        <p className="uppercase tracking-widest font-semibold">End of GOLO Privacy Policy — Individual Operator Version</p>
      </div>
    </div>
  );
}
