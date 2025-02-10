import Image from "next/image";

 function Homepage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-500 py-20 flex justify-center flex-col">
        {/* ... (Hero section code remains the same) */}
        <h1 className="text-5xl text-white text-center font-bold">Welcome to Chat-App</h1>
        <button className=" mx-auto mt-10 bg-pink-700 hover:bg-pink-800 text-white py-2 px-4 text-md border rounded-lg">Get Started</button>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"> {/* Added lg:grid-cols-4 */}
            {/* ... (Feature cards code remains the same) */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition duration-300">
              {/* <Image src="/images/video-calls.svg" alt="Video Calls" width={64} height={64} className="mx-auto mb-4" /> */}
              <h3 className="text-xl font-medium mb-2 text-gray-800">Video Calls</h3>
              <p className="text-gray-600">High-quality video calls for face-to-face communication.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition duration-300">
              {/* <Image src="/images/file-sharing.svg" alt="File Sharing" width={64} height={64} className="mx-auto mb-4" /> */}
              <h3 className="text-xl font-medium mb-2 text-gray-800">File Sharing</h3>
              <p className="text-gray-600">Easily share documents, photos, and videos.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition duration-300">
              {/* <Image src="/images/video-calls.svg" alt="Video Calls" width={64} height={64} className="mx-auto mb-4" /> */}
              <h3 className="text-xl font-medium mb-2 text-gray-800">Group Chat</h3>
              <p className="text-gray-600">High-quality Group chat for communication.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition duration-300">
              {/* <Image src="/images/file-sharing.svg" alt="File Sharing" width={64} height={64} className="mx-auto mb-4" /> */}
              <h3 className="text-xl font-medium mb-2 text-gray-800">Connecting People</h3>
              <p className="text-gray-600">It helps you to connect with people of your choice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-medium mb-4 text-gray-800">Basic</h3>
              <p className="text-4xl font-bold mb-4 text-gray-800">$0</p>
              <ul className="text-gray-600 mb-6">
                <li>Unlimited messaging</li>
                <li>Limited group chats</li>
              </ul>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 transition duration-300">
                Sign Up
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-medium mb-4 text-gray-800">Premium</h3>
              <p className="text-4xl font-bold mb-4 text-gray-800">$9.99/month</p>
              <ul className="text-gray-600 mb-6">
                <li>Unlimited messaging</li>
                <li>Unlimited group chats</li>
                <li>Video calls</li>
                <li>File sharing</li>
              </ul>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 transition duration-300">
                Get Started
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-medium mb-4 text-gray-800">Enterprise</h3>
              <p className="text-4xl font-bold mb-4 text-gray-800">Contact Us</p>
              <p className="text-gray-600 mb-6">Custom solutions for your business.</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 transition duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials Section (Optional) */}
      <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Testimonials</h2>
        {/* Add your testimonials here */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600">"Great app! I love it!" - John Doe</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600">"Best chat app ever!" - Jane Smith</p>
            </div>
        </div>

      </div>
    </section>
    </div>
  );
}

export default Homepage

export const metadata={
  title:'Home - Chat-App',
  description: 'Chat-App helps you to connect with people of your choice'
}
