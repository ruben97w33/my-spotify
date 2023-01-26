import { NextPage } from "next";
import CardTrack from "../components/CardTrack";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import TopSection from "../components/TopSection";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <div className="lg:h-screen bg-[#121212] flex tracks-container overflow-y-auto">
        <div className="w-60">
          <SideBar />
        </div>

        <TopSection />

        <div className="relative mt-[64px] px-8 py-8 main-container ">
          <h1 className="text-white text-2xl font-bold">
            Más de lo que te gusta
          </h1>

          <div className="grid grid-cols-6 gap-x-7 mt-7 gap-y-6 justify-between w-full">
            {[
              1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4,
              5, 6,
            ].map((el: number, index: number) => {
              return (
                <div key={index}>
                  <CardTrack
                    imgsrc="/images/charlie.webp"
                    title="Charlie"
                    description="Exitos de Charlie en el 2020"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
