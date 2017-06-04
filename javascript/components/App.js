var React = require('react');
var ScrollableAnchor = require('react-scrollable-anchor').default;
var goToAnchor = require('react-scrollable-anchor').goToAnchor;
var configureAnchors = require('react-scrollable-anchor').configureAnchors;

var App = React.createClass({
	render: function(){
		var home_props = {
			name: "home",
			header_img: "../images/home_letters.png",
			collage_img: "../images/home_collage.png",
			message: home_message
		};
		var rose_props = {
			name: "rose",
			header_img: "../images/rose_letters.png",
			collage_img: "../images/rose_collage.png",
			message: rose_message
		};
		var rc_props = {
			name: "rc",
			header_img: "../images/rc.png",
			collage_img: "../images/rc_collage.png",
			message: rc_message
		};
		var tesla_props = {
			name: "tesla",
			header_img: "../images/tesla_letters.png",
			collage_img: "../images/tesla_collage.png",
			message: tesla_message
		};
		return (
			<div id="all_content">
				<NavBar />
				<div className="parallax parallax1">
					<ScrollableAnchor id="top_of_page">
						<p className="textOnBg">
							<span id="big">Joshua Laesch</span>
							<br />
							To learn more about me use the interactive map below.
						</p>
					</ScrollableAnchor>
				</div>
				<Images />
				<div className="parallax parallax1"></div>
				<ScrollableAnchor id="tesla_milestone">
					<Milestone info={tesla_props} />
				</ScrollableAnchor>
				<div className="parallax parallax1"></div>
				<ScrollableAnchor id="rc_milestone">
					<Milestone info={rc_props} />
				</ScrollableAnchor>
				<div className="parallax parallax1"></div>
				<ScrollableAnchor id="rose_milestone">
					<Milestone info={rose_props} />
				</ScrollableAnchor>
				<div className="parallax parallax1"></div>
				<ScrollableAnchor id="home_milestone">
					<Milestone info={home_props} />
				</ScrollableAnchor>
				<div className="parallax parallax1"></div>
			</div>
		);
	},
	componentDidMount: function(){
		configureAnchors({offset: -80, scrollDuration: 1000});
	}
});

var NavBar = React.createClass({
	render: function(){
		return (
			<div id="nav" className="collapse navbar-collapse">
				<ul className="nav navbar-nav">
					<li><a target="_blank" href="../JoshuaLaeschResume.pdf">Resume</a></li>
					<li><a onClick={this.goToTop}>Go To Top</a></li>
				</ul>
			</div>
		);
	},
	goToTop: function(){
		goToAnchor("top_of_page");
	}
});

var Milestone = React.createClass({
	getInitialState: function(){
		return ({img: "left", text: "right"})
	},
	render: function(){
		return (
			<div className="section">
				<img id={this.props.info.name + "_header"} src={this.props.info.header_img} />
				<div id={this.props.info.name + "message"} className={this.state.text}>
					{this.props.info.message}
				</div>
				<div id={this.props.info.name + "collage"} className={this.state.img}>
					<img id={this.props.info.name + "img"} src={this.props.info.collage_img} />
				</div>
			</div>
		);
	},
	componentDidUpdate: function(prevProps, prevState){
		if(prevState.img == "bottom" && this.state.img == "left"){
			this.updateDimensions();
		}
	},
	checkState: function(){
		if($('.section').width() < 900){
			if(this.state.img == "left"){
				var left = "#" + this.props.info.name + "collage";
				var right = "#" + this.props.info.name + "message";
				$(left).removeAttr('style');
				$(right).removeAttr('style');
				this.setState({img: "bottom", text: "top"});
			}
		} else {
			if(this.state.img == "left"){
				this.updateDimensions();
			} else {
				this.setState({img: "left", text: "right"});
			}
		}		
	},
	updateDimensions: function(){
		setTimeout(function(){
			var left = "#" + this.props.info.name + "collage";
			var right = "#" + this.props.info.name + "message";
			var left_height = $(left).height();
			var right_height = $(right).height();
			console.log(left_height);
			console.log(right_height);
			if(left_height > right_height){
				var pad_top = (left_height - right_height) / 2;
				$(right).css({paddingTop: pad_top});
			} else {
				var pad_top = (right_height - left_height) / 2;
				$(left).css({paddingTop: pad_top});
			}			
		}.bind(this), 125);
	},
	componentDidMount: function(){
		this.checkState();
		window.addEventListener("resize", this.checkState);
	},
	componentWillUnmount: function(){
		window.removeEventListener("resize", this.checkState);
	}
});

