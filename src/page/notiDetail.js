import { useParams, useNavigate } from "react-router-dom";


const NotiDetail = ({notiData}) => {
    const navigate = useNavigate();
    const {id} = useParams()
    const idx = id - 1
    const data = notiData[idx]
    console.log(data.notiName)

    function notiReturn(){
        navigate('/list')
    }
    function notiRemove(){
        // remove(id)
        navigate('/')
    }
    return (
        <div>
            <h1>NotiDetail</h1>
            <h2>{data.notiName}</h2>  
            <p>{data.notiText}</p>  
            <button onClick={notiRemove}>삭제하기</button> 
            <button onClick={notiReturn}>돌아가기</button>   
        </div>
    )
}

export default NotiDetail;