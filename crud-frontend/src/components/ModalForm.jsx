/** @format */

import { useState, useEffect } from "react";
import ".././App.css";

export default function ModalForm({
  isOpen,
  onClose,
  mode,
  OnSubmit,
  clientData,
}) {
  const [rate, setRate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleStatusChange = async (e) => {
    setIsActive(e.target.value === "Active"); // Set status as boolean
  };

  // handle change of status
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updateData = {
        name,
        email,
        job,
        rate: Number(rate),
        isactive: isActive,
      };
      await OnSubmit(updateData);
      onClose();
    } catch (err) {
      console.error("Error adding client", err);
    }
  };

  useEffect(() => {
    if (mode === "edit" && clientData) {
      // If in edit mode, populate the fields with existing data
      setName(clientData.name);
      setEmail(clientData.email);
      setJob(clientData.job);
      setRate(clientData.rate);
      setIsActive(clientData.isactive);
    } else {
      // Reset fields for add mode
      setName("");
      setEmail("");
      setJob("");
      setRate("");
      setIsActive(false);
    }
  }, [mode, clientData]);

  return (
    <>
      <dialog id="my_modal_3" className="modal bg-black/40" open={isOpen}>
        <div className="modal-box">
          <h3 className="font-bold text-lg py-4">
            {mode === "edit" ? "Edit Client" : "Client Details"}
          </h3>
          <form method="dialog" onSubmit={handleSubmit}>
            {/* input form */}
            <label className="input input-bordered my-4 flex items-center gap-2">
              Name
              <input
                type="text"
                className="grow"
                placeholder="Doechii"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="input input-bordered my-4 flex items-center gap-2">
              Email
              <input
                type="text"
                className="grow"
                placeholder="doechii@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="input input-bordered my-4 flex items-center gap-2">
              Job
              <input
                type="text"
                className="grow"
                placeholder="Upcoming Rapper"
                value={job}
                onChange={(e) => setJob(e.target.value)}
              />
            </label>

            <div className="flex mb-4 justify-between">
              <label className="input input-bordered mr-4 my-4 flex items-center gap-2">
                Rate
                <input
                  type="number"
                  className="grow"
                  placeholder="$80/hr"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                />
              </label>
              <select
                value={isActive ? "Active" : "Inactive"}
                className="select select-bordered w-full mt-4 max-w-xs"
                onChange={handleStatusChange}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <button
              onClick={onClose}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
            <button type="submit" className="btn btn-success">
              {mode === "edit" ? "Save Changes" : "Add Client"}
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}
