import React from 'react';
function Cards(props){
    return(
<>
  <div className="cards">
    <div className="card">
      <img src={props.img} alt="my-img" className='cImg'/>
      <div className="cInfo">
        <span className="cCategory">{props.title}</span>
        <h1 className="cTitle">{props.name}</h1>
        <a href={props.link} target="_blank">
          <button>Watch now</button>
        </a>
      </div>
    </div>
  </div>
  </>
    )
}
export default Cards;