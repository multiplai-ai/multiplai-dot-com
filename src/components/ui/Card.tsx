interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-canvas border border-mist rounded-[4px] p-7 relative paper-speckle ${className}`}
    >
      <div className={`relative z-[1] ${className.includes("flex") ? "flex flex-col h-full" : ""}`}>{children}</div>
    </div>
  );
}
