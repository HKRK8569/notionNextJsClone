import Image from "next/image";

export const Heros = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-5xl">
      <div className="flex justify-center w-full ">
        <div className="relative max-w-[640px] w-full">
          <Image
            src="/home-hero.png"
            height={749}
            width={2048}
            alt="homeHero"
          />
        </div>
      </div>
    </div>
  );
};
