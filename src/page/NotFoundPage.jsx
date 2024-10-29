const NotFoundPage = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 px-4">
        <h1 className="text-4xl sm:text-6xl font-bold">404</h1>
        <p className="mt-4 text-lg sm:text-xl text-center">
          Oops! The page you are looking for does not exist.
        </p>
        <a 
          href="/" 
          className="mt-5 px-6 py-3 text-base sm:text-lg rounded-lg font-semibold bg-white text-black border border-[#EBEBEB] dark:bg-[#0A0A0A] dark:border-[#252525] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300"
        >
          Go Back to Home
        </a>
      </div>
    );
  };
  
  export default NotFoundPage;