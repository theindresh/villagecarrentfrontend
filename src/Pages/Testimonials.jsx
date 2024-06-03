import React from 'react';
import { Row, Col, Card, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Meta } = Card;

const Testimonials = () => {
  return (
    <section className="py-16 px-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12} lg={8}>
            <Card className="rounded-lg shadow-lg">
              <Meta
                avatar={<Avatar size={64} icon={<UserOutlined />} />}
                title={<span className="font-semibold">Naman Jain</span>}
                description="Naman Jain has been instrumental in helping our team achieve success. His dedication and innovative thinking have greatly contributed to our projects."
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Card className="rounded-lg shadow-lg">
              <Meta
                avatar={<Avatar size={64} icon={<UserOutlined />} />}
                title={<span className="font-semibold">Chirag</span>}
                description="Chirag's attention to detail and problem-solving skills are commendable. It's been a pleasure working with him on various projects."
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Card className="rounded-lg shadow-lg">
              <Meta
                avatar={<Avatar size={64} icon={<UserOutlined />} />}
                title={<span className="font-semibold">Indresh</span>}
                description="Indresh's positive attitude and willingness to go the extra mile have made a significant impact on our team's performance. His contributions are highly valued."
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Card className="rounded-lg shadow-lg">
              <Meta
                avatar={<Avatar size={64} icon={<UserOutlined />} />}
                title={<span className="font-semibold">Vikash</span>}
                description="Vikash's expertise and leadership have been invaluable assets to our team. His guidance has helped us overcome challenges and achieve our goals."
              />
            </Card>
          </Col>
          {/* Add more testimonials as needed */}
        </Row>
      </div>
    </section>
  );
};

export default Testimonials;
