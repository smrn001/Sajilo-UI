import { useParams, useNavigate } from "react-router-dom";
import componentsData from "../../data/components.json";
import { useState, useEffect } from "react";

const ComponentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [component, setComponent] = useState(null);

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
    navigator.clipboard.writeText(code).then(
      () => alert("Code copied to clipboard!"),
      () => alert("Failed to copy code.")
    );
  };

  return (
    <div className="container mx-auto p-8 bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Preview</h2>

      <output dangerouslySetInnerHTML={{ __html: code }} />

      <h2 className="text-2xl font-semibold mt-8 mb-4">Usage</h2>
      <button
        onClick={handleCopy}
        className="px-6 py-2 mb-3 flex rounded-lg font-semibold  bg-white text-black  dark:border-[#252525] border-[#EBEBEB] dark:bg-[#0A0A0A] border  dark:text-white"
      >
        Copy Code
      </button>

      <pre className="bg-[#FAFAFA] dark:bg-[#0A0A0A] border dark:border-[#252525] border-[#EBEBEB] p-4 rounded-lg overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default ComponentPage;
