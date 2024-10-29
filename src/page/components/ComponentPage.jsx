import { useParams, useNavigate } from "react-router-dom";
import componentsData from "../../data/components.json";
import { useState, useEffect } from "react";


const ComponentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [component, setComponent] = useState(null);
  const [copied, setCopied] = useState(false); // State to manage copy status

  useEffect(() => {
    // Find the component with the matching ID in the JSON data
    const foundComponent = componentsData.find((comp) => comp.id === id);
    if (!foundComponent) {
      // Redirect to Not Found page if component does not exist
      navigate("/not-found"); // Replace with your actual Not Found route
    } else {
      setComponent(foundComponent);
    }
  }, [id, navigate]);

  if (!component) return <div>Loading...</div>;

  const { title, code } = component;

  const handleCopy = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied(true); // Set copied state to true
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      })
      .catch(() => {
        setCopied(false); // Set copied state to false
      });
  };

  const Breadcrumb = () => {
    return (
      <nav className="flex items-center mb-4" aria-label="Breadcrumb">
        <ol className="list-none p-0 flex">
          <li>
            <a href="/" className="text-gray-500 dark:text-gray-400">
              Home
            </a>
          </li>
          <li className="mx-2">/</li>
          <li>
            <a href="/components" className="text-gray-500 dark:text-gray-400">
              Components
            </a>
          </li>
          <li className="mx-2">/</li>
          <li className="text-gray-500 dark:text-gray-400">{title}</li>
        </ol>
      </nav>
    );
  };
  

  return (
    <div className="container mx-auto p-8 bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <Breadcrumb /> {/* Add the Breadcrumb component here */}
      
      <h1 className="md:text-4xl text-3xl font-bold mb-4">{title}</h1>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Preview</h2>

      <output dangerouslySetInnerHTML={{ __html: code }} />

      <h2 className="text-2xl font-semibold mt-8 mb-4">Usage</h2>
      <button
        onClick={handleCopy}
        className="bg-white mb-3 dark:bg-black text-black dark:text-white px-6 py-2 border dark:border-[#252525] border-[#EBEBEB] rounded-lg font-semibold"
      >
        {copied ? "Copied!" : "Copy Code"}
      </button>

      <pre className="bg-[#FAFAFA] dark:bg-[#0A0A0A] border dark:border-[#252525] border-[#EBEBEB] p-4 rounded-lg overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default ComponentPage;