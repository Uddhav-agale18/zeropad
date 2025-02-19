import React from 'react';
import CO1 from "../Images/co1.jpg"; // Vision image
import CO2 from "../Images/co2.jpg"; // Mission image
import pinkBackground from "../Images/pinkbaground.png"; // Background image

const Corporate = () => {
    return (
        <div>
            {/* Heading with left alignment */}
            <h1 className="text-2xl sm:text-2xl xs:text-2xl lg:text-4xl font-bold text-black pl-5 pr-5  mt-20 sm:mt-15 text-center sm:text-left">
                Get to know more behind Zeropad
            </h1>

            <div
                className="relative w-full h-screen sm:h-[300vh] min-h-[200vh] lg:min-h-[250vh] bg-cover bg-center"
                style={{ backgroundImage: `url(${pinkBackground})`, marginTop: "-80px" }} // Single background for both sections
            >

                {/* Content container */}
                <div className="relative container mx-auto px-0 py-16 text-white">

                    {/* Mission Section */}
                    <div className="container mx-auto max-w-[100%] flex flex-col lg:flex-row-reverse items-center lg:justify-between gap-10 space-y-6 mt-60">
                        <div className="flex-1 text-white text-sm sm:text-base md:text-lg lg:text-xl text-left sm:text-justify leading-relaxed px-4 sm:px-6 md:px-8 lg:pl-0 lg:mr-5">
                            <h5 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white text-center sm:text-left mt-3 sm:mt-4 md:mt-5">
                                Easy-to-use & Dispose!
                            </h5>
                            <p className="mt-2 sm:mt-3 md:mt-4">
                                A vital solution, especially in workplaces, schools, and public restrooms.
                            </p>
                            <h5 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white text-center sm:text-left mt-3 sm:mt-4 md:mt-5">
                                Maintain Hygiene
                            </h5>
                            <p className="mt-2 sm:mt-3 md:mt-4">
                                Eliminates waste accumulation, reduces germ spread, and lessens landfill burden.
                            </p>
                        </div>



                        <div className="flex-1 flex justify-center lg:justify-start mt-20">
                            <img
                                src={CO1}
                                alt="Mission"
                                className="w-full max-w-[500px] sm:w-[80%] xs:w-[90%] h-auto lg:max-h-[450px] sm:max-h-[100px] xs:max-h-[100px] object-cover rounded-lg shadow-lg"
                            />


                        </div>
                    </div>


                    <div className="container mx-auto max-w-[100%] flex flex-col lg:flex-row items-center lg:justify-between gap-10 space-y-6 mt-2">
                        <div className="flex-1 text-white text-sm sm:text-base md:text-lg lg:text-xl text-left sm:text-justify leading-relaxed px-4 sm:px-6 md:px-8 lg:pr-0 lg:ml-5">
                            <h5 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-5 md:mb-6 text-center sm:text-left">
                                Employee Comfort
                            </h5>
                            <p className="mb-4 sm:mb-5 md:mb-6">
                                We prioritize comfort with the ZeroPad Menstrual Waste Incinerator, ensuring a hygienic and discreet solution for a cleaner workplace environment.
                            </p>
                            <h5 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-5 md:mb-6 text-center sm:text-left">
                                Ensuring Sustainability
                            </h5>
                            <p className="mb-4 sm:mb-5 md:mb-6">
                                Through ZeroPad, the menstrual waste incinerator reflects the innovative ideas of our team, committed to creating eco-friendly solutions for a cleaner future.
                            </p>
                        </div>


                        <div className="flex-1 flex justify-center lg:justify-end mt-20">
                            <img
                                src={CO2}
                                alt="Vision"
                                className="w-full max-w-[500px] sm:min-w-[50%] xs:min-w-[50%] h-auto object-cover rounded-lg shadow-lg"
                            />
                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
}

export default Corporate;
