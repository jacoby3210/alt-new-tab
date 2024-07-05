
import React, { useState } from 'react';
import Common from "react-common"

const Test = (props) => {

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
		</>
	);
}

export default React.memo(Test);