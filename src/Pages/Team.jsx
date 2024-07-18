import React from 'react';
import { Row, Col, Avatar, Card } from 'antd';

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
                avatar={<Avatar src='/' size={64} />}
                title={<span className="font-semibold">ABC</span>}
                description={
                  <>
                    <p className="text-sm text-gray-600 mb-4">Director</p>
                    <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea hic minus nobis amet, sapiente, provident quis atque saepe dignissimos itaque rerum culpa eaque nam tempora odit quod perferendis cupiditate labore!</p>
                  </>
                }
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card className="rounded-xl hover:shadow-lg">
              <Meta
                avatar={<Avatar src='/' size={64} />}
                title={<span className="font-semibold">ABC</span>}
                description={
                  <>
                    <p className="text-sm text-gray-600 mb-4">HR Manager</p>
                    <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laborum nobis ab, doloribus fugit sequi neque laboriosam repellat eius odio illum, est vitae expedita beatae. Laborum expedita neque non nihil.</p>
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
