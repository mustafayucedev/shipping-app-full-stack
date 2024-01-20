import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export const notification = (message,time,type) => {
    toast(message, {
      autoClose: time,
      "type": type, // info, succcess, warning, error
      "theme": "auto",
    });
}