import Image from "next/image";

export const Content = () => {
  return (
    <div className="p-5">
      <div
        style={{
          backgroundImage: "linear-gradient(to right, #B2AFFE -800%, black)",
        }}
        className="p-3 text-[#B2AFFE] border border-[#B2AFFE] rounded-xl"
      >
        <h2 className="text-lg">Affirmation</h2>
        <p className="text-sm opacity-80">
          I can be a masterpiece and a work in progress at the same time
        </p>
      </div>
      <div className="my-5 ">
        <h2 className="text-[#fff] text-lg">Your today’s horoscope</h2>
        <p className="text-sm opacity-80 mt-1">
          Today, you can see how your daily routine has changed your life. Your
          physical and mental health is directly related to your personal
          transformation. Making sure that you are taken care of - body and mind
          - should be part of your schedule. That is just
        </p>
      </div>
      <div className="relative items-center flex text-[#B2AFFE] justify-between">
        <Image
          src={"/assets/frame.svg"}
          alt="frame"
          width={14}
          height={6}
          className="absolute left-0"
        />
        <button className="font-medium w-[85px] whitespace-nowrap absolute left-[20px]">
          Read more
        </button>
        <Image
          src={"/assets/line.svg"}
          alt="frame"
          width={270}
          height={6}
          className="w-[70%] absolute left-[110px]"
        />
      </div>
    </div>
  );
};
