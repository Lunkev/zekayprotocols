import { TextAnimation } from "@/components/ui/text-animation";

export default function LoadingPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <TextAnimation text="zekay" color="#ffffff" animationDuration="2400ms" />
    </div>
  );
}
