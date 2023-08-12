"use client"
import { useRouter } from "next/navigation";

const GoBackButton = () => {

  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 2) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <div onClick={handleBack} className="px-2 flex justify-center items-center">
      <img className="h-3" src="/images/right-arrow.svg" alt="arrow" />
    </div>
  )
}

export default GoBackButton