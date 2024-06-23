import React from "react";

const AccordionItem = ({ index, title, content, isOpen, onClick }) => {
  return (
    <div>
      <button onClick={() => onClick(index)}> {title}</button>
      {isOpen && <div>{content}</div>}
    </div>
  );
};

export default AccordionItem;
