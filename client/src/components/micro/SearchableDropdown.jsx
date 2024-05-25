import React, { useState } from "react";

const SearchableDropdown = ({ items, label, formData, handleChange }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (value) => {
    setSearchQuery(value)
    // Perform any action when an option is selected, e.g., close dropdown, set selected value, etc.
    setIsOpen(false);
  };

  return (
    <div className="mb-4 relative">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={label.toLowerCase()}
      >
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
          onClick={handleToggleDropdown}
          placeholder={`Search ${label.toLowerCase()}...`}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-transparent"
          required
        />
        {isOpen && (
          <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-b w-full z-10">
            {filteredItems.map((item, idx) => (
              <div
                key={idx}
                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                onClick={() => handleSelectOption(item.value)}
              >
                {item.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchableDropdown;
