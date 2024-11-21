
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin, FaFacebook, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 flex">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="flex flex-col items-start space-y-4">
          <Image
            src="/Group 11.jpg" 
            alt="Logo"
            width={150}
            height={50}
            className="object-contain"
          />
        </div>
        <div className='ml-0'>
          <h3 className="text-lg font-bold mb-4">Information</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Main
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Services
              </a>
            </li>
          </ul>
        </div>

       
        <div className=' ml-2 mr-34 h-22 justify-evenly'>
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt />
              <span>1234 Sample Street, Austin,Texas,78704</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhoneAlt />
              <a href="tel:+1234567890" className="hover:text-blue-400 transition">
                +1 234 567 890
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope />
              <a href="mailto:info@example.com" className="hover:text-blue-400 transition">
                info@example.com
              </a>
            </li>
          </ul>
        </div>  
        <div className='ml-0.5 '>
          <h3 className="text-lg font-bold mb-4">Social Media</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-400 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-400 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-400 transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
