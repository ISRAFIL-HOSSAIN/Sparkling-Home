'use client';
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function Payment() {
  return (
    <div className="w-full">
      <div className="text-lg font-semibold">Payment Method</div>
      <div className="text-sm text-gray-600">Add a new payment method to your account.</div>
      <div className="mt-4 grid grid-cols-3 gap-4">
        <button className="flex flex-col items-center justify-center space-y-2 border rounded p-4">
          <CreditCardIcon className="h-6 w-6" />
          <div>Card</div>
        </button>
        <button className="flex flex-col items-center justify-center space-y-2 border rounded p-4">
          <CreditCardIcon className="h-6 w-6" />
          <div>Paypal</div>
        </button>
        <button className="flex flex-col items-center justify-center space-y-2 border rounded p-4">
          <AppleIcon className="h-6 w-6" />
          <div>Apple</div>
        </button>
      </div>
      <form className="mt-4 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">
            Name
          </label>
          <Input id="name" placeholder="First Last" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="card-number">
            Card number
          </label>
          <Input id="card-number" placeholder="Card number" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="expires-month">
              Expires
            </label>
            <Select>
              <SelectTrigger id="expires-month">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="01">01</SelectItem>
                <SelectItem value="02">02</SelectItem>
                <SelectItem value="03">03</SelectItem>
                <SelectItem value="04">04</SelectItem>
                <SelectItem value="05">05</SelectItem>
                <SelectItem value="06">06</SelectItem>
                <SelectItem value="07">07</SelectItem>
                <SelectItem value="08">08</SelectItem>
                <SelectItem value="09">09</SelectItem>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="11">11</SelectItem>
                <SelectItem value="12">12</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="expires-year">
              Year
            </label>
            <Select>
              <SelectTrigger id="expires-year">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2025">2025</SelectItem>
                <SelectItem value="2026">2026</SelectItem>
                <SelectItem value="2027">2027</SelectItem>
                <SelectItem value="2028">2028</SelectItem>
                <SelectItem value="2029">2029</SelectItem>
                <SelectItem value="2030">2030</SelectItem>
                <SelectItem value="2031">2031</SelectItem>
                <SelectItem value="2032">2032</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="cvc">
              CVC
            </label>
            <Input id="cvc" placeholder="CVC" />
          </div>
        </div>
        <Button className="w-full">Continue</Button>
      </form>
    </div>
  )
}

function AppleIcon(props:any) {
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
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" />
    </svg>
  )
}


function CreditCardIcon(props:any) {
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
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}
