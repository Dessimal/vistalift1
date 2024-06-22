import React from "react";

const AccordionItem = ({ index, title, content, isOpen, onClick }) => {
  return (
    <div>
      <button onClick={() => onClick(index)}>
        {" "}
        // Using the onClick prop which is the handleClick function
        {title}
      </button>
      {isOpen && <div>{content}</div>}
    </div>
  );
};

export default AccordionItem;
