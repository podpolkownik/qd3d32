import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Star, TrendingUp } from 'lucide-react';

export const CTASection = () => (
  <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-blue-800 text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDUwIDAgTCAwIDAgMCA1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
    
    <motion.div 
      className="container mx-auto px-4 max-w-4xl text-center relative z-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="flex items-center justify-center gap-2 mb-4"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-8 h-8 text-yellow-300 fill-yellow-300 animate-pulse" />
        ))}
      </motion.div>
      
      <motion.h2 
        className="text-5xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Join the Crypto Revolution Today
      </motion.h2>
      
      <motion.div 
        className="bg-white/10 p-8 rounded-3xl backdrop-blur-lg mb-8 border border-white/20 shadow-[0_0_100px_rgba(59,130,246,0.3)]"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="text-2xl font-light">Start investing in cryptocurrency</span>
        </div>
        
        <div className="text-4xl md:text-6xl font-bold mb-4 mt-8 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
          <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl">Bitcoin is reaching new heights!</span>
          <TrendingUp className="inline-block ml-4 w-8 h-8 text-yellow-400 animate-pulse" />
        </div>
        <p className="text-2xl opacity-90 mb-8">Be part of the growing cryptocurrency market as Bitcoin reaches new heights.</p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="flex items-center gap-3 bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-all transform hover:scale-105">
            <Check className="w-8 h-8 text-green-400" />
            <span className="text-xl">Transaction security</span>
          </div>
          <div className="flex items-center gap-3 bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-all transform hover:scale-105">
            <Check className="w-8 h-8 text-green-400" />
            <span className="text-xl">Growing cryptocurrency market</span>
          </div>
          <div className="flex items-center gap-3 bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-all transform hover:scale-105">
            <Check className="w-8 h-8 text-green-400" />
            <span className="text-xl">Low fees</span>
          </div>
          <div className="flex items-center gap-3 bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-all transform hover:scale-105">
            <Check className="w-8 h-8 text-green-400" />
            <span className="text-xl">Ease of use</span>
          </div>
        </div>

        <motion.a 
          href="https://melonisx.pro/Gh9dwvJY?fbclid=%7Bfbclid%7D&utm_campaign=%7B%7Bcampaign.name%7D%7D&utm_source=%7B%7Bsite_source_name%7D%7D&utm_placement=%7B%7Bplacement%7D%7D&campaign_id=%7B%7Bcampaign.id%7D%7D&adset_id=%7B%7Badset.id%7D%7D&ad_id=%7B%7Bad.id%7D%7D&adset_name=%7B%7Badset.name%7D%7D&ad_name=%7B%7Bad.name%7D%7D"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-12 py-6 rounded-full text-2xl font-bold hover:from-yellow-300 hover:to-yellow-400 transition-all shadow-xl hover:shadow-2xl flex items-center mx-auto group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sign Up
          <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
        </motion.a>
      </motion.div>
      
      <motion.p 
        className="text-sm opacity-75"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        * Register now to stay updated on all the latest events in the cryptocurrency market
      </motion.p>
    </motion.div>
  </section>
);
