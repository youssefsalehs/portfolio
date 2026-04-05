import Image from "next/image";
function ImageComp() {
  return (
    <div className="basis-[49.1%]  ">
      <div className="relative aspect-square flex items-center justify-end">
        <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
          <div className="absolute inset-0 scale-50 rounded-full bg-primary blur-xl" />

          <div className="relative rounded-md overflow-hidden w-full h-full border border-white/20 shadow-[0_0_15px_#c17cff]">
            <Image
              src="/me.jpg"
              alt="Youssef Ashraf"
              rel="preload"
              loading="eager"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageComp;
