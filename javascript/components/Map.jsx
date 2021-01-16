import React from 'react';
import { Link } from 'react-scroll';

export const Map = () => {
  return (
    <div>
      <Link to='my_target' spy={true} smooth={true} duration={1000}>
        Lets go
      </Link>
      <img id='map_cali_midwest' src='../../images/cali_midwest.png' />
      <img className='my_thumbnail' src='../../images/tesla_square.png' />
    </div>
  );
}
