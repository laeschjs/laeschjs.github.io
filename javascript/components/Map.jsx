import React from 'react';
import { Link } from 'react-scroll';

export const Map = () => {
  return (
    <div style={{ position: 'relative' }}>
      <img id="map_cali_midwest" src="./images/fl_ca_midwest.png" />
      <Link to="target_appfolio" spy={true} smooth={true} duration={1000}>
        <img className="my_thumbnail" style={{ top: '75%', left: '11%' }} src="./images/appfolio_square.png" />
      </Link>
      <Link to="target_epic" spy={true} smooth={true} duration={1000}>
        <img className="my_thumbnail" style={{ top: '24%', left: '47%' }} src="./images/epic.jpeg" />
      </Link>
      <Link to="target_tesla" spy={true} smooth={true} duration={1000}>
        <img className="my_thumbnail" style={{ top: '52%', left: '8.5%' }} src="./images/tesla_square.png" />
      </Link>
      <Link to="target_rc" spy={true} smooth={true} duration={1000}>
        <img className="my_thumbnail" style={{ top: '32%', left: '40%' }} src="./images/rc_square.jpeg" />
      </Link>
      <Link to="target_rose" spy={true} smooth={true} duration={1000}>
        <img className="my_thumbnail" style={{ top: '48%', left: '55%' }} src="./images/rose_square.png" />
      </Link>
      <Link to="target_growing_up" spy={true} smooth={true} duration={1000}>
        <img className="my_thumbnail" style={{ top: '51%', left: '48%' }} src="./images/holstein.png" />
      </Link>
      <Link to="target_married_life" spy={true} smooth={true} duration={1000}>
        <img className="my_thumbnail" style={{ top: '73.5%', left: '84.5%' }} src="./images/home_square.png" />
      </Link>
    </div>
  );
};
