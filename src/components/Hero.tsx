import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { worldData } from '../data';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Noise Overlay */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none opacity-20 mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
      
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0 flex flex-col items-center justify-center pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-noir-900/50 via-noir-900/80 to-noir-900 z-10" />
        {/* Neon Glows */}
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_var(--tw-gradient-stops))] from-dragon-red/30 via-transparent to-transparent opacity-60 mix-blend-color-dodge blur-[120px]"
        />
         <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_var(--tw-gradient-stops))] from-wave-cyan/20 via-transparent to-transparent opacity-60 mix-blend-color-dodge blur-[120px]"
        />
        <h1 className="text-8xl md:text-[15rem] font-black tracking-tighter opacity-[0.03] whitespace-nowrap text-dragon-red font-serif select-none flex gap-8">
          <span>月城</span>
          <span>唐人街</span>
        </h1>
      </motion.div>

      <div className="z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-6 relative"
        >
          <div className="absolute -top-12 -left-12 text-6xl text-dragon-red/20 font-serif -rotate-12 blur-[1px]">龍</div>
          <div className="absolute -bottom-12 -right-12 text-6xl text-wave-cyan/20 font-serif rotate-12 blur-[1px]">海</div>
          
          <div className="inline-block border border-dragon-red/30 bg-dragon-red/10 rounded-full px-5 py-1.5 text-xs font-mono text-dragon-red/80 tracking-[0.2em] shadow-[0_0_15px_rgba(139,0,0,0.5)] uppercase mb-4 backdrop-blur-sm">
            Est. 2005
          </div>
          <h1 className="text-6xl md:text-8xl font-black font-serif tracking-tight leading-[1]">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-dragon-red via-red-500 to-dragon-gold drop-shadow-[0_0_15px_rgba(255,0,0,0.3)] uppercase">
              Chinatown
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-24 flex flex-col items-center gap-4"
        >
          <div className="text-xs font-mono text-dragon-red/60 tracking-[0.3em] uppercase drop-shadow-[0_0_5px_rgba(255,0,0,0.5)]">Enter</div>
          <div className="w-[1px] h-24 bg-gradient-to-b from-dragon-red/80 to-transparent shadow-[0_0_10px_rgba(255,0,0,0.5)]" />
        </motion.div>
      </div>
    </section>
  );
}
