import React from 'react';

const WelcomePage = () => {
  return (
    <>
    <div className="flex items-center justify-center min-h-screen dark:bg-background">
      <div className="max-w-4xl w-full mx-4 md:mx-auto flex flex-col md:flex-row">
        {/* Left Section - Description */}
        <div className="md:flex-1 p-8 border border-green-300 rounded">
          <h1 className="text-4xl font-bold mb-4 dark:text-green-400">Welcome to Summarizer</h1>
         
          <p className="dark:text-green-700">
            Summarizer is your go-to tool for efficiently extracting key information from lengthy texts.
            Whether you need a concise summary of an article, a rephrased version of a paragraph, or the ability to extract relevant details,
            Summarizer simplifies the process for you. Revolutionize the way you engage with content and make information more accessible with Summarizer.
          </p>
        </div>

        {/* Right Section - Google Sign Up Button */}
        <div className="md:flex-1 p-8 dark:bg-background rounded border border-gray-300 mt-4 md:mt-0 md:ml-4">
          <h2 className="dark:text-green-400 text-2xl font-semibold mb-4">Sign up with Google</h2>
          <button
            className="dark:bg-green-500 dark:text-green-200 rounded-full py-2 px-4 mb-4 inline-flex items-center justify-center"
            // onClick={() => {
            //   // Handle Google sign-up action
            // }}
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12h18M3 6h18m-9 6v6m-6-6v6m12-6v6"
              ></path>
            </svg>
            Sign up with Google
          </button>

          <p className="dark:text-green-700 text-sm">By signing up, you agree to our Terms of Service and Privacy Policy.</p>
        </div>
        
      </div>
        
      
    </div>
    <div className="mt-4 w-full lg:w-4/5 mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Sample Demo Video</h3>
        <div className="relative aspect-w-16 aspect-h-9">
          {/* Replace the video source with your actual video file */}
          <video className="w-full h-full rounded-lg" controls>
            <source src="your-video-file.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
