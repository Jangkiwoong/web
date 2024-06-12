import './App.css';
import './Nurim.css';
import { useState } from 'react';

function App() {

  const post = '본문본문본문본문본문본문본문본문본문본문본문본문';
  let [title, settitle] = useState(['남자 코트 추천', '여자 코트 추천', '옷 추천']);
  let [like, setlike] = useState(0);
  return (
    <div className="App">
      <div className='wkdrldnd'>
        <h1>블로그로그로그남기자</h1>
      </div>
      <div className="blogpage" style={ {color : 'red', fontSize : '60px'} }>
        <p>{post} </p>
      </div>
      <div className='list'>
        <h4>{ title[0] } <span onClick={likeUp(like)}>🐽</span> {like} </h4>
        <p>2024-05-24</p>
      </div>
      <div className='list'>
        <h4>{ title[1] }</h4>
        <p>2024-05-24</p>
      </div>
      <div className='list'>
        <h4>{ title[2] }</h4>
        <p>2024-05-24</p>
      </div>
    </div>
  );
}
const likeUp = (like) => {
  like += 1;
}

export default App;
