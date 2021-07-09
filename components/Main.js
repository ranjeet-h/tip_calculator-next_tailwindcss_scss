import Image from "next/image";
import React, { useEffect, useState } from "react";
import Doller from "../public/icon-dollar.svg";
import Person from "../public/icon-person.svg";

const Main = () => {
  const [value, setValue] = useState(5);
  const [billAmount, setBillAmount] = useState(null);
  const [numberOfPeople, setNumberOfPeople] = useState(null);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const calculate = () => {
      setTipAmount(billAmount * (value / 100));

      if (numberOfPeople !== null) {
        setTotalAmount(tipAmount * numberOfPeople);
      }
    };
    calculate();
  }, [value, billAmount, numberOfPeople]);

  const handleReset = () => {
    setBillAmount(0);
    setNumberOfPeople(0);
    setTipAmount(0);
    setTipAmount(0);
  }
  // favicon.ico
  

  return (
    <div className="bg-white sm:w-[70vw]  rounded-t-[2.3rem] sm:rounded-xl mt-5 sm:container sm:mx-auto sm:my-24">
      <div className="mx-6 py-6 sm:grid sm:grid-cols-2 sm:space-x-6">
        <div className="">
          <div className="billAmountInput">
            <h1 className="font-semibold text-gray-500 ">Bill</h1>
            <div className="bg-[#F3F8FB]  h-11 flex flex-grow-0 flex-shrink-0 items-center rounded-lg">
              <div className="h-5 w-6 ml-2">
                <Image src={Doller} />
              </div>

              <input
                type="number"
                name="bill amount"
                value={billAmount}
                onChange={(e) => setBillAmount(e.target.value)}
                placeholder="Enter Bill Amount"
                className="text-right ring-0 outline-none bg-[#F3F8FB] w-[100%] p-2 text-[#00494d] text-xl font-bold rounded-lg"
                align="left"
              />
            </div>
          </div>
          <div className="mt-8">
            <h1 className="font-semibold text-gray-500 ">Select Tip %</h1>
            <div className="grid grid-cols-2 ">
              <div
                className={`${
                  value === 5
                    ? "bg-[#26c0ab] text-[#00494d] "
                    : "bg-[#00494d] text-white"
                }  p-3  rounded-lg  font-bold text-2xl text-center cursor-pointer select-none my-2 mr-4 `}
                onClick={(e) => setValue(5)}
              >
                <p className="">5%</p>
              </div>
              <div
                className={`${
                  value === 10
                    ? "bg-[#26c0ab] text-[#00494d] "
                    : "bg-[#00494d] text-white"
                }  p-3  rounded-lg  font-bold text-2xl text-center cursor-pointer select-none my-2 mr-4`}
                onClick={(e) => setValue(10)}
              >
                <p className="">10%</p>
              </div>
              <div
                className={`${
                  value === 15
                    ? "bg-[#26c0ab] text-[#00494d] "
                    : "bg-[#00494d] text-white"
                }  p-3  rounded-lg  font-bold text-2xl text-center cursor-pointer select-none my-2 mr-4`}
                onClick={(e) => setValue(15)}
              >
                <p className="">15%</p>
              </div>
              <div
                className={`${
                  value === 25
                    ? "bg-[#26c0ab] text-[#00494d] "
                    : "bg-[#00494d] text-white"
                }  p-3  rounded-lg  font-bold text-2xl text-center cursor-pointer select-none my-2 mr-4`}
                onClick={(e) => setValue(25)}
              >
                <p className="">25%</p>
              </div>
              <div
                className={`${
                  value === 50
                    ? "bg-[#26c0ab] text-[#00494d] "
                    : "bg-[#00494d] text-white"
                }  p-3  rounded-lg  font-bold text-2xl text-center cursor-pointer select-none my-2 mr-4`}
                onClick={(e) => setValue(50)}
              >
                <p className="">50%</p>
              </div>
              <div
                className={`bg-[#F3F8FB] text-gray-500  p-3  rounded-lg  font-bold text-2xl text-center select-none my-2 mr-4`}
              >
                <p className="">Custom</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="billAmountInput">
              <h1 className="font-semibold text-gray-500 ">Number Of People</h1>
              <div className="bg-[#F3F8FB]  h-11 flex flex-grow-0 flex-shrink-0 items-center rounded-lg">
                <div className="h-5 w-6 ml-2">
                  <Image src={Person} />
                </div>

                <input
                  type="number"
                  name="Number Of People"
                  value={numberOfPeople}
                  placeholder="Enter No Of People"
                  onChange={(e) => setNumberOfPeople(e.target.value)}
                  className="text-right ring-0 outline-none bg-[#F3F8FB] w-[100%] p-2 text-[#00494d] text-xl font-bold rounded-lg"
                  align="left"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#00494d] rounded-xl mt-8">
          <div className="flex justify-between ">
            <div className="p-2 leading-tight ml-4 mt-5">
              <p className="text-white">Tip Amount</p>
              <p className="text-[#7f9c9f] ">/ person</p>
            </div>
            <h2 className=" text-[#26c0ab] text-3xl font-bold mr-4 mt-5">
              ${tipAmount}
            </h2>
          </div>
          <div className="flex justify-between ">
            <div className="p-2 leading-tight ml-4 mt-5">
              <p className="text-white">Total</p>
              <p className="text-[#7f9c9f] ">/ person</p>
            </div>
            <h2 className=" text-[#26c0ab] text-3xl font-bold mr-4 mt-5">
              ${numberOfPeople === null ? tipAmount : totalAmount}
            </h2>
          </div>
          <div className="pb-2">
            <div className=" p-3 bg-[#26c0ab] text-center text-[#00494d] font-bold text-xl m-4 rounded-lg cursor-pointer" onClick={e => handleReset()}>
              <p className="">RESET</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
