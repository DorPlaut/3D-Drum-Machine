import React, { useState } from 'react';
import { Howl, Howler } from 'howler';
import { BiChevronsDown, BiChevronsUp } from 'react-icons/bi';

function Controlls({ displaydPad, setDisplayedPad }) {
  const [minimize, setMinimize] = useState('controller-container');
  const [minimizeBtn, setMinimizeBtn] = useState('btn');
  const [soundOn, setSoundOn] = useState('toggle');
  const [minimizeSymbol, setMinimizeSymbol] = useState(<BiChevronsDown />);
  return (
    <>
      <div className={minimize}>
        <div className="controller-header">
          <h3>Controlls</h3>
          {/* minimize button */}
          <button
            className={minimizeBtn}
            onClick={() => {
              if (minimize === 'controller-container') {
                setMinimize('controller-container minimize-controller');
                setMinimizeBtn('btn btn-active');
                setMinimizeSymbol(<BiChevronsUp />);
              } else {
                setMinimize('controller-container');
                setMinimizeBtn('btn');
                setMinimizeSymbol(<BiChevronsDown />);
              }
            }}
          >
            {minimizeSymbol}
          </button>
        </div>
        <div className="btn-container">
          <div id="display"> {displaydPad}</div>
          {/* toggle btn ON-Off */}
          <div className="toggle-container">
            <p>On/Off</p>
            <div
              className="toggle-btn"
              onClick={() => {
                if (soundOn === 'toggle') {
                  Howler.volume([0.0]);
                  setSoundOn('toggle toggle-off');
                  setDisplayedPad('Sound is Off');
                } else {
                  Howler.volume([1.0]);
                  setSoundOn('toggle');
                  setDisplayedPad('Sound is On');
                }
              }}
            >
              <div className={soundOn}></div>
            </div>
          </div>
          {/* toggle btn */}
          {/* <div className="toggle-container">
            <p>On/Off</p>
            <div className="toggle-btn">
              <div className="toggle"></div>
            </div>
          </div> */}
          {/*  */}
        </div>
      </div>
    </>
  );
}

export default Controlls;
