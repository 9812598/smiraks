import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import getManufactureBySlug from "../../../datalayer/getManufactureBySlug";
import WysiWyg from "@/components/WysiWyg";

const basUrl = process.env.STRAPI_BASE_URL;

type Props = {
  params: {
    slug: number | string;
  };
};

export default async function Page({ params: { slug } }: Props) {
  const data = await getManufactureBySlug({
    slugName: slug,
  });

  if (!data) {
    return <div>Not found data for this brand</div>;
  }

  return (
    <div className="flex flex-col justify-between items-start gap-12 max-w-[var(--max-width)] w-full">
      <h1 className="mt-20">{data.title}</h1>
      <div className="flex justify-between items-center gap-24 ">
        <h4>{data?.slogan}</h4>
        <Image
          src={basUrl + data.logo.data.attributes.url}
          alt={data.logo.data.attributes.name}
          width={300}
          height={130}
        />
      </div>

      <WysiWyg data={data.textAndPics} />

      <Button className="mb-44 mt-24 self-center">
        Связаться для просчета
      </Button>
    </div>
  );
}
