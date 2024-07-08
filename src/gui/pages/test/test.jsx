
import React, { useState } from 'react';
import Common from "react-common"

const Test = (props) => {

	//  helpers
	const produceEntries = (count, func) => {return Array.from(new Array(count), func);}
	const area = React.useRef(null)
	const TestAreaForScroll = () => 
		<div style={{height:"100px", overflow:"scroll"}} ref={area}>
			<div style={{height:"200px"}}/>
		</div>

	const scrollProps = {
		target: area,
	}
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

	// Page Controller
	const [currentPage, setCurrentPage] = useState(0);
	const pageControllerProps = {
		onChangeCallback: (pageIndex) => { setCurrentPage(pageIndex * 10);},
		buttons: 5,
		count: 250 / 10,
		value: 0,
	}
	const viewPropsForPageController = {
		count: 250,
		from: currentPage,
		data: Array.from({ length: 250 }, (_, i) => {return { text: `string_${i}`}}),
		range: 10,
	}

	// Slider Controller
	const [currentCarouselSlide, setCurrentCarouselSlide] = useState(0);
	const carouselControllerProps = {
		infinity: true,
		onChangeCallback: (slideIndex) => { setCurrentCarouselSlide(slideIndex);},
		count: 250,
	}
	const viewPropsForCarouselController = {
		count: 250,
		from: currentCarouselSlide,
		data: Array.from({ length: 250 }, (_, i) => { return { text: `string_${i}` } }),
		range: 1,
	}

	// Tab Controller
	const [currentTab, setCurrentTab] = useState(0);
	const tabControllerProps = {
		data: produceEntries(5, (v, i) => {return { caption: `Option #${i}`, id: i}}),
		onChangeCallback: (tabIndex) => { setCurrentTab(tabIndex) },
	}
	const viewPropsForTabController = {
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

			<TestAreaForScroll/>
			<Common.Scroll {...scrollProps}/>

			<Common.CarouselController {...carouselControllerProps}/>
			<Common.View  {...viewPropsForCarouselController}/>

			<Common.PageController {...pageControllerProps}/>
			<Common.View  {...viewPropsForPageController}/>

			<Common.TabController {...tabControllerProps}/>
			<Common.View  {...viewPropsForTabController}/>
		</>
	);
}

export default React.memo(Test);