import { Link } from "react-router-dom";

const NotiList =({notiData})=>{
return(
  <div>
    <h1>noti List</h1>
    <section>
         {notiData.map((noti)=>
         <div key={noti.notiId}>
            <Link to={`/list/${noti.notiId}`}>{noti.notiName}</Link>
            <Link to={`/edit/${noti.notiId}`}>수정</Link>
          </div>)}
    </section>
   
  </div> 
)
}
export default NotiList;