import React from 'react';
import { useDispatch } from 'react-redux';
import Config from '../../Assets/Icons/set.png'
import { modalW } from '../../store/actions/actions';
import { Setting } from '../Setting/setting';
import './settingBtn.css'



export const SettingBtn = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(modalW())} className="btn">
        <img src={Config} className="img"/>
        <div className="textBtn">Setting</div>
             </button>
             <Setting />
        </div>
    )
}