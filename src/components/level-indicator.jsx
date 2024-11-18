import React from 'react'
import { Progress } from "@/components/ui/progress"
const LevelIndicator = ({ level, currentXP, levelXP, totalXP }) => {
  const progress = (currentXP / levelXP) * 100

  return ((
    <div className="relative flex items-center bg-white rounded-full p-1 shadow-md w-[450px]  ">
      <div
        className="relative flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mr-3">
        <span className="text-3xl font-bold text-white">{level}</span>
      </div>
      <div className="flex-grow">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>{currentXP} / {levelXP} xp</span>
        </div>
        <Progress value={progress} className="h-2"/>
        <div className="text-s text-gray-500 mt-1"><strong>{totalXP.toLocaleString()}xp in total</strong></div>
      </div>
    </div>));
}
export default LevelIndicator

// Example usage:
export const LevelIndicatorExample = () => {
  return (
    (<div className="p-4 bg-gray-100">
      <LevelIndicator level={16} currentXP={856} levelXP={1200} totalXP={56032} />
    </div>)
  );
}