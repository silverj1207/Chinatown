import { motion } from 'motion/react';
import { MapPin, ShieldAlert, Monitor, Coffee, Anchor, Swords } from 'lucide-react';

export default function WorldMap() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 flex flex-col items-center">
      {/* 차이나타운 중심 상권 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="border border-amber-500/50 bg-black/40 px-6 py-4 rounded-lg flex items-center justify-center gap-3 w-[340px] shadow-[0_0_15px_rgba(245,158,11,0.1)] relative z-10 max-w-full"
      >
        <MapPin className="text-amber-500/80 shrink-0" size={20} />
        <span className="text-amber-100/90 font-serif text-base tracking-wide whitespace-nowrap shrink-0">차이나타운 중심 상권/번화가</span>
      </motion.div>

      {/* Line down */}
      <div className="h-10 w-px bg-white/20" />

      {/* 관할서 강력반 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="border border-blue-400/50 bg-black/40 px-8 py-4 rounded-lg flex items-center justify-center gap-3 w-[320px] shadow-[0_0_15px_rgba(96,165,250,0.1)] relative z-10"
      >
        <ShieldAlert className="text-blue-400/80" size={20} />
        <span className="text-blue-100/90 font-serif text-lg tracking-wide">관할서 강력반</span>
      </motion.div>

      {/* Text before Geumryong */}
      <div className="mt-8 mb-2">
        <span className="text-dragon-red font-serif text-sm tracking-widest">(금룡회 절대 구역)</span>
      </div>

      {/* 금룡대반점 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="border border-dragon-red/70 bg-black/60 px-8 py-6 rounded-lg flex items-center justify-center gap-4 w-[380px] shadow-[0_0_30px_rgba(220,38,38,0.2)] relative z-10"
      >
        <div className="w-10 h-10 rounded-full border border-dragon-red/50 flex items-center justify-center text-dragon-red/80 font-serif text-xl border-dashed">龍</div>
        <span className="text-dragon-red font-serif text-2xl font-bold tracking-widest">금룡대반점</span>
      </motion.div>

      {/* Split lines wrapper */}
      <div className="relative w-full h-16 flex justify-center">
        {/* Vertical center stem from Geumryong */}
        <div className="absolute top-0 w-px h-8 bg-white/20" />
        {/* Horizontal bridge */}
        <div className="absolute top-8 w-[400px] h-px bg-white/20" />
        {/* Left vertical drop */}
        <div className="absolute top-8 -translate-x-[200px] w-px h-8 bg-white/20" />
        {/* Right vertical drop */}
        <div className="absolute top-8 translate-x-[200px] w-px h-8 bg-white/20" />
      </div>

      {/* Branches: PC방 / 화양다방 */}
      <div className="flex gap-8 md:gap-12 w-full justify-center relative z-10">
        
        {/* 홍명 PC방 */}
        <div className="flex flex-col items-center relative">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="border border-blue-500/50 bg-black/40 px-8 py-5 rounded-lg flex items-center justify-center gap-3 w-[260px] shadow-[0_0_20px_rgba(59,130,246,0.1)] relative"
          >
            <Monitor className="text-blue-500/80 shrink-0" size={24} />
            <span className="text-blue-200/90 font-serif text-xl tracking-wide shrink-0">홍명 PC방</span>
            
            {/* Dashed line to neutral (horizontal connecting right) */}
            <div className="hidden md:block absolute top-1/2 -right-12 w-12 border-t border-dashed border-white/20" />
          </motion.div>
          <div className="mt-3 text-blue-300/60 text-sm font-sans tracking-wide">중앙 교차로 / 정보 허브</div>
        </div>

        {/* 중립 구역 (Placed between them, slightly offset down) */}
        <div className="hidden md:flex flex-col items-center mt-12 relative">
          <div className="absolute top-[-3rem] bottom-auto w-px h-12 border-l border-dashed border-white/20" />
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="border border-dashed border-neutral-400/50 bg-neutral-900/40 px-4 py-2 rounded-lg text-center relative z-10 whitespace-nowrap"
          >
            <h4 className="text-neutral-300 font-serif text-sm tracking-widest">(중립 구역)</h4>
          </motion.div>
          {/* Line down to Haejo */}
          <div className="w-px h-16 border-l border-dashed border-white/20 mt-0" />
        </div>

        {/* 화양다방 */}
        <div className="flex flex-col items-center relative">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="border border-purple-500/50 bg-black/40 px-8 py-5 rounded-lg flex items-center justify-center gap-3 w-[260px] shadow-[0_0_20px_rgba(168,85,247,0.1)] relative"
          >
            <Coffee className="text-purple-500/80 shrink-0" size={24} />
            <span className="text-purple-200/90 font-serif text-xl tracking-wide shrink-0">화양다방</span>

            {/* Dashed line to neutral (horizontal connecting left) */}
            <div className="hidden md:block absolute top-1/2 -left-12 w-12 border-t border-dashed border-white/20" />
          </motion.div>
          <div className="mt-3 text-purple-300/60 text-sm font-sans tracking-wide">유흥 및 로비 / 뒷골목</div>
        </div>

      </div>

      {/* Mobile only elements - hidden on desktop since desktop has the middle connector */}
      <div className="flex md:hidden flex-col items-center w-full">
         <div className="h-10 w-px border-l border-dashed border-white/20 mt-4" />
         <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-2 border border-dashed border-neutral-400/50 bg-neutral-900/40 px-4 py-2 rounded-lg text-center relative z-10"
         >
            <h4 className="text-neutral-300 font-serif text-sm tracking-widest">(중립 구역)</h4>
         </motion.div>
         {/* Dashed line down to Haejo */}
         <div className="h-12 w-px border-l border-dashed border-white/20 mt-2" />
      </div>

      {/* Text before Haejo */}
      <div className="mt-4 mb-2">
        <span className="text-wave-cyan font-serif text-sm tracking-widest">(해조파 절대 구역)</span>
      </div>

      {/* 해조파 본진 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="border border-wave-cyan/60 bg-black/60 pt-6 pb-5 px-8 rounded-lg flex flex-col items-center w-[460px] max-w-full shadow-[0_0_25px_rgba(8,145,178,0.15)] relative z-10"
      >
        <div className="flex items-center gap-3">
          <Anchor className="text-wave-cyan/80" size={28} />
          <span className="text-wave-cyan/90 font-serif text-2xl font-bold tracking-widest">제1부두 폐창고 & 게러지</span>
        </div>
      </motion.div>
    </div>
  );
}
