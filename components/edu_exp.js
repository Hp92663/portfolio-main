import React, { useEffect, useState } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';


const experienceData = [
  {
    id: 1,
    type: 'work',
    title: 'Full Stack Developer',
    company: 'Tankhwa Patra',
    description: 'Promote your blog posts, case studies, and product announcements with themed branded videos.',
    year: '01/2024 - Present',
    tagColor: 'bg-orange-500'
  },
  {
    id: 2,
    type: 'work',
    title: 'WordPress',
    company: 'Freelancing',
    description: 'Promote your blog posts, case studies, and product announcements with themed branded videos.',
    year: '04/2022 - 10/2022',
    tagColor: 'bg-green-500'
  }
];

const educationData = [
  {
    id: 3,
    type: 'education',
    title: 'Master of Computer Applications',
    company: 'Gujarat Technological University',
    description: 'Promote your blog posts, case studies, and product announcements with themed branded videos.',
    year: '2022 - 2024',
    tagColor: 'bg-blue-500'
  },
  {
    id: 4,
    type: 'education',
    title: "Bachelor of Computer Application",
    company: 'Gujarat University',
    description: 'Promote your blog posts, case studies, and product announcements with themed branded videos.',
    year: '2019 - 2022',
    tagColor: 'bg-indigo-500'
  }
];

const Experience = () => {
  const [animationProgress, setAnimationProgress] = useState(0);
  const [visitedPositions, setVisitedPositions] = useState([]);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (animationStarted) {
      const totalSteps = experienceData.length * 75;
      let currentStep = 0;

      const interval = setInterval(() => {
        if (currentStep <= totalSteps) {
          setAnimationProgress(currentStep / totalSteps);

          const completedPositions = Math.floor(currentStep / 100);
          const newVisitedPositions = [];
          for (let i = experienceData.length - 1; i > experienceData.length - 1 - completedPositions; i--) {
            newVisitedPositions.push(i);
          }
          setVisitedPositions(newVisitedPositions);

          currentStep += 1;
        } else {
          clearInterval(interval);
          setAnimationComplete(true);
        }
      }, 15);

      return () => clearInterval(interval);
    }
  }, [animationStarted]);

  const getAnimatingDotPosition = (dataLength) => {
    if (!animationStarted || animationProgress === 0) return null;

    const totalSegments = dataLength + 1;
    const progressInSegments = animationProgress * totalSegments;
    const currentSegment = Math.floor(progressInSegments);
    const segmentProgress = progressInSegments - currentSegment;

    const fromIndex = dataLength + 1 - currentSegment;
    const toIndex = Math.max(0, fromIndex - 1);

    if (fromIndex < 0) return { index: 0, offset: 0 };

    const segmentHeight = 8 * 16;
    const offset = segmentProgress * segmentHeight;

    return {
      index: fromIndex,
      offset: -offset
    };
  };

  const renderTimeline = (data, type) => {
    // const primaryColor = type === 'work' ? 'orange' : 'blue';
    const primaryColor = 'custom-gradient'
    const animatingDotPosition = getAnimatingDotPosition(data.length);

    return (
      <div className="relative">
        <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center">
          {type === 'work' ? (
            <Briefcase className="mr-3 text-orange-500" size={28} />
          ) : (
            <GraduationCap className="mr-3 text-blue-500" size={28} />
          )}
          {type === 'work' ? 'Work Experience' : 'Education'}
        </h3>

        <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gray-300"></div>

        {animatingDotPosition && !animationComplete && (
          <div
            className={`absolute left-5 w-2 h-2 bg-${primaryColor} rounded-full shadow-lg z-10 transition-all duration-75 ease-linear`}
            style={{
              top: `${4 + animatingDotPosition.index * 8 + animatingDotPosition.offset / 16}rem`
            }}
          ></div>
        )}

        <div className="space-y-8">
          {data.map((item, index) => {
            const isVisited = visitedPositions.includes(index);
            const isCurrent = index === 0 && animationComplete;

            return (
              <div key={item.id} className="relative pl-12">
                <div
                  className={`absolute left-4 w-4 h-4 rounded-full border-4 border-gray shadow-lg transition-all duration-300 ${isCurrent
                    ? `bg-${primaryColor} animate-pulse shadow-${primaryColor}-500/50`
                    : isVisited
                      ? 'bg-gray-400'
                      : 'bg-gray-200'
                    }`}
                ></div>

                <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">{item.title}</h4>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${item.tagColor} mt-1`}
                      >
                        {item.company}
                      </span>
                    </div>
                    <span
                      className={`font-bold text-sm ${type === 'work' ? 'text-orange-500' : 'text-blue-500'}`}
                    >
                      {item.year}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 py-8">
      <div className=" mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12" x>
          {renderTimeline(experienceData, 'work')}
          {renderTimeline(educationData, 'education')}
        </div>
      </div>
    </div>
  );
};

export default Experience;
