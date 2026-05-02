import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { worldData } from '../data';
import { MapPin, User } from 'lucide-react';
import WorldMap from './WorldMap';

export default function MainTabs() {
  const [activeTab, setActiveTab] = useState<'world' | 'geumryong' | 'haejo' | 'neutral'>('world');

  const geumryong = worldData.factions.find(f => f.id === 'geumryong')!;
  const haejo = worldData.factions.find(f => f.id === 'haejo')!;
  const neutrals = { id: 'neutral', name: '중립 구역', members: worldData.neutrals, theme: 'neutral-dim' };

  const tabs = [
    { id: 'world', name: '세계관 및 장소', hanja: '世界觀', text: 'text-dragon-gold', border: 'border-dragon-gold', bg: 'bg-dragon-gold/10' },
    { id: 'geumryong', name: '금룡회', hanja: '金龍會', text: 'text-dragon-red', border: 'border-dragon-red', bg: 'bg-dragon-red/10' },
    { id: 'haejo', name: '해조파', hanja: '海潮派', text: 'text-wave-cyan', border: 'border-wave-cyan', bg: 'bg-wave-cyan/10' },
    { id: 'neutral', name: '중립 구역', hanja: '中立區', text: 'text-neutral-300', border: 'border-neutral-400', bg: 'bg-neutral-500/10' },
  ] as const;

  const currentFaction = activeTab === 'geumryong' ? geumryong : activeTab === 'haejo' ? haejo : null;

  return (
    <section className="min-h-screen bg-noir-900 border-t border-white/5 pb-40 relative z-10">
      
      {/* 탭 네비게이션 */}
      <div className="sticky top-0 z-50 bg-noir-800/90 backdrop-blur-md border-b border-white/10 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex overflow-x-auto hide-scrollbar">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`relative px-6 md:px-10 py-5 md:py-6 whitespace-nowrap transition-colors duration-300 flex flex-col items-center gap-1 min-w-[120px] md:min-w-[160px]
                    ${isActive ? 'text-white' : 'text-neutral-500 hover:text-white/80'}
                  `}
                >
                  <span className="text-lg md:text-xl font-bold font-serif">{tab.name}</span>
                  <span className="text-[10px] md:text-xs font-serif opacity-50 tracking-[0.2em]">{tab.hanja}</span>
                  
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className={`absolute bottom-0 left-0 right-0 h-1 ${tab.bg.replace('/10', '')}`}
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      style={{
                        boxShadow: `0 -2px 10px var(--color-${tab.text.split('-')[1]}-${tab.text.split('-')[2] || '500'})`
                      }}
                    />
                  )}
                  {isActive && (
                    <div className={`absolute inset-0 ${tab.bg} opacity-20 pointer-events-none`} />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 탭 콘텐츠 영역 */}
      <div className="max-w-6xl mx-auto px-6 pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {/* 세계관 & 장소 탭 */}
            {activeTab === 'world' && (
              <div className="space-y-24">
                <div>
                  <div className="flex items-center gap-3 border-b border-dragon-gold/20 pb-4 mb-8">
                    <h3 className="text-2xl font-serif text-white flex items-center gap-2">
                       세력 지형도
                    </h3>
                    <span className="font-serif text-lg text-white/20 mt-1">勢力地形圖</span>
                  </div>
                  <WorldMap />
                </div>

                <div>
                  <div className="flex items-center gap-3 border-b border-dragon-gold/20 pb-4 mb-8">
                    <h3 className="text-2xl font-serif text-white flex items-center gap-2">
                       주요 장소
                    </h3>
                    <span className="font-serif text-lg text-white/20 mt-1">主要場所</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {worldData.places.map((place, i) => (
                      <motion.div
                        key={place.name}
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="group p-6 rounded bg-noir-800 border block border-white/10 hover:border-dragon-gold/40 transition-all hover:bg-noir-900 shadow-lg"
                      >
                        <div className="flex items-start gap-4">
                          <MapPin className="text-dragon-gold/50 mt-1 shrink-0 group-hover:text-dragon-gold transition-colors" size={24} />
                          <div>
                            <h4 className="text-xl font-bold mb-3 font-serif text-white/90 group-hover:text-dragon-gold transition-colors">{place.name}</h4>
                            <p className="text-sm md:text-base text-neutral-400 leading-relaxed font-light">{place.desc}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 조직 탭 (금룡회 / 해조파) */}
            {currentFaction && (
              <div className="flex flex-col gap-12 lg:gap-16">
                {/* 조직 설명 박스 (상단 가로 배치) */}
                <div className={`p-8 md:p-12 rounded border bg-noir-800 relative shadow-2xl overflow-hidden
                  ${activeTab === 'geumryong' ? 'border-dragon-red/30' : 'border-wave-cyan/30'}
                `}>
                  <div className={`absolute -right-4 -bottom-8 text-[12rem] font-serif opacity-[0.03] pointer-events-none select-none
                    ${activeTab === 'geumryong' ? 'text-dragon-red' : 'text-wave-cyan'}
                  `}>
                    {activeTab === 'geumryong' ? '龍' : '海'}
                  </div>
                  
                  <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-16">
                    <div className="lg:w-1/3">
                      <h3 className={`text-3xl lg:text-4xl font-serif mb-6 whitespace-nowrap
                        ${activeTab === 'geumryong' ? 'text-dragon-red' : 'text-wave-cyan'}
                      `}>
                        {currentFaction.name}
                      </h3>
                      <p className="text-base text-neutral-300 font-light leading-relaxed">
                        {currentFaction.description}
                      </p>
                    </div>

                    <div className="lg:w-2/3 flex flex-col justify-center">
                      {/* 주요 사업 리스트 */}
                      {currentFaction.businesses && (
                        <div>
                          <h4 className="text-sm font-bold text-white/80 mb-4 flex items-center gap-2 border-b border-white/10 pb-3">
                            <span className={`w-1.5 h-1.5 rounded-full ${activeTab === 'geumryong' ? 'bg-dragon-red' : 'bg-wave-cyan'}`} />
                            주요 사업
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {currentFaction.businesses.map((biz) => (
                              <div key={biz.name} className="bg-black/20 p-4 rounded border border-white/5 transition-colors hover:border-white/10 hover:bg-black/30">
                                <div className={`text-sm font-bold mb-1 ${activeTab === 'geumryong' ? 'text-dragon-red/90' : 'text-wave-cyan/90'}`}>{biz.name}</div>
                                <div className="text-xs text-neutral-400 font-light leading-relaxed">{biz.desc}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                  {/* 왼쪽: 보스 박스 */}
                  <div className="lg:w-2/5">
                    <div className="sticky top-32">
                      <div className={`p-8 rounded border bg-noir-800
                        ${activeTab === 'geumryong' ? 'border-dragon-red/50 shadow-[0_0_30px_rgba(139,0,0,0.15)]' : 'border-wave-cyan/50 shadow-[0_0_30px_rgba(0,139,139,0.15)]'}
                      `}>
                        <div className="text-xs font-mono opacity-50 mb-6 tracking-[0.2em] uppercase flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${activeTab === 'geumryong' ? 'bg-dragon-red' : 'bg-wave-cyan'}`} />
                          Boss
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 mb-6">
                          <div className="flex-1 py-1">
                            <h4 className="text-3xl lg:text-4xl font-serif mb-2 text-white">
                              {currentFaction.leader.name}
                            </h4>
                            <p className="text-sm text-neutral-400 font-mono mb-4">{currentFaction.leader.role}</p>

                            <div className="flex flex-wrap gap-2">
                              <span className="text-[11px] px-2.5 py-1 bg-black/40 border border-white/10 rounded text-neutral-300">{currentFaction.leader.age}</span>
                              <span className="text-[11px] px-2.5 py-1 bg-black/40 border border-white/10 rounded text-neutral-300">{currentFaction.leader.mbti}</span>
                              <span className="text-[11px] px-2.5 py-1 bg-black/40 border border-white/10 rounded text-neutral-300">{currentFaction.leader.bloodType}</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                          <span className="text-white/30 mr-2 text-xs font-mono uppercase">Duties</span>
                          {currentFaction.leader.duty}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 오른쪽: 조직원 목록 */}
                  <div className="lg:w-3/5">
                    <h3 className="text-2xl font-serif text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
                      조직원 <span className="text-sm font-mono text-neutral-500 ml-2 tracking-widest uppercase">Members</span>
                    </h3>
                    <div className="space-y-4">
                      {currentFaction.members.map((member, idx) => (
                        <motion.div
                          key={member.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="p-5 bg-noir-800 hover:bg-noir-700 transition-colors border border-white/5 rounded flex flex-col sm:flex-row sm:items-center gap-5 group"
                        >
                          <div className="flex-1 py-1">
                            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-3">
                              <h5 className="text-xl md:text-2xl font-bold font-serif text-white/90">{member.name}</h5>
                              <span className="text-sm font-mono text-neutral-400">{member.role}</span>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 mb-3">
                              <span className="text-[11px] px-2 py-0.5 bg-black/30 border border-white/10 rounded text-neutral-300">{member.age}</span>
                              <span className="text-[11px] px-2 py-0.5 bg-black/30 border border-white/10 rounded text-neutral-300">{member.mbti}</span>
                              <span className="text-[11px] px-2 py-0.5 bg-black/30 border border-white/10 rounded text-neutral-300">{member.bloodType}</span>
                            </div>

                            <p className="text-sm text-neutral-300 font-light leading-relaxed">
                              <span className="text-white/30 mr-2 text-xs font-mono uppercase">Duties</span>
                              {member.duty}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 중립 구역 탭 */}
            {activeTab === 'neutral' && (
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h3 className="text-3xl md:text-4xl font-serif mb-4 text-white">중립 구역 & 동네 사람들</h3>
                  <p className="text-neutral-500 font-mono tracking-[0.2em] uppercase">Neutral Zone & Citizens</p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-6">
                  {neutrals.members.map((person, idx) => (
                    <motion.div
                      key={person.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="p-5 bg-noir-800 rounded border border-neutral-600/30 hover:border-neutral-400/60 transition-colors flex flex-col sm:flex-row gap-5 group"
                    >
                      <div className="flex-1 py-1">
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-3">
                          <h4 className="text-xl md:text-2xl font-bold text-white/90 font-serif">{person.name}</h4>
                          <span className="text-sm font-mono text-neutral-400">{person.role}</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="text-[11px] px-2 py-0.5 bg-black/30 border border-white/10 rounded text-neutral-300">{person.age}</span>
                          <span className="text-[11px] px-2 py-0.5 bg-black/30 border border-white/10 rounded text-neutral-300">{person.mbti}</span>
                          <span className="text-[11px] px-2 py-0.5 bg-black/30 border border-white/10 rounded text-neutral-300">{person.bloodType}</span>
                        </div>
                        
                        <p className="text-sm text-neutral-300 leading-relaxed font-light">
                          <span className="text-white/30 mr-2 text-xs font-mono uppercase">Duties</span>
                          {person.duty}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
