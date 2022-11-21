import { toBeInTheDOM } from "@testing-library/jest-dom/dist/matchers";
import { useState } from "react";
import "./Home.css";
var data = require("./MOCK_DATA.json");

export default function App() {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };

  return (
    <div className="App">
      

      <div className="search-container">
        <div className="search-inner">
          <input type="text" value={value} onChange={onChange} />
          <button onClick={() => onSearch(value)}> Search </button>
        </div>
        <div className="dropdown">
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.Country_name.toLowerCase();
              const country_code = item.Country_Code.toLowerCase();
              const currency = item.Currency.toLowerCase();
              const Language = item.language.toLowerCase();


              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm 
                
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.Country_name)}
                className="dropdown-row"
                key={item.Country_name}
              >
                {item.Country_name}

              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
