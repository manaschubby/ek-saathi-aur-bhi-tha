import React, { useRef, useEffect, Dispatch } from "react";

export default function useOutsideAlerter(
	ref: React.MutableRefObject<any>,
	setShown: React.Dispatch<React.SetStateAction<boolean>>,
	edited: boolean
) {
	useEffect(() => {
		/**
		 * Alert if clicked on outside of element
		 */
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				if (edited) {
					alert("Please save the changes or press cancel");
				} else {
					setShown(false);
				}
			}
		}
		// Bind the event listener
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);
}
