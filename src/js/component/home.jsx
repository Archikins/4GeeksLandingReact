import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import NavBar from "./navbar.jsx";
import HeroBanner from "./heroBanner.jsx";
import SetOfCards from "./cards.jsx";
import FooterCopy from "./footer.jsx";


const cards = [
	{"title": "Card Title 1", "description": "loremipsum 1", "button": "test 1"},
	{"title": "Card Title 2", "description": "loremipsum 2", "button": "test 2"},
	{"title": "Card Title 3", "description": "loremipsum 3", "button": "test 3"},
	{"title": "Card Title 4", "description": "loremipsum 4", "button": "test 4"}
]

	
//create your first component
const Home = () => {
	return (
		<div>
			<NavBar />
			<HeroBanner />
			<div className="container">
				<div className="row">
					<SetOfCards arrayWithShape={cards}/>
				</div>
			</div>
			<FooterCopy />
			
			
		</div>
	);
};

export default Home;
