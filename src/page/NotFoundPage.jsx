// src/components/NotFoundPage.jsx

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-xl">Oops! The page you are looking for does not exist.</p>
      <a href="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Go Back to Home
      </a>
    </div>
  );
};

export default NotFoundPage;