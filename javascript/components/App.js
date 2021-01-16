import React, { Component, Fragment } from 'react';
import { Element } from 'react-scroll';
import { Milestone } from './Milestone';
import { Map } from './Map';

export default class App extends Component {
	render(){
		const milestones = ['tesla', 'rc', 'rose', 'home'].map((milestone) => {
			return (
				<Fragment>
					<div className="parallax parallax1" />
					<Milestone name={milestone} />
				</Fragment>
			)
		});
		return (
			<div id="all_content">
				<div className="parallax parallax1">
					<p className="textOnBg">
						<span id="big">Joshua Laesch</span>
						<br />
						To learn more about me use the interactive map below.
					</p>
				</div>
				<Map />
				{milestones}
				<div className="parallax parallax1">
					<Element name='my_target'>
						this is the target
					</Element>
				</div>
			</div>
		);
	}
};

// var NavBar = React.createClass({
// 	render: function(){
// 		return (
// 			<div id="nav" className="collapse navbar-collapse">
// 				<ul className="nav navbar-nav">
// 					<li><a target="_blank" href="../JoshuaLaeschResume.pdf">Resume</a></li>
// 					<li><a onClick={this.goToTop}>Go To Top</a></li>
// 				</ul>
// 			</div>
// 		);
// 	},
// 	goToTop: function(){
// 		goToAnchor("top_of_page");
// 	}
// });
