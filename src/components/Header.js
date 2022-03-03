import React from 'react';

export default function Header() {
    return (
        <header className="header">
            <img 
                src="./favicon.ico" 
                className="header-img"
                alt='epic emoji'
            />
            <h2 className="header-title">Meme Generator</h2>
        </header>
    )
}