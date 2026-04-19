import ShortBrief from "./ShortBrief";
import ImageComp from "./ImageComp";
export default function HeroSection() {
  return (
    <div className="flex flex-col-reverse gap-8 lg:flex-row items-center justify-between pt-28 md:pt-20 ">
      <ShortBrief />
      <ImageComp />
    </div>
  );
}
