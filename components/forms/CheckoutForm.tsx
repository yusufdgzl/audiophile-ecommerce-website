"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { IoCashOutline } from "react-icons/io5";



export default function CheckoutForm() {

  const [selectedOption, setSelectedOption] = useState<string>("e-money");

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
  };


  return (
    <form
    
      className="bg-white p-6 md:p-14 md:w-[700px] rounded-xl "
    >
      <h2 className="text-3xl font-semibold">CHECKOUT</h2>
      <div>
        <p className="text-[#e58c55] py-6 font-semibold text-sm">
          BILLING DETAILS
        </p>
        <div className="grid md:grid-cols-2 gap-4  ">
          <div className="flex flex-col justify-center  w-full  space-y-2">
            <label className="form-label " htmlFor="name">
              Name
            </label>
            <input
              className="form-input"
              placeholder="John Doe"
              type="text"
              id="name"
              name="name"
            />
          </div>
          <div className="flex flex-col w-full  space-y-2 ">
            <label className="form-label" htmlFor="email">
              Email Address
            </label>
            <input
              className="form-input "
              placeholder="john@doe.com"
              type="email"
              id="email"
              name="name"
            />
          </div>
          <div className="flex flex-col w-full  space-y-2 ">
            <label className="form-label" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="form-input "
              placeholder="+1 202-555-0136"
              type="text"
              id="phone"
              name="name"
            />
          </div>
        </div>

        <div>
          <label htmlFor=""></label>
          <input type="text" />
        </div>
      </div>

      <div>
        <p className="text-[#e58c55] py-6 font-semibold text-sm">
          SHIPPING INFO
        </p>
        <div className="grid md:grid-cols-2 gap-4  ">
          <div className="flex flex-col md:col-span-2 justify-center  w-full  space-y-2">
            <label className="form-label " htmlFor="address">
              Your Address
            </label>
            <input
              className="form-input"
              placeholder="1137 Williams Avenue"
              type="text"
              id="address"
              name="address"
            />
          </div>
          <div className="flex flex-col w-full  space-y-2 ">
            <label className="form-label" htmlFor="zip">
              ZIP Code
            </label>
            <input
              className="form-input "
              placeholder="10001"
              type="text"
              id="zip"
              name="zip"
            />
          </div>
          <div className="flex flex-col w-full  space-y-2 ">
            <label className="form-label" htmlFor="city">
              City
            </label>
            <input
              className="form-input "
              placeholder="New York"
              type="text"
              id="city"
              name="city"
            />
          </div>
          <div className="flex flex-col w-full  space-y-2 ">
            <label className="form-label" htmlFor="country">
              Country
            </label>
            <input
              className="form-input "
              placeholder="United States"
              type="text"
              id="country"
              name="city"
            />
          </div>
        </div>
      </div>

      <div className="">
        <p className="text-[#e58c55] py-6 font-semibold text-sm">
          PAYMENT DETAILS
        </p>

        <div className="flex flex-col justify-center w-full space-y-2 md:justify-between  md:flex-row">
          <p className="text-xs font-semibold pb-4 w-full">Payment Method</p>
          <div className="w-full space-y-5 ">
            <label
              className="form-label form-input hover:border-orange-500 w-full flex items-center space-x-2 cursor-pointer "
              htmlFor="e-money"
            >
              <input
                className="w-5 h-5 "
                placeholder="1137 Williams Avenue"
                type="radio"
                id="e-money"
                value="e-money"
                name="paymentMethod"
                checked={selectedOption === "e-money"}
                onChange={handleOptionChange}
              />
              <span className="text-md font-semibold">e-Money</span>
            </label>
            <label
              className="form-label form-input hover:border-orange-500 w-full flex items-center space-x-2 cursor-pointer"
              htmlFor="cash"
            >
              <input
                className="w-5 h-5  "
                placeholder="1137 Williams Avenue"
                type="radio"
                id="cash"
                value="cash"
                name="paymentMethod"
                checked={selectedOption === "cash"}
                onChange={handleOptionChange}
              />
              <span className="text-md font-semibold">Cash on Delivery</span>
            </label>
          </div>
        </div>
        {selectedOption === "e-money" ? (
          <div className="space-y-4 py-6 flex flex-col md:space-y-0 md:space-x-4 md:flex-row">
            <div className="flex flex-col w-full  space-y-2 ">
              <label className="form-label" htmlFor="e-moneyNumber">
                e-Money Number
              </label>
              <input
                className="form-input "
                placeholder="238521993"
                type="text"
                id="e-moneyNumber"
                name="e-moneyNumber"
              />
            </div>
            <div className="flex flex-col w-full  space-y-2 ">
              <label className="form-label" htmlFor="e-moneyPin">
                e-Money Pin
              </label>
              <input
                className="form-input "
                placeholder="6891"
                type="text"
                id="e-moneyPin"
                name="e-moneyPin"
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center space-y-6 py-8 md:flex-row md:space-y-0 md:space-x-6 ">
            <IoCashOutline className="w-10 h-10 md:w-20 md:h-20 text-orange-500" />
            <p className="opacity-70">
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        )}
      </div>
    </form>
  );
}
