import Link from "next/link";
import React from "react";

const dataHeader = [
  { title: "О компании", link: "/" },
  { title: "Производители", link: "/brands" },
  { title: "Каталог", link: "/catalog" },
  { title: "Контакты", link: "/contacts" },
];
export default function HeaderMenu() {
  return (
    <div className="font-semibold flex justify-center items-center bg-[hsl(var(--salad))] w-full h-20 text-[hsl(var(--main))] sticky">
      <div className="max-w-[var(--max-width)] flex w-full justify-between items-center">
        <ul className="flex gap-9 ">
          {dataHeader.map((item) => (
            <li key={item.title}>
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
