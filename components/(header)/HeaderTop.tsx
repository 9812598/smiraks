import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function TopHeader() {
  return (
    <div className="flex justify-center items-center bg-[hsl(var(--main))] w-full h-48 text-3xl">
      <div className="max-w-[var(--max-width)] flex w-full justify-between items-center ">
        <Link href="/">
          <Image
            src="/logoSmiraks.png"
            alt="logo"
            width={302}
            height={100}
            className="cursor-pointer"
          />
        </Link>
        <div className="flex flex-col justify-center items-center gap-7">
          <span>+ 7 (495) 799-07-56</span>
          <span>+ 7 (800) 770-09-27</span>
        </div>
        <div className="">
          <span>smiraks756@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
