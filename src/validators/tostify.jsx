import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const Notify = (message) => {
    if (message.toLowerCase().startsWith("erro")) {
        toast.error(message.substring(5)); 

    } else if (message.toLowerCase().startsWith("sucesso")) {
        toast.success(message.substring(8)); 

    }

};