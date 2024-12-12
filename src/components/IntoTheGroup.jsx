import React, { useState } from 'react';
import Into1 from '../assets/Into1.png';
import Into2 from '../assets/Into2.png';
import Into3 from '../assets/Into3.png';
import Into4 from '../assets/Into4.png';
import Into5 from '../assets/Into5.png';
import Into6 from '../assets/Into6.png';
import Into7 from '../assets/Into7.png';
import Into8 from '../assets/Into8.png';
import Into9 from '../assets/Into9.png';
import Into10 from '../assets/Into10.png';
import Into11 from '../assets/Into11.png';
import Into12 from '../assets/Into12.png';
import Into13 from '../assets/Into13.png';
import Into14 from '../assets/Into14.png';
import Into15 from '../assets/Into15.png';
import Into16 from '../assets/Into16.png';
import Into17 from '../assets/Into17.png';

const IntoTheGroup = () => {
  const slides = [
    [
      { img: Into1,  description: "AGA supports apprentices and trainees through their Apprentice and Employment Services (AES), specialist mentoring and support programs, and pre-apprenticeship skills courses." },
      { img: Into2,   description: "With more than 30 years' experience employing over 1000 apprentices, ATT provides opportunities for New Zealanders to train and become successful tradespeople." },
      { img: Into3,   description: "CTC provides employment and recruitment services within Queensland. CTC excels at formulating a unique talent strategy to move businesses forward." },
      { img: Into4,  description: "DGT Employment & Training delivers Apprenticeship Services, Training Services, and Recruitment Services in South East Queensland." }
    ],
    [
      { img: Into5,  description: "FindStaff provides employement solutions across blue,pink and white collar industries" },
      { img: Into6,  description: " HTN operates as an apprenticeship employment organisation providing apprentices and trainees for the tourism, hospitality and food service industries. " },
      { img: Into7,  description: "Help, a social enterprise, assists people with disabilities in leading fulfilling and independent lives. " },
      { img: Into8,  description: "Hunter Executive Search Consultants are a leading, Australian recruitment company specialising in executive search, board appointments and white-collar placements. " }
    ],
    [
      { img: Into9,  description: "Interact Australia is a values based not-for-profit organisation, inspiring action and change for people with disabilities in the community since 1991." },
      { img: Into10,   description: " IntoJobs core belief is that there is ‘a job for everyone’. Leveraging the collective experience of the Intowork Group of Businesses, IntoJobs delivers employment and career transition services." },
      { img: Into11,   description: "Institute of Training and Further Education (iTFE) was established in 1998 and is a Registered Training Organisation operating in VIC, NSW and QLD." },
      { img: Into12,  description: "Kestrel Recruitment is a registered Apprentice and Employment Services (AES) operating in North East Victoria and Southern NSW. " }
    ],
    [
      { img: Into13,  description: " Mas National offers transition, mentoring, networking and community services across Australia." },
      { img: Into14,  description: "MRAEL is a Registered Training Organisation, Senior Vocational College and an Apprenticeship Network Provider in Queensland." },
      { img: Into15,  description: "Founded in 1997, Nara is a recognised and accredited training organisation based in Western Australia." },
      { img: Into16,   description: "Founded in 1992, Skill Hire is a Western Australian provider of education, training and employment solutions" }
    ],
    [
      { img: Into17,  description: "Work & Training provides apprenticeship and traineeship services, short term placements, professional recruitment services and is a Registered Training Organisation " }
    ]
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">The IntoWork Group</h2>
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {slides[currentSlide].map((item, idx) => (
              <div
                key={idx}
                className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-48 w-full object-contain p-4"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm">
                    {item.description}
                  </p>
                  <button className="mt-4 text-blue-600 hover:underline font-semibold">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-between">
            <button
              onClick={handlePrevious}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntoTheGroup;
