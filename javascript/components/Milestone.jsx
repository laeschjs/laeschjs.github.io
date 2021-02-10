import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Element } from 'react-scroll';
import * as Messages from '../utils/constants';

export const Milestone = ({ name }) => {
  return (
    <Element name={`target_${name}`}>
      <div key={name} className='py-4' style={{ backgroundImage: 'url(./images/white_bg.jpg)' }}>
      <Row className='mb-4'>
        <Col sm={{ span: 4, offset: 4 }}>
          <img style={{ width: '100%' }} src={`./images/${name}.png`} />
        </Col>
      </Row>
        <Row className='mb-4'>
          <Col><img style={{ height: 'auto' }} src={`./images/${name}_collage.png`} /></Col>
          <Col>{Messages[`${name}_message`]}</Col>
        </Row>
      </div>
    </Element>
  );
};
