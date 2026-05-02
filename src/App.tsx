/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import MainTabs from './components/MainTabs';
import BGMPlayer from './components/BGMPlayer';

export default function App() {
  return (
    <div className="bg-noir-900 min-h-screen text-white/90 selection:bg-dragon-red/50 selection:text-white">
      <header className="py-8 text-center relative overflow-hidden">
        <div className="relative z-20 flex flex-col items-center">
           <h1 className="text-4xl md:text-5xl font-black font-serif tracking-tight leading-[1]">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-dragon-red via-red-500 to-dragon-gold uppercase drop-shadow-[0_0_10px_rgba(255,0,0,0.3)]">
              Chinatown
            </span>
          </h1>
          <div className="text-[10px] md:text-xs font-mono text-dragon-red/60 tracking-[0.3em] uppercase mt-2 drop-shadow-[0_0_5px_rgba(255,0,0,0.5)]">
            Est. 2005 Wolseong
          </div>
        </div>
      </header>
      <MainTabs />
      <BGMPlayer />
      
      <footer className="py-12 border-t border-white/10 text-center text-neutral-500 font-mono text-xs uppercase tracking-widest bg-noir-800">
        &copy; 2005 Wolseong Chinatown. End of record.
      </footer>
    </div>
  );
}
