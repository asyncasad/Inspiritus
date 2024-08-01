import Marquee from 'react-fast-marquee';

const Clients = () => (
  <Marquee className="mt-[60px] md:mt-[70px]  grayscale">
    <div className="flex flex-row justify-between w-full gap-36">
      <img src="./amazon.svg" />
      <img src="./dribble.svg" />
      <img src="./netflix.svg" />
      <img src="./notion.svg" />
      <img src="./hubspot.svg" />
    </div>
  </Marquee>
);

export default Clients;
