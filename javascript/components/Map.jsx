import React from 'react';
import { Link } from 'react-scroll';

export const Map = () => {
  return (
    <div style={{ position: 'relative' }}>
      <img id='map_cali_midwest' src='./images/cali_midwest.png' />
      <Link to='target_appfolio' spy={true} smooth={true} duration={1000}>
        <img className='my_thumbnail' style={{ top: '69%', left: '16%' }} src='./images/appfolio_square.png' />
      </Link>
      <Link to='target_epic' spy={true} smooth={true} duration={1000}>
        <img className='my_thumbnail' style={{ top: '34%', left: '69%' }} src='./images/epic.jpeg' />
      </Link>
      <Link to='target_tesla' spy={true} smooth={true} duration={1000}>
        <img className='my_thumbnail' style={{ top: '44%', left: '10%' }} src='./images/tesla_square.png' />
      </Link>
      <Link to='target_rc' spy={true} smooth={true} duration={1000}>
	      <img className='my_thumbnail' style={{ top: '45%', left: '61%' }} src='./images/rc_square.jpeg' />
      </Link>
      <Link to='target_rose' spy={true} smooth={true} duration={1000}>
	      <img className='my_thumbnail' style={{ top: '66%', left: '81%' }} src='./images/rose_square.png' />
      </Link>
      <Link to='target_home' spy={true} smooth={true} duration={1000}>
	      <img className='my_thumbnail' style={{ top: '70%', left: '73%' }} src='./images/home_square.png' />
      </Link>
    </div>
  );
}
