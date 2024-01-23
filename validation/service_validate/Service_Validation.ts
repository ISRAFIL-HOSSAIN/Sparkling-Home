import * as Yup from 'yup';


export const serviceValidation = Yup.object().shape({
  serviceData: Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    serviceType: Yup.string().required('Service type is required'),
  }),
  dateData: Yup.string().required('Date is required'),
  paymentData: Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    cvv: Yup.string().required('CVV is required'),
    cardNumber: Yup.string().required('Card number is required'),
  }),
});

