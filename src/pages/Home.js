import React, { useState } from "react";
import { Sidenav, initTE } from "tw-elements";
export function Home() {
  const [show, setShow] = useState(false);
  initTE({ Sidenav });
  return (
    <div>
      <div class="navbar bg-base-300 rounded-box grid grid-cols-12">
        <div class="drawer sm:hidden grid col-span-2 sm:col-span-1 justify-end">
          <input id="my-drawer" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content ">
            <label for="my-drawer" class="btn drawer-button">
              =
            </label>
          </div>
          <div class="drawer-side">
            <label for="my-drawer" class="drawer-overlay"></label>
            <ul class="menu p-4 w-60 h-full bg-base-200 text-base-content top-auto">
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
              <li>
                <a>Sidebar Item 3</a>
              </li>
              <li>
                <a>Sidebar Item 4</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="grid col-span-1 px-2">
          <a class="text-lg font-bold ">daisyUI</a>
        </div>

        <div class="hidden md:grid col-span-10 justify-end">
          <div class="grid grid-cols-12">
            <div class="col-span-11">
              {/* data */}
              <div class="btn btn-ghost rounded-btn">Button1</div>
              <div class="btn btn-ghost runded-btn">Button2</div>
              <div class="btn btn-ghost rounded-btn">Button3</div>
              <div class="btn btn-ghost rounded-btn">Button4</div>
              <div class="btn btn-ghost rounded-btn">Button5</div>
              <div class="btn btn-ghost rounded-btn">Button6</div>
              <div class="btn btn-ghost rounded-btn">Button7</div>
              <div class="btn btn-ghost rounded-btn">Button8</div>
              <div class="btn btn-ghost rounded-btn">Button9</div>
              <div class="btn btn-ghost rounded-btn">Button10</div>
            </div>

            <div class="col-span-1">
              <div class="dropdown dropdown-hover dropdown-left justify-items-center py-5">
                <label tabindex="0" class="btn m-1">
                  Dropdown
                </label>
                <ul class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  {/* data */}
                  <li>
                    <a>Item 1sadasdasdsad</a>
                  </li>
                  <li>
                    <a>Item 2sadsadasdasd</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="md:hidden grid col-span-9 sm:col-span-11 justify-end">
          <div className="btn" onClick={() => setShow(!show)}>
            =
          </div>
        </div>
      </div>

      {show ? (
        <div className=" grid grid-cols-1  bg-base-300 rounded-box">
          <div className=" col-span-1 justify-center">
            {/* data */}
            <div href="#" className="btn block py-2 px-4 text-sm">
              Button1
            </div>
            <div href="#" className="btn block py-2 px-4 text-sm">
              Button2
            </div>
            <div href="#" className="btn block py-2 px-4 text-sm">
              Button3
            </div>
          </div>

          <div className=" col-span-1 justify-center">
            {/* data */}
            <div className="btn block py-2 px-4 text-sm dropdown">
              <div tabindex="0" class=" block m-1">
                Drop
              </div>
              <ul class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                {/* data */}
                <li>
                  <a>Item 1sadasdasdsad</a>
                </li>
                <li>
                  <a>Item 2sadsadasdasd</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : null}

      <div className=" grid grid-cols-12 rounded-box mt-5">
        <div className="hidden sm:block col-span-3 grid bg-base-300 rounded-box m-2">
          <div href="#" className="btn block py-3 m-2 text-sm">
            Button1
          </div>
          <div href="#" className="btn block py-3 m-2 text-sm">
            Button2
          </div>
          <div href="#" className="btn block py-3 m-2 text-sm">
            Button3
          </div>
        </div>

        <div className="col-span-12 sm:col-span-9 w-base-200 rounded-box m-2">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 ounded-box">
            <div class=" rounded-box shadow-xl bg-white m-2">
              <div class="card-body items-center text-center">
                <h2 class="card-title">Toppic</h2>
                <div class="card-actions">
                  <button class="btn btn-primary">more</button>
                </div>
              </div>
            </div>

            <div class="rounded-box shadow-xl bg-white m-2">
              <div class="card-body items-center text-center">
                <h2 class="card-title">Toppic</h2>
                <div class="card-actions">
                  <button class="btn btn-primary">more</button>
                </div>
              </div>
            </div>

            <div class="rounded-box shadow-xl bg-white m-2">
              <div class="card-body items-center text-center">
                <h2 class="card-title">Toppic</h2>
                <div class="card-actions">
                  <button class="btn btn-primary">more</button>
                </div>
              </div>
            </div>

            <div class="rounded-box shadow-xl bg-white m-2">
              <div class="card-body items-center text-center">
                <h2 class="card-title">Toppic</h2>
                <div class="card-actions">
                  <button class="btn btn-primary">more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer footer-center p-10 bg-base-200 rounded fixed bottom-0 ">
        <div>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </div>
      </div>
    </div>
  );
}
