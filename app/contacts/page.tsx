import React from "react";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div className="flex flex-col justify-between items-center gap-44">
      <h1 className="mt-20">Контакты</h1>

      <div className="max-w-[var(--max-width)] w-full grid grid-cols-2 gap-24">
        <div className="flex flex-col gap-6">
          <span>
            <span className="text-[hsl(var(--red))]">г. Королёв</span>, пр-кт
            Королёва, 5Д, корп. 1
          </span>
          <h4>+ 7 (495) 799-07-56</h4>
          <a href="mailto:smiraks756@gmail.com">smiraks756@gmail.com</a>
        </div>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A0c7bff36efff0f6ff33cbbb3e6b85d5df34aae6170dad9da807ef7109f044f00&amp;source=constructor"
          width="500"
          height="300"
        ></iframe>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Aca2b1072cd0b44555b583a98fd49f6595d6a105bcb501485eacd5cc158115d87&amp;source=constructor"
          width="500"
          height="300"
        ></iframe>
        <div className="flex flex-col gap-6 items-end">
          <span>
            <span className="text-[hsl(var(--red))]">г. Новосибирск</span>,
            Богдана Хмельницкого, 71
          </span>
          <h4>+ 7 (800) 770-09-27</h4>
          <a href="mailto:aea.smiraks@gmail.com">aea.smiraks@gmail.com</a>
        </div>
      </div>
      <Button className="mb-44" variant={"link"} asChild>
        <a href="smiraks_req.docx">Скачать реквизиты</a>
      </Button>
    </div>
  );
}
