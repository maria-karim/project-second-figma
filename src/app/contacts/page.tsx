import Image from "next/image";

const ContactSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    
        <div className="flex flex-col justify-center space-y-4">
          
          <h3 className="text-5xl font-thin text-gray-400">Contact</h3>
          
          <h1 className="text-6xl font-bold text-black">Information</h1>
          
          <ul className="space-y-2 text-sm">
            <li>
              <span className="font-bold">Company Name:</span> 1234 Sample Street,Austin,Texas 74778
            </li>
            <li>
              <span className="font-bold">Phone:</span> +1 5122 5633 890
            </li>
            <li>
              <span className="font-bold">Email:</span> sample@company.com
            </li>
          </ul>
        
          <button className="bg-black w-40 text-white px-6 py-3 mt-4 rounded hover:bg-gray-600 transition duration-300">
            Contact Us
          </button>
        </div>

        
        <div className="flex justify-center items-center">
          <Image
            src="/image 14.jpg"
            alt="Map"
            width={800}
            height={800}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


  
  
