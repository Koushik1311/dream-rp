"use client";

import { FAQData } from "@/constants/faq";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import SectionHeader from "../global/SectionHeader";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto mt-24">
      <div className="flex justify-center items-center mx-auto text-center">
        <SectionHeader>Frequently Asked Questions</SectionHeader>
      </div>
      <div className="mt-12">
        {FAQData.map((faq, index) => (
          <div key={index} className="overflow-hidden border-b">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-4 font-medium text-lg focus:outline-none"
            >
              <p className="text-left">{faq.question}</p>
              <motion.div
                initial={false}
                animate={{
                  rotate: activeIndex === index ? 180 : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>

            <motion.div
              initial={false}
              animate={{ height: activeIndex === index ? "auto" : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-4 pb-4 text-gray-700 leading-loose">
                {faq.answer}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
