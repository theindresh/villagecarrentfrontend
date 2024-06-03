import React from 'react';
import { Row, Col, Avatar, Card } from 'antd';
import BipinImg from '../assets/testmonial/Bipin-Sir.46dc784667b108b11249.png';
import TrishaImg from '../assets/testmonial/Trisah-mam-HR.1f2449ae52b981250bd4.png';

const { Meta } = Card;

const Team = () => {
  return (
    <section className="py-16 bg-white px-4 sm:px-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Building Team</h2>
        <p className="text-lg text-gray-600 mb-12">Meet the talented individuals behind the success of our organization.</p>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12} md={8}>
            <Card className="rounded-xl hover:shadow-lg">
              <Meta
                avatar={<Avatar src={BipinImg} size={64} />}
                title={<span className="font-semibold">Bipin Sinha</span>}
                description={
                  <>
                    <p className="text-sm text-gray-600 mb-4">Director</p>
                    <p className="text-gray-700">"To aid staff in concentrating their efforts, he developed key performance indicators. Work with other company experts to coordinate projects involving community service, promote adherence to corporate laws and regulations and ensure that the company's code of ethics is being followed."</p>
                  </>
                }
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card className="rounded-xl hover:shadow-lg">
              <Meta
                avatar={<Avatar src={TrishaImg} size={64} />}
                title={<span className="font-semibold">Trisha Mukherjee</span>}
                description={
                  <>
                    <p className="text-sm text-gray-600 mb-4">HR Manager</p>
                    <p className="text-gray-700">Her dedication to work and leadership qualities helped the organization in molding into a perfect workplace. She led and enabled the organization into effective digital transformation, and improved talent acquisition and psychometric instruments.</p>
                  </>
                }
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card className="rounded-xl hover:shadow-lg">
              <Meta
                avatar={<Avatar src='/' alt='' size={64} />}
                title={<span className="font-semibold">Sandeep Kumar</span>}
                description={
                  <>
                    <p className="text-sm text-gray-600 mb-4">Team Manager</p>
                    <p className="text-gray-700">A team leader's goal is to motivate and encourage their team members so they can get good work done. A project manager is often more focused on deliverables</p>
                  </>
                }
              />
            </Card>
          </Col>
          
        </Row>
      </div>
    </section>
  );
};

export default Team;