var Images = React.createClass({
	getInitialState: function(){
		return {top_of_map: 0}
	},
	goToMilestone: function(name){
		return function(){
			goToAnchor(name + "_milestone");			
		}
	},
	render: function(){
		return (
			<div>
				<img id="main_col" src="../images/cali_midwest.png" />
				<div className="my_thumbnail" id="tesla_img">
					<div className="image">
						<img src="../images/tesla.png" onClick={this.goToMilestone("tesla")} />
					</div>
				</div>
				<div className="my_thumbnail" id="rc_img">
					<div className="image">
						<img src="../images/rc_square.jpeg" onClick={this.goToMilestone("rc")} />
					</div>
				</div>
				<div className="my_thumbnail" id="home_img">
					<div className="image">
						<img src="../images/home.png" onClick={this.goToMilestone("home")}/>
					</div>
				</div>
				<div className="my_thumbnail" id="rose_img">
					<div className="image">
						<img src="../images/rose.png" onClick={this.goToMilestone("rose")}/>
					</div>
				</div>
			</div>
		);
	},
	getTop: function(){
		setTimeout(function(){
			this.setState({top_of_map: parseInt($('#all_content').height() / 2, 10)},
						   this.updateDimensions());			
		}.bind(this), 125);
	},
	updateDimensions: function(){
		setTimeout(function(){
			var calc_width = $('#main_col').width();
			if(calc_width > 1098){
				$('#tesla_img').removeAttr('style');
				$('#rc_img').removeAttr('style');
				$('#rose_img').removeAttr('style');
				$('#home_img').removeAttr('style');
				return;
			}
			var calc_height = $('#main_col').height();
			var top_of_map = this.state.top_of_map;
			var marginLeft = parseInt($('#main_col').css('marginLeft'));
			console.log(top_of_map);
			console.log(calc_height);

			var tesla_new_top = (top_of_map + calc_height/2.63) + "px";
			$('#tesla_img').css({top: tesla_new_top});

			var home_new_top = (top_of_map + calc_height/2) + "px";
			var home_new_left = ((calc_width / 1.48) + marginLeft) + "px";
			$('#home_img').css({top: home_new_top,
								left: home_new_left});

			var rc_new_top = (top_of_map + calc_height/4.28) + "px";
			var rc_new_left = ((calc_width / 1.78) + marginLeft) + "px";
			$('#rc_img').css({top: rc_new_top,
							  left: rc_new_left});

			var rose_new_top = (top_of_map + calc_height/2.33) + "px";
			var rose_new_left = ((calc_width / 1.32) + marginLeft) + "px";
			$('#rose_img').css({top: rose_new_top,
								left: rose_new_left});
		}.bind(this), 125);
	},
	componentDidMount: function(){
		this.getTop();
		window.addEventListener("resize", this.updateDimensions);
	},
	componentWillUnmount: function(){
		window.removeEventListener("resize", this.updateDimensions);
	}
});

var tesla_message = "My internship at Tesla is my most recent milestone in my life and the one I am currently experiencing.  I am a part of the Energy Products Software team.  I mostly work on an internal web tool, created by my mentor, that the sales team uses to sell more Powerwalls.  The first month or two I spent making updates/improvements to the web tool to get my feet wet.  Now, I am currently making a web portal for customers to upload their load and/or solar data directly.  This will save the sales team several hours a week due to the high frequency of potential clients sending in bad data that they would have to fix.  This portal clearly informs the customer of any errors when they try and submit it and will require them to fix the errors before submission to the sales team.  Working on the internal web tool and now the web portal has been challenging yet rewarding.  The backend is run with ruby on rails and the frontend is created with React; neither of which I had any experience with before the internship.  I am excited to see what the rest of the internship has in store for me.";

var rc_message = "My internship at Rockwell Collins was my first big change in life due to it being the farthest I've lived away from home and it being my first taste of working in industry.  I was on the Displays Software team.  I was originally hired to work on making the changes and improvements the clients wanted for the MH-53E but due to contract issues it never even got started during the 6 months that I was there.  For that reason I switched teams and worked on an automated testing framework for the CH-47 Chinook.  Throughout all of Rockwell when it was time to test the software, they would send a couple engineers to the labs and go through and manually click the bezels and check to see if the correct thing was displayed on the screen.  I fixed this issue on the program I was on by having it compare what was on the display to saved images of what was correct.  This involved two major steps: updating the test scripts to compare images instead of directing a user and capturing the images of what was correct.";

var rose_message = "Rose Hulman is a small private engineering college in Terre Haute, IN.  It has been ranked #1 in undergraduate engineering for 18 years in a row.  I participated in a program called Fast Track Calculus which is a 5 week program in the summer where you take Calc 1, 2, and 3 and have it done before you even start your freshman year.  Spending every moment besides essentials of life doing calculus was super challenging.  Looking back it was one of the best decisions of my life as it helped me miss two quarters of school for co-ops and made me friendships that will last with me for the rest of my life.  It was also there that my friends conviced me to become a CS major.  Not having any experience in programming made me worry but being a quick learner I picked up quickly.  I have discovered that I enjoy more of the high level programming rather than low level.  One of my favorite areas in computer science has been web developement which is why I decided to make my website from scratch.  Also the topic that has gotten me the most excited was actually a math class at Rose instead of a CS class: Deep Learning.  I am looking forward to my senior year at Rose and will be glad to be rid of the homework and tests but will miss my friends and the college atmosphere when done."

var home_message = "My journey begins here.  Home.  My family and friends who have given me my character, morals, and beliefs are and always will be my home.  The place that has given me my rock solid foundation of faith in Christ is my home.  The people I know I can always fall back on if plans go awry is my home.  For 21 years I have called Greenville, IL my home.  It is a small rural town 1 hour east of St. Louis.  It is where I became the man I am today.  I gained a strong work ethic by growing up/working on a dairy farm.  I developed a love of sports by playing and watching almost every single day.  I fostered a love for a plethora of different kinds of music whether it be country from the radio, hymns from church, today's hits from social activities, or rap from locker rooms.  My home still influences me to this day by my desire to live up to the standards set on me from home.  The one thing I have to berate my home for is it gets too cold in the winter.  That however is not enough to take away the special place in my heart that is taken up by my home."

module.exports = App;