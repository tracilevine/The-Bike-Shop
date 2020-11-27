import React from 'react';
import { Container, FormControl } from 'react-bootstrap';

const OwnerSearchBar = () => {
  const handleSearch = () => {};

  return (
    <div>
      <Container>
        <h1 class="d-flex justify-content-center">Welcome</h1>
        <FormControl
          onChange={handleSearch}
          type="text"
          placeholder="Search Orders"
          size="lg"
        />
      </Container>
    </div>
  );
};

export default OwnerSearchBar;