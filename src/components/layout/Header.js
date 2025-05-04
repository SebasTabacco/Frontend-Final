import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "../../styles/components/layaout/Header.css";

const Header = () => {
    const [audio] = useState(new Audio("/audio/Need.mp3")); 
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <header>
            <div className="holder">
                <h1>Nucleo Web</h1>
                <button onClick={togglePlayPause}>
                    {isPlaying ? "⏸ Pausar" : "▶ Reproducir"}
                </button>
            </div>
        </header>
    );
};

export default Header;
