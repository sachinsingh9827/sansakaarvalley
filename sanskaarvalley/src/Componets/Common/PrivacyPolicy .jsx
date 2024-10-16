import React from "react";
import ContactUs from "../ContactUs/ContactUs";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-700 text-lg">
          This privacy policy describes how Sanskaar Valley School ("we", "us", or "our") collects, uses, and protects your information when you use our website.
        </p>
      </div>

      {/* Information Collection Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <p className="text-gray-700">
          We collect various types of information, including:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Personal information you provide directly (name, email, contact details, etc.).</li>
          <li>Technical data (IP address, browser type, etc.).</li>
          <li>Cookies and usage data to improve your browsing experience.</li>
        </ul>
      </section>

      {/* How We Use the Information Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <p className="text-gray-700">
          We use the collected information for various purposes, such as:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Providing and maintaining our services.</li>
          <li>Notifying you about changes to our website.</li>
          <li>Personalizing your experience on the website.</li>
          <li>Improving our services and features based on user feedback.</li>
          <li>Ensuring compliance with legal obligations.</li>
        </ul>
      </section>

      {/* Sharing Information Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Sharing Your Information</h2>
        <p className="text-gray-700">
          We do not share your personal information with third parties except:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>When required by law or to comply with legal processes.</li>
          <li>To protect the rights and safety of Sanskaar Valley School and its users.</li>
          <li>With service providers who assist us in managing the website (under strict confidentiality agreements).</li>
        </ul>
      </section>

      {/* Cookies Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Cookies and Tracking Technologies</h2>
        <p className="text-gray-700">
          Our website uses cookies to improve your browsing experience. Cookies are small files stored on your device that allow us to track your activity on our site. You may choose to disable cookies through your browser settings, but this may affect the functionality of the website.
        </p>
      </section>

      {/* Data Security Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
        <p className="text-gray-700">
          We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, or disclosure. However, please note that no method of transmission over the internet is 100% secure.
        </p>
      </section>

      {/* Changes to Privacy Policy Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Changes to This Privacy Policy</h2>
        <p className="text-gray-700">
          We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page, and we encourage you to review the policy periodically to stay informed.
        </p>
      </section>

      {/* Contact Information Section */}
      <section className="text-center mt-8">
      <section className="text-center mt-8">
       <ContactUs/>
      </section>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
