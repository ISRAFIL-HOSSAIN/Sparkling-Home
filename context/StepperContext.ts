import {createContext} from 'react'; 
interface StepperContextProps{
    serviceData : any;
    setServiceData : any;
    dateData: any; 
    setDateData: any; 
    paymentData : any; 
    setPaymentData : any;
}
export const StepperContext = createContext<StepperContextProps | null> (null); 