'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, HelpCircle, Book, Heart, ExternalLink } from 'lucide-react'

const FAQ_ITEMS = [
  {
    question: 'What age is String Friends designed for?',
    answer: 'String Friends is designed for children ages 3 and up, with parent supervision recommended for younger children. The interface is simple enough for little ones while still being accurate for tuning.',
  },
  {
    question: 'Does the app work offline?',
    answer: 'Yes! Once downloaded, String Friends works completely offline. No internet connection is needed to tune your guitar.',
  },
  {
    question: 'Which devices are supported?',
    answer: 'String Friends will be available on iOS (iPhone and iPad) and Android devices. Check the app stores for specific device requirements.',
  },
  {
    question: 'Is the app really free of ads?',
    answer: 'Absolutely! We believe children deserve an ad-free experience. Our apps contain no advertisements or disruptive in-app purchases.',
  },
  {
    question: 'How accurate is the tuner?',
    answer: 'Our tuner uses professional-grade audio processing to provide accurate tuning. The friendly animal visuals make it easy for kids to understand when they\'re in tune!',
  },
]

export default function SupportPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-10 text-6xl opacity-20"
        >
          🌴
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute top-40 right-20 text-5xl opacity-20"
        >
          🦜
        </motion.div>
      </div>

      {/* Header */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-sunny-yellow to-sunny-orange rounded-full mb-6"
          >
            <MessageCircle className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-jungle-green mb-4 font-fun"
          >
            How Can We Help?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-jungle-green/70"
          >
            We&apos;re here to help you and your little musicians!
          </motion.p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.a
              href="mailto:support@experimentsinmusic.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-3xl p-6 shadow-lg flex items-center gap-4 cursor-pointer"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-jungle-lime to-jungle-leaf rounded-2xl flex items-center justify-center text-white">
                <Mail className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-bold text-jungle-green text-lg font-fun">Email Us</h3>
                <p className="text-jungle-green/70 text-sm">support@experimentsinmusic.com</p>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-6 shadow-lg flex items-center gap-4"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-sunny-yellow to-sunny-orange rounded-2xl flex items-center justify-center text-white">
                <HelpCircle className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-bold text-jungle-green text-lg font-fun">Response Time</h3>
                <p className="text-jungle-green/70 text-sm">We typically reply within 24-48 hours</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-jungle-green mb-3 font-fun flex items-center justify-center gap-2">
              <Book className="w-8 h-8" />
              Frequently Asked Questions
            </h2>
            <p className="text-jungle-green/70">Quick answers to common questions</p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md"
              >
                <h3 className="font-bold text-jungle-green text-lg mb-2 flex items-start gap-2">
                  <span className="text-sunny-orange">Q:</span>
                  {item.question}
                </h3>
                <p className="text-jungle-green/70 pl-6">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white/50 to-jungle-lime/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-berry-pink to-berry-purple rounded-3xl p-8 sm:p-10 shadow-xl text-white text-center relative overflow-hidden"
          >
            <div className="absolute top-4 left-4 text-3xl opacity-50">🎵</div>
            <div className="absolute bottom-4 right-4 text-3xl opacity-50">🎶</div>

            <Heart className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4 font-fun">We Love Feedback!</h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Have ideas for new features? Found something that could be better? We&apos;d love to hear from you! Your feedback helps us create better musical experiences for kids.
            </p>
            <a
              href="mailto:feedback@experimentsinmusic.com"
              className="inline-flex items-center gap-2 bg-white text-berry-purple font-bold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform"
            >
              <Mail className="w-5 h-5" />
              Share Your Ideas
            </a>
          </motion.div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-jungle-green mb-6 font-fun">
            More Resources
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/privacy"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-md text-jungle-green font-semibold hover:shadow-lg transition-shadow"
            >
              Privacy Policy
              <ExternalLink className="w-4 h-4" />
            </Link>
            <Link
              href="/string-friends"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-md text-jungle-green font-semibold hover:shadow-lg transition-shadow"
            >
              String Friends App
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
