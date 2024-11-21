
import Image from 'next/image';

const Gallery = () => {
  return (
    <section className="bg-white py-14">
      <div className="container ml-4 text-center">
      
        <h2 className="text-3xl text-gray-400 mb-2">Photos</h2>
        <h1 className="text-5xl font-bold text-black mb-8">Gallery</h1>

        
        <div className="grid grid-cols-5 md:grid-cols-5 gap-3 gap-y-4 gap-x-5">
        
          <Image

            src="/Rectangle 22.jpg" 
            alt="Gallery Image 1"
            width={180}
            height={180}
            className="rounded-md ml-28"
          />
          <Image
            src="/Rectangle 23.jpg" 
            alt="Gallery Image 2"
            width={180}
            height={180}
            className="rounded-md ml-14"
          />
          <Image
            src="/Rectangle 24.jpg" 
            alt="Gallery Image 3"
            width={180}
            height={180}
            className="rounded-md"
          />
          <Image
            src="/Rectangle 25.jpg" 
            alt="Gallery Image 4"
            width={180}
            height={180}
            className="rounded-md mx-[-0.99cm]"
          />
          <Image
            src="/Rectangle 26.jpg" 
            alt="Gallery Image 5"
            width={180}
            height={180}
            className="rounded-md mx-[-0.99cm]"
          />

          
          <Image
            src="/Rectangle 27.jpg" 
            alt="Gallery Image 6"
            width={180}
            height={180}
            className="rounded-md ml-28"
          />
          <Image
            src="/Rectangle 28.jpg" 
            alt="Gallery Image 7"
            width={180}
            height={180}
            className="rounded-md ml-14"
          />
          <Image
            src="/Rectangle 29.jpg"
            alt="Gallery Image 8"
            width={180}
            height={180}
            className="rounded-md"
          />
          <Image
            src="/Rectangle 30.jpg" 
            alt="Gallery Image 9"
            width={180}
            height={180}
            className="rounded-md mx-[-0.99cm]"
          />
          <Image
            src="/Rectangle 31.jpg" 
            alt="Gallery Image 10"
            width={180}
            height={180}
            className="rounded-md  mx-[-0.99cm]"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
