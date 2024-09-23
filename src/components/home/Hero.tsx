import { Sparkles } from "lucide-react";
import PrimaryButton from "../global/PrimaryButton";

export default function Hero() {
  return (
    <div className="mt-32">
      <h1 className="text-center text-6xl max-w-[700px] mx-auto font-medium leading-[75px]">
        Bring Your Characters to Life with Ethical AI.
      </h1>
      <p className="text-center text-xl font-normal my-12 flex items-start justify-center">
        <span>Pro-creator. Pro-human.</span>
        <Sparkles className="w-4 h-4" />
      </p>
      <PrimaryButton type="button" className="mx-auto flex">
        Start Creating
      </PrimaryButton>
    </div>
  );
}
