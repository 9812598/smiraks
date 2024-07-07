"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";

const ListItem = [
  { title: "ВЕДУЩИЙ ВАЛИК ЛЕНТЫ В СБОРЕ", art: "ETV00108" },
  { title: "Подшипник скольжения D.35XD.42X30", art: "HFL3530" },
  { title: "ВЕДУЩИЙ ВАЛИК ЛЕНТЫ В СБОРЕ", art: "ETV00108" },
  { title: "Подшипник скольжения D.35XD.42X30", art: "HFL3530" },
  { title: "Подшипник скольжения D.35XD.42X30", art: "HFL3530" },
];

<div className="w-full grid grid-cols-6 gap-6 place-content-between">
  <span className="col-span-4">ВЕДУЩИЙ ВАЛИК ЛЕНТЫ В СБОРЕ</span>
  <span className="col-span-2">ETV00108</span>
  <span className="col-span-4">Подшипник скольжения D.35XD.42X30</span>
  <span className="col-span-2">HFL3530</span>
</div>;

const LongList = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <div className="w-full grid grid-cols-6 gap-6 place-content-between">
        {ListItem.slice(0, 2).map((item, index) => (
          <>
            <span className="col-span-4" key={index}>
              {item.title}
            </span>
            <span className="col-span-2">{item.art}</span>
          </>
        ))}

        {showAll && (
          <>
            {ListItem.slice(2).map((item, index) => (
              <>
                <span className="col-span-4" key={index}>
                  {item.title}
                </span>
                <span className="col-span-2">{item.art}</span>
              </>
            ))}
          </>
        )}
      </div>
      <Button
        onClick={() => setShowAll(!showAll)}
        variant={"link"}
        className="mt-4 text-2xl font-normal"
      >
        {showAll ? "Свернуть" : "Завернуть весь спиок"}
      </Button>
    </>
  );
};

export default LongList;
