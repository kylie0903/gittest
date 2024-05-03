import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const NotiWrite = ({notiCreate}) => {
  const navigate = useNavigate();
  const titRef = useRef()
  const nameRef = useRef()
  const txtRef = useRef()
  const [notiVal, setNotiVal] = useState({
    notiTit : '',
    notiName : '',
    notiText : ''
  })
  const{notiTit,notiName,notiText} = notiVal;

  function changeVal(e){
    setNotiVal({
      ...notiVal,
      [e.target.name] :e.target.value 
    })
  }
  function notiSave(){
    if(notiTit.length < 3){
      alert('제목을 다시 작성하세요')
      titRef.current.focus()
    }
    if(notiName.length < 2){
      alert('이름을 확인 하세요')
      nameRef.current.focus()
    }
    if(notiText.length < 10){
      alert('내용을 확인하세요')
      txtRef.current.focus()
    }
    notiCreate(notiTit,notiName,notiText)
    navigate('/list')
  }
  return (
    <>
      <h1>NotiWrite</h1>
      <div>
        <label>제목 : </label>
        <input type='text' name="notiTit" ref={titRef} value={notiTit} onChange={changeVal}/>
      </div>
      <div> 
        <label>이름 : </label>      
        <input type="text" name="notiName" ref={nameRef} value={notiName} onChange={changeVal}/> 
      </div>
      <div>        
        <label>내용 : </label>
      <textarea name="notiText" ref={txtRef} value={notiText} onChange={changeVal}></textarea>
      </div>
      <button onClick={notiSave}>저장</button>
      <button>취소</button>
    </>
  );
};

export default NotiWrite;
