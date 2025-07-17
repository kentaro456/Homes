import React, { ReactNode, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface MenuParallaxItem {
  imgUrl: string;
  subheading: string;
  heading: string;
  description?: string;
  price?: string;
  badge?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

interface MenuTransitionParallaxProps {
  menus: MenuParallaxItem[];
  title?: string;
}

export const MenuTransitionParallax: React.FC<MenuTransitionParallaxProps> = ({ menus, title }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation du titre
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          y: 60,
          opacity: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });
      }

      // Animation du scroll horizontal
      if (scrollContainerRef.current) {
        const scrollWidth = scrollContainerRef.current.scrollWidth;
        const containerWidth = scrollContainerRef.current.clientWidth;
        
        gsap.to(scrollContainerRef.current, {
          x: -(scrollWidth - containerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#0a0a0a] text-[#e5e5e5] overflow-hidden"
    >
      {/* Background texturé dark urban */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a]/50 to-[#0a0a0a]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/5 to-transparent"></div>
      </div>

      <div className="max-w-8xl mx-auto px-6 lg:px-8 relative z-10">
        {title && (
          <motion.h2 
            ref={titleRef}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-16 text-center text-[#e5e5e5] tracking-tight leading-none"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            {title.split(' ').map((word, index) => (
              <span key={index} className={word.toLowerCase() === 'incontournables' ? 'text-[#d4af37] italic' : ''}>
                {word}{' '}
              </span>
            ))}
          </motion.h2>
        )}

        {/* Scroll horizontal container */}
        <div className="relative overflow-hidden">
          <div 
            ref={scrollContainerRef}
            className="flex gap-8 pb-8"
            style={{ width: `${menus.length * 420}px` }}
          >
            {menus.map((menu, idx) => (
              <motion.div
                key={idx}
                className="flex-none w-96 group"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
              >
                <div className="relative bg-[#1a1a1a]/60 backdrop-blur-lg border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all duration-700 overflow-hidden rounded-2xl group-hover:shadow-2xl group-hover:shadow-[#d4af37]/20">
                  {/* Badge */}
                  {menu.badge && (
                    <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-[#d4af37] to-[#f4d76d] text-[#0a0a0a] px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full">
                      {menu.badge}
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={menu.imgUrl}
                      alt={menu.heading}
                      className="w-full h-full object-cover brightness-90 contrast-110"
                      whileHover={{ scale: 1.1, brightness: 1 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/40 to-transparent"></div>
                  </div>

                  {/* Contenu */}
                  <div className="p-6">
                    <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase mb-2 block">
                      {menu.subheading}
                    </span>
                    <h3 className="font-serif text-xl font-light text-[#e5e5e5] mb-3 group-hover:text-[#d4af37] transition-colors duration-500">
                      {menu.heading}
                    </h3>
                    {menu.description && (
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        {menu.description}
                      </p>
                    )}
                    <div className="flex items-center justify-between">
                      {menu.price && (
                        <div className="text-2xl font-bold text-[#d4af37]">{menu.price}</div>
                      )}
                      <motion.a
                        href={menu.ctaHref}
                        className="px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#f4d76d] text-[#0a0a0a] font-bold text-sm tracking-wide uppercase transition-all duration-500 hover:shadow-lg hover:shadow-[#d4af37]/30"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {menu.ctaLabel || "Découvrir"}
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center text-[#d4af37] text-sm tracking-wider">
            <span className="mr-3">Faites défiler</span>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-[#d4af37]/60 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="w-2 h-2 bg-[#d4af37]/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface MenuParallaxContentProps {
  description?: string;
  price?: string;
  badge?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

const MenuParallaxContent: React.FC<MenuParallaxContentProps> = ({ description, price, badge, ctaLabel = "Découvrir", ctaHref = "#" }) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <div className="col-span-1 md:col-span-8 md:col-start-3 flex flex-col items-center">
      {badge && (
        <span className="mb-2 inline-block rounded-full bg-[#d4af37] px-4 py-1 text-sm font-semibold text-[#0a0a0a] shadow-lg border border-[#d4af37] uppercase tracking-wider">
          {badge}
        </span>
      )}
      {price && (
        <span className="mb-2 text-2xl font-bold text-[#d4af37] drop-shadow">{price}</span>
      )}
      {description && (
        <p className="mb-8 text-xl text-[#e5e5e5] md:text-2xl text-center">{description}</p>
      )}
      <a href={ctaHref} className="w-full rounded bg-[#d4af37] px-9 py-4 text-xl text-[#0a0a0a] font-semibold shadow-lg transition-colors hover:bg-[#f4d76d] md:w-fit flex items-center justify-center mx-auto">
        {ctaLabel}
      </a>
    </div>
  </div>
);

export type { MenuTransitionParallaxProps }; 