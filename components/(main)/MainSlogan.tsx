import React from "react";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";

export default function MainSlogan() {
  return (
    <HeroHighlight className="w-svw flex flex-col justify-center items-center ">
      <h2 className="mb-12">Качественные Европейские комплектующие для</h2>
      <Highlight className="text-5xl">пищевой промышленности</Highlight>
    </HeroHighlight>
  );
}
