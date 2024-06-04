import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { sessions } from "./dataSession.js";
import { MyTable } from "../../components/table/Table.jsx";

const ListSession = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredSessions = sessions.filter((item) =>
    item.lieu.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div >
      
        <Row>
          <Col></Col>
          <Col md={8}>
            <input
              id="search"
              className="form-control mt-2 p-2 fs-5 text-black border-black"
              placeholder="Rechercher par lieu"
              type="text"
              value={search}
              onChange={handleSearch}
            />
          </Col>
        </Row>
     
      

      <div style={{ overflowX: "auto" }}>
      <MyTable >
        <thead>
          <tr>
            <th>Date debut</th>
            <th>Date Fin</th>
            <th>Heure Debut</th>
            <th>Lieu</th>
            <th>Statut</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredSessions.map((item) => (
            <tr key={item.id} item={item}>
              <td>{item.dateDebut}</td>
              <td>{item.dateFin}</td>
              <td>{item.heureDebut}</td>
              <td>{item.lieu}</td>
              <td>{item.statut.toString()}</td>
              <td>
                <i className="bi bi-pencil-square"></i>
              </td>
              <td>
                <i className="bi bi-trash3-fill"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </MyTable>
      </div>
      
    </div>
  );
};

export default ListSession;
