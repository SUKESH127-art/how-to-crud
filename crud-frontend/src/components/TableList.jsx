/** @format */

import ".././App.css";
import React, { useState } from "react";
import axios from "axios";

export default function TableList({
  setTableData,
  tableData,
  handleOpen,
  searchTerm,
}) {
  // Filter the tableData based on the searchTerm
  const filteredData = tableData.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.job.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this client?"
    );

    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:5000/api/clients/${id}`); // API call to delete client
        setTableData((prevData) =>
          prevData.filter((client) => client.id !== id)
        ); // Update state
      } catch (err) {
        setError(err.message); // Handle any errors
      }
    }
  };

  return (
    <>
      {/* {error && <div className="alert alert-error">{error}</div>} */}
      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Job</th>
              <th>Rate</th>
              <th>Active?</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((client) => (
              <tr key={client.id} className="hover:bg-base-300">
                <th>{client.id}</th>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.job}</td>
                <td>{client.rate}</td>
                <td>
                  <button
                    className={`btn rounded-full w-20 ${
                      client.isactive ? `btn-primary` : `btn-outline-primary`
                    }`}
                  >
                    {client.isactive ? "Active" : "Inactive"}
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleOpen("edit", client)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(client.id)}
                    className="btn btn-accent"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
