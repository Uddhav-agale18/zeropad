import background from "../Images/background.png";
import rectangleBackground from "../Images/RectangleBackground.png";
import blackRectangle from "../Images/Rectanglecopy.png"
import FullRectangle from "../Images/Rectangle308.png"
import cover from "../Images/cover.png"
import visionImg from "../Images/vision.png"; // Vision image
import missionImg from "../Images/go-green.png"; // Mission image
import pinkBackground from "../Images/staff/Rectangle269.png";
import sustainableBackground from "../Images/sustainable-background.png";
import Eprint1 from "../Images/SDGGoals/ePrint1.png";
import Eprint2 from "../Images/SDGGoals/ePrint2.png";
import Eprint3 from "../Images/SDGGoals/ePrint3.png";
import Eprint4 from "../Images/SDGGoals/ePrint4.png";
import Eprint5 from "../Images/SDGGoals/ePrint5.png";
import Eprint6 from "../Images/SDGGoals/ePrint6.png";

import ketki from "../Images/ketkimam.png"
import hemant from "../Images/staff/hemant.png"
import prasad from "../Images/staff/prasad.png"
import aa from "../Images/staff/aa.png"
import satish from "../Images/staff/satish-kharat.png"
import sohail from "../Images/staff/sohel-sheikh.png"
import sonali from "../Images/staff/sonali-sarkunde.png"
import tushar from "../Images/staff/tushar-patil.png"
import uddhav from "../Images/staff/uddhav-pattait.png"
import pradip from "../Images/staff/pradip-kulkarni.png"
import farhan from "../Images/staff/farhan.png"
import sarika from "../Images/staff/sarika.png"
import shubham from "../Images/staff/shubham.png"
import sidhesh from "../Images/staff/sidhesh.png"
import rohit from "../Images/staff/rohit-naik.png"
import gg from "../Images/staff/gg.png"
import LinkBackground from "../Images/LinkBackground.png"
import EcosenseLogo from "../Images/ecosenseLogo.png"




