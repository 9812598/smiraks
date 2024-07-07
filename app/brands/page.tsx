import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import CatalogPagination from "@/components/CatalogPagination";

export default function page() {
  return (
    <div className="flex flex-col justify-between items-center gap-44">
      <h1 className="mt-20">Производители</h1>
      <div className="max-w-[var(--max-width)] w-full grid grid-cols-3 gap-x-24 gap-y-32">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col justify-between items-center gap-14 bg-[hsl(var(--main))] drop-shadow-md px-8 py-14 hover:bg-[hsl(var(--main))]/90 max-w-[300px]"
          >
            <Image
              src="/brands/brandsCat/mauting.png"
              alt="logo"
              width={194}
              height={48}
            />
            <h4>MAUTING</h4>
            <p>
              Производство оборудования для копчения и термической обработки
              мяса.
            </p>
          </div>
        ))}
      </div>
      <CatalogPagination />
    </div>
  );
}
