import { useParams, useNavigate } from "react-router-dom";
import componentsData from "../../data/components.json"; // Ensure your JSON path is correct
import { useState, useEffect } from "react";

const ComponentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [components, setComponents] = useState([]);
  const [copiedStates, setCopiedStates] = useState({}); // State to manage copy status for each component

  useEffect(() => {
    // Find the components with matching IDs in the JSON data
    const foundComponents = componentsData.filter(
      (comp) => comp.id === id || comp.id === "button1" || comp.id === "button2"
    );

    if (foundComponents.length === 0) {
      // Redirect to Not Found page if no components exist
      navigate("/not-found"); // Replace with your actual Not Found route
    } else {
      setComponents(foundComponents);
      // Initialize copiedStates for each component to false
      const initialCopiedStates = {};
      foundComponents.forEach(comp => {
        initialCopiedStates[comp.id] = false;
      });
      setCopiedStates(initialCopiedStates);
    }
  }, [id, navigate]);

  if (components.length === 0) return <div>Loading...</div>;

  const handleCopy = (code, componentId) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopiedStates((prev) => ({
          ...prev,
          [componentId]: true, // Set the copied state for the specific component
        }));
        setTimeout(() => {
          setCopiedStates((prev) => ({
            ...prev,
            [componentId]: false, // Reset after 2 seconds
          }));
        }, 2000);
      })
      .catch(() => {
        setCopiedStates((prev) => ({
          ...prev,
          [componentId]: false, // Set copied state to false if error
        }));
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
          <li className="text-gray-500 dark:text-gray-400">
            {components[0].id}
          </li>
        </ol>
      </nav>
    );
  };

  return (
<<<<<<< HEAD
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

      <pre className="bg-[#FAFAFA] dark:bg-[#18181a] dark:text-gray-300 border dark:border-[#252525] border-[#EBEBEB] p-4 rounded-lg overflow-x-auto">
        <code>{code}</code>
      </pre>
=======
    <div className="container flex flex-col items-start mx-auto p-8 bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <Breadcrumb />
      <div className="flex flex-col space-y-6"> {/* Ensure full width */}
        {components.map((component) => (
          <div key={component.id} className="flex flex-col w-full"> {/* Full width for each component */}
            <h3 className="text-xl font-semibold mb-2">{component.title} preview</h3>
            <output dangerouslySetInnerHTML={{ __html: component.code }} />
            <button
              onClick={() => handleCopy(component.code, component.id)} // Pass component ID to handleCopy
              className="bg-white my-3 dark:bg-black text-black dark:text-white px-6 py-2 border dark:border-[#252525] border-[#EBEBEB] w-40 rounded-lg font-semibold"
            >
              {copiedStates[component.id] ? "Copied!" : "Copy Code"}
            </button>
            <pre className="bg-[#FAFAFA] dark:bg-[#0A0A0A] border dark:border-[#252525] border-[#EBEBEB] p-4 rounded-lg overflow-x-auto">
              <code>{component.code}</code>
            </pre>
          </div>
        ))}
      </div>
>>>>>>> 025f935 (Refactor component imports and remove unused ButtonComponent)
    </div>
  );
};

export default ComponentPage;