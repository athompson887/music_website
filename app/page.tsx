'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Music, Guitar, Sparkles, Star, TreePine } from 'lucide-react'

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-10 text-6xl opacity-30"
        >
          🌴
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute top-40 right-20 text-5xl opacity-30"
        >
          🌿
        </motion.div>
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-40 left-20 text-4xl opacity-40"
        >
          🦜
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-60 right-40 text-3xl opacity-40"
        >
          🦋
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated music notes */}
          <div className="flex justify-center gap-4 mb-6">
            {['🎵', '🎶', '🎸', '🎶', '🎵'].map((note, i) => (
              <motion.span
                key={i}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                className="text-4xl"
              >
                {note}
              </motion.span>
            ))}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-7xl font-bold text-jungle-green mb-6 font-fun"
          >
            Welcome to the
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-jungle-lime via-sunny-yellow to-sunny-orange">
              Musical Jungle!
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-jungle-green/80 mb-10 max-w-2xl mx-auto"
          >
            Fun music apps designed to help little ones explore the wonderful world of music!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <Link
              href="/string-friends"
              className="inline-flex items-center gap-3 btn-sunny text-xl"
            >
              <Guitar className="w-6 h-6" />
              Meet the String Friends!
              <Sparkles className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Apps Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 mb-4"
            >
              <Star className="w-6 h-6 text-sunny-yellow fill-sunny-yellow" />
              <h2 className="text-3xl sm:text-4xl font-bold text-jungle-green font-fun">
                Our Apps
              </h2>
              <Star className="w-6 h-6 text-sunny-yellow fill-sunny-yellow" />
            </motion.div>
            <p className="text-jungle-green/70 text-lg">
              Discover our collection of musical adventures!
            </p>
          </div>

          {/* String Friends Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl mx-auto"
          >
            <Link href="/string-friends" className="block group">
              <div className="card-playful relative overflow-hidden">
                {/* Jungle decoration */}
                <div className="absolute -top-2 -right-2 text-4xl transform rotate-12 group-hover:rotate-0 transition-transform">
                  🌴
                </div>
                <div className="absolute -bottom-2 -left-2 text-3xl transform -rotate-12 group-hover:rotate-0 transition-transform">
                  🌿
                </div>

                {/* Content */}
                <div className="relative z-10 text-center py-6">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-7xl mb-4"
                  >
                    🎸
                  </motion.div>

                  <h3 className="text-3xl font-bold text-jungle-green mb-3 font-fun">
                    String Friends
                  </h3>

                  <p className="text-jungle-green/70 mb-4 text-lg">
                    A jungle guitar tuner for young musicians! Meet friendly animal guides who help you tune your guitar perfectly.
                  </p>

                  <div className="flex justify-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-jungle-lime/20 text-jungle-green rounded-full text-sm font-semibold">
                      Guitar Tuner
                    </span>
                    <span className="px-3 py-1 bg-sunny-yellow/30 text-jungle-green rounded-full text-sm font-semibold">
                      Kids Friendly
                    </span>
                    <span className="px-3 py-1 bg-berry-pink/20 text-jungle-green rounded-full text-sm font-semibold">
                      Jungle Theme
                    </span>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-jungle-leaf font-bold">
                    <span>Explore</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Coming soon teaser */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-jungle-green/60 text-lg">
              More musical adventures coming soon! 🎵
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-jungle-green mb-10 font-fun">
            Why Kids Love Our Apps!
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { emoji: '🎨', title: 'Colorful & Fun', desc: 'Bright, playful designs that kids adore' },
              { emoji: '🐵', title: 'Friendly Guides', desc: 'Cute animal friends to help along the way' },
              { emoji: '🎯', title: 'Easy to Use', desc: 'Simple enough for little fingers' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/70 rounded-3xl p-6 shadow-lg"
              >
                <div className="text-5xl mb-3">{item.emoji}</div>
                <h3 className="font-bold text-jungle-green text-lg mb-2 font-fun">{item.title}</h3>
                <p className="text-jungle-green/70 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
