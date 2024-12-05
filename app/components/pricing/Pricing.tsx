"use client"
import { useState } from "react";
import { PricingSummary } from "./PricingSummary";
import { ToolSelector } from "./ToolSelector";



export function PricingSection() {
  const [selectedTools, setSelectedTools] = useState<string[]>([]);

  const handleToolToggle = (toolId: string) => {
    setSelectedTools(prev =>
      prev.includes(toolId)
        ? prev.filter(id => id !== toolId)
        : [...prev, toolId]
    );
  };

  return (
    <div id="pricing" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Build Your Custom Solution
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Select the tools you need and only pay for what you use
          </p>
        </div>

        <div className="mt-12">
          <ToolSelector
            selectedTools={selectedTools}
            onToolToggle={handleToolToggle}
          />
        </div>

        {selectedTools.length > 0 && (
          <div className="mt-12 max-w-lg mx-auto">
            <PricingSummary selectedTools={selectedTools} />
          </div>
        )}
      </div>
    </div>
  );
}