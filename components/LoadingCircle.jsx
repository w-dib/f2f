import { NinetyRingWithBg } from "react-svg-spinners";

function LoadingCircle() {
  return (
    <div className="fixed bottom-5 flex items-center justify-center w-full h-full">
      <NinetyRingWithBg color="#21FF7E" width="60" height="60" />
    </div>
  );
}

export default LoadingCircle;
