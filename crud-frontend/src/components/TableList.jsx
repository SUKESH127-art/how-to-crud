/** @format */

import ".././App.css";

export default function TableList({ handleOpen }) {
  let clients = [
    {
      id: 1,
      name: "Nicki Minaj",
      email: "nickim@gmail.com",
      job: "Queen of Rap",
      rate: "$100/hr",
      isActive: true,
    },
    {
      id: 2,
      name: "Cardi B",
      email: "cardib@gmail.com",
      job: "Rapper",
      rate: "$20/hr",
      isActive: false,
    },
    {
      id: 3,
      name: "Doja Cat",
      email: "MTS@gmail.com",
      job: "Pop Star",
      rate: "$60/hr",
      isActive: true,
    },
  ];

  return (
    <>
      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Rate</th>
              <th>Active?</th>
            </tr>
          </thead>
          <tbody className="hover:bg-base-300">
            {clients.map((client) => (
              <tr>
                <th>{client.id}</th>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.job}</td>
                <td>{client.rate}</td>
                <td>
                  <button
                    className={`btn rounded-full w-20 ${
                      client.isActive ? `btn-primary` : `btn-outline-primary`
                    }`}
                  >
                    {client.isActive ? "Active" : "Inactive"}
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleOpen("edit")}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button className="btn btn-accent">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
