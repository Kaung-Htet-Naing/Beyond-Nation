import React from "react";

const IconInput = () => {
	return (
		<div className="relative rounded-md shadow-sm ">
			<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
				<svg
					width="24"
					height="24"
					viewBox="0 0 48 48"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z"
						fill="none"
						stroke="#333"
						stroke-width="4"
						stroke-linejoin="round"
					/>
					<path
						d="M26.657 14.3431C25.2093 12.8954 23.2093 12 21.0001 12C18.791 12 16.791 12.8954 15.3433 14.3431"
						stroke="#333"
						stroke-width="4"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M33.2216 33.2217L41.7069 41.707"
						stroke="#333"
						stroke-width="4"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>
			<input
				type="text"
				name="search"
				className="block w-full h-full  rounded-md border-0 py-1.5 pl-10  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				placeholder="search"
			/>
		</div>
	);
};

export default IconInput;
