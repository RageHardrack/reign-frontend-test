/* eslint-disable react/no-unknown-property */

interface Props {
  className?: string;
}

/**
 * Functional Component to render a Filled (solid) Heart Icon.
 */
export const FilledHeartSvg: React.FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 22"
    >
      <path
        fill="#DD0031"
        d="M12 3.248C8.852-2.154 0-.577 0 6.192 0 10.853 5.571 15.619 12 22c6.43-6.381 12-11.147 12-15.808C24-.6 15.125-2.114 12 3.248z"
      />
    </svg>
  );
};
