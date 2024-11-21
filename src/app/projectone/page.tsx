

import Image from 'next/image';

const SampleProject = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
    
        <div className="text-center mb-12">
          <h2 className="text-5xl font-thin text-gray-400">Sample</h2>
          <h1 className="text-6xl font-semibold text-black">Project 1</h1>
        </div>

    
        <div className="mb-8 flex justify-center">
          <Image
            src="/image 33.jpg" 
            alt="Full Container Image"
            width={2000}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>

        
        <div className="mb-8 flex flex-col md:flex-row items-center gap-6">
          <Image
            src="/image 34.jpg" 
            alt="Side Image"
            width={350}
            height={200}
            className="rounded-lg object-cover"
          />
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Sed do eiusmod consectetur adipiscing elit. Sed do eiusmod tempor inci consectetur adipiscing elit. Sed do eiusmod tempor inci consectetur adipiscing elit. Sed do eiusmod tempor inci tempor inci  consectetur adipiscing elit. Sed do eiusmod tempor inci consectetur adipiscing elit. Sed do eiusmod tempor inci consectetur adipiscing elit. Sed do eiusmod tempor inci consectetur adipiscing elit. Sed do eiusmod tempor inci consectetur adipiscing elit. Sed do eiusmod tempor inci consectetur adipiscing elit. Sed do eiusmod tempor inci consectetur adipiscing elit. Sed do eiusmod tempor inci consectetur adipiscing elit. Sed do eiusmod tempor inci consectetur adipiscing elit. Sed do eiusmod tempor inciconsectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>
        </div>

        
        <div className="mb-8 flex justify-center">
          <Image
            src="/image 35.jpg" 
            alt="Left Image"
            width={800}
            height={400}
            className="rounded-lg object-cover"
          />
          
        </div>
      </div>
    </section>
  );
};

export default SampleProject;
