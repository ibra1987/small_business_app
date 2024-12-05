


import React from 'react';
import { FileText, Ticket, Package } from 'lucide-react';

export const tools = [
  {
    id: 'invoicing',
    name: 'Invoicing System',
    icon: FileText,
    basePrice: 19,
    description: 'Professional invoicing with templates and automated billing',
  },
  {
    id: 'ticketing',
    name: 'Ticketing System',
    icon: Ticket,
    basePrice: 29,
    description: 'Customer support ticket management and tracking',
  },
  {
    id: 'inventory',
    name: 'Inventory Management',
    icon: Package,
    basePrice: 39,
    description: 'Track stock levels, orders, and supply chain',
  },
];

interface ToolSelectorProps {
  selectedTools: string[];
  onToolToggle: (toolId: string) => void;
}

export function ToolSelector({ selectedTools, onToolToggle }: ToolSelectorProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {tools.map((tool) => {
        const isSelected = selectedTools.includes(tool.id);
        const Icon = tool.icon;
        
        return (
          <div
            key={tool.id}
            className={`relative rounded-lg border-2 p-6 cursor-pointer transition-all ${
              isSelected
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
            onClick={() => onToolToggle(tool.id)}
          >
            <div className="flex items-center space-x-3">
              <Icon className={`h-6 w-6 ${isSelected ? 'text-blue-600' : 'text-gray-400'}`} />
              <h3 className="text-lg font-medium text-gray-900">{tool.name}</h3>
            </div>
            <p className="mt-2 text-sm text-gray-500">{tool.description}</p>
            <p className="mt-2 text-lg font-semibold text-blue-600">${tool.basePrice}/mo</p>
          </div>
        );
      })}
    </div>
  );
}