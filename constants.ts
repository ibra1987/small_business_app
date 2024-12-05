import { BookOpen, FileText, Ticket, Wrench } from "lucide-react";


export const features = [
    {
      name: 'Ticketing System',
      description: 'Manage customer support efficiently with our easy-to-use ticketing system.',
      icon: Ticket,
    },
    {
      name: 'Invoicing',
      description: 'Create and manage professional invoices with our automated billing system.',
      icon: FileText,
    },
    {
      name: 'Business Tips',
      description: 'Access expert advice and strategies to grow your business effectively.',
      icon: BookOpen,
    },
    {
        name: 'Task Management',
        description: 'Streamline your workflow with our simple task management tool designed for small businesses.',
        icon: Wrench,
    },
  ];
  


export const navLinks = [
    {
        name:"Home",
        path:"/"
    },
    {
        name:"Features",
        path:"/#features"
    },
    {
        name:"Blog",
        path:"/blog"
    },
    {
        name:"Pricing",
        path:"/#pricing"
    },
    {
        name:"talks",
        path:"/talks"
    }
]