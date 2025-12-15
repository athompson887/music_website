'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Guitar, Music, Ear, Star, Sparkles, Volume2, Target, Heart } from 'lucide-react'

// Animal friends for each string
const STRING_FRIENDS = [
  { string: 'E', name: 'Ellie Elephant', emoji: '🐘', color: 'bg-berry-purple' },
  { string: 'A', name: 'Andy Alligator', emoji: '🐊', color: 'bg-jungle-lime' },
  { string: 'D', name: 'Danny Dolphin', emoji: '🐬', color: 'bg-sky-bright' },
  { string: 'G', name: 'Gerry Gorilla', emoji: '🦍', color: 'bg-earth-brown' },
  { string: 'B', name: 'Bella Butterfly', emoji: '🦋', color: 'bg-berry-pink' },
  { string: 'e', name: 'Eddie Eagle', emoji: '🦅', color: 'bg-sunny-orange' },
]

const FEATURES = [
  {
    icon: <Ear className="w-8 h-8" />,
    title: 'Listen & Learn',
    description: 'Hear what each string should sound like with our friendly animal guides!',
    color: 'from-jungle-lime to-jungle-leaf',
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Easy Tuning',
    description: 'Big, colorful visuals show when your string is perfectly in tune!',
    color: 'from-sunny-yellow to-sunny-orange',
  },
  {
    icon: <Volume2 className="w-8 h-8" />,
    title: 'Sound Recognition',
    description: 'Our app listens to your guitar and helps you tune each string.',
    color: 'from-sky-light to-sky-bright',
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: 'Fun Rewards',
    description: 'Earn stars and celebrate when you tune your guitar perfectly!',
    color: 'from-berry-pink to-berry-purple',
  },
]

export default function StringFriendsPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Jungle background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-10 -left-10 text-9xl opacity-20"
        >
          🌴
        </motion.div>
        <motion.div
          animate={{ rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute -top-5 -right-10 text-8xl opacity-20"
        >
          🌴
        </motion.div>
        <div className="absolute bottom-20 left-10 text-6xl opacity-30">🌿</div>
        <div className="absolute bottom-40 right-20 text-5xl opacity-30">🌿</div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            {/* Animated guitar */}
            <motion.div
              animate={{ rotate: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block mb-6"
            >
              <span className="text-9xl">🎸</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl sm:text-7xl font-bold text-jungle-green mb-4 font-fun"
            >
              String Friends
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl text-jungle-green/80 mb-6"
            >
              Your Jungle Guitar Tuning Adventure!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3 mb-8"
            >
              <span className="px-4 py-2 bg-jungle-lime/20 text-jungle-green rounded-full font-semibold">
                🎵 Guitar Tuner
              </span>
              <span className="px-4 py-2 bg-sunny-yellow/30 text-jungle-green rounded-full font-semibold">
                👶 Ages 3+
              </span>
              <span className="px-4 py-2 bg-berry-pink/20 text-jungle-green rounded-full font-semibold">
                🌴 Jungle Theme
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="#"
                className="btn-sunny flex items-center gap-2 text-lg"
              >
                <Sparkles className="w-5 h-5" />
                Coming Soon!
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the String Friends */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-jungle-green mb-4 font-fun">
              Meet Your String Friends!
            </h2>
            <p className="text-xl text-jungle-green/70">
              Each guitar string has a friendly animal guide to help you tune!
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {STRING_FRIENDS.map((friend, i) => (
              <motion.div
                key={friend.string}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 3 }}
                className="bg-white rounded-3xl p-4 shadow-lg border-4 border-jungle-lime/30 text-center"
              >
                <div className={`w-12 h-12 ${friend.color} rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold text-xl font-fun`}>
                  {friend.string}
                </div>
                <div className="text-5xl mb-2">{friend.emoji}</div>
                <p className="font-bold text-jungle-green text-sm font-fun">{friend.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-jungle-green mb-4 font-fun">
              How It Works
            </h2>
            <p className="text-xl text-jungle-green/70">
              Tuning your guitar is as easy as 1-2-3!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', emoji: '🎸', title: 'Pick a String', desc: 'Choose which string you want to tune with your animal friend!' },
              { step: '2', emoji: '🎵', title: 'Play & Listen', desc: 'Pluck your string and watch your animal friend react!' },
              { step: '3', emoji: '⭐', title: 'Perfect Tune!', desc: 'When the string is in tune, your friend celebrates with you!' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-3xl p-6 shadow-xl border-4 border-sunny-yellow/50 text-center">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-sunny-yellow to-sunny-orange rounded-full flex items-center justify-center text-2xl font-bold text-white font-fun shadow-lg">
                    {item.step}
                  </div>
                  <div className="text-6xl mb-4 pt-2">{item.emoji}</div>
                  <h3 className="text-2xl font-bold text-jungle-green mb-2 font-fun">{item.title}</h3>
                  <p className="text-jungle-green/70">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white/50 to-jungle-lime/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-jungle-green mb-4 font-fun">
              Awesome Features!
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-6 shadow-lg flex items-start gap-4"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shrink-0`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-jungle-green mb-2 font-fun">{feature.title}</h3>
                  <p className="text-jungle-green/70">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Jungle Scene */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-jungle-green to-jungle-moss rounded-[3rem] p-10 shadow-2xl text-white relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 text-4xl">🌿</div>
            <div className="absolute top-4 right-4 text-4xl">🌴</div>
            <div className="absolute bottom-4 left-8 text-3xl">🦜</div>
            <div className="absolute bottom-4 right-8 text-3xl">🐒</div>

            <h2 className="text-4xl font-bold mb-4 font-fun relative z-10">
              Ready for a Musical Adventure?
            </h2>
            <p className="text-xl text-white/80 mb-8 relative z-10">
              Join our jungle friends and learn to tune your guitar the fun way!
            </p>

            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white text-jungle-green font-bold py-4 px-8 rounded-full shadow-lg text-lg"
              >
                <Guitar className="w-6 h-6" />
                Coming Soon to App Stores!
              </motion.a>
            </div>

            {/* Floating music notes */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-1/2 left-10 text-3xl opacity-50"
            >
              🎵
            </motion.div>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              className="absolute top-1/3 right-12 text-2xl opacity-50"
            >
              🎶
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Made with Love */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/30">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-jungle-green/70 flex items-center justify-center gap-2 text-lg">
            Made with <Heart className="w-5 h-5 text-berry-pink fill-berry-pink" /> for little musicians everywhere
          </p>
        </div>
      </section>
    </div>
  )
}
