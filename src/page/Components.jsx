const Components = () => {
  return (
    <div className="container mx-auto p-8 bg-white dark:bg-black text-gray-900 dark:text-gray-100 rounded-lg">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Sajilo UI Components 🚀
      </h1>
      <p className="text-lg mb-6 text-center">
        Discover free, customizable Tailwind CSS components for building
        beautiful applications. Here are the available components and their
        descriptions.
      </p>

      <h2 className="text-3xl font-semibold mt-8 mb-4 text-center">
        Available Components
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {componentsList.map((component) => (
          <li
            key={component.name}
            className="p-6 border dark:border-[#252525] border-[#EBEBEB] rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg bg-gray-50 dark:bg-[#0A0A0A] flex flex-col justify-between"
          >
            <a href={component.link} className="flex flex-col h-full">
              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  {component.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {component.description}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// List of components with their names, descriptions, and links
const componentsList = [
  {
    name: "Header",
    description: "A responsive navigation header for your application.",
    link: "/components/header",
  },
  {
    name: "Footer",
    description: "A footer component to display site information and links.",
    link: "/components/footer",
  },
  {
    name: "Buttons",
    description: "Stylish buttons with various sizes and styles.",
    link: "/components/buttons",
  },
  {
    name: "Cards",
    description:
      "Information cards for displaying content in a visually appealing way.",
    link: "/components/cards",
  },
  {
    name: "Modals",
    description: "Popup modals for displaying important information or forms.",
    link: "/components/modals",
  },
  {
    name: "Alerts",
    description:
      "Notification alerts to inform users of important actions or statuses.",
    link: "/components/alerts",
  },
  // Add more components as needed
];

export default Components;
