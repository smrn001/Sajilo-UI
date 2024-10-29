const Breadcrumb = () => {
  return (
    <nav className="flex items-center mb-4" aria-label="Breadcrumb">
      <ol className="list-none p-0 flex">
        <li>
          <a href="/" className="text-gray-500 dark:text-gray-400">
            Home
          </a>
        </li>
        <li className="mx-2  text-gray-500 dark:text-gray-400">/</li>
        <li className="text-gray-500 dark:text-gray-400">About</li>
      </ol>
    </nav>
  );
};

const About = () => {
  return (
    <div className="container mx-auto p-8 max-w-5xl bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <Breadcrumb /> {/* Add the Breadcrumb component here */}
      <h1 className="text-4xl font-bold mb-4">About Sajilo UI 🚀</h1>
      <p className="text-lg mb-6">
        Sajilo UI is a free Tailwind CSS component library that simplifies your
        development process, providing high-quality, customizable components for
        beautiful and responsive websites.
      </p>
      <h2 className="text-3xl font-semibold mt-8 mb-4">Our Goals</h2>
      <ul className="list-disc ml-6 mb-8">
        <li>Provide a wide range of components for diverse use cases.</li>
        <li>Ensure ease of integration into your projects.</li>
        <li>Foster community contributions and collaboration.</li>
        <li>Continuously improve based on user feedback.</li>
      </ul>
      <h2 className="text-3xl font-semibold mt-8 mb-4">
        Why Choose Sajilo UI?
      </h2>
      <ul className="list-disc ml-6 mb-8">
        <li>Free, open-source components that save time.</li>
        <li>Modern, clean design with Tailwind CSS.</li>
        <li>Responsive components for all devices.</li>
        <li>A supportive developer community.</li>
      </ul>
      <h2 className="text-3xl font-semibold mt-8 mb-4">Get Involved</h2>
      <p className="mb-4">
        Explore Sajilo UI, use our components, and contribute! Your
        input—whether fixing bugs, adding components, or improving
        documentation—is invaluable.
      </p>
      <h2 className="text-3xl font-semibold mt-8 mb-4">Stay Connected</h2>
      <p className="mb-4">
        Follow us on social media for updates on new releases:
      </p>
      <ul className="list-disc ml-6 mb-8">
        <li>
          <a
            href="https://github.com/sajiloui"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            GitHub
          </a>
        </li>
      </ul>
      <h2 className="text-3xl font-semibold mt-8 mb-4">Thank You!</h2>
      <p className="mb-4">
        Thank you for learning about Sajilo UI! We hope our components enhance
        your development experience.
      </p>
    </div>
  );
};

export default About;
