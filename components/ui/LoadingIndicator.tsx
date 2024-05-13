import { useEffect, useState } from "react";

export default function LoadingIndicator() {
  const [isActiveItem, setIsActiveItem] = useState(1);

  useEffect(() => {
    const timers = setInterval(() => {
      setIsActiveItem((prev) => prev + 1);
    }, 100);

    if (isActiveItem === 5) {
      setIsActiveItem(0);
    }

    return () => clearInterval(timers);
  }, [isActiveItem]);

  return (
    <div className="flex flex-col items-center space-y-4 justify-center my-40">
      <div className="flex space-x-4 ">
        <span
          className={`w-6 h-6 bg-black rounded-full ${
            isActiveItem >= 1 ? "opacity-100" : "opacity-10"
          } `}
        ></span>
        <span
          className={`w-6 h-6 bg-black rounded-full ${
            isActiveItem >= 2 ? "opacity-100" : "opacity-10"
          } `}
        ></span>
        <span
          className={`w-6 h-6 bg-black rounded-full ${
            isActiveItem >= 3 ? "opacity-100" : "opacity-10"
          } `}
        ></span>
        <span
          className={`w-6 h-6 bg-black rounded-full ${
            isActiveItem >= 4 ? "opacity-100" : "opacity-10"
          } `}
        ></span>
      </div>
      <h1 className="font-bold animate-bounce ">LOADİNG...</h1>
    </div>
  );
}
