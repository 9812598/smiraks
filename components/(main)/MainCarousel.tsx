import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CarouselBGPics = ["/main/slider1.png", "/main/slider2.png"];

export default function MainCarousel() {
  return (
    <Carousel className="w-[1090px]">
      <CarouselContent>
        {CarouselBGPics.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1 ">
              <Card className="border rounded-lg   shadow-sm">
                <CardContent
                  className="flex  items-center justify-center p-6 h-[340px] backdrop-opacity-10"
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
  );
}
