import React, { useState } from "react";
import { Sidenav, initTE } from "tw-elements";
import ButtonH2 from "../components/ButtonH2";
import ButtonH2Mobile from "./ButtonH2Mobile";
import ButtonMenu from "./ButtonMenu";
export default function NavBar() {
  initTE({ Sidenav });
  const [show, setShow] = useState(false);

  function close_dropdown() {
    if (show != false) {
      setShow(!show);
    }
  }
  return (
    <div class="navbar rmx_blue grid grid-cols-12">
      <div class="drawer sm:hidden grid col-span-2 sm:col-span-1 justify-start">
        <input
          id="my-drawer"
          type="checkbox"
          onClick={() => close_dropdown()}
          class="drawer-toggle"
        />
        <div class="drawer-content">
          <label
            for="my-drawer"
            class="btn drawer-button rmx_green hover:rmx_green text-zinc-600"
          >
            <svg
              class="w-6 h-6 text-gray-800 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
            </svg>
          </label>
        </div>
        <div class="drawer-side">
          <label for="my-drawer" class="drawer-overlay "></label>
          <div class="menu p-4 w-60 bg-base-200 top-auto rmx_blue text-white">
            <div>
              <div className="py-3.5 text-md rounded-box shadow-xl rmx_green text-zinc-600 text-center m-2">
                User Screen
              </div>
              <div className="grid justify-items-center">
                <select class="btn w-11/12 bg-gray-50 border border-gray-300 text-zinc-600 rounded-lg block p-2.5 mr-2 ml-2 text-xs">
                  <option selected>Choose a Role</option>
                  <option>Admin1</option>
                  <option>Admin2</option>
                  <option>Admin3</option>
                  <option>Admin4</option>
                </select>
              </div>
            </div>
            <div>
              <div className="py-3.5 text-md rounded-box shadow-xl rmx_green text-zinc-600 text-center m-2">
                User Memu
              </div>
              <div className="justify-items-center">
                <ButtonMenu topic="Sales & Marketing" />
                <ButtonMenu topic="Purchase" />
                <ButtonMenu topic="Inventory-Stores" />
                <ButtonMenu topic="Finance-Accouting" />
                <ButtonMenu topic="HR & Payroll" />
                <ButtonMenu topic="Manufacturing Control" />
                <ButtonMenu topic="Logistic" />
                <ButtonMenu topic="Maintenance" />
                <ButtonMenu topic="Registration" />
                <ButtonMenu topic="CRM" />
                <ButtonMenu topic="Administration" />
                <ButtonMenu topic="Infrastructure" />
                <ButtonMenu topic="Installation" />
                <ButtonMenu topic="เข่งส่งงาน" />
                <ButtonMenu topic="Antique" />
                <ButtonMenu topic="KMT" />
                <ButtonMenu topic="แม่แบบ" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="grid sm:col-span-2 px-2">
        <a class="text-lg font-bold text-white">REMOMAX</a>
      </div> */}

      <div class="grid sm:col-span-2 px-2 ml-2 md:ml-4">
        <img src="miti.jpg" className="md:w-20"></img>
      </div>

      <div class="hidden md:grid sm:col-span-10 ">
        <div class="grid grid-cols-12">
          <div class="col-span-11 ">
            {/* data */}
            <ButtonH2 topic="Finance&Accounting" />
            <ButtonH2 topic="R&D" />
            <ButtonH2 topic="SalesOnlineJenya" />
            <ButtonH2 topic="BoothRepair" />
            <ButtonH2 topic="StockReason" />
            <ButtonH2 topic="Manufacturing" />
            <ButtonH2 topic="Internal Borrow" />
            <ButtonH2 topic="Studio" />
          </div>

          <div class="grid col-span-1 content-center">
            <div class="dropdown dropdown-hover dropdown-left justify-self-center">
              <label
                tabindex="0"
                class="btn m-1bg-current rmx_green hover:rmx_green text-zinc-600"
              >
                <svg
                  class="w-6 h-6 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 8"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                  />
                </svg>
              </label>
              <ul class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                {/* data */}
                <li>
                  <a>H3 1</a>
                </li>
                <li>
                  <a>H3 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="md:hidden grid col-span-9 sm:col-span-10 justify-end">
        <div
          className="btn rmx_green hover:rmx_green text-zinc-600"
          onClick={() => setShow(!show)}
        >
          <svg
            class="w-6 h-6 text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 17 14"
          >
            <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z" />
          </svg>
        </div>
      </div>

      <div className="grid col-span-12">
        {show ? (
          <div className=" grid grid-cols-1 rmx_blue hidden_lx">
            <div className=" col-span-1 justify-center shadow-md">
              {/* data */}
              <ButtonH2Mobile topic="Finance&Accounting" />
              <ButtonH2Mobile topic="R&D" />
              <ButtonH2Mobile topic="SalesOnlineJenya" />
              <ButtonH2Mobile topic="BoothRepair" />
              <ButtonH2Mobile topic="StockReason" />
              <ButtonH2Mobile topic="Manufacturing" />
              <ButtonH2Mobile topic="Internal Borrow" />
              <ButtonH2Mobile topic="Studio" />
            </div>

            <div className=" col-span-1 justify-center shadow-md">
              {/* data */}
              <div className="btn block py-2 px-4 text-sm dropdown dropdown-hover btn-ghost text-white">
                <div tabindex="0" class=" m-1">
                  <div>H3</div>
                </div>
                <div class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  {/* data */}
                  <li>
                    <div>H3 1</div>
                  </li>
                  <li>
                    <div>H3 2</div>
                  </li>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
