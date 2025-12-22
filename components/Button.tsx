
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  as?: React.ElementType;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  as: Component = 'button',
  ...props
}) => {
  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-500 text-white",
    secondary: "bg-slate-800 hover:bg-slate-700 text-white",
    outline: "border border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10"
  };
  return (
    <Component 
      onClick={onClick} 
      className={`px-6 py-2 rounded-xl font-mono text-sm transition-all active:scale-95 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
