import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";
const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
  "Responsive",
  "Fast",
  "Intuitive",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg-py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1">
        <div
          className="flex"
          style={{
            maskImage:
              "linear-gradient(to_right, transparent, black_10%, black_90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to_right, transparent, black_10%, black_90%, transparent)",
          }}
        >
          <div className="flex flex-none gap-4 py-3 pr-4 animate-move-left [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {words.map((word) => (
                  <div
                    key={word}
                    className="inline-flex gap-4 items-center text-gray-900"
                  >
                    <span className="text-gray-900 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <StarIcon className="size-6 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};