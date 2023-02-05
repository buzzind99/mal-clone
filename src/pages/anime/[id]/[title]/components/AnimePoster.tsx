import Image from "next/image";

interface Props {
  title: string;
  image_url: string | null;
}

const AnimePoster: React.FC<Props> = ({ title, image_url }) => {
  return (
    <>
      <Image
        src={image_url || "/image-placeholder-vertical.webp"}
        alt={title}
        width={225}
        height={320}
        priority={true}
        className="mb-[0.6rem] cursor-pointer object-cover"
      />
      <div
        title="Dummy button"
        className="cursor-pointer py-[0.125rem] px-[0.1875rem] text-[0.6875rem] text-[#1c439b] hover:bg-[#1c439b] hover:text-white"
      >
        Add to My List
      </div>
      <div
        title="Dummy button"
        className="cursor-pointer border-y-[1px] border-[#92b0f1] px-[0.1875rem] pt-[0.125rem] pb-[0.1rem] text-[0.6875rem] text-[#1c439b] hover:bg-[#1c439b] hover:text-white"
      >
        Add to Favorites
      </div>
      <div id="share-to-socials" className="my-[1.2rem] flex">
        <div
          title="Facebook"
          className="mr-[0.8125rem] flex h-[2.0625rem] w-[2.0625rem] cursor-pointer items-center justify-center rounded-[0.2rem] bg-[#3b5998] transition-opacity duration-300 ease-[ease-in-out] hover:opacity-70"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            fill="white"
            width="0.9rem"
          >
            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
          </svg>
        </div>
        <div
          title="Twitter"
          className="mr-[0.8125rem] flex h-[2.0625rem] w-[2.0625rem] cursor-pointer items-center justify-center rounded-[0.2rem] bg-[#1da1f2] transition-opacity duration-300 ease-[ease-in-out] hover:opacity-70"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="white"
            width="1.4rem"
          >
            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
          </svg>
        </div>
        <div
          title="Reddit"
          className="mr-[0.8125rem] flex h-[2.0625rem] w-[2.0625rem] cursor-pointer items-center justify-center rounded-[0.2rem] bg-[#ff5700] transition-opacity duration-300 ease-[ease-in-out] hover:opacity-70"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="white"
            width="1.5rem"
          >
            <path d="M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 149 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z" />
          </svg>
        </div>
        <div
          title="Tumblr"
          className="flex h-[2.0625rem] w-[2.0625rem] cursor-pointer items-center justify-center rounded-[0.2rem] transition-opacity duration-300 ease-[ease-in-out] hover:opacity-70"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="#36465d"
          >
            <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-82.3 364.2c-8.5 9.1-31.2 19.8-60.9 19.8-75.5 0-91.9-55.5-91.9-87.9v-90h-29.7c-3.4 0-6.2-2.8-6.2-6.2v-42.5c0-4.5 2.8-8.5 7.1-10 38.8-13.7 50.9-47.5 52.7-73.2.5-6.9 4.1-10.2 10-10.2h44.3c3.4 0 6.2 2.8 6.2 6.2v72h51.9c3.4 0 6.2 2.8 6.2 6.2v51.1c0 3.4-2.8 6.2-6.2 6.2h-52.1V321c0 21.4 14.8 33.5 42.5 22.4 3-1.2 5.6-2 8-1.4 2.2.5 3.6 2.1 4.6 4.9l13.8 40.2c1 3.2 2 6.7-.3 9.1z" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default AnimePoster;
