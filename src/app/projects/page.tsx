
import Link from "next/link"
import Image from 'next/image';

export default function projects() {
  return ( 
    <section className="bg-white py-16">
      <div className="container mx-auto">
        
        <div className="text-start mb-12">
          <h2 className="text-5xl text-gray-400 font-thin">Our</h2>
          <h1 className="text-6xl font-bold text-black">Project</h1>
        </div>

        
        <div className="space-y-8">
      
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Image
              src="/image 30.jpg" 
              alt="Project 1"
              width={400}
              height={300}
              className="rounded-lg object-cover"
            />
            <div>
              <h3 className="text-4xl  text-gray-500">Sample Project 1</h3>
              <p className="text-gray-600 bg-slate-100 mt-2 hover:bg-blue-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link href="/projectone">
                <p className="inline-block mt-4 px-6 py-2 border border-black text-black rounded hover:bg-blue-200 transition">
                  View More
                </p>
              </Link>
            </div>
          </div>

          
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Image
              src="/image 33.jpg" 
              alt="Project 2"
              width={400}
              height={300}
              className="rounded-lg object-cover"
            />
            <div>
              <h3 className="text-4xl  text-gray-500">Sample Project 2</h3>
              <p className="text-gray-600   bg-slate-100 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              
                <p className="inline-block mt-4 px-6 py-2 border border-black text-black rounded hover:bg-gray-100 transition">
                  View More
                </p>
              
            </div>
          </div>

          
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Image
              src="/image 32.jpg" 
              alt="Project 3"
              width={400}
              height={300}
              className="rounded-lg object-cover"
            />
            <div>
              <h3 className="text-4xl text-gray-500">Sample Project 3</h3>
              <p className="text-gray-600  bg-slate-100 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              
                <p className="inline-block mt-4 px-6 py-2 border border-black text-black rounded hover:bg-gray-100 transition">
                  View More
                </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


