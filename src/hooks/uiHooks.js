import { useEffect, useState } from "react";

export const useMobile = (width = 425) => {
  const [isMobile, setIsMobile] = useState(false);

  const controlResize = () => {
    if (window.innerWidth <= width && !isMobile) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", controlResize);
    controlResize();
    return () => {
      window.removeEventListener("resize", controlResize);
    };
  }, []);
  return isMobile;
};
