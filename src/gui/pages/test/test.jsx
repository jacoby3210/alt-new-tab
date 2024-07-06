
import React, { useState } from 'react';
import Common from "react-common"

const Test = (props) => {

	// dropdown
	const dropdownParams = {
		dataSource: [
			{ name: "Option #0", value: 0 },
			{ name: "Option #1", value: 1 },
			{ name: "Option #2", value: 2 },
			{ name: "Option #3", value: 3 },
			{ name: "Option #4", value: 4 },
		],
		value: 0
	}
	// paginator
	// const [from, setFrom] = useState(0);
	// const handleChangePage = (pageIndex) => {
	// 	setFrom(pageIndex * 10)
	// };

	// const viewProps01 = {
	// 	count: 250,
	// 	data: Array.from({ length: 250 }, (_, i) => { return { text: `string_${i}` } }),
	// 	range: 10,
	// 	RenderComponent: ({ meta }) => { return <li >{meta.text}</li> },
	// }
	// const pages = Math.ceil(250 / 10);

	// // slider

	// // tabs
	// const [currentTab, setCurrentTab] = useState(0);
	// const tabControllerProps = {
	// 	list: Array(10).fill({ id: 0, name: "string" }),
	// 	onChangeCallback: (tabIndex) => { setCurrentTab(tabIndex) },
	// }
	// render page
	return (
		<>
			<Common.Path value="/test/3" />
			<Common.Dropdown {...dropdownParams} />
		</>
	);
}

export default React.memo(Test);