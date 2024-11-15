import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, BarChart, ShoppingCart } from 'lucide-react';

export const Timeline = () => {
  const events = [
    {
      icon: DollarSign,
      title: "First Steps",
      date: "Day 1",
      description: "Starting trading and early successes",
      color: "text-green-500", // Green — the beginning of the journey
      bgColor: "bg-green-100", // Light green shade
    },
    {
      icon: TrendingUp,
      title: "Deepening Knowledge",
      date: "Day 2",
      description: "Intensive study of the cryptocurrency market",
      color: "text-blue-500", // Blue — knowledge and stability
      bgColor: "bg-blue-100", // Light blue shade
    },
    {
      icon: BarChart,
      title: "Financial Growth",
      date: "1 Week",
      description: "Successful trades started bringing significant income",
      color: "text-yellow-500", // Yellow — success, growth
      bgColor: "bg-yellow-100", // Light yellow shade
    },
    {
      icon: ShoppingCart,
      title: "Financial Independence",
      date: "Today",
      description: "Bought a BMW M5 2024, a dream come true",
      color: "text-yellow-600", // Rich yellow — final success
      bgColor: "bg-yellow-300", // Golden shade for achieving goals
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">My Success Story</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            The journey from starting trading to financial independence
          </p>
        </motion.div>

        <div className="relative grid md:grid-cols-2 gap-8">
          {/* Timeline */}
          <div>
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}
              >
                <div className={`flex items-center gap-6 p-6 rounded-xl shadow-lg ${event.bgColor} max-w-xl`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${event.color}`}>
                    <event.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">{event.date}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image */}
          <div className="flex justify-center items-center">
            <img 
              src="https://sun9-76.userapi.com/impg/3Gd4VxdWFfyVFb5QDBwo0Xc1CNyckXkuAjamsQ/0kZK0eSuU1U.jpg?size=1024x1024&quality=96&sign=13e4c0bdb331c2653e2fcf4489e3b3c2&type=album" 
              alt="My journey in cryptocurrency"
              className="w-full h-auto rounded-xl shadow-lg md:max-w-md md:h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
