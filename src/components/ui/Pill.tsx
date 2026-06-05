interface PillProps {
  text: string;
  className?: string;
}

const Pill: React.FC<PillProps> = ({ text, className = "" }) => (
  <span
    className={`px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium transition-colors cursor-default ${className}`}
  >
    {text}
  </span>
);

export default Pill;
