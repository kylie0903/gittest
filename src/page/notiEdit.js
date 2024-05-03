import { useState } from "react";
import { useParams } from "react-router-dom";

const NotiEdit = ({notiData})=>{
    const {id} = useParams()
    const idx = id - 1
    const data = notiData[idx]
    const [editData , setEditData] = useState(notiData[idx]
    //     {
    //     notiId : data.notiId,        
    //     notiName : data.notiName,
    //     notiText : data.notiText,
    //     notiTit : data.notiTit
    // }
    )
    const {notiId,notiName,notiText,notiTit}= editData;

    function editChange(e){
        setEditData({
            ...editData,
            [e.target.name] : e.target.value
        })
    }
    
console.log(data)
    return(
        <div key={notiId}>
            <h1>NotiEdit</h1>
            <input name="notiName" value={notiName} onChange={editChange} />
            <input name="notiTit" value={notiTit} onChange={editChange}/>
            <textarea name="notiText" value={notiText} onChange={editChange}></textarea>
        </div>
    )
}
export default NotiEdit