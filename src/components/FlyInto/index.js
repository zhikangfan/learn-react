import React, {useState} from 'react'
import "./index.css";
import {store} from "../../store";
export default function FlyInto() {
    const [point, setPoint] = useState({x: 300, y: 200}) // 
    const [finishPoint, setFinishPoint] = useState({ x: 300, y: 200}) // 结束点
    const [number,setNumber] = useState(store.getState())
    function pow(num) {
        return Math.pow(num, 2)
    }
    const intervalTime = 10;
    const D = pow(point.x) * finishPoint.x - pow(finishPoint.x) * point.x;
    const a = (point.y * finishPoint.x - point.x * finishPoint.y) / D;
    const b = (pow(point.x) * finishPoint.y - pow(finishPoint.x) * point.y) / D;
    function start() {
        store.dispatch({ type: 'INCREMENT' });
    }
    store.subscribe(() =>
        setNumber(store.getState())
    );
  return (
      <div>
          <div className="ball" style={{left: point.x + 'px', top: point.y + 'px'}}></div>
          <div className='finishBall' style={{left: finishPoint.x + 'px', top: finishPoint.y + 'px'}}></div>
          <div>
              <label>
                  x: <input name='xPoint' type="nubmer" defaultValue={finishPoint.x} onChange={(e) => {
                      setFinishPoint({x: e.target.value, y: finishPoint.y})
                  }} />
                  
              </label>
              <label>
                  y: <input name='yPoint' type="number" defaultValue={finishPoint.y} onChange={(e) => {
                      setFinishPoint({x: finishPoint.x, y: e.target.value})
                  }} />
              </label>
          </div>
          <button onClick={() => {
              start();
          }}>Play</button>
          <div>{number}</div>
        </div>
  )
}
