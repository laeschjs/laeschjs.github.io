import React from 'react';
import { Link } from 'react-scroll';

export const Map = () => {
  return (
    <div style={{ position: 'relative' }}>
      <img id='map_cali_midwest' src='./images/cali_midwest.png' />
      <Link to='target_tesla' spy={true} smooth={true} duration={1000}>
	      <img className='my_thumbnail' style={{ top: '39%', left: '17%' }} src='./images/tesla_square.png' />
      </Link>
      <Link to='target_rc' spy={true} smooth={true} duration={1000}>
	      <img className='my_thumbnail' style={{ top: '26%', left: '58%' }} src='./images/rc_square.jpeg' />
      </Link>
      <Link to='target_rose' spy={true} smooth={true} duration={1000}>
	      <img className='my_thumbnail' style={{ top: '49%', left: '78%' }} src='./images/rose_square.png' />
      </Link>
      <Link to='target_home' spy={true} smooth={true} duration={1000}>
	      <img className='my_thumbnail' style={{ top: '50%', left: '69%' }} src='./images/home_square.png' />
      </Link>
    </div>
  );
}
