import { Header } from "../components/header";
import { Content } from "../components/content";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Header />
      <Image
        className="mt-8 mx-auto"
        src={"/assets/main.svg"}
        alt="day-week-month"
        width={460}
        height={20}
      />
      <Content />
    </div>
  );
};

export default Home;
