import React from "react";
import Image from "next/image";
import Link from "next/link";

import CatalogPagination from "@/components/CatalogPagination";
import getAllManufactures from "@/datalayer/getAllManufactures";
const baseUrl = process.env.STRAPI_BASE_URL;

export default async function page() {
  const { data, meta } = await getAllManufactures();
  console.log(data[0].attributes, "data");
  console.log(meta, "meta");

  return (
    <div className="flex flex-col justify-between items-center gap-44">
      <h1 className="mt-20">Производители</h1>
      <div className="max-w-[var(--max-width)] w-full grid grid-cols-3 gap-x-24 gap-y-32">
        {data.map((item: any, index: number) => (
          <Link key={index} href={`/brands/${item?.attributes?.slug}`}>
            <div
              key={index}
              className="flex flex-col justify-between items-center gap-14 bg-[hsl(var(--main))] drop-shadow-md px-8 py-14 hover:bg-[hsl(var(--main))]/90 max-w-[300px] h-96"
            >
              <Image
                src={`${baseUrl}${item?.attributes?.logo?.data?.attributes?.url}`}
                alt={item?.attributes?.logo?.data?.attributes?.alternativeText}
                width={194}
                height={48}
              />
              <h4>{item?.attributes?.title}</h4>
              <p>{item?.attributes?.slogan}</p>
            </div>
          </Link>
        ))}
      </div>
      <CatalogPagination />
    </div>
  );
}
