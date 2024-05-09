import { useEffect } from "react";

const useScrollToHash = (hash, headerHeight) => {
  useEffect(() => {
    if (hash === "") {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - headerHeight,
            behavior: "smooth",
          });
        }
      }, 0);
    }
  }, [hash, headerHeight]);
};

export default useScrollToHash;
