import Image from "next/image";
import Link from "next/link";

const UnderConstruction: React.FC = () => {
  return (
    <div className="py-14 text-center">
      <div className="flex justify-center">
        <Link
          href="/"
          className="transition-opacity duration-300 ease-[ease-in-out] hover:opacity-80"
        >
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
      <div
        className={`pt-2 font-[Helvetica] text-[2.4rem] font-bold text-[#ffca39] after:content-["This_page_is_under_construction"]`}
      />
    </div>
  );
};

export default UnderConstruction;
