import React, { useEffect, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Spinner, Button, Col, Form, Pagination } from "react-bootstrap";
import qs from "query-string";
import { useSearchParams } from "react-router-dom";
import {
  getList,
  nextPage,
  prevPage,
  selectPage,
  setOrder,
  setSearch,
} from "../../store/slices/blogSlice";

const BlogList = React.lazy(() => import("../../components/BlogList"));

const Blogs = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const blogs = useSelector((state) => state.blog.blogs);
  const query = useSelector((state) => state.blog.query);
  const isLoading = useSelector((state) => state.blog.isLoading);
  const totalPage = useSelector((state) => state.blog.totalPage);
  const pagination = useSelector((state) => state.blog.pagination);
  const search = useSelector((state) => state.blog.query.search);

  const onSelectPerPage = (page = 1) => {
    const params = { ...query, ...pagination, page };

    dispatch(selectPage(page));
    dispatch(getList(params));
    setSearchParams(qs.stringify(params));
  };

  const onNextPrevPage = (action = "next") => {
    const params = { ...query, ...pagination };
    if (action === "next") {
      dispatch(nextPage());
    }
    if (action === "prev") {
      dispatch(prevPage());
    }
    setSearchParams(qs.stringify(params));
    dispatch(getList(params));
  };

  const onSearchBlog = () => {
    const paramsSearch = { ...query, ...pagination, page: 1 };
    const queryString = qs.stringify(paramsSearch);
    dispatch(getList(paramsSearch));
    setSearchParams(queryString);
  };

  const onSortOrder = () => {
    const order = new Map().set("asc", "desc").set("desc", "asc");
    const paramsSearch = { ...query, ...pagination, order: order.get(query.order) };
    dispatch(setOrder(order.get(query.order)));
    dispatch(getList(paramsSearch));
    setSearchParams(qs.stringify(paramsSearch));
  };

  const renderPageItem = () => {
    return Array.from({ length: totalPage }, (v, i) => {
      return (
        <Pagination.Item
          key={i}
          active={+pagination.page === i + 1}
          onClick={() => onSelectPerPage(i + 1)}
        >
          {i + 1}
        </Pagination.Item>
      );
    });
  };

  useEffect(() => {
    const queryStringExist = Object.fromEntries([...searchParams]);
    if (Object.keys(queryStringExist).length) {
      dispatch(setOrder(queryStringExist.order));
      dispatch(setSearch(queryStringExist.search));
      dispatch(selectPage(queryStringExist.page));
    }
    dispatch(getList(queryStringExist));
  }, []);

  return (
    <Container>
      <Row style={{ marginBottom: "1rem" }}>
        <h1>Filter Blog</h1>
        <Col>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  value={search}
                  onChange={(e) => dispatch(setSearch(e.target.value))}
                />
              </Form.Group>
            </Col>
            <Col md={1}>
              <Button onClick={onSearchBlog}>Search</Button>
            </Col>
            <Col md={2}>
              <Button onClick={onSortOrder}>Order By Id</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        {isLoading ? <Spinner animation="border" variant="primary" /> : <BlogList list={blogs} />}
      </Row>
      <Row className="justify-content-md-center" style={{ marginTop: "2r  em" }}>
        <Col xs lg="4">
          <Pagination>
            <Pagination.Prev onClick={() => onNextPrevPage("prev")} />
            {renderPageItem()}
            <Pagination.Next onClick={() => onNextPrevPage("next")} />
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
};

export default Blogs;
