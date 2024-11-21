
import Image from 'next/image';

const ContactForm = () => {
  return (
    <section className="bg-white py-10 justify-center mt-0">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        
        <div className=' text-center justify-center'>
          <h1 className="text-4xl font-thin text-gray-300 mb-8 text-center">Contact Us</h1>
          <form className="space-y-6 ml-28" >
        
            <input
              type="text"
              placeholder="Name"
              className="w-full p-4 border border-gray-500  bg-gray-100 rounded-lg focus:outline-none hover:border-blue-400 transition duration-300"
            />

        
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-4 border border-gray-500  bg-gray-100 rounded-lg focus:outline-none hover:border-blue-200 transition duration-300"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 border border-gray-500  bg-gray-100 rounded-lg focus:outline-none hover:border-blue-400 transition duration-300"
            />

            <input
              type="text"
              placeholder="Interested In"
              className="w-full p-4 border  border-gray-500 bg-gray-100 rounded-lg focus:outline-none hover:border-blue-400 transition duration-300"
            />

            <textarea
              placeholder="Message"
              className="w-full h-32 p-4 border border-gray-500 bg-gray-100 rounded-lg focus:outline-none hover:border-blue-400 transition duration-300"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-gray-400 text-white p-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        <div className=" mr-3.5 flex justify-center items-center space-y-2998 space-x-556">
          <Image
            src="/image 12.jpg" 
            alt="Contact"
            width={1500}
            height={1500}
            className="rounded-lg"
          />
        </div>
        <button className="mt-6 text-white bg-gray-700 py-3 px-6 w-48 hover:bg-blue-300">
            <span className="mr-2 ">Send email---</span>
            
          </button>
      </div>
    </section>
  );
};

export default ContactForm;
