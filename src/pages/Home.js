import React, {useEffect, useState} from "react";
import ActivityModal from "../components/ActivityModal";
import Week from "../components/Week";
import weeks from "../assets/weeks.json";

function Home() {
    const [showModal, setShowModal] = useState(false);
    const [currentDate, setCurrentDate] = useState(false)

    useEffect(() => {
        setCurrentDate(new Date());
    }, []);


    return (
        <div>
            {weeks.map((week, index) => (
                <Week week={week} index={index + 1} date={currentDate} setShowModal={setShowModal}/>
            ))}
            <ActivityModal modalContent={showModal} onClose={() => setShowModal(false)}/>
        </div>
    );
}

export default Home;
