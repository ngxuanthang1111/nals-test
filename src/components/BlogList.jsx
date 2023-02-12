import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";

const BlogItem = React.lazy(() => "./BlogItem");

const BlogList = (props) => {
  const { list } = props;
  const navigate = useNavigate();

  const goToDetail = (id) => navigate(`/blogs/${id}`);
  return (
    <Row>
      {list.map((item) => {
        return (
          <Col key={item.id}>
            <BlogItem goDetail={() => goToDetail(item.id)} {...item} />
          </Col>
        );
      })}
    </Row>
  );
};

BlogList.propTypes = {
  list: PropTypes.arrayOf.isRequired,
};

export default BlogList;
