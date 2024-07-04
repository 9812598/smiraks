import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CarouselBGPics = ["/main/opacitySlider1.png", "/main/opacitySlider2.png"];

export default function Main2Carousel() {
  return (
    <div className="w-svw bg-[url('/main/background.png')] bg-no-repeat bg-cover flex justify-center items-center py-16">
      <Carousel className="w-[1090px] ">
        <CarouselContent>
          {CarouselBGPics.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1 ">
                <Card>
                  <CardContent
                    className="flex  items-center justify-center p-6 h-[340px]"
                    style={{ backgroundImage: `url(${item})` }}
                  >
                    <span className="text-4xl font-semibold"></span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
