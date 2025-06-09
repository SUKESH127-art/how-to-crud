/** @format */

import { useState, useEffect } from "react";
import "./App.css";
import ModalForm from "./components/ModalForm";
import Navbar from "./components/Navbar";
import TableList from "./components/TableList";
import axios from "axios";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [searchTerm, setSearchTerm] = useState("");
  const [clientData, setClientData] = useState(null);
  const [tableData, setTableData] = useState([]);

  const fetchClients = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/clients");
      setTableData(response.data); // Set the fetched data
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleOpen = (mode, client) => {
    setClientData(client); // Reset client data when opening modal
    setModalMode(mode);
    setIsOpen(true);
  };

  const handleSubmit = async (newClientData) => {
    // Handle form submission logic here
    if (modalMode === "add") {
      const response = await axios.post(
        "http://localhost:5000/api/clients",
        newClientData
      ); // Replace with your actual API URL
      console.log("Client added:", response.data); // Log the response
      setTableData((prevData) => [...prevData, response.data]);
    } else {
      console.log("Updating client with ID:", clientData); // Log the ID being updated
      try {
        const response = await axios.put(
          `http://localhost:5000/api/clients/${clientData.id}`,
          newClientData
        );
        console.log("Client updated:", response.data);
        setTableData((prevData) =>
          prevData.map((client) =>
            client.id === clientData.id ? response.data : client
          )
        );
      } catch (error) {
        console.error("Error updating client:", error);
      }
    }
  };

  return (
    <>
      <div>
        <Navbar onOpen={() => handleOpen("add")} onSearch={setSearchTerm} />
        <TableList
          setTableData={setTableData}
          tableData={tableData}
          handleOpen={handleOpen}
          searchTerm={searchTerm}
        />
        <ModalForm
          isOpen={isOpen}
          OnSubmit={handleSubmit}
          onClose={() => setIsOpen(false)}
          mode={modalMode}
          clientData={clientData}
        />
      </div>
    </>
  );
}

export default App;
