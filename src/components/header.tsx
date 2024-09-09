import Image from "next/image";

export const Header = () => {
  return (
    <>
      <div className="h-[30px] flex items-center justify-between px-8 pt-12 by-1">
        <h1 className="uppercase text-2xl font-normal text-[#B2AFFE]">
          Horoscope
        </h1>
        <div className="w-[85px] px-2 py-1 justify-between flex border border-[#B2AFFE] rounded-full items-center">
          <span className="text-xs font-normal uppercase text-[#B2AFFE]">
            sept 02
          </span>
          <Image
            src={"/assets/calendar.svg"}
            alt="calendar"
            width={13}
            height={14}
          />
        </div>
      </div>
      <Image
        className="mt-8"
        src={"/assets/day-week-month.svg"}
        alt="day-week-month"
        width={460}
        height={20}
      />
    </>
  );
};
