import { useState } from "react";
import tabs from "./data";

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (idx) => {
    setActiveTab(idx);
  };

  return (
    <>
      <ul>
        {tabs.map((tab, idx) => {
          return (
            <li
              key={idx}
              onClick={() => handleClick(idx)}
              className={activeTab === idx ? "btn btn-primary" : ""}
            >
              {tab.title}
            </li>
          );
        })}
      </ul>

      <div>{tabs[activeTab].content}</div>
    </>
  );
};

export default Tab;
