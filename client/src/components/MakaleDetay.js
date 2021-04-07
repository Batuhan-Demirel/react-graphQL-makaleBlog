import React from 'react'
import gql from "graphql-tag";
import { useQuery ,useMutation} from "@apollo/react-hooks";

const MAKALE_GETIR = gql`
  query makaleGetir($id:ID!){
      makaleGetir(id:$id){
          id,baslik,icerik
      }
  }
`;

const MAKALE_SIL= gql`
mutation silMakale($id:ID!){
    makaleSil(id:$id)
}
`

const MakaleDetay = (props) => {
    const id=props.match.params.id

    const {data} = useQuery(MAKALE_GETIR,{variables:{id}});

    const [silMakale]=useMutation(MAKALE_SIL)

    const makaleSil=(id)=>{
        silMakale({variables:{id}})
        window.location="/"
    }

    return (
        <div className="container">
            {data ? 
           ( <div>
                 <h1 className="baslik">{data.makaleGetir.baslik}</h1>
                 <h2 className="icerik">{data.makaleGetir.icerik}</h2>

                 <button className="sil" onClick={()=>makaleSil(data.makaleGetir.id)}>Sil</button>
            </div>)
            : "Yükleniyor.."}
        </div>
    )
}

export default MakaleDetay
