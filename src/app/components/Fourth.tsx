
import Image from 'next/image';

const ProjectSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
    
        <h1 className="text-5xl font-thin text-gray-400 mb-12"> Our Projects</h1>

        
        <div className="space-y-8">
          
          <div className="flex justify-center gap-4">
            <Image
              src="/img.jpeg.jpeg" 
              alt="Image 1"
              width={400}
              height={300}
              className="rounded-lg"
            />
            <Image
              src="/image 15.jpg" 
              alt="Image 2"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>

          
          {/* <div className="grid grid-cols-1 md:grid-cols-3 flex justify-center gap-4"> */}
          <div className="flex justify-center gap-4">
            <Image
              src="/image 16.jpg" 
              alt="Image 3"
              width={200}
              height={100}
              className="rounded-lg"
            />
            <Image
              src="/image 17.jpg"
              alt="Image 4"
              width={380}
              height={200}
              className="rounded-lg"
            />
            <Image
              src="/image 18.jpg" 
              alt="Image 5"
              width={200}
              height={100}
              className="rounded-lg"
            />
          </div>
        </div>
        <button className="mt-4 ml-50 text-white bg-gray-700 py-3 px-6  hover:bg-blue-300">
            <span className="mr-2 ">All Projects---</span>
            
          </button>
      </div>
    </section>
  );
};

export default ProjectSection;
