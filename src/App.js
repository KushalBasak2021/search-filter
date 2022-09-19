import React, { useState } from "react";
import JSONDATA from "./MOCK_DATA.json";
import Table from "./Table";
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const search = (data) => {
    return data.filter(
      (item) =>
        item.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search...."
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <Table data={search(JSONDATA)} />
    </div>
  );
}

export default App;
