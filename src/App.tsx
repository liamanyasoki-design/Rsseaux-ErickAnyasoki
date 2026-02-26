/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Instagram, Youtube, Twitch, Ghost, ExternalLink } from "lucide-react";

const SOCIAL_LINKS = [
  {
    name: "Twitch",
    label: "Regarde mes lives sur Twitch",
    icon: <Twitch className="w-6 h-6" />,
    url: "https://twitch.tv",
    color: "bg-[#9146FF]",
    hoverColor: "hover:bg-[#772ce8]",
  },
  {
    name: "YouTube",
    label: "Abonne-toi à ma chaîne YouTube",
    icon: <Youtube className="w-6 h-6" />,
    url: "https://youtube.com",
    color: "bg-[#FF0000]",
    hoverColor: "hover:bg-[#cc0000]",
  },
  {
    name: "Instagram",
    label: "Suis-moi sur Instagram",
    icon: <Instagram className="w-6 h-6" />,
    url: "https://instagram.com",
    color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
    hoverColor: "hover:opacity-90",
  },
  {
    name: "Snapchat",
    label: "Ajoute-moi sur Snapchat",
    icon: <Ghost className="w-6 h-6" />,
    url: "https://snapchat.com",
    color: "bg-[#FFFC00] text-black",
    hoverColor: "hover:bg-[#e6e300]",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-emerald-500/30 relative overflow-hidden">
      {/* Stadium Background Effect */}
      <div className="absolute inset-0 z-0">
        {/* Dark Green Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 via-black to-black" />
        
        {/* Stadium Lights Simulation */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        
        {/* Subtle Pitch Texture */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} 
        />
      </div>

      <main className="relative z-10 max-w-md mx-auto px-6 py-16 flex flex-col items-center min-h-screen">
        {/* Profile Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="relative mb-6">
            <div className="w-32 h-32 rounded-full border-4 border-emerald-500/30 p-1 bg-gradient-to-tr from-emerald-500 to-blue-500 overflow-hidden shadow-2xl shadow-emerald-500/20">
              <img 
                src="https://picsum.photos/seed/football-creator/400/400" 
                alt="Profile" 
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-emerald-500 w-6 h-6 rounded-full border-4 border-[#050505]" title="Online" />
          </div>

          <h1 className="text-2xl font-bold tracking-tight mb-2">
            Créateur de Contenu Football
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed max-w-[280px]">
            Réactions de matchs, lives, analyses, débats football ⚽️
          </p>
        </motion.div>

        {/* Links Section */}
        <div className="w-full space-y-4">
          {SOCIAL_LINKS.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
              className={`group flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${link.color} ${link.hoverColor} shadow-lg hover:scale-[1.02] active:scale-[0.98]`}
            >
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-2 rounded-xl backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                  {link.icon}
                </div>
                <span className="font-semibold text-lg">{link.label}</span>
              </div>
              <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-auto pt-12 text-gray-600 text-xs uppercase tracking-widest"
        >
          © {new Date().getFullYear()} • Football Passion
        </motion.footer>
      </main>
    </div>
  );
}
