import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div className="flex flex-col justify-between items-start gap-12 max-w-[var(--max-width)] w-full">
      <h1 className="mt-20">REX-Technologie</h1>
      <div className="flex justify-between items-center gap-24 ">
        <h4>REX-Technologie - 35-летняя история компании по всему миру.</h4>
        <Image
          src="/catalog/brands/rex.jpg"
          alt="rex"
          width={300}
          height={130}
        />
      </div>
      <p>
        2018 Завершение строительства нового здания компании REX Maschinenbau,
        по адресу Sonystraße 5, Thalgau. Расширение предприятия по обработке
        нержавеющей стали REX, Irlachstraße 31, Thalgau.
      </p>
      <p>
        2017 Приобретение дополнительной производственной площадки площадью 15
        000 м² в Тальгау закладывает основу для дальнейшего роста. Под одной
        крышей построен современный инженерно-технологический центр площадью
        7500 м² с учебными помещениями. 70 дилеров представляют технологию REX в
        более чем 80 странах мира.
      </p>
      <div className="w-full relative h-48 ">
        <Image
          src="/catalog/brands/1.jpg"
          alt="rex1"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <p>
        2011 Расширение технологического центра. Впервые доля экспорта превышает
        90 %
      </p>
      <div className="w-full relative h-48 ">
        <Image
          src="/catalog/brands/2.jpg"
          alt="rex2"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <p>
        2008 Расширение и пополнение машиностроительного подразделения полностью
        автоматическим подразделением по производству нержавеющей стали.
      </p>
      <p>
        В 2006 году была основана операционная компания REX-Technologie GmbH &
        Co. KG, а организационно-правовая форма существующей компании изменилась
        на REX-Vermögensverwaltungs GmbH.
      </p>
      <div className="w-full relative h-48 ">
        <Image
          src="/catalog/brands/3.jpg"
          alt="rex3"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <p>
        2003 Расширение машиностроительной компании. В компании создан
        собственный конструкторский отдел. REX-Technologie сейчас присутствует
        более чем в 70 странах.
      </p>
      <div className="w-full relative h-48 ">
        <Image
          src="/catalog/brands/4.jpg"
          alt="rex4"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <p>
        В 2001 году Андреас Хаслахер и Кристиан Хаас купили акции компании и
        взяли под свой контроль производственные мощности в Тальгау.
      </p>
      <Button className="mb-44 mt-24 self-center">
        Связаться для просчета
      </Button>
    </div>
  );
}
