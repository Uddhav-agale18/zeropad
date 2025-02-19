import React, { useState } from 'react';
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
import final from '../Images/final.png';


const images = [img1, img2, img3, img4, img5, img6];



const features = [
  { img: "/images/less-emission.png", title: "Less Emission" },
  { img: "/images/improved-design.png", title: "Improved Design" },
  { img: "/images/auto-switch-off.png", title: "Auto Switch-Off" },
  { img: "/images/easy-install.png", title: "Easy to Install" },
  { img: "/images/low-cost.png", title: "Low Operational Cost Per Pad" },
  { img: "/images/high-temp.png", title: "High Chamber Temp." },
  { img: "/images/optimized-ratio.png", title: "Optimized Air Fuel Ratio" },
  { img: "/images/high-efficiency.png", title: "Higher Efficiency" },
  { img: "/images/safe-body-temp.png", title: "Safe Body Temp. & Short Circuit Proof" },
  { img: "/images/certified.png", title: "Certified by Authority" },
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

    <section className="bg-white py-16 text-center">
      <h2 className="text-2xl font-bold mb-8">Product Features</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto pt-10">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={feature.img} alt={feature.title} className="w-14 h-14 mb-4" />
            <p className="text-sm font-bold">{feature.title}</p>  

          </div>
        ))}
      </div>
    </section>


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
<section className="py-0 px-6 md:px-20 mt-[10px] md:mt-[30px]">
  <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">The Product</h2>
  
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-fr">
    {images.map((src, index) => (
      <div
        key={index}
        className={`overflow-hidden rounded-lg shadow-lg ${
          index === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
        }`}
      >
        <img
          src={src}
          alt={`Product ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
    ))}
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
  <button
            className={`w-36 p-4 border-2 rounded-full transition-all duration-300 ${
              selectedSession === 'In-Person' 
                ? 'bg-white text-[#fb6f92] ' 
                : 'border-white text-white hover:bg-[#fb6f92]/10'
            }`}
            onClick={() => handleSessionSelect('In-Person')}
          >
           E-Broucher
          </button>
          <button
            className={`w-36 p-4 border-2 rounded-full transition-all duration-300 ${
              selectedSession === 'Virtual' 
                ? 'bg-white text-[#fb6f92]' 
                : 'border-white  text-white hover:bg-[#fb6f92]/10'
            }`}
            onClick={() => handleSessionSelect('Virtual')}
          >
           How to use?
          </button>
  </div>
</section>





    </div>
  );
};

export default Products;
