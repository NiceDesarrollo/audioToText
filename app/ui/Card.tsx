interface CardProps {
  className?: string; // Define the type of children as React elements
  children: React.ReactNode; // Define the type of children as React elements
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={`
      block 
      max-w-sm 
      p-6 
      bg-white 
      border 
      border-gray-900 
      rounded-lg shadow  
      dark:bg-gray-900 
      dark:border-gray-700            
      ${className ? className : ""}
    `}
    >
      {children}
    </div>
  );
};
