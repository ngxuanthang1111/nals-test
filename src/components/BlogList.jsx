import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";

const BlogItem = React.lazy(() => import("./BlogItem"));

const BlogList = (props) => {
  const { list } = props;
  const navigate = useNavigate();

  const goToDetail = (id) => navigate(`/blogs/${id}`);
  const goToEdit = (id) => navigate(`/blogs/${id}/edit`);
  return (
    <Row>
      <Suspense fallback={<div>Loading Blog Item...</div>}>
        {list.map((item) => {
          return (
            <Col key={item.id}>
              <BlogItem
                goDetail={() => goToDetail(item.id)}
                goEdit={() => goToEdit(item.id)}
                {...item}
              />
            </Col>
          );
        })}
      </Suspense>
    </Row>
  );
};

BlogList.propTypes = {
  list: PropTypes.arrayOf.isRequired,
};

export default BlogList;
