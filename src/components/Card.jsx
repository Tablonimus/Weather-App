// import React from 'react';
// import './Card.css';

// export default function Card ({min, max, name, img, onClose, id}) {
//     return (
//       <div className="card">
//         <div id="closeIcon" className="row">
//             <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
//         </div>
//         <div className="card-body">
//           <h5 className="card-title">{name}</h5>
//           <div className="row">
//             <div className="col-sm-4 col-md-4 col-lg-4">
//               <p>Min</p>
//               <p>{min}°</p>
//             </div>
//             <div className="col-sm-4 col-md-4 col-lg-4">
//               <p>Max</p>
//               <p>{max}°</p>
//             </div>
//             <div className="col-sm-4 col-md-4 col-lg-4">
//               <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
// };


import React from 'react';
import Styles from './Card.module.css';

export default function Card({min,max,name,img,onClose, id}) {
  // acá va tu código
  return (
    <>
      <div className={Styles.principalbox}>

        <div >
          <h1 className={Styles.title}>{name}</h1>
          <button className={Styles.btn} onClick={onClose}>X</button>
        </div>

        <div className={Styles.adjust}>

          <div className={Styles.min}>
            <h3>Min</h3>
            <h3>{min+'°C'}</h3>
          </div>


          <div className={Styles.max}>
            <h3>Max</h3>
            <h3>{max+'°C'}</h3>
          </div>

          <div className={Styles.img}>
            <img className={Styles.img} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
          </div>

        </div>
      </div>


    </>
  )


};