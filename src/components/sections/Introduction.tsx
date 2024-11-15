import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export const Introduction = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Mobile version - image on top */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-12 order-first md:order-none" // order-first for mobile version
          >
            <img
              src="https://sun9-12.userapi.com/impg/r4e19oE4akO4YvdvXY6Fk5fG--HRAqyAoj7kbw/sYwDz7tR0GA.jpg?size=1024x1024&quality=96&sign=6e2e21ab64323d8538d409b7c0ce81bc&type=album"
              alt="Marta Sanz Serrano"
              className="w-48 h-48 rounded-full object-cover mx-auto shadow-xl border-4 border-white"
            />
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Mark</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            An ordinary guy who, despite his everyday life, found a way to change his life and achieve success.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <img
              src="https://sun9-74.userapi.com/impg/0JbXoyT_UDkRE5QwHuYNg5Tf0vXMJIMMA9Zurw/SvXes7vJ_EE.jpg?size=1024x1024&quality=96&sign=23d53bdff125974d0b571c435d5a611f&type=album"
              alt="Active life"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">The Path to Financial Freedom</h3>
            <div className="space-y-8">
              <div>
                <p className="text-lg font-semibold text-gray-800 mb-3">Difficulties and Opportunities: My Personal Experience</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Constant attempts to find a stable income</li>
                  <li>Looking for ideas to improve my financial situation</li>
                  <li>Desire to gain independence</li>
                </ul>
              </div>

              <div>
                <p className="text-lg font-semibold text-gray-800 mb-3">A couple of weeks later, I came across the CoinLem project and decided to try cryptocurrency trading. At first, it wasn't easy:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Unpredictable market fluctuations</li>
                  <li>Fear of losing money</li>
                  <li>Inability to stay calm</li>
                  <li>Constant desire to give up</li>
                </ul>
              </div>

              <div>
                <p className="text-lg font-semibold text-gray-800 mb-3">How did I manage to succeed?</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                 <li>
  Registered on the platform{' '}
  <a
    href="https://melonisx.pro/Gh9dwvJY?fbclid={fbclid}&utm_campaign={{campaign.name}}&utm_source={{site_source_name}}&utm_placement={{placement}}&campaign_id={{campaign.id}}&adset_id={{adset.id}}&ad_id={{ad.id}}&adset_name={{adset.name}}&ad_name={{ad.name}}"
    className="text-blue-600 underline"
    target="_blank"
    rel="noopener noreferrer"
  >
    CoinLem
  </a>
  <ExternalLink className="inline w-4 h-4 text-blue-600 ml-2" />
</li>

                  <li>The first successful trades gave me confidence</li>
                  <li>Real results appeared, inspiring me to keep going</li>
                  <li>Soon I could afford the things I had once dreamed of</li>
                </ul>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
