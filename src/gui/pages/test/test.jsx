
import React, { useState } from 'react';
import Common from "react-common"

const Test = (props) => {

	//  helpers
	const produceEntries = (count, func) => {return Array.from(new Array(count), func);}

	// basics
	const pathProps = {data: "/test/3",};
	const popupProps = {shown: true,};
	
	// advisor
	const advisorProps = {
		data: produceEntries(5, (v, i) => {return { caption: `Option #${i}`, value: i}}),
	}

	// dropdown
	const dropdownProps = {
		data: produceEntries(5, (v, i) => {return { caption: `Option #${i}`, value: i}}),
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

	// Tab Controller
	const [currentTab, setCurrentTab] = useState(0);
	const tabControllerProps = {
		data: produceEntries(5, (v, i) => {return { caption: `Option #${i}`, id: i}}),
		onChangeCallback: (tabIndex) => { setCurrentTab(tabIndex) },
	}
	const viewPropsFotTabController = {
		count: 250,
		from: currentTab,
		data: Array.from({ length: 250 }, (_, i) => { return { text: `string_${i}` } }),
		range: 1,
	}
	
	// render page
	return (
		<>
			<Common.Path {...pathProps} />
			<Common.Popup {...popupProps} />
			<Common.Advisor {...advisorProps} />
			<Common.Dropdown {...dropdownProps} />


			<Common.TabController {...tabControllerProps}/>
			<Common.View  {...viewPropsFotTabController}/>
		</>
	);
}

export default React.memo(Test);