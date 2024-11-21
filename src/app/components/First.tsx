import Image from 'next/image'

const first = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-4xl lg:text-6xl font-bold   text-gray-200 mb-6">
            Projects 
          </h1>
          <h2 className="text-4xl lg:text-6xl font-thin  text-black mb-6">
             Lorem
          </h2>
          
        </div>
        <div className="lg:w-1/2 flex flex-col items-center">
          <div className="mb-4">
            <Image
              src="/Rectangle 6.jpg" 
              alt="Project Preview"
              width={840}
              height={770}
              className="rounded-lg"
            />
          </div>
          <div>
            <button className="flex items-center text-black hover:text-blue-400">
              <span className="mr-2">View Project</span>
              
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default first;


