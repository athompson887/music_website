'use client'

import Link from 'next/link'
import { Music, Heart, TreePine } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-jungle-green via-jungle-moss to-jungle-green text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Music className="w-8 h-8 text-jungle-lime" />
              </motion.div>
              <span className="text-xl font-bold font-fun">Experiments In Music</span>
            </div>
            <p className="text-white/70 text-sm">
              Making music fun for little ones everywhere!
            </p>
          </div>

          {/* Apps */}
          <div className="text-center">
            <h3 className="font-bold text-lg mb-4 font-fun text-jungle-lime">Our Apps</h3>
            <div className="space-y-2">
              <Link href="/string-friends" className="block text-white/80 hover:text-white transition-colors">
                String Friends
              </Link>
            </div>
          </div>

          {/* Decorative */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end gap-2 text-2xl mb-4">
              <TreePine className="w-6 h-6 text-jungle-lime" />
              <span>🦜</span>
              <span>🐒</span>
              <span>🦋</span>
              <TreePine className="w-6 h-6 text-jungle-lime" />
            </div>
            <p className="text-white/70 text-sm">
              From the jungle with love!
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/20 text-center">
          <p className="text-white/60 text-sm flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-berry-pink fill-berry-pink" /> by Andrew Thompson
          </p>
          <p className="text-white/40 text-xs mt-2">
            &copy; {new Date().getFullYear()} Experiments In Music. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
