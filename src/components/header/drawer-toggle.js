import React from 'react'

const DrawerToggleButton = props => (
    <button className="button__toggle" onClick={props.click}>
        <div className="button-line__toggle"></div>
        <div className="button-line__toggle"></div>
        <div className="button-line__toggle"></div>
    </button>
)

export default DrawerToggleButton
