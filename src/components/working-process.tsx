'use client';
import ProcessCard from './process-card';
import Label from './ui/label';

const WorkingProcess = () => {
  const WORK_PROCESS_ARR = [
    {
      title: 'Consultation',
      detail:
        'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
    },
    {
      title: 'Research and Strategy Development',
      detail:
        'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
    },
    {
      title: 'Implementation',
      detail:
        'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
    },
    {
      title: 'Monitoring and Optimization',
      detail:
        'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
    },
    {
      title: 'Resorting and Communication',
      detail:
        'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
    },
    {
      title: 'Continual Improvement',
      detail:
        'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
    },
  ];
  return (
    <div className="mt-[60px] md:mt-[140px] ">
      <div className="flex flex-col md:flex-row items-center   gap-[30px] md:gap-10">
        <Label label="Our working process" />
        <p className="~text-[18px]/[20px] text-center md:text-left md:max-w-[680px] ">
          Step-by-Step Guide to Achieving Your Business
          Goals
        </p>
      </div>
      <div className="lg:mt-[80px] mt-[30px] flex flex-col gap-5">
        {WORK_PROCESS_ARR.map((work, index) => (
          <ProcessCard
            index={index + 1}
            detail={work.detail}
            title={work.title}
            key={work.title}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkingProcess;
