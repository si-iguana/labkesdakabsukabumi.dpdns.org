import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "white" | "dark";
  showText?: boolean;
}

const Logo = ({ 
  className, 
  size = "md", 
  variant = "default", 
  showText = true 
}: LogoProps) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8", 
    lg: "w-20 h-20"
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl"
  };

  const textVariants = {
    default: "text-gradient",
    white: "text-white",
    dark: "text-foreground"
  };

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      {/* Logo Image */}
      <img 
        src="/logo.png" 
        alt="HealthLab Logo" 
        className={cn(
          "object-contain",
          sizeClasses[size]
        )}
      />
    </div>
  );
};

export { Logo }