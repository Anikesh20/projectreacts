import React from 'react';

const mediaHubData = [
  {
    title: "Mas National supports First Nations Organisation with gold at Australian Training Awards",
    description: "Mas National, part of the IntoWork Group, is thrilled to announce that its client, the Guunganji-Manbarra Yidinji Peoples Prescribed Body Corporate (Aboriginal Corporation) (GMYPBC), has won the gold award for Small Employer of the Year at the Australian Training Awards, held on Friday.",
    bgColor: "#FFE9E3"
  },
  {
    title: "Help honoured in 2024 National Disability Awards",
    description: "Help Enterprises (Help), part of the IntoWork Group, has been honoured for its exceptional work in the disability sector with two nominations at the 2024 National Disability Awards. The National Disability Awards spotlight the extraordinary contributions of individuals, groups and...",
    bgColor: "#FFF7E3"
  },
  {
    title: "ATTC kickstarting careers in electrical",
    description: "Australian Trade Training College (ATTC) student Steele Perkins, 15, has made an impressive start to his electrical career, graduating from his Electrotechnology course as the youngest in his class. The Bunbury State High School student’s commitment, enthusiasm, and cooperative...",
    bgColor: "#FFEAD9"
  },
  {
    title: "Empowering Lives, One Garden at a Time",
    description: "Help Enterprises (Help), part of the IntoWork Group, is proud to foster a community of inclusive employers who recognise the importance of having a diverse workforce. Help’s partnership with Ladies Plus, a Gold Coast landscaping company, exemplifies this mission by empowering individuals...",
    bgColor: "#FFE9E3"
  },
  {
    title: "Turning Adversity into Opportunity",
    description: "Chris Manuel’s employment journey with Interact Australia proves that empowering unseen leaders living with a disability can transform workplaces. Chris started his career in manufacturing and warehousing, a path he followed since the age of 17. However, a permanent shoulder injury...",
    bgColor: "#FFF7E3"
  },
  {
    title: "IntoWork Group Recognised for Excellence at 2024 Apprentice Employment Awards",
    description: "The IntoWork Group and AGA were honoured to receive multiple accolades at the Apprenticeship Employment Network (AEN)’s annual Apprentice Training Awards on November 24th. AGA’s Victories included notably both, annual Apprentice Training Awards recognise excellence and innovation within the...",
    bgColor: "#FFEAD9"
  }
];

const MediaHub = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Media Hub</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaHubData.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-md"
              style={{ backgroundColor: item.bgColor }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-700 mb-4">
                {item.description}
              </p>
              <button className="text-blue-600 hover:underline font-semibold">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaHub;