import React, { useState } from "react"
import { modalW, times } from "../../store/actions/actions"
import './setting.css'
import Remove from '../../Assets/Icons/remove.png'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"


export const Setting = ({pomofocus, shortBreak, longBreak, auto, autoBreak, handleChange}) => {
    const dispatch = useDispatch()
    let value = useSelector(state => state.settingModal)
    let times = useSelector(state => state.times)
    const [short, setShort] = useState(times.shortBreak)
    // let time = useSelector(state => state.times)
    const handleClick = () => {
        dispatch(times({pomofocus: pomofocus, shortBreak: shortBreak, longBreak: longBreak, auto: auto, autoBreak:autoBreak}))
    }
    return (
      <div>{value && (<div className="mainWin">
                  <div className="modalWindow">
                <div className="inModal">
                    <div className="with-img-flex">
                        <div className="div-img1"><h3 className="h3">Timer Settig</h3></div>
                        <div className="div-img2"><img src={Remove} className="img-s" onClick={() => dispatch(modalW())}></img></div>
                    </div>
                    <hr></hr>
                    <div className="timer-m"><b>Timer (minutes)</b></div>
                    <div className="div-3-btn">
                        <div className="number-div1">
                            <p>Pomodoro</p>
                            <input defaultValue="25" type="number" value={pomofocus} onChange={(e) => handleChange(e)}></input>
                        </div>
                        <div className="number-div2">
                            <p>Short Break</p>
                            <input  type="number" value={short} onChange={(e) => setShort(e.target.value)}></input>
                        </div>
                        <div className="number-div3">
                            <p>Long Break</p>
                            <input value={times.longBreak} type="number" value={longBreak}onChange={(e) => handleChange(e)}></input>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="text-div-1">
                        <div><b>Auto start Breaks?</b></div>
                        <div>
                            <button className="btn-s" onClick={autoBreak}>
                                <button className="btn-r"></button>
                            </button>
                        </div>
                    </div>
                    <hr/>
                    <div className="text-div-1">
                        <div><b>Auto start Pomodoros?</b></div>
                        <div>
                            <button className="btn-s" onClick={auto}>
                                <button className="btn-r"></button>
                            </button>
                        </div>
                    </div>
                    <hr/>
                    <div className="text-div-1">
                        <div><b>Long Break interval</b></div>
                        <div>
                            <input defaultValue="1" type="number" />
                        </div>
                    </div>
                    <hr className="hr55"></hr>
                    <button className="main-btn" onClick={handleClick}>OK</button>
                </div>
            </div>
              </div>
            )}
      </div>
    )
}