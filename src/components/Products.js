import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductBackground from './images/Mask group .png'; // Ensure this path is correct
import { GraduationCap, Briefcase, Users, User } from 'lucide-react';
import m1 from '../Images/medi1.png';
import m2 from '../Images/medi2.png';
import b1 from '../Images/b1.png';
import b2 from '../Images/b2.png';
import b3 from '../Images/b3.png';
import b4 from '../Images/b4.png';
import img1 from '../Images/Gallery/Group 893.png';
import img2 from '../Images/Gallery/Group 898.png';
import img3 from '../Images/Gallery/Group 900.png';
import img4 from '../Images/Gallery/Group 901.png';
import img5 from '../Images/Gallery/Group 902.png';
import img6 from '../Images/Gallery/Group 903.png';
import image from '../Images/Gallery/Group 905.png';
import certificate from '../Images/Gallery/image 191.png';
import final from '../Images/final.png';

import f1 from '../Images/Features/f1.gif';
import f2 from '../Images/Features/f2.gif';
import f3 from '../Images/Features/f3.gif';
import f4 from '../Images/Features/f4.gif';
import f5 from '../Images/Features/f5.gif';
import f6 from '../Images/Features/f6.gif';
import f7 from '../Images/Features/f7.gif';
import f8 from '../Images/Features/f8.gif';
import f9 from '../Images/Features/f9.gif';
import f10 from '../Images/Features/f10.gif';




const images = [img1, img2, img3, img4, img5, img6];



const features = [
  { img: f1, title: "Less Emission" },
  { img: f2, title: "Improved Design" },
  { img: f3, title: "Auto Switch-Off" },
  { img: f4, title: "Easy to Install" },
  { img: f5, title: "Low Operational Cost Per Pad" },
  { img: f6, title: "High Chamber Temp." },
  { img: f7, title: "Optimized Air Fuel Ratio" },
  { img: f8, title: "Higher Efficiency" },
  { img: f9, title: "Safe Body Temp. & Short Circuit Proof" },
  { img: f10, title: "Certified by Authority" },
];

const beneficiaries = [
  {
    title: "Females in Academia and Learning",
    image: b1,
    icon: <GraduationCap className="w-6 h-6 text-gray-600" />
  },
  {
    title: "Women professionals in the workplace",
    image: b2,
    icon: <Briefcase className="w-6 h-6 text-gray-600" />
  },
  {
    title: "Females in Public Spaces and Environments",
    image: b3,
    icon: <Users className="w-6 h-6 text-gray-600" />
  },
  {
    title: "Females at personal residence and homes",
    image: b4,
    icon: <User className="w-6 h-6 text-gray-600" />
  }
];


