import React from "react";

const PlusIcon = () => {
	return (
		<button
			type="button"
			className="inline-flex items-center gap-x-1.5 rounded-md bg-black px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-600	focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
		>
			<svg
				width="24"
				height="24"
				viewBox="0 0 48 48"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M24.0605 10L24.0239 38"
					stroke="#FFf"
					stroke-width="4"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M10 24L38 24"
					stroke="#fff"
					stroke-width="4"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
			Static Pages Article
		</button>
	);
};

export default PlusIcon;
