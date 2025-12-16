'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Guitar, Music, Star, Sparkles, Download, Smartphone, Heart, Users } from 'lucide-react'

export default function MarketingPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background decorations */}
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
          className="absolute top-20 -right-10 text-8xl opacity-20"
        >
          🎸
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center gap-3 mb-6"
          >
            {['🎵', '🎸', '🌴', '🎶', '🐒'].map((emoji, i) => (
              <motion.span
                key={i}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                className="text-4xl"
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl font-bold text-jungle-green mb-6 font-fun"
          >
            Bring Music to Life for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-jungle-lime via-sunny-yellow to-sunny-orange">
              Young Musicians!
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-jungle-green/80 mb-8 max-w-2xl mx-auto"
          >
            Our apps make learning music fun, engaging, and accessible for children everywhere. Join thousands of families on their musical journey!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/string-friends" className="btn-sunny flex items-center gap-2">
              <Guitar className="w-5 h-5" />
              Explore Our Apps
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '10K+', label: 'Happy Families', emoji: '👨‍👩‍👧‍👦' },
              { number: '50K+', label: 'Songs Tuned', emoji: '🎵' },
              { number: '4.8', label: 'Star Rating', emoji: '⭐' },
              { number: '100%', label: 'Kid Friendly', emoji: '💚' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-6 shadow-lg text-center"
              >
                <div className="text-3xl mb-2">{stat.emoji}</div>
                <div className="text-3xl font-bold text-jungle-green font-fun">{stat.number}</div>
                <div className="text-jungle-green/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-jungle-green mb-4 font-fun">
              Why Parents Love Us
            </h2>
            <p className="text-xl text-jungle-green/70">
              Designed with kids and parents in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8" />,
                title: 'Safe & Kid-Friendly',
                description: 'No ads, no in-app purchases that surprise you. Just pure musical fun!',
                color: 'from-berry-pink to-berry-purple',
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Built by Parents',
                description: 'Created by parents who understand what families need from educational apps.',
                color: 'from-jungle-lime to-jungle-leaf',
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: 'Actually Educational',
                description: 'Real music learning wrapped in playful experiences kids adore.',
                color: 'from-sunny-yellow to-sunny-orange',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg text-center"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mx-auto mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-jungle-green mb-3 font-fun">{feature.title}</h3>
                <p className="text-jungle-green/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Showcase */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white/50 to-jungle-lime/10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-jungle-green to-jungle-moss rounded-[3rem] p-10 shadow-2xl text-white relative overflow-hidden"
          >
            <div className="absolute top-4 left-4 text-4xl">🌿</div>
            <div className="absolute top-4 right-4 text-4xl">🦜</div>
            <div className="absolute bottom-4 left-8 text-3xl">🐒</div>
            <div className="absolute bottom-4 right-8 text-3xl">🌴</div>

            <div className="text-center relative z-10">
              <motion.div
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-8xl mb-6"
              >
                🎸
              </motion.div>
              <h2 className="text-4xl font-bold mb-4 font-fun">String Friends</h2>
              <p className="text-xl text-white/80 mb-6 max-w-xl mx-auto">
                Our flagship app! A jungle-themed guitar tuner that makes learning to tune fun and easy for young musicians.
              </p>
              <Link
                href="/string-friends"
                className="inline-flex items-center gap-2 bg-white text-jungle-green font-bold py-4 px-8 rounded-full shadow-lg text-lg hover:scale-105 transition-transform"
              >
                <Smartphone className="w-5 h-5" />
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter / Contact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-jungle-green mb-4 font-fun">
            Stay in the Loop!
          </h2>
          <p className="text-jungle-green/70 mb-8">
            Be the first to know about new apps, features, and musical adventures!
          </p>
          <Link
            href="/support"
            className="inline-flex items-center gap-2 btn-sunny"
          >
            <Star className="w-5 h-5" />
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
