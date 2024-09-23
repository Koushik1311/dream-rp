import { CompanyLinks } from "@/constants/company-link";
import { LegalLinks } from "@/constants/legal-link";
import { ProductLinks } from "@/constants/product-link";
import Link from "next/link";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-24">
      <div className="container pt-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <p className="text-2xl font-bold">DreamRP</p>
            <p className="mt-4">
              The Next Generation of Interactive Storytelling
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-12 mt-8 md:mt-0">
            {/* Product */}
            <ul className="space-y-2">
              <li className="font-semibold">Product</li>
              {ProductLinks.map((plink, index) => (
                <li key={index}>
                  <Link
                    href={plink.uri}
                    className="font-medium text-gray-700 hover:text-gray-950"
                  >
                    {plink.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Company */}
            <ul className="space-y-2">
              <li className="font-semibold">Company</li>
              {CompanyLinks.map((clink, index) => (
                <li key={index}>
                  <Link
                    href={clink.uri}
                    className="font-medium text-gray-700 hover:text-gray-950"
                  >
                    {clink.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Legal */}
            <ul className="space-y-2">
              <li className="font-semibold">Legal</li>
              {LegalLinks.map((llink, index) => (
                <li key={index}>
                  <Link
                    href={llink.uri}
                    className="font-medium text-gray-700 hover:text-gray-950"
                  >
                    {llink.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex items-center justify-between border-t mt-6 border-gray-300 py-4 px-2">
          <p className="text-xs font-medium text-gray-500">
            &#169; DreamRP Inc
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="https://www.linkedin.com/company/dreamrp/"
              target="_blank"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaLinkedinIn />
            </Link>

            <Link
              href="https://x.com/dreamrpofficial"
              target="_blank"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaXTwitter />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
