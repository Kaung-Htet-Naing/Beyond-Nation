import classNames from "classnames"
import React, { useState } from "react"
const tabs = [
  { name: "全部", href: "#", current: true },
  { name: "未處理", href: "#", current: false },
  { name: "待回覆", href: "#", current: false },
  { name: "完成回收", href: "#", current: false },
]

const people = [
  {
    date: "20-8-2024",
    name: "Peter",
    car: "Tesla ,Model 3 2021",
    garage: "$90000",
    bargain: "$50000",
    battery: "良好",
    lasted_Update: "28-8-2024",
    state: "待回覆",
  },
  // More people...
]
const Page = () => {
  return (
    <div className="py-6">
      <p className="px-6 pb-6 text-black text-bold text-2xl">電車報價</p>
      <div>
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-black focus:outline-none focus:ring-indigo-500 sm:text-sm"
            defaultValue="全部"
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px ml-6 flex space-x-8" aria-label="Tabs">
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  className={classNames(
                    tab.current
                      ? "border-black font-semibold text-black"
                      : "border-transparent font-normal text-primary-color hover:border-gray-300 hover:text-gray-700",
                    " border-b-2 py-3 px-3 text-sm font-medium"
                  )}
                  aria-current={tab.current ? "page" : undefined}
                >
                  {tab.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50 ">
                    <tr className="">
                      <th
                        scope="col"
                        className="p-6 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        提交日期
                      </th>
                      <th
                        scope="col"
                        className="p-6 text-left text-sm font-semibold text-gray-900"
                      >
                        車主
                      </th>
                      <th
                        scope="col"
                        className="p-6 text-left text-sm font-semibold text-gray-900"
                      >
                        電車資料
                      </th>
                      <th
                        scope="col"
                        className="p-6 text-left text-sm font-semibold text-gray-900"
                      >
                        抵價
                      </th>
                      <th
                        scope="col"
                        className="p-6 text-left text-sm font-semibold text-gray-900"
                      >
                        電池健康
                      </th>
                      <th
                        scope="col"
                        className="p-6 text-left text-sm font-semibold text-gray-900"
                      >
                        車房報價
                      </th>
                      <th
                        scope="col"
                        className="p-6 text-left text-sm font-semibold text-gray-900"
                      >
                        最後更新日期
                      </th>
                      <th
                        scope="col"
                        className="p-6 text-left text-sm font-semibold text-gray-900"
                      >
                        狀態
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {people.map((person) => (
                      <tr key={person.name}>
                        <td className=" p-6 text-sm font-medium text-gray-900 sm:pl-6">
                          {person.date}
                        </td>
                        <td className=" p-6 text-sm text-primary-color">
                          {person.name}
                        </td>
                        <td className=" p-6 text-sm text-primary-color">
                          {person.car}
                        </td>
                        <td className=" p-6 text-sm text-primary-color">
                          {person.bargain}
                        </td>
                        <td className=" p-6 text-sm text-primary-color">
                          {person.battery}
                        </td>
                        <td className=" p-6 text-sm text-primary-color">
                          {person.garage}
                        </td>
                        <td className=" p-6 text-sm text-primary-color">
                          {person.lasted_Update}
                        </td>
                        <td className=" flex gap-1 items-center p-6 text-sm text-primary-color">
                          <span className="w-4 h-4 rounded-full bg-[#FAD133]"></span>
                          {person.state}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
