import { Form } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <Form >
      <Form.Control
        type="text"
        placeholder="Search For the product you want."
        style={{height: '70px',padding: '10px'}}
        onChange={handleChange}
      />
    </Form>
  );
};

export default SearchBar;