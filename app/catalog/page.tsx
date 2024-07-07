import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";

const dataCatalog = [
  {
    title: "Волчковый инструмент",
    img: "/catalog/cat1.png",
  },
  {
    title: "Волчковый инструмент",
    img: "/catalog/cat1.png",
  },
  {
    title: "Волчковый инструмент",
    img: "/catalog/cat1.png",
  },
  {
    title: "Волчковый инструмент",
    img: "/catalog/cat1.png",
  },
  {
    title: "Волчковый инструмент",
    img: "/catalog/cat1.png",
  },
  {
    title: "Волчковый инструмент",
    img: "/catalog/cat1.png",
  },
];

export default function page() {
  return (
    <div className="flex flex-col justify-between items-center gap-44">
      <h1 className="mt-20">Каталог</h1>
      <div className="max-w-[var(--max-width)] w-full grid grid-cols-3 gap-x-24 gap-y-32">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col justify-between items-center gap-14 bg-[hsl(var(--main))] drop-shadow-md px-10 py-14 hover:bg-[hsl(var(--main))]/90"
          >
            <Image
              src="/catalog/cat1.png"
              alt="logo"
              width={190}
              height={166}
            />
            <span>Волчковый инструмент</span>
          </div>
        ))}
      </div>
      <Button className="mb-44">Связаться для просчета</Button>
    </div>
  );
}
