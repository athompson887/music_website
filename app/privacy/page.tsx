'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Shield, Lock, Eye, Baby, Heart, Mail } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 text-6xl opacity-20">🌿</div>
        <div className="absolute top-40 right-20 text-5xl opacity-20">🌴</div>
      </div>

      {/* Header */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-jungle-lime to-jungle-leaf rounded-full mb-6"
          >
            <Shield className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-jungle-green mb-4 font-fun"
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-jungle-green/70"
          >
            Your family&apos;s privacy is our top priority
          </motion.p>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: <Baby className="w-6 h-6" />, text: 'COPPA Compliant', color: 'bg-berry-pink' },
              { icon: <Lock className="w-6 h-6" />, text: 'No Data Sold', color: 'bg-jungle-lime' },
              { icon: <Eye className="w-6 h-6" />, text: 'Minimal Collection', color: 'bg-sunny-yellow' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-4 shadow-md flex items-center gap-3"
              >
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center text-white`}>
                  {item.icon}
                </div>
                <span className="font-bold text-jungle-green">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-jungle-green mb-4 font-fun flex items-center gap-2">
                <span className="text-2xl">🛡️</span> Our Commitment
              </h2>
              <p className="text-jungle-green/80 leading-relaxed">
                At Experiments In Music, we build apps for children and families. We take privacy extremely seriously, especially when it comes to protecting our youngest users. This policy explains how we handle information in our apps.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-jungle-green mb-4 font-fun flex items-center gap-2">
                <span className="text-2xl">📱</span> Information We Collect
              </h2>
              <p className="text-jungle-green/80 leading-relaxed mb-4">
                We believe in minimal data collection. Here&apos;s what our apps may access:
              </p>
              <ul className="space-y-3 text-jungle-green/80">
                <li className="flex items-start gap-3">
                  <span className="text-jungle-lime font-bold">•</span>
                  <span><strong>Microphone (String Friends):</strong> Used only for real-time guitar tuning. Audio is processed on your device and never recorded, stored, or transmitted.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-jungle-lime font-bold">•</span>
                  <span><strong>App preferences:</strong> Settings like sound preferences are stored locally on your device only.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-jungle-green mb-4 font-fun flex items-center gap-2">
                <span className="text-2xl">🚫</span> What We Don&apos;t Do
              </h2>
              <ul className="space-y-3 text-jungle-green/80">
                <li className="flex items-start gap-3">
                  <span className="text-berry-pink font-bold">✗</span>
                  <span>We do NOT collect personal information from children</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-berry-pink font-bold">✗</span>
                  <span>We do NOT sell or share data with third parties</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-berry-pink font-bold">✗</span>
                  <span>We do NOT use tracking or behavioral advertising</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-berry-pink font-bold">✗</span>
                  <span>We do NOT require account creation or login</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-berry-pink font-bold">✗</span>
                  <span>We do NOT include social media integrations</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-jungle-green mb-4 font-fun flex items-center gap-2">
                <span className="text-2xl">👶</span> Children&apos;s Privacy (COPPA)
              </h2>
              <p className="text-jungle-green/80 leading-relaxed">
                Our apps are designed for children and comply with the Children&apos;s Online Privacy Protection Act (COPPA). We do not knowingly collect personal information from children under 13. Our apps work fully offline and do not require any personal data to function.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-jungle-green mb-4 font-fun flex items-center gap-2">
                <span className="text-2xl">🔒</span> Data Security
              </h2>
              <p className="text-jungle-green/80 leading-relaxed">
                Since we don&apos;t collect personal data, there&apos;s nothing to secure on our servers. All app data stays on your device. We design our apps to work without internet connectivity wherever possible.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-jungle-green mb-4 font-fun flex items-center gap-2">
                <span className="text-2xl">📝</span> Changes to This Policy
              </h2>
              <p className="text-jungle-green/80 leading-relaxed">
                If we make changes to this privacy policy, we will update this page and note the date of the last revision. We encourage parents to review this policy periodically.
              </p>
            </div>

            <div className="pt-4 border-t border-jungle-lime/20">
              <p className="text-jungle-green/60 text-sm">
                Last updated: December 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-jungle-green mb-4 font-fun">
            Questions About Privacy?
          </h2>
          <p className="text-jungle-green/70 mb-6">
            We&apos;re happy to answer any questions about how we protect your family&apos;s privacy.
          </p>
          <Link
            href="/support"
            className="inline-flex items-center gap-2 btn-sunny"
          >
            <Mail className="w-5 h-5" />
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
