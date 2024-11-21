
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mr-50 px-4 flex justify-between items-center h-16 text-lg">
    
        <div className="flex items-center ml-20" >
          <Image src="/Group 11.jpg" alt="Logo" width={70} height={43.7} />
          </div>
    
        <ul className="flex space-x-12">
          <li>
            <Link href="/main">
              <div className="text-black  hover:text-blue-500">Main</div>
            </Link>
          </li>
          <li>
            <Link href="/gallery">
              <div className="text-black  hover:text-blue-500">Gallery</div>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <div className="text-black hover:text-blue-500">Projects</div>
            </Link>
          </li>
          <li>
            <Link href="/certificates">
              <div className="text-black hover:text-blue-500">Certificates</div>
            </Link>
          </li>
          <li>
            <Link href="/contacts">
              <div className="text-black hover:text-blue-500">contacts</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
