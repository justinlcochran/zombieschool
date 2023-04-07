import React, { useState } from "react";
import { ReactComponent as CaretDown } from "../assets/caret-down-bold-svgrepo-com.svg";

function Week({ week, index }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <div className="m-auto h-auto w-11/12 mb-1">
        <div
          className="flex justify-between items-center px-4 bg-blue-600"
          onClick={toggleExpanded}
        >
          <h1 className="leading-8 text-2xl font-medium">{`Week ${index}:`}</h1>
          <CaretDown className={`h-8 w-8 transition ${expanded ? "-scale-y-100" : ""}`} />
        </div>
        <div
          /* The transition requires starting and ending heights not be dynamic so we must set those heights via js.
          Overflow used to hide items - we are not conditionally rendering the expanded items 
          since the collapsing transition closes immediately when the items are not rendered. */
          className={`overflow-hidden transition-all duration-300 ease-in-out bg-blue-950 w-[90%] ml-auto mr-0
          ${expanded ? "opacity-100" : "opacity-0"}
          `}
          // use style instead of tailwind since height is programmatically generated
          style={{ height: expanded ? `${2 * week.activities.length}rem` : "0" }}
        >
          {week.activities.map((activity, index) => (
            <h2 className={`h-8 leading-8 m-auto`} key={index}>
              {activity}
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Week;
