import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TextParallaxContentProps {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
}

export const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: TextParallaxContentProps) => {
  return (
    <div className="relative">
      <StickyImage imgUrl={imgUrl} />
      <OverlayCopy heading={heading} subheading={subheading} />
      <div className="bg-[#0a0a0a]">{children}</div>
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "50vh",
        scale,
      }}
      ref={targetRef}
      className="sticky top-0 z-0 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-[50vh] w-full flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8"
    >
      <p className="mb-2 text-center text-sm sm:text-base lg:text-xl md:mb-4 font-light tracking-wider uppercase text-[#d4af37]">
        {subheading}
      </p>
      <p className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-serif font-light text-white">
        {heading}
      </p>
    </motion.div>
  );
}; 