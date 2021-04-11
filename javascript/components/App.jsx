import React, { Component, Fragment } from 'react';
import { Element } from 'react-scroll';
import { Milestone } from './Milestone';
import { Map } from './Map';
import { NavBar } from './NavBar';

export default class App extends Component {
	render(){
		const milestones = ['appfolio', 'epic', 'tesla', 'rc', 'rose', 'home'].map((milestone) => {
			return (
				<Fragment>
					<div className="parallax" />
					<Milestone name={milestone} />
				</Fragment>
			)
		});
		return (
			<div id="all_content">
        <Element name="top_of_page" />
        <NavBar />
				<div className="parallax">
          <p className="textOnBg">
            <span id="big">Joshua Laesch</span>
            <br />
            To learn more about me use the interactive map below.
          </p>
				</div>
				<Map />
				{milestones}
				<div className="parallax" />
			</div>
		);
	}
};
