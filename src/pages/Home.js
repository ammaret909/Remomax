import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ButtonH1 from "../components/ButtonH1";
import ButtonMenu from "../components/ButtonMenu";
import TitleHead from "../components/TitleHead";
export function Home() {
  return (
    <div className=" bg-white">
      <NavBar />

      <div className=" grid grid-cols-12 min-h-screen">
        {/* memubar */}
        <div className="hidden sm:block col-span-3 lg:col-span-2 lx:grid rmx_blue">
          <div>
            <div className="py-3.5 text-md rounded-box shadow-xl rmx_green text-zinc-600 text-center m-2 ">
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
            <div className=" justify-items-center">
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

        <div className="col-span-12 sm:col-span-9 md:col-span-9 lg:col-span-10 w-base-200 rounded-box ">
          {/* path before */}
          <div className="grid grid-cols-1 text-zinc-600 text-sm">
            <TitleHead title="Sales & Marketing" />
          </div>

          {/* card h1 */}
          {/* data */}
          <div className="grid lg:grid-cols-5 sm:grid-cols-3 ounded-box ">
            <ButtonH1 topic="HO" />
            <ButtonH1 topic="!!!Patient Registration" />
            <ButtonH1 topic="HoPreOrder" />
            <ButtonH1 topic="ItemRegistration" />
            <ButtonH1 topic="Transfer Team" />
            <ButtonH1 topic="[มีของมาส่งให้เปิดงาน] หรือ [ไม่มีของมาส่งแต่อัพปิ้กขันบอกให้เปิดงาน]" />
            <ButtonH1 topic="ส่งLabOutSourceงานฟัน" />
            <ButtonH1 topic="[มีของมาส่งให้เปิดงาน] หรือ [ไม่มีของมาส่งแต่อัพปิ้กขันบอกให้เปิดงาน] ...Main Menu" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
