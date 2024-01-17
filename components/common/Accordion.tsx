'use client';
import Item from "./Item";
import { useState } from "react";

const Accordion = ({backgroundColor,data}:{backgroundColor?:any,data?:any}) => {
  const [ActiveIndex, setActiveIndex] = useState(null);

  const handleToggle = (index:any) => {
    setActiveIndex(ActiveIndex === index ? null : index);
  };

  return (
    <div id="accordion-wrapper" className="flex flex-col gap-0 max-w-[800px] w-full mx-auto rounded-xl   overflow-hidden">
      {data?.map((faq:any, i:any) => (
        <Item
          key={i}
          answerID={`answer-${i + 1}`}
          questionID={`question-${i + 1}`}
          isActive={ActiveIndex === i}
          onClick={() => handleToggle(i)}
          question={faq.question}
          answer={faq.answer}
          ariaExpanded={ActiveIndex === i ? true : false}
          backgroundColor={backgroundColor}
        />
      ))}
    </div>
  );
};

export default Accordion;



// ref: Accordion use in tailwind css 
// https://github.com/alexandrezahrai/accordion-react-tailwind