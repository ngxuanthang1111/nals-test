import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const BlogItem = (props) => {
  const { title, content, image, goDetail, goEdit } = props;
  return (
    <Card style={{ width: "18rem", marginBottom: "1rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <div className="flex justify-content-between">
          <Button variant="primary" onClick={goDetail}>
            Go to Detail
          </Button>
          <Button variant="primary" onClick={goEdit}>
            Go to Edit
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

BlogItem.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
  goDetail: PropTypes.func,
  goEdit: PropTypes.func,
};

export default BlogItem;
