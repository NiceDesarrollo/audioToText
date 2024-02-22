interface ButtonProps {
  className?: string; // Define the type of children as React elements
  children?: React.ReactNode; // Define the type of children as React elements
}

export const Button: React.FC<ButtonProps> = ({ className, children }) => {
  return (
    <button
      type="submit"
      className={`
            text-white 
            bg-gray-800 
            hover:bg-gray-900 
            focus:outline-none 
            focus:ring-4    
            focus:ring-gray-300 
            font-medium 
            rounded-lg 
            text-sm 
            px-5 
            py-1.5 
            me-2 
            mb-2 
            dark:bg-gray-800 
            dark:hover:bg-gray-700 
            dark:focus:ring-gray-700 
            dark:border-gray-700
            ${className ? className : ""}
        `}
    >
      {children}
    </button>
  );
};
