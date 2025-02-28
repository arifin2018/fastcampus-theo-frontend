import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function ScrollToTop(){
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  
}