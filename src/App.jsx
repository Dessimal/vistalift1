import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const App = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    { title: "Accordion 1", content: "Content 1" },
    { title: "Accordion 2", content: "Content 2" },
    { title: "Accordion 3", content: "Content 3" },
  ];

  return (
    <div>
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          index={index} // Passing the index value
          title={item.title} // Passing the title value
          content={item.content} // Passing the content value
          isOpen={openIndex === index} // Passing a boolean value
          onClick={handleClick} // Passing the handleClick function
        />
      ))}
    </div>
  );
};

export default App;
