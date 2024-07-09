import Marquee from "react-fast-marquee";

function Marque() {
  const data = [
    {
      img: "/marquee/american-board.svg",
      img2: "/marquee/nbc.svg",
    },
    {
      img: "/marquee/american-board.svg",
      img2: "/marquee/nbc.svg",
    },
    {
      img: "/marquee/american-board.svg",
      img2: "/marquee/nbc.svg",
    },
    {
      img: "/marquee/american-board.svg",
      img2: "/marquee/nbc.svg",
    },
  ];
  return (
    <div className="xl:pt-[62px] xl:pb-[67px]  lg:pt-[43px] lg:pb-[47px] md:pt-[33px] md:pb-[35px] pt-[12px] pb-[11px]">
      <Marquee>
        {data.map((item, id) => {
          return (
            <div
              className="flex xl:max-w-[506px]  lg:max-w-[362px]  md:max-w-[506px] w-full justify-between md:pl-[19px] lg:pl-[25px] xl:pl-[37px]"
              key={id}
            >
              <img
                className="xl:max-w-[365px] lg:max-w-[262px] md:max-w-[197px] max-w-[110px] w-full"
                src={item.img}
                alt="american-board"
              />
              <img
                className="xl:max-w-[365px] lg:max-w-[73px] md:max-w-[55px] max-w-[31px] w-full"
                src={item.img2}
                alt="nbc"
              />
            </div>
          );
        })}
      </Marquee>
    </div>
  );
}

export default Marque;
