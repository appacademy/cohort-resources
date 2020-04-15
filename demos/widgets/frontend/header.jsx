import React from 'react'

const Header = ({ toggleActiveTab, idx, active, tab }) => {

    return (
    <li 
        onClick={() => toggleActiveTab(idx)}
        className={active ? 'active' : '' }
    >
        {tab.title}
    </li>
    );
};

export default Header;