const Products = () => {
  const [selectedSession, setSelectedSession] = useState('');
const handleSessionSelect = (session) => {
  setSelectedSession(session);
};



  return (
    <div>


{/*Hero section */}
      
<section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
  {/* Background Image Container (Using img like Community Section) */}
  <div className="absolute inset-0 w-full h-full">
    <img 
      src={require('./images/Mask group .png')} 
      alt="ZeroPad Product" 
      className="w-full h-full object-cover"
    />
    {/* Translucent Overlay for Visibility (Same as Community Section) */}
    <div className="absolute inset-0 bg-[#FB6F92] bg-opacity-50"></div>
  </div>

  {/* Content Container */}
  <div className="relative z-10 text-center text-white px-6 md:px-10 max-w-5xl mx-auto mt-10">
    <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-wider">
      The Product
    </h2>
    <p className="text-lg md:text-xl leading-relaxed">
      ZeroPad is an innovative, eco-friendly device designed to provide a hygienic and sustainable solution for the disposal of sanitary napkins. This compact and efficient sanitary napkin incinerator is crafted to address the growing need for safe menstrual waste management in both personal and community spaces, ensuring privacy, cleanliness, and minimal environmental impact. Whether at home, in schools, offices, public restrooms, or healthcare facilities, ZeroPad allows you to safely incinerate sanitary napkins at the push of a button, converting waste into harmless ash with no residual impact. It's the perfect solution for those seeking a modern, responsible, and discreet way to manage menstrual hygiene waste.
    </p>
  </div>

  {/* Diagonal Cut at Bottom */}
  <div className="absolute bottom-0 left-0 right-0">
    <svg 
      className="w-full h-24 md:h-40 lg:h-48" 
      viewBox="0 0 1440 96" 
      fill="none" 
      preserveAspectRatio="none"
    >
      <path 
        d="M0 96L1440 10L1440 96L0 96Z" 
        fill="white"
      />
    </svg>
  </div>
</section>


    {/* Mediation Section */}
    <section className="w-full px-4 md:px-16 py-12 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
        Our Mediation Towards Menstrual Hygiene
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
        {/* Before Implementation Card */}
        <div className="bg-[#FB6F92] rounded-2xl overflow-hidden w-full max-w-[500px] h-auto md:h-[405px] mx-auto">
          <div className="flex flex-col md:flex-row h-full">
            <div className="w-full md:w-1/2 h-[250px] md:h-full">
              <img
                src={m1} // Replace with actual image path
                alt="Before implementing Zeropad"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-center text-white">
              <h3 className="text-2xl font-semibold mb-4">Before Implementing Zeropad</h3>
              <p className="text-lg">
                Lack of privacy, social taboos, leading to health risks and environmental pollution.
              </p>
            </div>
          </div>
        </div>

        {/* After Implementation Card */}
        <div className="bg-[#FB6F92] rounded-2xl overflow-hidden w-full max-w-[500px] h-auto md:h-[405px] mx-auto">
          <div className="flex flex-col md:flex-row h-full">
            <div className="w-full md:w-1/2 h-[250px] md:h-full">
              <img
                src={m2} // Replace with actual image path
                alt="After implementing Zeropad"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-center text-white">
              <h3 className="text-2xl font-semibold mb-4">After Implementing Zeropad</h3>
              <p className="text-lg">
                Provides safe disposal of menstrual waste, ensuring hygiene and environmental safety.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>



{/* Product features */}


<motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="bg-white py-16 text-center"
    >
      <h2 className="text-2xl font-bold mb-8">Product Features</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto pt-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="flex flex-col items-center"
          >
            <img src={feature.img} alt={feature.title} className="w-24 h-24 mb-4" />
            <p className="text-sm font-bold">{feature.title}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>



{/* Benifits*/}

<section className="bg-[#FB6F92] text-white py-16 px-6 md:px-30">
      <h2 className="text-24px md:text-4xl font-bold text-center mb-10">Benefits</h2>
      <div className="grid md:grid-cols-2 gap-10 p-20">
        {/* Benefit Item */}
        <div>
          <h3 className="text-xl font-bold">Hygienic Disposal</h3>
          <p className="text-sm mt-2">
            Ensuring safe, hygienic disposal of used sanitary products, reducing the risk of diseases and infections associated with improper waste management.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold">Reduced Health Risks</h3>
          <p className="text-sm mt-2">
            Unlike traditional disposal methods, which may involve burning or improper dumping, incinerators destroy the waste at immense heat, minimizing harmful fumes and pathogens.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold">Environmentally Friendly</h3>
          <p className="text-sm mt-2">
            By incinerating sanitary napkins, these devices reduce waste volume by up to 90%, minimizing landfill pressure and preventing environmental hazards.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold">Odor Control</h3>
          <p className="text-sm mt-2">
            The incineration process helps neutralize odors associated with sanitary waste, making the environment more pleasant.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold">Convenience</h3>
          <p className="text-sm mt-2">
            Provides a convenient, low-maintenance solution for workplaces, schools, and public facilities, offering a sustainable alternative.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold">Assurance</h3>
          <p className="text-sm mt-2">
            Ensures safe and efficient disposal, offering a ‘disposable solution’ for every woman's comfort and peace of mind.
          </p>
        </div>
      </div>
    </section>
   
{/* Beneficiary */}
<div className="bg-white py-20 px-4 sm:px-6 lg:px-8 mt-[10px] md:mt-[30px]">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
      Beneficiary
    </h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
      {beneficiaries.map((item, index) => (
        <div key={index} className="flex flex-col items-center max-w-[280px] w-full">
          <div className="relative w-full">
            {/* Circular Image Container */}
            <div className="aspect-square w-full max-w-[192px] mx-auto rounded-full overflow-hidden mb-4">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Icon Circle */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow-lg">
              {item.icon}
            </div>
          </div>
          
          <h3 className="text-center text-gray-700 mt-4 text-sm font-medium px-4">
            {item.title}
          </h3>
        </div>
      ))}
    </div>
  </div>
</div>

{/* Gallery - Added mt-5 */}

<section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">The Product</h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 aspect-[3/4] sm:aspect-[16/12] lg:aspect-[16/10]">
            {/* Left Column */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="relative overflow-hidden h-[33%] sm:h-[45%]">
                <img 
                  src={images[0]} 
                  alt="Product 1" 
                  className="w-full h-full object-contain bg-gray-50  p-0"
                />
              </div>
              <div className="relative overflow-hidden  h-[33%] sm:h-[25%]">
                <img 
                  src={images[1]} 
                  alt="Product 2" 
                  className="w-full h-full object-contain bg-gray-50 p-0"
                />
              </div>
              <div className="relative overflow-hidden  h-[33%] sm:h-[30%]">
                <img 
                  src={images[2]} 
                  alt="Product 3" 
                  className="w-full h-full object-contain bg-gray-50 p-0"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="relative overflow-hidden  h-[33%] sm:h-[35%]">
                <img 
                  src={images[3]} 
                  alt="Product 4" 
                  className="w-full h-full object-contain bg-gray-50  p-0"
                />
              </div>
              <div className="relative overflow-hidden h-[33%] sm:h-[40%]">
                <img 
                  src={images[4]} 
                  alt="Product 5" 
                  className="w-full h-full object-contain bg-gray-50 p-0"
                />
              </div>
              <div className="relative overflow-hidden h-[33%] sm:h-[25%]">
                <img 
                  src={images[5]} 
                  alt="Product 6" 
                  className="w-full h-full object-contain bg-gray-50  p-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


{/* Capabilities - Added mt-5 */}
<section className="w-full mt-[10px] md:mt-[30px]">
  {/* Header Section */}
  <div className="bg-[#FB6F92] text-white text-center py-5">
    <h2 className="text-2xl font-bold">Know what Zeropad is capable of!</h2>
  </div>

  {/* Main Image & Features */}
  <div className="flex flex-col items-center my-10 px-4">
    <div className="relative max-w-3xl">
      {/* Main Product Image */}
      <img src={final} alt="Zeropad" className="w-full" />
    </div>
  </div>

  {/* Footer Section with Buttons */}
  <div className="bg-[#FB6F92] flex justify-center gap-4 py-5">
  {/* E-Brochure Button */}
  <a
     href="/Zeropad document.pdf" // Replace with your actual PDF path
    target="_blank"
    rel="noopener noreferrer"
    className="w-36 p-4 border-2 rounded-full transition-all duration-300
      bg-white text-[#FB6F92] border-white
      hover:bg-[#FB6F92] hover:text-white"
  >
    E-Brochure
  </a>

  {/* How to Use Button */}
  <a
    href="https://youtu.be/82GtROuJars?feature=shared" // Replace with your actual link
    target="_blank"
    rel="noopener noreferrer"
    className="w-36 p-4 border-2 rounded-full transition-all duration-300
      bg-white text-[#FB6F92] border-white
      hover:bg-[#FB6F92] hover:text-white"
  >
    How to Use?
  </a>
</div>

</section>

{/* Certificates*/}

<section className="py-10 px-6 md:px-20 flex flex-col items-center">
  <img 
    src={image}
    alt="Certificate" 
    className="rounded-lg shadow-lg mb-6"
    style={{ width: 'auto' }}
  />
  <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Certification(s)</h2>
  <img 
    src={certificate}
    alt="Official Certificate" 
    className="rounded-lg shadow-lg"
    style={{ width: 'auto' }}
  />
</section>




    </div>
  );
};

export default Products;
