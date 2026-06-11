import React from 'react';

export function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'outline' | 'white' }) {
  const base = "inline-flex items-center justify-center font-bold text-sm rounded-full transition-all";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200",
    outline: "bg-transparent border border-slate-200 text-slate-900 hover:bg-slate-50 shadow-sm",
    white: "bg-white text-slate-900 hover:bg-slate-50 shadow-sm border border-slate-100"
  };

  return (
    <button className={`${base} ${variants[variant]} ${className} px-8 py-4`} {...props}>
      {children}
    </button>
  );
}
