import React from "react";
import ContactUs from "../ContactUs/ContactUs";

const TermsAndConditions = () => {
  return (
    <div>
    <div className="container mx-auto px-4 py-12">
      
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl text-gray  font-semibold font-bold mb-6">Terms and Conditions</h1>
        <p className="text-gray-700 text-lg text-gray  font-semibold font-bold">
          Please read these terms and conditions carefully before using our website.
        </p>
      </div>

      {/* Introduction Section */}
      <section className="mb-8">
        <h2 className=" text-gray  font-monserrat mb-4">1. Introduction</h2>
        <p className="text-gray  font-semibold ">
          Welcome to Sanskaar Valley School's website. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions of use. If you do not agree to these terms, please do not use our website.
        </p>
      </section>

      {/* License Section */}
      <section className="mb-8">
        <h2 className="text-gray  font-semibold mb-4">2. License to Use the Website</h2>
        <p className="text-gray  font-semibold">
          Sanskaar Valley School grants you a limited, non-exclusive, non-transferable, and revocable license to access and use the website strictly in accordance with these terms of use.
        </p>
      </section>

      {/* User Conduct Section */}
      <section className="mb-8">
        <h2 className="text-gray  font-semibold mb-4">3. User Conduct</h2>
        <p className="text-gray  font-semibold">
          As a user of this website, you agree not to:
        </p>
        <ul className="list-disc list-inside text-gray  font-semibold">
          <li>Use the site for any illegal purposes.</li>
          <li>Upload any harmful or malicious content.</li>
          <li>Attempt to gain unauthorized access to any portion of the site.</li>
          <li>Violate any applicable local, state, or international law.</li>
        </ul>
      </section>

      {/* Intellectual Property Section */}
      <section className="mb-8">
        <h2 className="text-gray  font-semibold mb-4">4. Intellectual Property</h2>
        <p className="text-gray  font-semibold">
          All content on this website, including text, images, and logos, is the intellectual property of Sanskaar Valley School. You may not reproduce, distribute, or use any part of this website for commercial purposes without explicit written permission.
        </p>
      </section>

      {/* Limitation of Liability Section */}
      <section className="mb-8">
        <h2 className="text-gray  font-semibold mb-4">5. Limitation of Liability</h2>
        <p className="text-gray  font-semibold">
          Sanskaar Valley School is not liable for any direct, indirect, incidental, or consequential damages that may arise from the use or inability to use the website, even if we have been advised of the possibility of such damages.
        </p>
      </section>

      {/* Changes to the Terms Section */}
      <section className="mb-8">
        <h2 className="text-gray  font-semiboldmb-4">6. Changes to the Terms</h2>
        <p className="text-gray  font-semibold">
          We reserve the right to modify or replace these terms and conditions at any time. Your continued use of the website following the posting of any changes constitutes acceptance of those changes.
        </p>
      </section>
</div>
      {/* Contact Information Section */}
      <section className="text-center mt-8">
       <ContactUs/>
      </section>
    </div>
  );
};

export default TermsAndConditions;
