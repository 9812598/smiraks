import MainCarousel from "@/components/(main)/MainCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center gap-14">
      <h1 className="mt-14">О компании</h1>
      <MainCarousel />
    </div>
  );
}
