import React, { useState } from "react";
import ContactUs from "../ContactUs/ContactUs";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Sanskaar Valley School known for?",
      answer:
        "Sanskaar Valley School is renowned for its commitment to holistic education, focusing on both academic excellence and extracurricular activities.",
    },
    {
      question: "How do I apply for admission?",
      answer:
        "You can apply for admission by visiting the admissions page on our website and filling out the online application form.",
    },
    {
      question: "What extracurricular activities are offered?",
      answer:
        "We offer a wide range of extracurricular activities, including sports, music, art, drama, debate, and leadership programs.",
    },
    {
      question: "How do I contact the school for more information?",
      answer:
        "You can contact the school via email at info@sanskaarvalleyschool.com or call us at +91 123-456-7890.",
    },
    {
      question: "What is the student-to-teacher ratio?",
      answer:
        "We maintain a low student-to-teacher ratio to ensure personalized attention and support for each student.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
        <p className="font-montserrat text-gray text-xl">
          Find answers to common questions about Sanskaar Valley School. If you don't find the answer you're looking for, feel free to contact us.
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-6 bg-white rounded-lg shadow-lg p-6 transition-shadow duration-300 hover:shadow-md cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold font-montserrat text-gray">
                {faq.question}
              </h3>
              <span className="text-primary text-2xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <p className="mt-4 text-gray font-montserrat text-sky-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
       
      <section className="text-center mt-8">
       <ContactUs/>
      </section>
      </div>
    </div>
  );
};

export default FAQ;
