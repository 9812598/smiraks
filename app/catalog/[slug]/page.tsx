import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import LongList from "@/components/(catalog)/LongList";

export default function page() {
  return (
    <div className="flex flex-col justify-between items-center gap-12 max-w-[var(--max-width)] w-full">
      <h1 className="mt-20">REX-Technologie</h1>
      <div className="flex justify-between items-center w-full">
        <p className="basis-2/3">
          Компания “СМИРАКС" поставляет оригинальный волчковый инструмент ,
          производства компании LUMBEC&WALTZ Germany и компании ZICO. Germany
        </p>
        <div className="flex flex-col items-center justify-center gap-5 basis-1/3">
          <Image
            src="/catalog/brands/volk.jpg"
            alt="volchcoviy"
            width={120}
            height={143}
          />
          <Button variant={"link"} asChild>
            <a href="smiraks_req.docx">Скачать каталог</a>
          </Button>
        </div>
      </div>
      <h3>Характеристики</h3>
      <p>
        LUMBEC&WALTZ производит широкий спект продукции, мы будем рады подобрать
        для вас и рассчитать лучшую цену на запасные части и оптимальную
        стоимость доставки.
      </p>
      <Image
        src="/catalog/brands/table1.jpg"
        alt="table1"
        width={802}
        height={181}
      />
      <Image
        src="/catalog/brands/table2.jpg"
        alt="table2"
        width={802}
        height={181}
      />
      <h3>Пример наменклатуры</h3>

      <LongList />
      <Button className="my-44">Связаться для просчета</Button>
    </div>
  );
}
