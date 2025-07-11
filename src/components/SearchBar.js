import { Button, Input, Stack } from "@mantine/core";
import "./SearchBar.css";
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="search_bar">
      <form onSubmit={handleFormSubmit}>
        <Stack gap={"10px"} m={3}>
          <label>Enter your text</label>
          <Input
            value={value}
            onChange={handleChange}
            c={"red"}
            placeholder="search"
          />
          <Button>Search</Button>
        </Stack>
      </form>
    </div>
  );
}
export default SearchBar;
