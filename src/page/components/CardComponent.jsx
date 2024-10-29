import { useState } from "react";

const CardComponent = () => {
  const [copySuccess, setCopySuccess] = useState("");

  const code = `
<article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
  <img
    alt=""
    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    class="h-56 w-full object-cover"
  />
  
  <div class="bg-white p-4 sm:p-6">
    <time datetime="2022-10-10" class="block text-xs text-gray-500">10th Oct 2022</time>
    
    <a href="#">
      <h3 class="mt-0.5 text-lg text-gray-900">How to position your furniture for positivity</h3>
    </a>

    <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
      pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
      mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
      dignissimos. Molestias explicabo corporis voluptatem?
    </p>
  </div>
</article>
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

  const cardsData = [
    {
      title: "How to position your furniture for positivity",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
      date: "10th Oct 2022",
      imgSrc:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", // Placeholder image URL
    },
    // Additional cards can be added here
  ];

  return (
    <div className="container mx-auto p-8 bg-white dark:bg-black text-gray-900 dark:text-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-4">Custom Card Component</h1>
      <p className="text-lg mb-6">
        Explore this professional and customizable card component designed for
        modern applications.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Preview</h2>

      {/* Grid Layout for Cards */}
      <div className="grid gap-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
        {cardsData.map((card, index) => (
          <article
            key={index}
            className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
          >
            <img
              alt=""
              src={card.imgSrc}
              className="h-56 w-full object-cover"
            />

            <div className="bg-white p-4 sm:p-6">
              <time
                dateTime="2022-10-10"
                className="block text-xs text-gray-500"
              >
                {card.date}
              </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg text-gray-900">{card.title}</h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm text-gray-500">
                {card.description}
              </p>
            </div>
          </article>
        ))}
      </div>

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

export default CardComponent;
