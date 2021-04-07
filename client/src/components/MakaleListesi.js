import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
const MAKALELER_GETIR = gql`
  {
    makalelerGetir {
      id
      baslik
      icerik
    }
  }
`;

const MakaleListesi = () => {
  const { data, error, loading } = useQuery(MAKALELER_GETIR);

  let makaleTemp;

  if (loading) {
    makaleTemp = <p>Yükleniyor..</p>;
  } else if (data) {
    makaleTemp = data.makalelerGetir.map((makale) => (
      <li key={makale.id}>
        <Link className="card" to={`/makale/${makale.id}`}>
          <h1>{makale.baslik}</h1>
          <h3>{makale.icerik}</h3></Link>
      </li>
    ))
  } else {
    return error;
  }
  return (
    <div className="container">
      <h1 className="baslik">MAKALELER</h1>
      <ul className="ul-grid">{makaleTemp}</ul>
    </div>
  )
};

export default MakaleListesi;
