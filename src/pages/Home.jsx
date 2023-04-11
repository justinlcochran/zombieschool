import React, { useEffect, useState } from "react";
import weeks from "../assets/weeks.json";
import ActivityModal from "../components/ActivityModal";
import Banner from "../components/Banner";
import Week from "../components/Week";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [currentDate, setCurrentDate] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  return (
    <div
      className="overflow-y-scroll h-70"
      onScroll={(event) => {
        setScroll(event.currentTarget.scrollTop);
      }}
    >
      <Banner scroll={scroll} />
      {/* empty space to force scrolling down for weeks */}
      <div className={"h-screen relative"}>
        <div className={"absolute min-h-screen py-4 top-3/4 left-1/3 transform -translate-x-1/3 w-full p-4"}>
        <div className={"rounded-xl bg-purple-950 p-6 font-bold text-white text-sm md:text-xl"}>
          <p>Welcome to Zombie School!! We are so glad you are here!<br/><br/>
            To get started, scroll down to week one and simply select an activity to try. New Activities will be released each week for 6 weeks! Not only will you sharpen your skills for the eventual Zombie Apocalypse, you will also sharpen your skills for middle school!<br/><br/>
            Be sure that you create a journal entry for each activity you complete. A journal entry should include the date you did the activity and the work or the score you achieved!  Then bring your journal to your advisory teacher in the first week of school next year.  For each completed activity in your journal, you will be entered into a prize drawing – complete 10 activities for 10 chances in the prize drawing!!
          </p>
        </div>
          <div className="absolute min-h-screen py-4 mt-6 mx-auto justify-items-center w-full">
            {weeks.map((week, index) => (
              <Week
                week={week}
                key={index + 1}
                index={index + 1}
                date={currentDate}
                setShowModal={setShowModal}
              />
            ))}
          </div>
        </div>
          <ActivityModal modalContent={showModal} onClose={() => setShowModal(false)} />
        </div>
    </div>
  );
}

export default Home;
