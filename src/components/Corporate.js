import React from "react";
import CO1 from "../Images/co1.jpg";
import CO2 from "../Images/co2.jpg";
import pinkBackground from "../Images/pinkbaground.png";

const Corporate = () => {
    return (
        <div style={{ fontFamily: 'Raleway, sans-serif' }} className="overflow-x-hidden">
            {/* Responsive Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-black px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 mt-16 sm:mt-20 text-left">
                Get to know more behind Zeropad
            </h1>

            <div
                className="min-h-[140vh] lg:h-[230vh] h-[220vh] py-12 bg-cover bg-center bg-no-repeat w-full"
                style={{ backgroundImage: `url(${pinkBackground})` }}
            >
                {/* First Section */}
                <div className="container-fluid px-0 mt-16">
                    <div className="row align-items-center w-100 mx-0">
                        {/* Left Side Image */}
                        <div className="col-lg-5 col-md-6 col-sm-12 px-0">
                            <img
                                src={CO1}
                                alt="Corporate 1"
                                className="w-100 h-auto rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Right Side Text */}
                        <div className="col-lg-6 col-md-6 col-sm-12 px-3 sm:px-6 md:px-8 lg:px-5 text-white text-center sm:text-left text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed space-y-4">
                            <h5 className="text-lg font-bold text-white mt-3 sm:mt-4 md:mt-5">
                                Easy-to-use & Dispose!
                            </h5>
                            <p>A vital solution, especially in workplaces, schools, and public restrooms.</p>
                            <h5 className="text-lg font-bold text-white mt-3 sm:mt-4 md:mt-5">
                                Maintain Hygiene
                            </h5>
                            <p>Eliminates waste accumulation, reduces germ spread, and lessens landfill burden.</p>
                        </div>
                    </div>
                </div>

                {/* Second Section */}
                <div className="container-fluid px-0 mt-5">
                    <div className="row align-items-center flex-row-reverse w-100 mx-0">
                        {/* Right Side Image */}
                        <div className="col-lg-5 col-md-6 col-sm-12 px-0">
                            <img
                                src={CO2}
                                alt="Corporate 2"
                                className="w-100 h-auto rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Left Side Text */}
                        <div className="col-lg-6 col-md-6 col-sm-12 px-3 sm:px-6 md:px-8 lg:px-5 text-white text-center sm:text-left text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed space-y-4">
                            <h5 className="text-lg font-bold text-white mt-3 sm:mt-4 md:mt-5">
                                Employee Comfort
                            </h5>
                            <p>We prioritize comfort with the ZeroPad Menstrual Waste Incinerator, ensuring a hygienic and discreet solution for a cleaner workplace environment.</p>
                            <h5 className="text-lg font-bold text-white">
                                Ensuring Sustainability
                            </h5>
                            <p>Through ZeroPad, the menstrual waste incinerator reflects the innovative ideas of our team, committed to creating eco-friendly solutions for a cleaner future.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Corporate;
