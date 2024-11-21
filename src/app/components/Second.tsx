
import Image from 'next/image';

const Second = () => {
  return (
    <section className="bg-gray-100 py-10 w-3/6 h-150 container ml-60 flex flex-col items-center justify-center mb-0">
      <div className="container mx-auto grid grid-cols-3 lg:grid-cols-2 items-center">
    
        <div className="flex flex-col items-center lg:items-start space-y-6 space-x-5">
          
          <div className="space-y-4">
            <Image
              src="/Rectangle 8.jpg" 
              alt="Left Image 1"
              width={270}
              height={265}
              className="rounded-lg"
            />
            <Image
              src="/Rectangle 10.jpg" 
              alt="Left Image 2"
              width={270}
              height={140}
              className="rounded-lg"
            />
            <p className=" flex-col items-center space-x-535 space-y-1114">
             <Image
              src="/Rectangle 9.jpg" 
              alt="Center Image"
              width={270}
              height={345}
              className="rounded-lg"
            /> 
            </p>
          </div>
        </div>

        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-300 mb-6">About</h1>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            scelerisque, nunc eu finibus fringilla, elit orci bibendum urna, at
            condimentum ligula erat nec ligula. Vivamus in feugiat magna.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Second;
