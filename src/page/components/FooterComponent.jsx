import { useState } from "react";

const FooterComponent = () => {
  const [copySuccess, setCopySuccess] = useState("");

  const code = `
      <footer class=" bg-[#FAFAFA] border-t border-[#EBEBEB]  text-gray-800 dark:bg-[#0A0A0A] dark:border-[#252525] dark:text-white">
  <div class="container mx-auto flex flex-col md:flex-row justify-between items-center p-6">
    <div class="text-center md:text-left">
      <p class="text-lg">&copy; 2024 My App. All rights reserved.</p>
    </div>
    <div class="flex space-x-4 mt-4 md:mt-0">
      <a href="/privacy" class="hover:text-blue-400 transition">Privacy Policy</a>
      <a href="/terms" class="hover:text-blue-400 transition">Terms of Service</a>
      <a href="/contact" class="hover:text-blue-400 transition">Contact Us</a>
    </div>
  </div>
</footer>
  `;

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(
      () => {
        setCopySuccess("Copied to clipboard!");
        setTimeout(() => setCopySuccess(""), 2000); // Clear message after 2 seconds
      },
      () => {
        setCopySuccess("Failed to copy!");
      }
    );
  };

  return (
    <div className="container mx-auto p-8 bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-4">Footer Component</h1>
      <p className="text-lg mb-6">
        This is a responsive footer designed for your application.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Preview</h2>

      <output>
      <footer className=" bg-[#FAFAFA] border-t border-[#EBEBEB]  text-gray-800 dark:bg-[#0A0A0A] dark:border-[#252525] dark:text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-6">
            <div className="text-center md:text-left">
              <p className="text-lg">
                &copy; 2024 My App. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-400 transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                Contact Us
              </a>
            </div>
          </div>
        </footer>
      </output>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Usage</h2>

<div className="flex items-center mb-4">
  <button
    onClick={handleCopy}
    className="px-6 py-2  flex rounded-lg font-semibold  bg-white text-black  dark:border-[#252525] border-[#EBEBEB] dark:bg-[#0A0A0A] border  dark:text-white"
    >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 17h6m2-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v8m10 0v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2"
      />
    </svg>
    Copy Code
  </button>
  {copySuccess && (
    <span 
    className="ml-4 text-green-500 font-semibold"
    >
      {copySuccess}
    </span>
  )}
</div>

<pre 
className="bg-[#FAFAFA] dark:bg-[#0A0A0A] border dark:border-[#252525] border-[#EBEBEB] p-4 rounded-lg overflow-x-auto"
>
  <code>{code}</code>
</pre>
</div>
  );
};

export default FooterComponent;
