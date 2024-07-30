import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import getManufactureBySlug from "../../../datalayer/getManufactureBySlug";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import WysiWyg from "@/components/WysiWyg";

const basUrl = process.env.STRAPI_BASE_URL;

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params: { slug } }: Props) {
  const data = await getManufactureBySlug({
    slugName: slug,
  });

  if (!data) {
    return <div>Not found data for this brand</div>;
  }

  // data.textAndPics.forEach((item: any) => {
  //   if (item.type === "list") {
  //     item.children.forEach((i: any) => {
  //       console.log(i, "manufacturerData");
  //     });
  //   }
  // });

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

      {data.textAndPics.map(
        (
          item: {
            type: string;
            children: any[];
            image: {
              url: string | StaticImport;
              name: string;
              width: string | number | undefined;
              height: string | number | undefined;
            };
          },
          index: React.Key | null | undefined
        ): any => {
          if (item.type == "paragraph") {
            {
              return (
                <div key={index}>
                  {item.children.map(
                    (child: any, index: React.Key | null | undefined) => (
                      <span
                        key={index}
                        className={child?.bold ? "font-bold" : ""}
                      >
                        {child.text}
                      </span>
                    )
                  )}
                </div>
              );
            }
          } else if (item.type == "image") {
            return (
              <Image
                src={item.image.url}
                alt={item.image.name}
                width={item.image.width}
                height={item.image.height}
                key={index}
                className="self-center"
              />
            );
          } else if (item.type == "heading") {
            return <h4 key={index}>{item.children[0].text}</h4>;
          } else if (item.type == "list") {
            return (
              <ul key={index}>
                {item.children.map(
                  (child: any, index: React.Key | null | undefined) => (
                    <li key={index} className="list-disc mt-8 ml-8">
                      {child.children[0].text}
                    </li>
                  )
                )}
              </ul>
            );
          }
        }
      )}
      <WysiWyg />

      <Button className="mb-44 mt-24 self-center">
        Связаться для просчета
      </Button>
    </div>
  );
}
