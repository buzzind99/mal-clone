import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  className?: string;
  url: string;
  onShowModalChange: (value: boolean) => void;
}

const VideoPortal: React.FC<Props> = ({
  className,
  url,
  onShowModalChange,
}) => {
  const style = className || "";
  const ref = useRef<Element | null>(null);

  const [mounted, setMounted] = useState(false);
  const [videoPosition, setVideoPosition] = useState(0);

  useEffect(() => {
    ref.current = document.querySelector("#video-portal");
    setVideoPosition((window.innerHeight - 729) / 2 + window.pageYOffset);
    setMounted(true);
  }, []);

  const showModalChangeHandler = () => {
    onShowModalChange(false);
  };

  const videoElement = (
    <>
      <div
        id="backdrop"
        onClick={showModalChangeHandler}
        className="fixed top-0 left-0 z-[49] h-screen w-screen bg-[rgba(102,102,102,.3)]"
      ></div>
      <div
        id="video-player"
        className={`absolute z-50 bg-black shadow-[0px_0px_30px_rgba(0,0,0,0.60)] ${style}`}
        style={{ top: `${videoPosition}px` }}
      >
        <button
          title="Close"
          onClick={showModalChangeHandler}
          className="absolute top-[-15px] right-[-16px] z-[51] h-[32px] w-[32px] bg-[url(/close_btn.png)]"
        ></button>
        <iframe
          width="947"
          height="729"
          src={url}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </>
  );

  return mounted && ref.current
    ? createPortal(videoElement, ref.current)
    : null;
};

export default VideoPortal;
