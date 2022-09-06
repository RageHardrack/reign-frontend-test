/* eslint-disable react/no-unknown-property */

interface Props {
  className?: string;
}

/**
 * Functional Component to render a Chevron Down Icon.
 */
export const ChevronDownSvg: React.FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
    >
      <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
    </svg>
  );
};