/** @format */

import { useState } from "react";
import "./App.css";
import ModalForm from "./components/ModalForm";
import Navbar from "./components/Navbar";
import TableList from "./components/TableList";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");

  const handleOpen = (mode) => {
    setIsOpen(true);
    setModalMode(mode);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    if (modalMode === "add") {
      console.log("Add!");
    } else {
      console.log("Edit!");
    }
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <Navbar onOpen={() => handleOpen("add")} />
        <TableList onOpen={() => handleOpen("edit")} />
        <ModalForm
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          mode={modalMode}
          onSubmit={handleSubmit}
        />
      </div>
    </>
  );
}

export default App;
