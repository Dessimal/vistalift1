import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import "./App.css";

const App = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "Leverage Our In-Demand Digital Marketing Solutions",
      content:
        "We specialize in creating one-of-a-kind and memorable brand identities that speak to your target audience. From logo design to brand messaging, we ensure that your brand stands out in a crowded market.",
    },
    {
      title: "Web Development",
      content:
        "With our expert SEO services, you can improve your online visibility and attract more organic traffic. We optimize your website's content and use strategic keywords to improve search engine rankings and drive targeted traffic to your site.",
    },
    {
      title: "Content Marketing",
      content:
        "Create compelling and strategic content that is tailored to your audience, search engine optimized, and distributed across multiple channels to increase brand awareness, engagement, and conversions.",
    },
    {
      title: "Video Marketing",
      content:
        "Use captivating video content to engage your audience and tell the story of your brand. Our video production team produces high-quality videos that highlight your products, services, and brand personality, allowing you to connect with your target audience on a deeper level.",
    },
    {
      title: "Graphics and Motion Graphics",
      content:
        "Make your visual presence stand out with our eye-catching graphics and motion graphics. Whether it is social media graphics, infographics, or animated videos, we create visually appealing assets that capture attention and leave an impression.",
    },
    {
      title: "Ad Management",
      content:
        "Use precision-targeted ad campaigns to make the most of your advertising budget and reach your target audience. Our ad management services assist you in creating and optimizing ads for various platforms, ensuring maximum ROI and results.",
    },
    {
      title: "Media Publications",
      content:
        "Use strategic media placements to increase your industry's credibility and authority. Our media publication services assist you in obtaining coverage in top-tier publications and outlets, increasing your brand's visibility and reputation.",
    },
  ];

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          number={index + 1}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default App;
