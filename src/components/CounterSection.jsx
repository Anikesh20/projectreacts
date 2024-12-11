import React from 'react';

const CounterSection = () => {
  const counters = [
    {
      value: '2.6k',
      description: 'staff across every state and territory.',
      color: 'text-yellow-500 border-yellow-500',
    },
    {
      value: '60k',
      description: 'employers nationally are part of our network.',
      color: 'text-orange-500 border-orange-500',
    },
    {
      value: '100k',
      description: 'individuals are helped with Employment, Skills & Education, and Support pathways every year.',
      color: 'text-red-500 border-red-500',
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {counters.map((counter, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-full border-4 ${counter.color}`}
              >
                <span className={`text-3xl md:text-4xl font-extrabold ${counter.color}`}>{counter.value}</span>
              </div>
              <p className="mt-4 text-gray-700 text-sm md:text-base">{counter.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
