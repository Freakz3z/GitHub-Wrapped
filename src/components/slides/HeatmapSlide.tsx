"use client";

import { motion } from "framer-motion";
import { WrappedData } from "@/types";
import ContributionHeatmap from "../ContributionHeatmap";

interface Props {
  data: WrappedData;
}

export default function HeatmapSlide({ data }: Props) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-5xl h-full flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-4 md:mb-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Your Coding Journey
          </h2>
          <p className="text-base md:text-xl text-gray-400">
            {data.stats.totalContributions.toLocaleString()} contributions across the year
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800/30 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-8 border border-gray-700/50 flex-1 overflow-y-auto"
        >
          <ContributionHeatmap 
            data={data.stats.contributionCalendar} 
            labels={{
              less: "Less",
              more: "More",
              totalCount: `${data.stats.totalContributions.toLocaleString()} contributions`,
            }}
            blockSize={12}
            blockMargin={3}
            fontSize={12}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-4 md:mt-8 grid grid-cols-3 gap-3 md:gap-4"
        >
          <div className="p-3 md:p-4 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/30">
            <p className="text-xs md:text-sm text-gray-400 mb-1">Longest Streak</p>
            <p className="text-xl md:text-3xl font-bold text-white">{data.stats.longestStreak || 0} days</p>
          </div>
          <div className="p-3 md:p-4 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl border border-orange-500/30">
            <p className="text-xs md:text-sm text-gray-400 mb-1">Current Streak</p>
            <p className="text-xl md:text-3xl font-bold text-white">{data.stats.currentStreak || 0} days</p>
          </div>
          <div className="p-3 md:p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/30">
            <p className="text-xs md:text-sm text-gray-400 mb-1">Best Day</p>
            <p className="text-xl md:text-3xl font-bold text-white">{data.stats.bestDay?.count || 0}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
