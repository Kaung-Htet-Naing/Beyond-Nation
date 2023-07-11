"use client";
import { Eye, File, More } from "@utils/menuList";
import { DropDown, IconInput, PlusIcon } from "@components/index";
import { dummyData } from "@utils/dummydata";
import { Pencil } from "@utils/menuList";

const Page = () => {
	return (
		<div className="p-10">
			<div className="flex flex-row gap-4">
				<File />
				<h1>Static Pages</h1>
			</div>
			<div className="h-auto mt-4 border border-gray-200 rounded-md shadow-lg">
				<div className="flex flex-row items-center justify-between h-8 px-4 py-10 ">
					<div>
						<DropDown />
					</div>
					<div className="flex flex-row gap-x-8">
						<IconInput />
						<PlusIcon />
					</div>
				</div>
				<div className="flow-root mt-8 ">
					<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
							<div className="relative">
								<table className="min-w-full divide-y divide-gray-300 table-fixed">
									<thead className="bg-[#F5F5F5]">
										<tr>
											<th scope="col" className="relative px-7 sm:w-12 sm:px-6">
												<input
													type="checkbox"
													className="absolute w-4 h-4 -mt-2 text-indigo-600 border-gray-300 rounded left-4 top-1/2 focus:ring-indigo-600"
												/>
											</th>
											<th
												scope="col"
												className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
											>
												Order
											</th>
											<th
												scope="col"
												className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
											>
												Title
											</th>
											<th
												scope="col"
												className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
											>
												Status
											</th>
											<th
												scope="col"
												className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
											>
												Created
											</th>
											<th
												scope="col"
												className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
											>
												Views
											</th>
											<th
												scope="col"
												className="relative py-3.5 pl-3 pr-4 sm:pr-3"
											>
												Actions
											</th>
										</tr>
									</thead>
									<tbody className="bg-white divide-y divide-gray-200">
										{dummyData.map((data, index) => (
											<tr key={index}>
												<td className="relative px-7 sm:w-12 sm:px-6">
													{/* <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600"></div> */}
													<input
														type="checkbox"
														className="absolute w-4 h-4 -mt-2 text-indigo-600 border-gray-300 rounded left-4 top-1/2 focus:ring-indigo-600"
													/>
												</td>
												<td className="py-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap">
													{data.order}
												</td>
												<td className="py-4 text-sm text-gray-500 grow whitespace-nowrap">
													{data.title}
												</td>
												<td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
													<div
														className={`h-4 w-4 bg-[#FF0000] rounded-full`}
													/>
												</td>
												<td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
													{data.created_at}
												</td>
												<td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
													{data.order}
												</td>
												<td className="flex flex-row justify-center py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-3 gap-x-2 ">
													<Pencil />
													<Eye />
													<More />
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6">
						<div className="flex justify-between flex-1 sm:hidden">
							<a
								href="#"
								className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
							>
								Previous
							</a>
							<a
								href="#"
								className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
							>
								Next
							</a>
						</div>
						<div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
							<div>
								<p className="text-sm text-gray-700">
									Showing
									<span className="font-medium">1</span>
									to
									<span className="font-medium">10</span>
									of
									<span className="font-medium">97</span>
									results
								</p>
							</div>
							<div>
								<nav
									className="inline-flex -space-x-px rounded-md shadow-sm isolate"
									aria-label="Pagination"
								>
									<a
										href="#"
										className="relative inline-flex items-center px-2 py-2 text-gray-400 rounded-l-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
									>
										<span className="sr-only">Previous</span>
										<svg
											className="w-5 h-5"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												fill-rule="evenodd"
												d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
												clip-rule="evenodd"
											/>
										</svg>
									</a>
									<a
										href="#"
										aria-current="page"
										className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-indigo-600 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									>
										1
									</a>
									<a
										href="#"
										className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
									>
										2
									</a>
									<a
										href="#"
										className="relative items-center hidden px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
									>
										3
									</a>
									<span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
										...
									</span>
									<a
										href="#"
										className="relative items-center hidden px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
									>
										8
									</a>
									<a
										href="#"
										className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
									>
										9
									</a>
									<a
										href="#"
										className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
									>
										10
									</a>
									<a
										href="#"
										className="relative inline-flex items-center px-2 py-2 text-gray-400 rounded-r-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
									>
										<span className="sr-only">Next</span>
										<svg
											className="w-5 h-5"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												fill-rule="evenodd"
												d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
												clip-rule="evenodd"
											/>
										</svg>
									</a>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
