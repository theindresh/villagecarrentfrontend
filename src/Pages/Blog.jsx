import React from 'react';
import { Row, Col, Card } from 'antd';

const { Meta } = Card;

const Blog = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">Our Blog</h2>
        <Row className='mx-4 gap-5' justify="center">
          <Col xs={24} sm={12} md={8} lg={6} xl={6}>
            <Card
              hoverable
              cover={<img alt="Blog 1" src="blog1.jpg" className="rounded-t-md" />}
              className="w-full h-full flex flex-col justify-between"
            >
              <Meta title="Lorem Ipsum Dolor Sit Amet" description="January 12, 2024" />
              <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel libero a justo facilisis cursus.</p>
              <a href="/" className="text-red-600 mt-4 block">Read More</a>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={6}>
            <Card
              hoverable
              cover={<img alt="Blog 2" src="blog2.jpg" className="rounded-t-md" />}
              className="w-full h-full flex flex-col justify-between"
            >
              <Meta title="Lorem Ipsum Dolor Sit Amet" description="February 5, 2024" />
              <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel libero a justo facilisis cursus.</p>
              <a href="/" className="text-red-600 mt-4 block">Read More</a>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={6}>
            <Card
              hoverable
              cover={<img alt="Blog 3" src="blog3.jpg" className="rounded-t-md" />}
              className="w-full h-full flex flex-col justify-between"
            >
              <Meta title="Lorem Ipsum Dolor Sit Amet" description="March 20, 2024" />
              <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel libero a justo facilisis cursus.</p>
              <a href="/" className="text-red-600 mt-4 block">Read More</a>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Blog;
