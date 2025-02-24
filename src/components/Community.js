import React, { useState } from 'react';
import CommunityImage from './images/Community1.png';
import CommunityImage2 from './images/community2.png';
import Story1 from './images/blog_2 1.png'; // Correct import
import { Instagram,  Youtube } from 'lucide-react';
import initiatives1 from './images/initiatives1.png'; 
import initiatives2 from './images/initiative2.png'; 
import character1 from './images/character1.png'; 
import character2 from './images/character2.png'; 
import Background from './images/corporatebaground.png';
import { Play } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Instagram1 from '../Images/Gallery/Rectangle 241.png';
import Instagram2 from '../Images/Gallery/Rectangle 247.png';
import logo from '../Images/Gallery/logo.png';
import ig1 from '../Images/Gallery/igImage2.png';
import ig2 from '../Images/Gallery/igImage1.png';
import Thread from '../Images/Thread.png';

 

const Community = () => {
    const stories = [
        {
          id: 1,
          image: Story1, // Use the imported image directly
          title: 'Menstrual Hygiene',
          shortDescription: 'Proper management and disposal of menstrual products are essential for...',
          fullDescription:
            'Proper management and disposal of menstrual products are essential for a healthy and hygienic lifestyle. This initiative aims to educate individuals about safe practices.',
        },
        {
          id: 2,
          image: 'https://via.placeholder.com/300', // Replace with actual image URL
          title: 'Case Study 1',
          shortDescription: 'Description of case study...',
          fullDescription: 'This is the complete description of Case Study 1, highlighting key details.',
        },
        {
          id: 3,
          image: 'https://via.placeholder.com/300', // Replace with actual image URL
          title: 'Case Study 2',
          shortDescription: 'Description of case study...',
          fullDescription: 'This is the complete description of Case Study 2, highlighting key details.',
        },
      ];
    
    // State to track the currently expanded story
    const [expandedStory, setExpandedStory] = useState(null);

    const toggleReadMore = (id) => {
        setExpandedStory(expandedStory === id ? null : id);
    };

    const testimonials = [
        { id: 1, name: "John Doe", designation: "Software Engineer", description: "The community initiatives have helped me grow both professionally and personally." },
        { id: 2, name: "Jane Smith", designation: "Project Manager", description: "This platform provided invaluable resources that assisted in my professional development." },
        { id: 3, name: "Alice Brown", designation: "Data Scientist", description: "A fantastic initiative that promotes learning and growth." },
        { id: 4, name: "Bob White", designation: "Product Designer", description: "The mentorship and collaboration have been extremely helpful." },
        { id: 5, name: "Charlie Green", designation: "Marketing Head", description: "It's been a privilege to witness and contribute to the positive changes." },
      ];
    
      
    
      const [currentIndex, setCurrentIndex] = useState(0);

      // Responsive number of visible cards
      const visibleCards = window.innerWidth < 768 ? 1 : 3; // 1 on small screens, 3 on larger screens
    
      const handleArrowClick = (direction) => {
        if (direction === "left" && currentIndex > 0) {
          setCurrentIndex((prev) => prev - 1);
        }
        if (direction === "right" && currentIndex < testimonials.length - visibleCards) {
          setCurrentIndex((prev) => prev + 1);
        }
      };
    

      const initiatives = [
        {
          title: 'Zero Waste Drives',
          description: 'Encourage proper disposal methods and reduce environmental impact by advocating for reusable options.',
          image: 'path-to-image-1.jpg',
        },
        {
          title: 'Hygiene Awareness Workshop',
          description: 'Raising awareness about menstrual health, proper usage, safe disposal practices, and promoting sustainable alternatives.',
          image: 'path-to-image-2.jpg',
        },
        {
          title: 'Medical Awareness',
          description: 'Understanding potential health risks of certain materials and promoting proper menstrual care.',
          image: 'path-to-image-3.jpg',
        },
        {
          title: 'Responsible Disposal',
          description: 'Promoting proper waste management with dedicated disposal bins or composting options.',
          image: 'path-to-image-4.jpg',
        }
      ];

    
      const content = {
        videos: [
          { id: 1, title: "General idea of menstruation", image: "/video1.jpg" },
          { id: 2, title: "Myths & facts of menstruation", image: "/video2.jpg" },
          { id: 3, title: "Nutrition during menstruation", image: "/video3.jpg" },
        ],
        articles: [
          { id: 1, title: "Understanding Menstrual Health" },
          { id: 2, title: "Breaking Myths Around Periods" },
          { id: 3, title: "Best Nutrition Tips During Periods" },
        ],
        infographs:[

        ]
      };
    
        const [activeTab, setActiveTab] = useState("videos");

        const [currentTab, setCurrentTab] = useState("instagram");
        // const [selectedSession, setSelectedSession] = useState(null);

  // // Function to handle button click
  // const handleSessionSelect = (sessionType) => {
  //   setSelectedSession(sessionType);
  // };




  //   // State to store the selected date
  //   const [selectedDate, setSelectedDate] = useState(null);
  
  //   // Get the current date to disable past dates
  //   const today = new Date();



  

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    mobile: '',
    address: '',
    selectedDate: null,
    selectedSession: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSessionSelect = (session) => {
    setFormData((prev) => ({ ...prev, selectedSession: session }));
  };

  const isFormValid = 
    formData.fullName.trim() !== '' &&
    formData.companyName.trim() !== '' &&
    formData.mobile.trim() !== '' &&
    formData.address.trim() !== '' &&
    formData.selectedDate !== null &&
    formData.selectedSession !== '';

  const handleSubmit = () => {
    if (isFormValid) {
      // Handle form submission
      console.log('Form submitted:', formData);
    }
  };

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState([]);



  
    const [active, setActive] = useState(null);
  
    const handleClick = (icon) => {
      setActive(icon);
    };
  
    const iconStyle = (icon) =>
      `p-2 rounded-full flex items-center justify-center w-[40px] h-[40px] transition-all duration-300 ${
        active === icon
          ? "bg-white border-4 border-[#FB6F92] scale-110"
          : "bg-[#FB6F92]"
      }`;





  return (
    <div className='font-DM Sans'>
      {/* Community image*/ }
      <div className="relative w-full max-w-[1328px] mx-auto">
        {/* Background Image */}
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
          <img
            src={CommunityImage} // Use the imported image
            alt="Community"
            className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
          />
          {/* Translucent Pink Overlay */}
          <div className="absolute inset-0 bg-[#FB6F92] bg-opacity-50 rounded-[20px]"></div>
          {/* Text Above the Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">
              Our Community
            </h1>
          </div>
        </div>
      </div>

      {/* Community Success Stories*/ }
      <div className="max-w-[1328px] mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {stories.map((story) => (
            <div key={story.id} className="bg-white  flex flex-col items-center">
              {/* Image Block with fixed size and padding */}
              <div className="relative w-[348px] h-[273px] mb-4">
                <img
                  src={story.image} // Use the image from the array
                  alt={story.title}
                  className="absolute inset-2 w-full h-full object-cover rounded-md" // 10px padding around image
                />
              </div>

              {/* Title, Description, and Button - Placed Below the Image */}
              <div className="w-full text-left">
                {/* Title */}
                <h3 className="text-xl font-bold mb-2">{story.title}</h3>

                {/* Description */}
                <p className="text-gray-600 mb-4">
                  {expandedStory === story.id
                    ? story.fullDescription
                    : story.shortDescription}
                </p>

                {/* Read More Button */}
                <button
                  className="text-white bg-[#000000] px-4 py-2 rounded-md hover:bg-[#000000] transition "
                  onClick={() => toggleReadMore(story.id)}
                >
                  {expandedStory === story.id ? 'Show Less' : 'Read More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

       {/* Testimonials */}
       <div className="max-w-[1328px] mx-auto px-4 py-8">
  <div className="w-full h-[405px] bg-[#FB6F92] rounded-[20px] p-6 flex items-center justify-center relative">
    <div className="w-full flex overflow-hidden justify-center">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="w-full sm:w-1/2 md:w-1/3 min-w-[250px] max-w-[100%] p-4 flex-shrink-0 flex flex-col items-center justify-center text-center shadow-md"
          >
            <h4 className="font-semibold text-xl text-black mb-2">{testimonial.name}</h4>
            <p className="text-black-700 text-sm mb-4">{testimonial.designation}</p>
            <p className="text-black-500 text-sm">{testimonial.description}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Arrows Section - Positioned at bottom left & right */}
    <div className="absolute bottom-4 left-4">
      <button
        className={`text-white text-3xl bg-black bg-opacity-70 rounded-full w-14 h-14 flex items-center justify-center 
              ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
        onClick={() => handleArrowClick("left")}
        disabled={currentIndex === 0}
      >
        &#8592;
      </button>
    </div>

    <div className="absolute bottom-4 right-4">
    <button
  className={`text-white text-3xl leading-none bg-black bg-opacity-70 rounded-full w-14 h-14 flex items-center justify-center 
              ${currentIndex >= testimonials.length - visibleCards ? "opacity-50 cursor-not-allowed" : ""}`}
  onClick={() => handleArrowClick("right")}
  disabled={currentIndex >= testimonials.length - visibleCards}
>
  <span className="flex items-center align-center justify-center w-full h-full text-center">&#8594;</span>
</button>
    </div>
  </div>
</div>


  {/* Community Initiatives Section */}

  <section id="community-initiatives" className="relative mt-24 pb-24 py-12">
  {/* Image Above Tilted Background (Left Side) */}
  <div className="absolute left-0 top-[-50px] w-auto text-left">
    <div className="relative w-[100%] max-w-[500px] md:max-w-[400px] ml-0 md:ml-0">
      {/* Image */}
      <img src={CommunityImage2} alt="Community Awareness" className="w-full h-auto rounded-lg" />
      {/* Left-Aligned Heading Over Image */}
      <h2 className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[clamp(16px, 4vw, 24px)] lg:text-3xl xl:text-4xl font-bold text-black px-2 sm:px-4 py-1 sm:py-2 rounded-md max-w-[90%] whitespace-nowrap text-left mt-6 sm:mt-8 md:mt-10">
        User Community Initiatives
      </h2>
    </div>
  </div>

  {/* Tilted Background */}
  <div className="absolute top-[calc(100px+15vw)] md:top-[calc(150px+15vw)] left-0 w-full bg-[#FB6F92] transform -skew-y-12 origin-top-left z-[-1] min-h-[calc(100vh+10vw)] md:min-h-[calc(120vh+10vw)] relative">

    {/* Bottom-Left Character Inside Tilted Background */}
    <div className="absolute bottom-[-49px] left-0 lg:left-8 w-[clamp(60px, 16vw, 220px)] max-w-[220px] hidden lg:block rotate-12">
      <img src={character2} alt="Character" className="w-full h-auto" />
    </div>
  </div>

  {/* Top-Right Character - Moved Up and Slightly Behind */}
  <div className="absolute top-[-45px] right-0 sm:right-4 md:right-6 lg:right-8 w-[clamp(60px, 16vw, 220px)] max-w-[220px] z-10">
    <img src={character1} alt="Character" className="w-full h-auto" />
  </div>

  {/* Content Container Inside Tilted Background */}
  <div className="absolute top-[calc(100px+18vw)] md:top-[calc(150px+5vw)] left-1/2 transform -translate-x-1/2 w-full max-w-[1328px] px-4 sm:px-6 lg:px-8 z-10 pt-12 md:pt-16 pb-12 md:pb-20">

    {/* First Row */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
      <div className="flex justify-center md:justify-start w-full">
        <div className="relative w-full max-w-[400px] sm:w-[70%] md:w-[60%] lg:w-[70%] aspect-[7/5]">
          <img src={initiatives1} alt="Initiative 1" className="w-full h-full object-cover rounded-lg shadow-lg" />
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-6 text-white text-center md:text-left w-full">
        <div className="px-4">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Zero Waste Drives</h3>
          <p className="text-sm sm:text-base md:text-lg">Encourage proper disposal methods and advocate for reusable options.</p>
        </div>
        <div className="px-4">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Hygiene Awareness Workshop</h3>
          <p className="text-sm sm:text-base md:text-lg">Raising awareness about menstrual health, safe disposal practices, and sustainable alternatives.</p>
        </div>
      </div>
    </div>

    {/* Second Row */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mt-8 md:mt-12 items-center">
      <div className="flex flex-col gap-4 md:gap-6 text-white text-center md:text-left w-full">
        <div className="px-4">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Medical Awareness</h3>
          <p className="text-sm sm:text-base md:text-lg">Understanding potential health risks, materials, and promoting proper menstrual care.</p>
        </div>
        <div className="px-4">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Responsible Disposal</h3>
          <p className="text-sm sm:text-base md:text-lg">Promoting waste management with bins, composting, and hygiene awareness.</p>
        </div>
      </div>
      <div className="flex justify-center md:justify-end w-full">
        <div className="relative w-full max-w-[400px] sm:w-[70%] md:w-[60%] lg:w-[70%] aspect-[7/5]">
          <img src={initiatives2} alt="Initiative 4" className="w-full h-full object-cover rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  </div>
</section>





{/* Book Workshop */}
<section className="w-full px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center mt-32 md:mt-40 lg:mt-48">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-16">
        Book a Workshop Session!
      </h2>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
        <div className="col-span-1 flex flex-col gap-8">
          {['fullName', 'companyName', 'mobile', 'address'].map((field, idx) => (
            <input
              key={idx}
              type="text"
              name={field}
              placeholder={`${field.split(/(?=[A-Z])/).join(' ')}*`}
              value={formData[field]}
              onChange={handleChange}
              className={`p-4 bg-gray-50 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#fb6f92] focus:border-transparent ${formErrors.includes(field) ? 'border-red-500' : 'border-gray-200'}`}
            />
          ))}
        </div>

        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-2xl font-semibold text-center">Select Date</h3>
          {formData.selectedDate && (
            <p className="text-lg font-medium text-gray-700">
              Selected Date: {formData.selectedDate.toLocaleDateString()}
            </p>
          )}
          <div className="bg-white p-4 rounded-lg">
            <DatePicker
              selected={formData.selectedDate}
              onChange={(date) => setFormData({ ...formData, selectedDate: date })}
              minDate={new Date()}
              inline
              renderCustomHeader={({
                date,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
              }) => (
                <div className="flex items-center justify-between w-full px-4 py-2">
                  <button
                    onClick={decreaseMonth}
                    disabled={prevMonthButtonDisabled}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FB6F92] text-white disabled:opacity-50"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <div className="text-xl font-medium">
                    {date.toLocaleString('default', { month: 'long', year: 'numeric' })}
                  </div>
                  <button
                    onClick={increaseMonth}
                    disabled={nextMonthButtonDisabled}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FB6F92] text-white disabled:opacity-50"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
              calendarClassName="!border-0 !font-sans"
              wrapperClassName="!block"
              dayClassName={(date) =>
                date.getDate() === formData.selectedDate?.getDate() && date.getMonth() === formData.selectedDate?.getMonth()
                  ? '!bg-[#FB6F92] !text-white !rounded-full'
                  : 'hover:!bg-gray-200 !rounded-full'
              }
            />
          </div>
        </div>

        <div className="col-span-1 flex flex-col items-center gap-8">
          <h3 className="text-lg font-semibold">Preferred Session Type</h3>
          {['In-Person', 'Virtual'].map((session) => (
            <button
              key={session}
              className={`w-36 p-4 border-2 rounded-full transition-all duration-300 ${
                formData.selectedSession === session
                  ? 'bg-[#fb6f92] text-white border-[#fb6f92]'
                  : 'border-[#fb6f92] text-[#fb6f92] hover:bg-[#fb6f92]/10'
              }`}
              onClick={() => handleSessionSelect(session)}
            >
              {session}
            </button>
          ))}
          <div className="flex flex-col items-center gap-2">
            <button
              className={`w-36 p-4 rounded-lg transition-colors duration-300 ${
                isFormValid ? 'bg-[#fb6f92] text-white hover:bg-[#fb6f92]/90' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              onClick={() => {
                const emptyFields = ['fullName', 'companyName', 'mobile', 'address'].filter(field => !formData[field]);
                setFormErrors(emptyFields);

                if (emptyFields.length > 0) {
                  alert(`Please fill in the following fields: ${emptyFields.join(', ')}`);
                  return;
                }

                if (!formData.selectedDate) {
                  alert('Please select a date for the workshop!');
                  return;
                }

                if (!formData.selectedSession) {
                  alert('Please choose a preferred session type!');
                  return;
                }

                handleSubmit();
                setFormSubmitted(true);
                alert('Form submitted successfully!');
              }}
              disabled={!isFormValid}
            >
              Submit
            </button>
            {!isFormValid && (
              <p className="text-red-500 text-sm text-center mt-2">
                Please fill in all required fields
              </p>
            )}
          </div>
        </div>
      </div>
    </section>



{/* Menstrual Waste Statistics Section */}
<section className="w-full px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center mt-10 md:mt-30 lg:mt-10">
  <h2 className="text-center text-[clamp(20px,4vw,36px)] font-semibold text-[#FB6F92] mb-12">
    “MENSTRUAL WASTE IN INDIA”
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-center">
    <div>
      <h3 className="text-[clamp(24px,3vw,32px)] font-bold text-[#FB6F92]">121 Million</h3>
      <p className="text-lg text-gray-700">Girls and women use sanitary pads in India</p>
    </div>
    <div>
      <h3 className="text-[clamp(24px,3vw,32px)] font-bold text-[#FB6F92]">3840</h3>
      <p className="text-lg text-gray-700">Sanitary napkins used by a woman in her lifetime</p>
    </div>
    <div>
      <h3 className="text-[clamp(24px,3vw,32px)] font-bold text-[#FB6F92]">113000 Tons</h3>
      <p className="text-lg text-gray-700">Of menstrual waste is generated per annum in India</p>
    </div>
  </div>
</section>


{/*Social Feed */}
<section className="container mx-auto px-4 mt-[20px]">
  <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Social Feed</h2>

  {/* Social Media Icons */}
  <div className="flex justify-center gap-6 mb-8">
    <div className={`p-3 rounded-full flex items-center justify-center transition-transform duration-200 ${currentTab === 'instagram' ? 'bg-[#FB6F92] scale-125 w-[50px] h-[50px]' : 'bg-[#FB6F92] w-[40px] h-[40px]'}`} onClick={() => setCurrentTab('instagram')} style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
      <Instagram className="text-white w-[24px] h-[24px]" />
    </div>
    <div className={`p-3 rounded-full flex items-center justify-center transition-transform duration-200 ${currentTab === 'threads' ? 'bg-[#FB6F92] scale-125 w-[50px] h-[50px]' : 'bg-[#FB6F92] w-[40px] h-[40px]'}`} onClick={() => setCurrentTab('threads')} style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
      <img src={Thread} alt="Threads" className="w-6 h-6" />
    </div>
    <div className={`p-3 rounded-full flex items-center justify-center transition-transform duration-200 ${currentTab === 'youtube' ? 'bg-[#FB6F92] scale-125 w-[50px] h-[50px]' : 'bg-[#FB6F92] w-[40px] h-[40px]'}`} onClick={() => setCurrentTab('youtube')} style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
      <Youtube className="text-white w-[24px] h-[24px]" />
    </div>
  </div>

  {/* Content Container */}
  <div 
    className="mx-auto bg-[#FB6F92] p-4 rounded-[10px] w-full max-w-[1285px] flex justify-center"
    style={{ height: 'auto', minHeight: '300px' }}
  >
    {currentTab === 'instagram' && (
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        {/* Post Component */}
        {[{title: 'Meet Prerana', img: ig1}, {title: 'Introducing ZeroPad', img: ig2}].map((post, index) => (
          <div key={index} className="bg-white rounded-2xl p-2 shadow-lg w-full max-w-[352px] h-[400px] flex flex-col items-center">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="w-8 h-8 rounded-full" />
              <h3 className="text-lg font-bold">{post.title}</h3>
            </div>
            <p className="hidden md:block text-gray-700 mt-2 text-center">This is the description for {post.title}'s post. It’s only visible on larger screens.</p>
            <div className="rounded-xl overflow-hidden mt-0 mb-0 flex-1 w-full">
              <img 
                src={post.img}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    )}

    {currentTab === 'youtube' && (
      <div className="flex justify-center">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/your-video-id" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
      </div>
    )}
  </div>
</section>

<script>
  const [currentTab, setCurrentTab] = React.useState('instagram');
</script>















{/* Educating Section*/}
<div className="min-h-screen flex flex-col items-center py-12 mt-[50px]">
      {/* Heading (Outside the Colored Box) */}
      <h1 className="text-black font-bold text-3xl lg:text-4xl mb-6">
        Educating the Society!
      </h1>

      {/* Tabs (Buttons) */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {["videos", "articles","infographs"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full border-2 border-[#FB6F92] transition-all duration-300 ${
              activeTab === tab
                ? "bg-white text-[#FB6F92]"
                : "bg-[#FB6F92] text-white"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Colored Box Containing Content */}
      <div className="w-full max-w-full bg-[#FB6F92] rounded-lg p-10">
        {activeTab === "videos" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.videos.map((video) => (
              <div key={video.id} className="relative group">
                <div className="aspect-video bg-[#3D1C1C] rounded-lg overflow-hidden">
                  <div className="w-full h-full relative">
                    <img
                      src={video.image}
                      alt={video.title}
                      className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <button className="bg-white rounded-full p-3 mb-2">
                        <Play className="w-6 h-6 text-[#FB6F92]" />
                      </button>
                      <span className="text-white text-sm">Watch</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-center text-white mt-3 text-sm font-medium">
                  {video.title}
                </h3>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {content.articles.map((article) => (
              <div
                key={article.id}
                className="bg-white text-[#FB6F92] p-4 rounded-lg text-center font-medium shadow-md"
              >
                {article.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>



</div>
  );
};

export default Community;
