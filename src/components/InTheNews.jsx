import React from 'react';
import In1 from '../assets/In1.png';
import In2 from '../assets/In2.png';
import In3 from '../assets/In3.png';
import In4 from '../assets/In4.png';
import In5 from '../assets/In5.png';
import In6 from '../assets/In6.png';

const InTheNews = () => {
  const newsItems = [
    {
      img: In1,
      title: "MRAEL's Parent Pathways program on 4MK AM",
      description: `Hear from Mackay Regional Leader Rebekah Grinke-Nott as she talks about MRAEL's Parent Pathways program on 4MK AM. MRAEL recently announced it will become the exclusive provider of Department of Employment and Workplace Relations Parent Pathways program in the Mackay region, offering ...`,
    },
    {
      img: In2,
      title: "After-hours program supporting First Nation Youth on B105FM",
      description: `Hear from Yiliyapinya Indigenous Corporation Founder and Director Aunty Sheryl Bachelor as she talks about Made by Mob, a joint initiative by Mas National, Australian Trade Training College and Yiliyapinya Indigenous Corporation on B105 FM. The program aims to address the lack of after-hours ...`,
    },
    {
      img: In3,
      title: "Supporting women and girls to take up trade qualifications could help ease Australia's skills shortage",
      description: `CTC's Women in Construction program was featured on ABC Brisbane. CTC Program Manager April Ibbotson and participant Vanessa Collins were both interviewed by ABC's Gemma Ferguson as part of a larger story celebrating Women in Trades. Read a snippet of the article below: Supporting ...`,
    },
    {
      img: In4,
      title: "Albany Skill Hire provides work skills and opportunities for local youth",
      description: `By George Benson | Albany Advertiser | Wed, 18 September 2024 7:00PM Skill Hire's Giles Roberts with graduate Mikiya Milner, a 19-year-old who recently completed a work skills program geared towards providing skills ...`,
    },
    {
      img: In5,
      title: "Albany Skill Hire provides work skills and opportunities for local youth",
      description: `By Georgia Campion Albany Advertiser Wed, 18 September 2024 7:00PM Skill Hire’s Giles Roberts with IntoWork Employment Skill Hire graduate Malikye Miniter. Credit: Laurie Benson Nineteen-year-old Malikye Miniter has recently completed a work skill program geared towards providing skills ...`,
    },
    {
        img: In6,
        title: "New Tourism & Hospitality Essentials Program Launches in Southern Tasmania",
        description: `Hear from Kelsea House, the RTO Administration Coordinator and Training Consultant at Work & Training, as she talks with Ryk Goddard about the innovative Tourism & Hospitality Essentials Program following the graduation of its first successful group of participants. This ...`,
      },
  ];

  return (
    <div className="bg-yellow-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">In the News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition-transform transform hover:scale-105 duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default InTheNews;