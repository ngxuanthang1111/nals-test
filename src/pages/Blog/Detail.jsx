import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import { getDetail } from "../../store/slices/blogSlice";

const BlogDetail = () => {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.blog.detail);
  const match = useMatch("blogs/:blogId");

  useEffect(() => {
    if (!match) return;
    const { params } = match;
    dispatch(getDetail({ id: params.blogId }));
  }, []);

  return (
    <Container>
      <Card>
        {detail.img ? (
          <Card.Img variant="top" src={detail.image} />
        ) : (
          <Card.Img variant="top" src="holder.js/100px180" />
        )}

        <Card.Body>
          <Card.Title>{detail.title ? detail.title : "Not Found Title"}</Card.Title>
          <Card.Text>{detail.content ? detail.content : "Not Found Content"}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default BlogDetail;
