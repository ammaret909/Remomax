import React, { useState } from "react";
import { Sidenav, initTE } from "tw-elements";
export function Home() {
  const [show, setShow] = useState(false);

  function close_dropdown() {
    if (show != false) {
      setShow(!show);
    }
  }
  initTE({ Sidenav });
  return (
    <div className=" bg-white">
      <div class="navbar rmx_blue grid grid-cols-12">
        <div class="drawer sm:hidden grid col-span-2 sm:col-span-1 justify-end">
          <input
            id="my-drawer"
            type="checkbox"
            onClick={() => close_dropdown()}
            class="drawer-toggle"
          />
          <div class="drawer-content ">
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
            <ul class="menu p-4 w-60 h-full bg-base-200 top-auto rmx_blue text-white">
              <li>
                <a>MENU1</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="grid sm:col-span-2 px-2">
          <a class="text-lg font-bold text-white">REMOMAX</a>
        </div>

        <div class="hidden md:grid sm:col-span-10 ">
          <div class="grid grid-cols-12">
            <div class="col-span-11 ">
              {/* data */}
              <div class="btn btn-ghost rounded-btn text-white">h2</div>
              <div class="btn btn-ghost rounded-btn text-white">h2</div>
              <div class="btn btn-ghost rounded-btn text-white">h2</div>
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
                    <a>H3 select1</a>
                  </li>
                  <li>
                    <a>H3 select2</a>
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
      </div>

      {show ? (
        <div className=" grid grid-cols-1 rmx_blue hidden_lx">
          <div className=" col-span-1 justify-center shadow-md">
            {/* data */}
            <div
              href="#"
              className="btn block py-2 px-4 text-sm btn-ghost runded-btn text-white"
            >
              h2
            </div>
          </div>

          <div className=" col-span-1 justify-center shadow-md">
            {/* data */}
            <div className="btn block py-2 px-4 text-sm dropdown dropdown-hover btn-ghost text-white">
              <div tabindex="0" class=" m-1">
                <div>
                  <div>H3</div>
                </div>
              </div>
              <ul class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                {/* data */}
                <li>
                  <a>H3 select1</a>
                </li>
                <li>
                  <a>H3 select2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : null}

      <div className=" grid grid-cols-12 rounded-box mt-5 min-h-screen">
        <div className="hidden sm:block col-span-3 lx:grid rmx_blue rounded-box m-2">
          <div
            href="#"
            className="btn block py-3.5 m-2 text-sm rmx_green hover:rmx_green text-zinc-600"
          >
            MENU1
          </div>
        </div>

        <div className="col-span-12 sm:col-span-9 w-base-200 rounded-box m-2 ">
          <div className="grid grid-cols-1 text-zinc-600 text-sm m-2">
            <div className="rounded-box shadow-xl bg-white p-6 row">
              <div className="text-xl">service</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 sm:grid-cols-2 ounded-box">
            <div class=" rounded-box shadow-xl bg-white m-2">
              <div class=" card-body items-center text-center">
                <h2 class="card-title text-zinc-600">H1</h2>
                <div class="card-actions">
                  <button class="btn rmx_green hover:rmx_green text-zinc-600">
                    Click
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer footer-center p-10 bg-base-200 bottom-0 rmx_blue text-white">
        <div>
          <p>Copyright © 2023 - REMOMAX</p>
        </div>
      </div>
    </div>
  );
}
