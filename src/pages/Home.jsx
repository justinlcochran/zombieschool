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
      className="overflow-y-scroll h-screen"
      onScroll={(event) => {
        setScroll(event.currentTarget.scrollTop);
      }}
    >
      <Banner scroll={scroll} />
      {/* empty space to force scrolling down for weeks */}
      <div className="h-screen" />
      <div className="min-h-screen py-4">
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
      <ActivityModal modalContent={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default Home;
