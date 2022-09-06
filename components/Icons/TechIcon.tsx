import Image from "next/image";

interface Props {
  techName: string;
  className?: string;
}

/**
 * Functional Component to render a logo.
 */
export const TechIcon: React.FC<Props> = ({ techName, className }) => {
  return (
    <Image
      src={`/${techName}.png`}
      alt={`${techName} icon`}
      width={24}
      height={24}
      className={className}
    />
  );
};
