import { Navbar, Nav, FormControl, Form, Container } from "react-bootstrap";
import PropTypes from 'prop-types';
import React from "react";
import Rate from '../Rate/Rate';


function Menu({ handleSearch, setRateSearch, rateSearch }) {
  return (<Navbar bg="dark" variant="dark" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">NetFlask</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
        </Nav>
        
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={handleSearch}
          />
          <div className='col-md-4'>
            <Rate
              starIndex={setRateSearch}
              rate={rateSearch}
            />
          </div>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}



Menu.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default Menu;