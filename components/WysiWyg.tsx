import React from "react";
import Image from "next/image";

export default function WysiWyg({ data }: any) {
  return (
    <>
      {data.map((item: any, index: React.Key | null | undefined): any => {
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
                  <li key={index} className="list-disc mt-6 ml-8">
                    {child.children[0].text}
                  </li>
                )
              )}
            </ul>
          );
        }
      })}
    </>
  );
}
