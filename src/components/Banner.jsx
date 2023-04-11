import React from "react";

function Banner({ scroll }) {
  const blur = Math.min(scroll / 30, 5);

    const getBG = () => {
        const viewportWidth = window.innerWidth;
        if (viewportWidth < 640) {
            return "https://ucarecdn.com/8cf1461b-89de-47f5-8af2-a9f260289428/ZombieSchool1.png";
        } else {
            return "https://ucarecdn.com/9ab7f62c-4f86-40a9-9fdc-5d4f0ed37cf1/ZombieSchoolBG.png";
        }
    };

  return (
    <>
      {/* black bg avoid white halo when blurring */}
      <div className="fixed bg-black h-screen w-screen -z-20" />
      <img
        className={"fixed h-screen w-screen  -z-10"}
        style={{ filter: `blur(${blur}px)` }}
        src={getBG()}
        alt="Zombie School"
      />
    </>
  );
}

export default Banner;
