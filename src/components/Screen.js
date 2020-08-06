import React from 'react';

class Screen extends React.Component {
    render() {
        return (
            <div id="screen-container">
                <h3>iPod js</h3>
                <div id="screen">
                    <div id="menu">

                        <ul>
                            <li><a href="fg.html">Music</a></li>
                            <li><a href="fg.html">Games</a></li>
                            <li><a href="fg.html">Settings</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Screen