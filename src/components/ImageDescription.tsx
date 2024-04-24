import { DetailedHTMLProps, ImgHTMLAttributes, ReactNode } from "react";

interface Props {
  direction: "left" | "right";
  src: string;
  alt?: string;
  children: ReactNode;
  className?: string;
  imageProps?: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
}

export default function ImageDescription({ direction = "right", src, alt, children, imageProps, className }: Readonly<Props>) {
  const flexDirection = direction === "left" ? "flex-row-reverse" : "flex-row";

  return (
    <div className={`flex w-full flex-shrink-0 bg-white min-h-[100vh] items-center justify-between ${flexDirection} ${className}`}>
      <img
        className="w-1/3 aspect-square h-fit rounded-lg object-cover"
        src={src}
        alt={alt}
        {...imageProps}
      />
      {children}
    </div>
  );
}
