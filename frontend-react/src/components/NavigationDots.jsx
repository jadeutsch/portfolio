import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="navigation">
      {["home", "about", "work", "skills", "contact"].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="navigationDot"
          style={active === item ? { backgroundColor: "#01497c" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
