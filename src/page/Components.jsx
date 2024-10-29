import componentsData from "../data/components.json";

const Breadcrumb = () => {
  return (
    <nav className="flex items-center mb-4" aria-label="Breadcrumb">
      <ol className="list-none p-0 flex">
        <li>
          <a href="/" className="text-black dark:text-white">
            Home
          </a>
        </li>
        <li className="mx-2">/</li>
        <li>Components</li>
      </ol>
    </nav>
  );
};

// Utility function to filter out duplicate components
const getUniqueComponents = (components) => {
  const uniqueIds = new Set();
  return components.filter((component) => {
    if (!uniqueIds.has(component.id)) {
      uniqueIds.add(component.id);
      return true; // Keep this component
    }
    return false; // Skip duplicates
  });
};

const Components = () => {
  const uniqueComponents = getUniqueComponents(componentsData); // Get unique components

  return (
    <div className="container mx-auto p-8 bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <Breadcrumb />
      <h1 className="text-4xl font-bold mb-4 text-center">
        Sajilo UI Components 🚀
      </h1>
      <p className="text-lg mb-6 text-center">
        Discover free, customizable Tailwind CSS components for building
        beautiful applications.
      </p>

      <h2 className="text-3xl font-semibold mt-8 mb-4 text-center">
        Available Components
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {uniqueComponents.map((component) => (
          <li key={component.id} className="relative group">
            <a
              href={`/component/${component.id}`}
              className="p-6 border dark:border-[#252525] border-[#EBEBEB] rounded-lg transition-all duration-150 hover:shadow-md shadow-slate-50 dark:shadow-slate-900 bg-[#FAFAFA] dark:bg-[#0A0A0A] flex flex-col justify-between h-full"
            >
              <h3 className="text-2xl font-semibold mb-2">{component.id}</h3>
              <p className="text-lg mb-4">{component.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Components;
