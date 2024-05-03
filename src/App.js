import './App.css';

import axios from 'axios';
import { useState, useRef ,useEffect} from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import NotiDetail from './page/notiDetail';
import NotiList from './page/notiList';
import NotiWrite from './page/notiWrite';
import NotiEdit from './page/notiEdit';
// react router dom
//  공지사항 작성
//  공지사항 리스트 
//  공지사항 상세


function App() {
  const [notiData, setNotiData] = useState([]);
  const getDatas = ()=>{
    axios.get('https://jsonplaceholder.typicode.com/comments').then(
      (res)=>{
        const datas = res.data.slice(0,10).map((data)=>{
                    return{
                      notiTit : data.name,
                       notiId : data.id,
                       notiName :data.email,
                       notiText : data.body
                    }
                  })
                  setNotiData(datas)
      }).catch((err)=>{console.log(err)})
  }
  
  // async ()=>{
  //   const res = await fetch('https://jsonplaceholder.typicode.com/comments')
  //         .then((res)=>res.json())
  //         const datas = res.slice(0,10).map((data)=>{
  //           return{
  //              notiId : data.id,
  //              notiName :data.email,
  //              notiText : data.body
  //           }
  //         })
  //         // console.log(datas)
  //         setNotiData(datas)
  // }
  useEffect(()=>{
    getDatas()
  },[])

  function notiCreate(notiTit,notiName,notiText){
    // console.log(notiTit,notiName,notiText)
    axios.post('https://jsonplaceholder.typicode.com/comments',{
      notiTit,notiName,notiText
    }).then((res)=>{
      console.log(res.data)  
      let data = {
                    notiTit : res.data.name,
                     notiId : res.data.id,
                     notiName :res.data.email,
                     notiText : res.data.body
      }  
      setNotiData( 
        notiData.concat(data)
      ) 
          
    })
  }
  return (
    <div className="App">
      <header>
        <h1>LOGO</h1>
        <nav>
          <ul>
            <li><Link to="/list">공지사항 리스트</Link></li>
            <li><Link to="/write">공지사항 작성</Link></li>
          </ul>
        </nav>
      </header>
      <div>
        <Routes>          
          <Route path='/list' element={<NotiList notiData={notiData} />} />
          <Route path='/write' element={<NotiWrite notiCreate={notiCreate} />} />
          <Route path='/list/:id' element={<NotiDetail notiData={notiData} />} />          
          <Route path='/edit/:id' element={<NotiEdit notiData={notiData} />} />          
        </Routes>
      </div>
    </div>
  );
}

export default App;
