'use client'; 
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export default function Address() {
  return (
    <div className="w-full  my-8 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Address </h1>
      <p className="text-sm text-center mb-8">
        Our dedicated customer care team is always here to help and will make sure that you are 100% happy!
      </p>
      <div className="space-y-4">
        
        <Input placeholder="First name" />
        <Input placeholder="Last name" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Phone" type="tel" />
        <Input placeholder="Personal identity number" />
        <div className="flex justify-between items-center">
          <label className="flex items-center space-x-2" htmlFor="rut-info">
            <InfoIcon className="text-gray-400" />
            <span className="text-sm font-medium">How RUT deduction works</span>
          </label>
        </div>
      </div>
      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">HOME CLEANING</h2>
        <div className="flex justify-between items-center mb-2">
          <span>Every week</span>
          <span>3.5 h</span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="flex items-center space-x-1">
            <CheckIcon className="text-green-500" />
            <span>Cleaning supplies</span>
            <InfoIcon className="text-gray-400" />
          </span>
        </div>
        <div className="flex items-center space-x-2 mb-2">
          <FileWarningIcon className="text-red-500" />
          <span>Contact details</span>
        </div>
        <div className="flex items-center space-x-2 mb-2">
          <FileWarningIcon className="text-red-500" />
          <span>When can we clean?</span>
        </div>
        <div className="flex items-center space-x-2">
          <LocateIcon className="text-gray-500" />
          <span>1234, 11115</span>
        </div>
      </div>
      <div className="mt-6 flex items-center space-x-2">
        <Input className="flex-1" placeholder="Gift card or coupon" />
        <Button className="shrink-0">Apply coupon</Button>
      </div>
      <p className="text-xs text-gray-500 mt-4">Add your email before the code</p>
      <div className="flex items-center space-x-2 mt-4">
        <InfoIcon className="text-gray-400" />
        <span className="text-sm font-medium">Ordering details in a nutshell</span>
      </div>
      <div className="flex items-center space-x-2 mt-4">
        <Checkbox id="terms" />
        <label className="text-sm font-medium" htmlFor="terms">
          I accept terms and privacy policy *
        </label>
      </div>
    </div>
  )
}

function CalendarIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}


function CheckIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}


function FileWarningIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}


function InfoIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function LocateIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}
