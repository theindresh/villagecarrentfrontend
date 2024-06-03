import React from 'react';
import { Row, Col, Card } from 'antd';

const { Meta } = Card;

const Blog = () => {
  return (
    <section style={{ padding: '50px 0', background: '#fff' }}>
      <div className="container mx-auto text-center">
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '32px' }}>Our Blog</h2>
        <Row gutter={16}>
          <Col span={8}>
            <Card
              hoverable
              cover={<img alt="Blog 1" src="blog1.jpg" style={{ borderRadius: '8px 8px 0 0' }} />}
            >
              <Meta title="Lorem Ipsum Dolor Sit Amet" description="January 12, 2024" />
              <p style={{ marginTop: '16px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel libero a justo facilisis cursus.</p>
              <a href="/" style={{ color: '#f5222d', marginTop: '16px', display: 'block' }}>Read More</a>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              cover={<img alt="Blog 2" src="blog2.jpg" style={{ borderRadius: '8px 8px 0 0' }} />}
            >
              <Meta title="Lorem Ipsum Dolor Sit Amet" description="February 5, 2024" />
              <p style={{ marginTop: '16px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel libero a justo facilisis cursus.</p>
              <a href="/" style={{ color: '#f5222d', marginTop: '16px', display: 'block' }}>Read More</a>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              cover={<img alt="Blog 3" src="blog3.jpg" style={{ borderRadius: '8px 8px 0 0' }} />}
            >
              <Meta title="Lorem Ipsum Dolor Sit Amet" description="March 20, 2024" />
              <p style={{ marginTop: '16px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel libero a justo facilisis cursus.</p>
              <a href="/" style={{ color: '#f5222d', marginTop: '16px', display: 'block' }}>Read More</a>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Blog;
