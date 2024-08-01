import Label from './ui/label';

const Team = () => {
  const TEAM_ARR = [
    {
      name: 'John Smith',
      bio: 'CEO and Founder',
      description:
        '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
      img: './john.png',
    },
    {
      name: 'John Smith',
      bio: 'CEO and Founder',
      description:
        '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
      img: './john.png',
    },
    {
      name: 'John Smith',
      bio: 'CEO and Founder',
      description:
        '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
      img: './john.png',
    },
    {
      name: 'John Smith',
      bio: 'CEO and Founder',
      description:
        '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
      img: './john.png',
    },
    {
      name: 'John Smith',
      bio: 'CEO and Founder',
      description:
        '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
      img: './john.png',
    },
    {
      name: 'John Smith',
      bio: 'CEO and Founder',
      description:
        '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
      img: './john.png',
    },
  ];
  return (
    <div className="mt-[60px] md:mt-[140px] ">
      <div className="flex flex-col md:flex-row items-center   gap-[30px] md:gap-10">
        <Label label="Team" />
        <p className="~text-[18px]/[20px] text-center md:text-left md:max-w-[680px] ">
          Meet the skilled and experienced team behind our
          successful digital marketing strategies
        </p>
      </div>
      <div className="lg:mt-[80px] mt-[30px] flex flex-col gap-5 lg:grid grid-cols-3">
        {TEAM_ARR.map((team, index) => (
          <div
            key={index}
            className="bg-grey -translate-x-[5px] -translate-y-[5px] shadow-card border-dark rounded-[45px] border p-[30px]"
          >
            <div className="flex flex-row items-center gap-5">
              <img
                src={team.img}
                className="h-20 w-20 rounded-full"
              />
              <div className="flex flex-col gap-1">
                <h3 className="font-medium ~text-[18px]/[20px]">
                  {team.name}
                </h3>
                <p className="~text-[14px]/[18px]">
                  {team.bio}
                </p>
              </div>
            </div>
            <hr className="border-0.5 border-dark mt-5"></hr>
            <p className="mt-5 ~text-[14px]/[16px]">
              {team.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
