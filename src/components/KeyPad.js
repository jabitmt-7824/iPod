import React from 'react';

class KeyPad extends React.Component {
    render() {
        return (
            <div id="key-container">
                <div id="keys">
                    <div id="key1"><b>MENU</b></div>
                    <img src="https://www.flaticon.com/premium-icon/icons/svg/2899/2899040.svg" className="images" id="key2" alt="play-forward" />
                    <img src="https://www.flaticon.com/premium-icon/icons/svg/3031/3031722.svg" className="images" id="key3" alt="play-forward" />
                    <img src="https://www.flaticon.com/premium-icon/icons/svg/3312/3312123.svg" className="images" id="key4" alt="play-forward" />
                    <button id="center-btn"></button>
                </div>
            </div>
        );
    }
}

export default KeyPad