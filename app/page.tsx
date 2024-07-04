import MainCarousel from "@/components/(main)/MainCarousel";
import Main2Carousel from "@/components/(main)/Main2Carousel";

import MainSlogan from "@/components/(main)/MainSlogan";
import { Button } from "@/components/ui/button";
import Lottie from "@/components/(main)/Lottie";

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center gap-44">
      <h1 className="mt-20">О компании</h1>
      <MainCarousel />
      <MainSlogan />
      <Lottie />
      <Main2Carousel />
      <Button className="mb-44">Связаться для просчета</Button>
    </div>
  );
}
