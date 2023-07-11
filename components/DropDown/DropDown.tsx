import classNames from "classnames";
import React, { useState } from "react";

const DropDown = () => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<div className="relative inline-block text-left">
			<div>
				<button
					type="button"
					className={classNames(
						open ? "bg-black text-white" : "bg-white",
						"inline-flex w-full justify-center gap-x-1.5 rounded-md  px-4 h-10 items-center text-sm font-semibold text-gray-900 shadow-sm ring-1  ring-gray-300 "
					)}
					id="menu-button"
					aria-expanded="true"
					aria-haspopup="true"
					onClick={(prev) => setOpen((prev) => !prev)}
				>
					Actions
					<svg
						className={classNames(
							open ? "text-white" : "text-gray-400",
							"w-5 h-5 -mr-1 "
						)}
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
			</div>
			{open && (
				<div
					className="absolute right-0 z-10 w-auto mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
					role="menu"
					aria-orientation="vertical"
					aria-labelledby="menu-button"
				>
					<div className="py-1 text-sm" role="none">
						<p
							className="block px-4 py-2 text-gray-70"
							role="menuitem"
							id="menu-item-0"
							onClick={(prev) => setOpen((prev) => !prev)}
						>
							Delete
						</p>
						<p
							className="block px-4 py-2 text-sm text-gray-700"
							role="menuitem"
							id="menu-item-2"
							onClick={(prev) => setOpen((prev) => !prev)}
						>
							Change Status
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default DropDown;
