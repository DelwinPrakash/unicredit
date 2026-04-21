"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ContactFormWrapper({ children }: { children: React.ReactNode }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      
      if (response.redirected) {
        window.location.href = response.url;
      } else if (response.ok) {
        router.push("/thank-you");
      } else {
        router.push("/contact?error=1");
      }
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {children}
      
      <div>
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full md:w-auto bg-blue-600 text-white font-bold py-4 px-10 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-600/20 active:scale-95 transition-all text-sm tracking-wide flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting && <Loader2 className="w-5 h-5 animate-spin" />}
          {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
        </button>
      </div>
    </form>
  );
}
