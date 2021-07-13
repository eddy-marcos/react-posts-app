import React from 'react'
import '../styles/header.scss';

/**
 * Returns then main header
 * @returns {HTMLElement} header
 */
const Header = () => {
    return (
        <h1 data-testid="header">
            New Posts
        </h1>
    )
}

export default Header
