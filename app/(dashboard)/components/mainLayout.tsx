"use client";
import classNames from "classnames";
import Image from "next/image";
import { Fragment, ReactNode, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
	Help,
	Logout,
	Message,
	MissionControl,
	User,
	navigation,
} from "@utils/menuList";
import { usePathname } from "next/navigation";

interface MainLayoutProps {
	children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [mobileSideBar, setMoibleSideBar] = useState(true);
	const [userOpen, setUserOpen] = useState(false);
	const pathname = usePathname();

	return (
		<>
			<div>
				<Transition.Root show={sidebarOpen} as={Fragment}>
					<Dialog
						as="div"
						className="relative z-50 lg:hidden"
						onClose={setSidebarOpen}
					>
						<Transition.Child
							as={Fragment}
							enter="transition-opacity ease-linear duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="transition-opacity ease-linear duration-300"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<div className="fixed inset-0 bg-gray-900/80" />
						</Transition.Child>

						<div className="fixed inset-0 flex">
							<Transition.Child
								as={Fragment}
								enter="transition ease-in-out duration-300 transform"
								enterFrom="-translate-x-full"
								enterTo="translate-x-0"
								leave="transition ease-in-out duration-300 transform"
								leaveFrom="translate-x-0"
								leaveTo="-translate-x-full"
							>
								<Dialog.Panel className="relative flex flex-1 w-full max-w-xs mr-16">
									<Transition.Child
										as={Fragment}
										enter="ease-in-out duration-300"
										enterFrom="opacity-0"
										enterTo="opacity-100"
										leave="ease-in-out duration-300"
										leaveFrom="opacity-100"
										leaveTo="opacity-0"
									>
										<div className="absolute top-0 flex justify-center w-16 pt-5 left-full"></div>
									</Transition.Child>
									{/* Sidebar component, swap this element with another sidebar if you like */}
									<div className="flex flex-col px-6 pb-2 overflow-y-auto bg-white grow gap-y-5">
										<div className="flex items-center justify-between h-16 shrink-0 ">
											<Image
												width="100"
												height="50"
												className="w-auto h-8"
												src="/logo.png"
												alt="Company Logo"
											/>
											<button
												type="button"
												className="-m-2.5 p-2.5"
												onClick={() => setSidebarOpen(false)}
											>
												<span className="sr-only">Close sidebar</span>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
												>
													<g id="Frame">
														<path
															id="Vector"
															d="M14.75 8C14.75 8.19891 14.671 8.38968 14.5303 8.53033C14.3897 8.67098 14.1989 8.75 14 8.75H6.8125L10.0325 11.9694C10.1734 12.1103 10.2526 12.3014 10.2526 12.5006C10.2526 12.6999 10.1734 12.891 10.0325 13.0319C9.8916 13.1728 9.70051 13.2519 9.50125 13.2519C9.30199 13.2519 9.1109 13.1728 8.97 13.0319L4.47 8.53187C4.40008 8.4622 4.3446 8.3794 4.30675 8.28824C4.26889 8.19707 4.24941 8.09934 4.24941 8.00062C4.24941 7.90191 4.26889 7.80418 4.30675 7.71301C4.3446 7.62185 4.40008 7.53905 4.47 7.46938L8.97 2.96937C9.03977 2.89961 9.12259 2.84427 9.21374 2.80651C9.30489 2.76876 9.40259 2.74932 9.50125 2.74932C9.59991 2.74932 9.69761 2.76876 9.78876 2.80651C9.87991 2.84427 9.96274 2.89961 10.0325 2.96937C10.1023 3.03914 10.1576 3.12196 10.1954 3.21311C10.2331 3.30427 10.2526 3.40196 10.2526 3.50062C10.2526 3.59929 10.2331 3.69698 10.1954 3.78814C10.1576 3.87929 10.1023 3.96211 10.0325 4.03188L6.8125 7.25H14C14.1989 7.25 14.3897 7.32902 14.5303 7.46967C14.671 7.61032 14.75 7.80109 14.75 8ZM2.5 1.75C2.30109 1.75 2.11032 1.82902 1.96967 1.96967C1.82902 2.11032 1.75 2.30109 1.75 2.5V13.5C1.75 13.6989 1.82902 13.8897 1.96967 14.0303C2.11032 14.171 2.30109 14.25 2.5 14.25C2.69891 14.25 2.88968 14.171 3.03033 14.0303C3.17098 13.8897 3.25 13.6989 3.25 13.5V2.5C3.25 2.30109 3.17098 2.11032 3.03033 1.96967C2.88968 1.82902 2.69891 1.75 2.5 1.75Z"
															fill="#2D2D2D"
														/>
													</g>
												</svg>
											</button>
										</div>
										<nav className="flex flex-col flex-1">
											<ul role="list" className="flex flex-col flex-1 gap-y-7">
												<li>
													<ul role="list" className="-mx-2 space-y-1">
														{navigation.map((item) => (
															<li key={item.name}>
																<a
																	href={item.href}
																	className={classNames(
																		pathname == item.href
																			? "bg-[#EAEAEA] text-primary-color"
																			: "text-gray-700 hover:text-primary-color hover:bg-[#EAEAEA]",
																		"group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
																	)}
																>
																	{item.icon}
																	{item.name}
																</a>
															</li>
														))}
													</ul>
												</li>
											</ul>
										</nav>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</Dialog>
				</Transition.Root>

				{/* Static sidebar for desktop */}
				<div
					className={classNames(
						mobileSideBar ? "lg:w-72 open" : "lg:w-auto open",
						"hidden sidebar  lg:fixed lg:inset-y-0 lg:z-50 lg:flex  lg:flex-col"
					)}
				>
					{/* Sidebar component, swap this element with another sidebar if you like */}
					<div
						className={classNames(
							mobileSideBar ? "px-6 sidebar" : "px-2 sidebar translate-x-0",
							"flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white "
						)}
					>
						<div className="flex items-center justify-center h-16 shrink-0">
							<div onClick={() => setMoibleSideBar(!mobileSideBar)}>
								<Image
									width="100"
									height="25"
									className="w-auto h-14"
									src="/logo.png"
									alt="Your Company"
								/>
							</div>
						</div>
						<nav className="flex flex-col flex-1">
							<ul role="list" className="flex flex-col flex-1 gap-y-7">
								<li>
									<ul role="list" className="-mx-2 space-y-1">
										{navigation.map((item) => (
											<li key={item.name}>
												<a
													href={item.href}
													className={classNames(
														pathname == item.href
															? "bg-[#EAEAEA] text-primary-color"
															: "text-gray-700 hover:text-primary-color hover:bg-[#EAEAEA]",
														mobileSideBar
															? "py-2.5  group px-4 gap-x-3 "
															: "px-2 py-2.5 mx-5 justify-center",
														" flex rounded-md text-sm leading-6 font-semibold"
													)}
												>
													{item.icon}
													{mobileSideBar && item.name}
												</a>
											</li>
										))}
									</ul>
								</li>
								<li className="mt-auto -mx-6">
									<div className="px-6 py-3 text-sm font-semibold leading-6 text-gray-900 gap-x-4">
										<div
											className={classNames(
												mobileSideBar
													? "justify-between items-center "
													: "flex-col-reverse gap-y-2",
												"flex mx-5 py-2.5"
											)}
										>
											<div className="flex items-center gap-x-4 ">
												<MissionControl />
												<span className="sr-only">Mission Control</span>
												{mobileSideBar && (
													<span aria-hidden="true">Mission Control</span>
												)}
											</div>
										</div>
									</div>
								</li>
							</ul>
						</nav>
					</div>
				</div>
				<div className="sticky top-0 z-40 flex items-center px-4 py-4 bg-white shadow-sm gap-x-6 sm:px-6 lg:hidden">
					<button
						type="button"
						className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
						onClick={() => setSidebarOpen(true)}
					>
						<span className="sr-only">Open sidebar</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
						>
							<g id="Frame">
								<path
									id="Vector"
									d="M14.25 8C14.25 8.19891 14.171 8.38968 14.0303 8.53033C13.8897 8.67098 13.6989 8.75 13.5 8.75H2.5C2.30109 8.75 2.11032 8.67098 1.96967 8.53033C1.82902 8.38968 1.75 8.19891 1.75 8C1.75 7.80109 1.82902 7.61032 1.96967 7.46967C2.11032 7.32902 2.30109 7.25 2.5 7.25H13.5C13.6989 7.25 13.8897 7.32902 14.0303 7.46967C14.171 7.61032 14.25 7.80109 14.25 8ZM2.5 4.75H13.5C13.6989 4.75 13.8897 4.67098 14.0303 4.53033C14.171 4.38968 14.25 4.19891 14.25 4C14.25 3.80109 14.171 3.61032 14.0303 3.46967C13.8897 3.32902 13.6989 3.25 13.5 3.25H2.5C2.30109 3.25 2.11032 3.32902 1.96967 3.46967C1.82902 3.61032 1.75 3.80109 1.75 4C1.75 4.19891 1.82902 4.38968 1.96967 4.53033C2.11032 4.67098 2.30109 4.75 2.5 4.75ZM13.5 11.25H2.5C2.30109 11.25 2.11032 11.329 1.96967 11.4697C1.82902 11.6103 1.75 11.8011 1.75 12C1.75 12.1989 1.82902 12.3897 1.96967 12.5303C2.11032 12.671 2.30109 12.75 2.5 12.75H13.5C13.6989 12.75 13.8897 12.671 14.0303 12.5303C14.171 12.3897 14.25 12.1989 14.25 12C14.25 11.8011 14.171 11.6103 14.0303 11.4697C13.8897 11.329 13.6989 11.25 13.5 11.25Z"
									fill="#0B2330"
								/>
							</g>
						</svg>
					</button>
					<div className="flex-1 text-sm font-semibold leading-6 text-gray-900">
						<Image
							width="100"
							height="24"
							className="w-auto h-8"
							src="/logo.png"
							alt="Your Company"
						/>
					</div>
					<div className="flex flex-row items-center justify-end flex-1 h-full gap-x-4">
						<Image
							width="24"
							height="24"
							className="w-auto h-6"
							src="/icons/bell.png"
							alt="Your Company"
						/>
						<Image
							width="24"
							height="24"
							className="w-auto h-6"
							src="/icons/message.png"
							alt="Your Company"
						/>
						<Image
							width="24"
							height="24"
							className="w-auto h-8"
							src="/icons/profile-user.png"
							alt="Your Company"
						/>
					</div>
				</div>
				<main className={classNames(mobileSideBar ? "lg:pl-72" : "lg:pl-24")}>
					<div className="sticky top-0 z-40 items-center hidden h-16 px-4 bg-white border-b border-gray-200 shadow-sm shrink-0 sm:px-6 lg:px-8 lg:block">
						<div className="flex flex-row items-center justify-end flex-1 h-full gap-x-4">
							<Image
								width="24"
								height="24"
								className="w-auto h-6"
								src="/icons/bell.png"
								alt="Your Company"
							/>
							<Image
								width="24"
								height="24"
								className="w-auto h-6"
								src="/icons/message.png"
								alt="Your Company"
							/>
							<div className="relative ">
								<Image
									width="24"
									height="24"
									className="w-auto h-8"
									src="/icons/profile-user.png"
									alt="Your Company"
									onClick={() => setUserOpen((prev) => !prev)}
								/>
								{userOpen && (
									<div className="absolute z-10 w-40 mr-10 bg-white border border-gray-200 rounded-md shadow-md top-10 -right-10">
										<div className="flex flex-row p-2 gap-x-4">
											<Image
												width="24"
												height="24"
												className="w-auto h-8"
												src="/icons/profile-user.png"
												alt="Your Company"
											/>
											<div className="text-[0.7rem]">
												<p className="font-semibold">John Doe</p>
												<p>Admin</p>
											</div>
										</div>
										<div className="p-2 text-sm border-t margin-gray-200">
											<div className="flex flex-row items-center p-1 gap-x-2">
												<User />
												<p>Profile</p>
											</div>
											<div className="flex flex-row items-center p-1 gap-x-2">
												<MissionControl width={15} height={15} />
												<p>Mission Control</p>
											</div>
											<div className="flex flex-row items-center p-1 gap-x-2">
												<Message />
												<p>Messages</p>
											</div>
										</div>
										<div className="p-2 text-sm border-y margin-gray-200">
											<div className="flex flex-row items-center p-1 gap-x-2">
												<Help />
												<p>Help</p>
											</div>
										</div>
										<div className="p-2 text-sm ">
											<div className="flex flex-row items-center p-1 gap-x-2">
												<Logout />
												<p>Logout</p>
											</div>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
					{children}
				</main>
			</div>
		</>
	);
}
