import React, { useState, FunctionComponent, Dispatch } from "react";

function useDropdown(label: string, defaultState: string, options: string[]) {
  const [state, updateState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  const Dropdown: FunctionComponent = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        disabled={options.length === 0}
        onChange={e => updateState(e.target.value)}
        onBlur={e => updateState(e.target.value)}
      >
        <option>All</option>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
  return [state, Dropdown, updateState] as [
    string,
    FunctionComponent,
    Dispatch<string>
  ];
}

export default useDropdown;
