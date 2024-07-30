import { toast } from "react-toastify";

export const vibrate = (ms: number) => {
  console.log("navigator", navigator);
  if (navigator.vibrate) {
    toast("In vibrator wtf");
    navigator.vibrate(500);
  }
};
