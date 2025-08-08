"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";

const faqs = [
  {
    question: "What is Giga City?",
    answer:
      "Giga City is a modern mixed-use development combining residential, commercial, and recreational spaces designed for sustainable urban living.",
  },
  {
    question: "Where is Giga City located?",
    answer:
      "Giga City is located in DHA Phase 2, Islamabad, offering prime accessibility to major highways and city landmarks.",
  },
  {
    question: "What payment plans are available?",
    answer:
      "We offer flexible payment plans tailored to fit different budgets, including installment options.",
  },
  {
    question: "Are the investments secure?",
    answer:
      "Yes, Giga Group ensures all legal protections and transparency to safeguard your investments.",
  },
  {
    question: "How can I schedule a visit or get more info?",
    answer:
      "You can contact us via the Contact Form on this site or call our sales office for scheduling visits and inquiries.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white/70 to-green-100/70 backdrop-blur-lg">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold text-green-800 mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white/40 backdrop-blur-md rounded-2xl border border-white/30 shadow-md"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  aria-expanded={isOpen}
                  className="flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 rounded-2xl hover:bg-green-50 transition cursor-pointer"
                >
                  <span className="text-lg font-semibold text-green-800">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-green-600 flex-shrink-0"
                    aria-hidden="true"
                  >
                    <FiPlus size={24} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { height: "auto", opacity: 1 },
                        collapsed: { height: 0, opacity: 0 },
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="px-6 pb-6 text-gray-700 text-sm leading-relaxed overflow-hidden"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
