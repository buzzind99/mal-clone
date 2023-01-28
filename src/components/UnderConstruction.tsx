import Image from "next/image";
import Link from "next/link";

const UnderConstruction: React.FC = () => {
  return (
    <div className="py-14 text-center">
      <div className="flex justify-center">
        <Link href="/">
          <Image
            src="/under-construction.webp"
            alt="Page is Under Construction"
            width={506}
            height={360}
            priority={true}
            className="object-cover"
          ></Image>
        </Link>
      </div>
      <div className="pt-2 font-[Helvetica] text-[2.4rem] font-bold text-[#ffca39]">
        This page is under construction
      </div>
    </div>
  );
};

export default UnderConstruction;
