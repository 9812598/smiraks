import React from "react";

export default function Footer() {
  return (
    <div className="w-full flex justify-center items-center bg-[hsl(var(--main))] ">
      <div className="flex justify-between items-center h-52 w-full max-w-[var(--max-width)]">
        <div className="flex flex-col justify-between items-start w-full gap-8">
          <span>г. Королев, пр-кт Королева, 5Д, корп 1</span>
          <span>© 2024 Смиракс - Ваш надеждый поставщик</span>
        </div>
        <div className="flex flex-col justify-between items-end gap-8 w-full">
          <span>г. Нвосибирск, Богдана Хмельницкого, 71</span>
          <span>smiraks756@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