const About = () => {
  return (
    <div style={{ fontFamily: 'Raleway, sans-serif' }}>
      <section
        className="relative w-full min-h-[135vh] lg:min-h-[170vh] flex flex-col justify-start items-center bg-center bg-cover bg-no-repeat px-6 md:px-12 pt-12 md:pt-16 lg:pt-24 pb-24"
        style={{
          backgroundImage: `url(${rectangleBackground}), url(${background})`,
          backgroundSize: "cover, cover",
          backgroundPosition: "center, center",
          backgroundRepeat: "no-repeat, no-repeat",
        }}
      >
        <h1 className="relative text-4xl md:text-5xl font-bold text-white text-center mb-8 z-10">
          About
        </h1>
        <div className="relative container mx-auto max-w-[90%] text-white text-lg md:text-xl lg:text-2xl leading-relaxed space-y-6 text-justify z-10">
          <p>
            <strong>ZeroPad</strong> is a pioneering solution designed to address the growing need for hygienic, eco-friendly, and efficient sanitary waste disposal. Our <strong>Sanitary Napkin Incinerator</strong> is a modern, user-friendly device that offers a safe and sustainable way to dispose of used sanitary napkins, ensuring cleanliness, privacy, and minimal environmental impact.
          </p>
          <p>
            With ZeroPad, we believe in the power of technology to make a positive difference in both our daily lives and the planet. That’s why our incinerator is built to provide an optimal solution for homes, workplaces, schools, public restrooms, and other community spaces. It ensures that sanitary waste is fully incinerated at high temperatures, leaving no trace of harmful bacteria, odor, or waste behind.
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <div className="relative w-full lg:-mt-64">
        <div className="container mx-auto max-w-[100%] flex flex-col lg:flex-row items-center lg:justify-between gap-0 space-y-8 mt-5">
          <div className="flex-1 text-black text-lg md:text-xl lg:text-2xl text-justify leading-relaxed px-4 sm:px-6 md:px-8 lg:pr-8 lg:mt-40 lg:ml-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-raleway text-black mb-4 sm:mb-6 text-center md:text-left">
              VISION
            </h2>
            <p className="mb-4 sm:mb-6 text-base sm:text-lg md:text-xl leading-normal sm:leading-relaxed">
              Ecosense Appliances, with Zeropad, aims to revolutionize menstrual waste management by offering sustainable and hygienic solutions that will empower individuals and communities to prioritize both health and the environment. We envision a future where menstrual hygiene management is a priority, and responsible waste disposal leads to a cleaner, healthier world.
            </p>
          </div>


          <div className="flex-1 flex justify-center lg:justify-end mt-20">
            <img
              src={visionImg}
              alt="Vision"
              className="w-[100%] lg:w-[100%] h-[280px] lg:h-[600px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>


        <div className="container mx-auto max-w-[100%] flex flex-col lg:flex-row-reverse items-center lg:justify-between gap-0 space-y-8 mt-5">
          <div className="flex-1 text-black text-lg md:text-xl lg:text-2xl text-justify leading-relaxed px-4 sm:px-6 md:px-8 lg:pl-8 lg:mb-40 lg:mr-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-raleway text-black mb-4 sm:mb-6 text-center md:text-left">
              MISSION
            </h2>
            <p className="mb-4 sm:mb-6 text-base sm:text-lg md:text-xl leading-normal sm:leading-relaxed">
              Ecosense Appliances is dedicated to improving personal hygiene, promoting sustainability, and handling women's health waste with care. Our mission is to provide innovative, eco-friendly solutions that simplify waste management, reduce landfill impact, and create a cleaner future. With ZeroPad, make your waste disposal routine responsible, hygienic, and sustainable—one napkin at a time.
            </p>
          </div>


          <div className="flex-1 flex justify-center lg:justify-start mt-20">
            <img
              src={missionImg}
              alt="Mission"
              className="w-[100%] lg:w-[100%] h-[280px] lg:h-[700px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>




        {/* Menstrual Waste Section */}
        <div className="relative w-full min-h-[600px] lg:min-h-[900px] flex flex-col justify-center items-center px-4 py-24"
          style={{
            backgroundImage: `url(${pinkBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-Raleway text-white text-center mb-12 sm:mb-16 lg:mb-20 mt-12 sm:mt-16 lg:mt-20">
            "MENSTRUAL WASTE IN INDIA”
          </h2>

          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 sm:gap-10 lg:gap-12 text-center">

              {/* First Section */}
              <section className="flex flex-col items-center">
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-Raleway text-white mb-4 sm:mb-6 lg:mb-8">121 Million</h3>
                <p className="text-lg sm:text-xl lg:text-2xl text-white">Girls and women use sanitary pads in India</p>
              </section>

              {/* Second Section */}
              <section className="flex flex-col items-center">
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-Raleway text-white mb-4 sm:mb-6 lg:mb-8">3840</h3>
                <p className="text-lg sm:text-xl lg:text-2xl text-white">Sanitary napkins used by a woman in her lifetime</p>
              </section>

              {/* Third Section */}
              <section className="flex flex-col items-center">
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-Raleway text-white mb-4 sm:mb-6 lg:mb-8">113000 Tons</h3>
                <p className="text-lg sm:text-xl lg:text-2xl text-white">Of menstrual waste is generated per annum in India</p>
              </section>
            </div>
          </div>

        </div>



        {/* Sustainable Solutions Section */}
        <div
          className="relative w-full min-h-[600px] lg:min-h-[500px] flex flex-col justify-center items-center text-center px-6 py-24 mt-0"
          style={{
            backgroundImage: `url(${sustainableBackground})`,
            backgroundSize: "cover", // Ensures full-width background coverage
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h4 className="text-4xl lg:text-5xl font-raleway text-black mb-10">
            Sustainable Development Goals
          </h4>
          <p className="text-lg lg:text-xl text-black max-w-3xl leading-relaxed">
            The ZeroPad Sanitary Napkin Incinerator supports multiple SDGs, from advancing gender equality and health to promoting responsible consumption and environmental sustainability. By offering an innovative solution to menstrual waste, it empowers individuals, reduces environmental impact, and contributes to a cleaner, healthier world. Through the adoption of ZeroPad, communities can take a significant step toward achieving a more sustainable and equitable future.
          </p>

          <div className="mt-10 lg:mt-20 flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-20 w-full max-w-4xl">
              <img src={Eprint1} alt="Eprint1" className="w-full h-auto object-contain" />
              <img src={Eprint2} alt="Eprint2" className="w-full h-auto object-contain" />
              <img src={Eprint3} alt="Eprint3" className="w-full h-auto object-contain" />
              <img src={Eprint4} alt="Eprint4" className="w-full h-auto object-contain" />
              <img src={Eprint5} alt="Eprint5" className="w-full h-auto object-contain" />
              <img src={Eprint6} alt="Eprint6" className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Background Section */}
          <div
            className="relative w-full min-h-[300px] sm:min-h-[500px] lg:min-h-[725px] flex flex-col justify-center items-center px-4 py-16 sm:py-16 lg:py-24"
            style={{
              backgroundImage: `url(${blackRectangle})`,
              backgroundSize: "cover",
              backgroundPosition: "top, center",
              backgroundRepeat: "no-repeat, no-repeat",
            }}
          >
            {/* Section Title */}
            <h4 className="text-xl sm:text-3xl lg:text-3xl font-bold text-white text-center mt-24 lg:mt-44 md:mt-30">
              Meet The Team
            </h4>

            {/* Main Director */}
            <div className="text-center mt-8 px-4">
              <img
                src={ketki}
                alt="Ketki"
                className="w-full max-w-[250px] h-auto mx-auto mb-3 object-cover"
              />
              <h5 className="text-lg sm:text-xl font-bold text-white mt-4">Ms. Ketaki Kokil</h5>
              <p className="text-sm sm:text-md text-white mb-3">Director</p>
              <p className="text-sm sm:text-lg lg:text-xl text-white max-w-md sm:max-w-2xl mx-auto text-center mt-6">
                "Empowering women through dignity, health, and sustainability — with ZeroPad, we believe that every woman deserves safe, hygienic, and eco-friendly solutions for menstrual care. Our mission is not just to manage waste, but to transform the way the world views menstrual health, creating a future where women thrive with confidence and the planet prospers with responsibility."
              </p>
            </div>
          </div>
        </div>

        {/* Staff Section */}
        <div className="w-full bg-black pb-20">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12 lg:px-20 xl:px-32">
            {[
              { img: prasad, name: "Mr. Prasad Kokil", title: "Managing Director" },
              { img: hemant, name: "Mr. Hemant P Chaudhari", title: "VP Manufacturing" },
              { img: tushar, name: "Mr. Tushar Patil", title: "GM Operations & Business Development" },
              { img: aa, name: "Mr. Akshansh Kataria", title: "Head R & D" },
              { img: pradip, name: "Mr. Pradip V Kulkarni", title: "Dy Manager Production" },
              { img: uddhav, name: "Mr. Uddhav Patait", title: "Quality Engineer" },
              { img: farhan, name: "Mr. Farhan Miya Shaikh", title: "Design Engineer R&D" },
              { img: satish, name: "Mr. Satish Kharat", title: "Engineer Purchase" },
              { img: sohail, name: "Mr. Sohel Sheikh", title: "Engineer QA" },
              { img: sonali, name: "Ms. Sonali Sarkunde", title: "Quality Engineer" },
              { img: gg, name: "Ms. Giselle Naik Vaigankar", title: "Marketing Coordinator" },
              { img: shubham, name: "Mr. Shubham Swami", title: "Marketing Officer" },
              { img: sidhesh, name: "Mr. Siddhesh Surse", title: "Digital Marketing Officer" },
              { img: sarika, name: "Ms. Sarika Deshpande", title: "Industrial Designer" },
              { img: rohit, name: "Mr. Rohit Naik", title: "Industrial Design Trainee" },
            ].map((staff, index) => (
              <div key={index} className="text-center">
                <img
                  src={staff.img}
                  alt={staff.name}
                  className="w-48 h-52 sm:w-48 sm:h-48 mx-auto mb-3 object-cover rounded-sm"
                />
                <h5 className="text-lg sm:text-xl font-bold text-white mt-2 sm:mt-4">{staff.name}</h5>
                <p className="text-sm sm:text-md text-white mb-3">{staff.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="relative w-full min-h-screen bg-cover bg-center flex flex-col justify-center items-center"
          style={{ backgroundImage: `url(${LinkBackground})` }}
        >
          {/* Green Overlay */}
          <div className="absolute inset-0 bg-green-700 opacity-50"></div>

          {/* Visit Text (Outside Clickable Area) */}
          <p className="relative text-white text-center font-semibold mb-4 text-lg z-10">
            Visit
          </p>

          {/* Clickable Logo */}
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex justify-center items-center z-10"
          >
            <div className="bg-black p-2 md:p-4 lg:p-6 rounded-full flex justify-center items-center">
              <img
                src={EcosenseLogo}
                alt="Clickable Link"
                className="w-52 sm:w-40 md:w-64 lg:w-72 h-auto sm:h-12 md:h-16 lg:h-20 hover:opacity-80 transition-opacity"
              />
            </div>
          </a>



        </div>




      </div>
    </div>
  );
};

export default About;
