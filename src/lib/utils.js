import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function ScrollToTop(){
  console.log("arifin");
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  console.log(window.screenX);
  console.log(window.screenY);
  
}