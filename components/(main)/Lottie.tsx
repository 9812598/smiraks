import React from "react";

const dataLottie = [
  {
    link: "https://lottie.host/embed/f32f794a-349f-469a-9d5b-91c1f88335cc/hVUZpQI4rp.json",
    title1: "Быстрая доставка",
    title2: "Напрямую из Европы",
  },
  {
    link: "https://lottie.host/embed/0bb1dd28-b45c-4712-a5eb-35dc9d40c47b/8b7oSquqdF.json",
    title1: "Проверенное качество",
    title2: "Ведущие производители",
  },
  {
    link: "https://lottie.host/embed/027eac73-e44e-4827-8530-5b8de3b677b4/XblwC77cvR.json",
    title1: "Широкий ассортимент",
    title2: "Огромный каталог",
  },
];

export default function Lottie() {
  return (
    <div className="grid grid-cols-3 gap-40 w-full max-w-[var(--max-width)] place-items-center ">
      {dataLottie.map((item) => (
        <div
          key={item.link}
          className="flex flex-col justify-between items-center gap-6"
        >
          <iframe src={item.link}></iframe>
          <span>{item.title1}</span>
          <span>{item.title2}</span>
        </div>
      ))}
    </div>
  );
}
