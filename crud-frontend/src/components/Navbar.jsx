/** @format */

import ".././App.css";

export default function Navbar({ onOpen, onSearch }) {
  const handleSearch = (event) => {
    onSearch(event.target.value.toLowerCase());
  };

  return (
    <div className="navbar bg-base-100 shadow-sm p-4">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Clients</a>
      </div>

      <div className="navbar-center">
        <label className="input input-bordered flex">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            onChange={handleSearch}
            type="search"
            className="grow"
            placeholder="Search"
          />
        </label>
      </div>

      <div className="navbar-end">
        <button className="btn btn-primary" onClick={onOpen}>
          Add Client
        </button>
      </div>
    </div>
  );
}
