import { SpinnerSvg } from "components";

export const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <SpinnerSvg className="text-blue-500 fill-current w-14 h-14" />
    </div>
  );
};
