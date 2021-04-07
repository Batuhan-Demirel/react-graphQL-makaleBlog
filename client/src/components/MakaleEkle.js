import React,{useState}from 'react'
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";


const MAKALE_EKLE = gql`
    mutation makaleEkle($baslik:String!,$icerik:String!){
        makaleOlustur(baslik:$baslik,icerik:$icerik){
            id,baslik,icerik
        }
    }
`; 

const MakaleEkle = () => {

    const [veriler, setVeriler] = useState({
        baslik:"",
        icerik:""
    })

    const[makaleEkle]= useMutation(MAKALE_EKLE,{update(proxy,result){
        console.log(result)
    },
    variables:veriler
    });

    const onChange=(e)=>{
        setVeriler({...veriler,[e.target.name]:e.target.value})
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        makaleEkle()
        window.location="/";

    }
    return (
        <div className="container">
           <form className="form" onSubmit={onSubmit}>
               <label htmlFor="baslik">Makale Başlığı</label>
               <input type="text" id="baslik" name="baslik" onChange={onChange} />

               <label htmlFor="icerik">Makale İçeriği</label>
               <textarea type="text" id="icerik" name="icerik" onChange={onChange} />
            
                <button className="sil">Kaydet</button>

            </form>

        </div>
    )
}

export default MakaleEkle
