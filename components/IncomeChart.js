"use client"

import Lottie from "lottie-react";
// Importe o arquivo JSON que você acabou de criar
import animationData from "@/public/animations/chart-animation.json";

const IncomeChart = () => {
  return (
    <div className="w-full max-w-lg mx-auto">
      {/* O componente Lottie cuida de toda a renderização para você */}
      <Lottie 
        animationData={animationData} 
        loop={true} // Define se a animação deve repetir
      />
    </div>
  );
};

export default IncomeChart;
