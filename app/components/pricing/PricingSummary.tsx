import React from 'react';
import { Check } from 'lucide-react';
import { tools } from './ToolSelector';

interface PricingSummaryProps {
  selectedTools: string[];
}

export function PricingSummary({ selectedTools }: PricingSummaryProps) {
  const totalPrice = selectedTools.reduce((sum, toolId) => {
    const tool = tools.find(t => t.id === toolId);
    return sum + (tool?.basePrice || 0);
  }, 0);

  const selectedFeatures = selectedTools.map(toolId => {
    const tool = tools.find(t => t.id === toolId);
    return tool?.name;
  });

  const baseFeatures = [
    'Basic Analytics Dashboard',
    'Email Support',
    'API Access',
    'Mobile App Access',
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-900">Your Custom Plan</h3>
      <div className="mt-4">
        <p className="text-4xl font-bold text-blue-600">${totalPrice}<span className="text-lg text-gray-500">/mo</span></p>
      </div>
      
      <div className="mt-6">
        <h4 className="font-medium text-gray-900">Selected Tools:</h4>
        <ul className="mt-4 space-y-3">
          {selectedFeatures.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h4 className="font-medium text-gray-900">Included in all plans:</h4>
        <ul className="mt-4 space-y-3">
          {baseFeatures.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-5 w-5 text-blue-500 mr-2" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button className="mt-8 w-full bg-blue-600 text-white rounded-md py-3 px-4 hover:bg-blue-700 transition-colors">
        Get Started Now
      </button>
    </div>
  );
}