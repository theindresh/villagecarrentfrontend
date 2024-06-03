import React from 'react';
import { Card, Col, Row } from 'antd';
import sadiimg from '../assets/sadi.jpg';
import travelImg from '../assets/Slider/oldtimer-1197800_1920.jpg';
import emergencyImg from '../assets/453263-PFCOPG-516.jpg';

const { Meta } = Card;

const Services = () => {
  return (
    <section className="py-16 px-16 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <Row gutter={16}>
          <Col xs={24} md={8}>
            <Card
              hoverable
              cover={<img alt="Service 1" src={sadiimg} style={{ height: '200px', objectFit: 'cover' }} />}
              style={{ height: '100%' }}
            >
              <Meta title="Book A car For Barat" />
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card
              hoverable
              cover={<img alt="Service 2" src={travelImg} style={{ height: '200px', objectFit: 'cover' }} />}
              style={{ height: '100%' }}
            >
              <Meta title="Book For Trips" />
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card
              hoverable
              cover={<img alt="Service 3" src={emergencyImg} style={{ height: '200px', objectFit: 'cover' }} />}
              style={{ height: '100%' }}
            >
              <Meta title="Book For Emergency" />
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Services;
