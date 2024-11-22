import React, { Fragment } from "react";
import TechToolIcon from "@/components/TechToolIcon";
import { twMerge } from "tailwind-merge";

const ToolBoxItems = ({
  items,
  className,
  itemsWrapperClassName,
}: {
  items: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <div
      className={twMerge("flex", className)}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6",
          itemsWrapperClassName
        )}
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <Fragment key={index}>
              {items.map((tool) => (
                <div
                  key={tool.title}
                  className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
                >
                  <TechToolIcon component={tool.iconType} />
                  <span className="font-semibold">{tool.title}</span>
                </div>
              ))}
            </Fragment>
          )),
        ]}
      </div>
    </div>
  );
};

export default ToolBoxItems;
