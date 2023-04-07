import React, { useState } from "react";
import ActivityModal from "../components/ActivityModal";
import Week from "../components/Week";
import weeks from "../assets/weeks.json";

function Home() {
  const [showModal, setShowModal] = useState(false);

  const activityContext = {
    week1: {
      activity1: {
        title: "I Will Survive",
        description: "Test your survival knowledge!!",
        instructions: `After reading the article, answer the following questions in your journal:\n\n1. In an apocalypse situation, which team member are you?\n2. Would York International be a good location for your team to use as a rendezvous site?\n3. What will you need to bring with you into the zombie apocalypse?\n4. Why is humanity important?`,
        link: "https://theweek.com/articles/443278/complete-guide-surviving-zombie-apocalypse",
      },
    },
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      {weeks.map((week, index) => (
        <Week week={week} index={index} />
      ))}
      <button
        className={"bg-blue-500 text-white font-bold round-lg p-4"}
        onClick={() => setShowModal(activityContext.week1.activity1)}
      >
        Toggle modal
      </button>
      <ActivityModal modalContent={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default Home;
