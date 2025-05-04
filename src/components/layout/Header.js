import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useRef, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import "../../styles/components/layaout/Header.css"; // Verifica que la ruta sea correcta

const Header = () => {
    const audioRef = useRef(new Audio("/audio/Need.mp3"));
    const [isPlaying, setIsPlaying] = useState(true);
    const [volume, setVolume] = useState(1);

    useEffect(() => {
        const audio = audioRef.current;
        audio.loop = true;
        audio.volume = volume;
        audio.play().catch(error => console.log("Reproducción automática bloqueada", error));
    }, [volume, audioRef]); // Se agregó `volume` y `audioRef` como dependencias

    const togglePlayPause = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (event) => {
        const audio = audioRef.current;
        setVolume(event.target.value);
        audio.volume = event.target.value;
    };

    return (
        <header>
            <div className="holder">
                <h1>Nucleo Web</h1>
                <button onClick={togglePlayPause} className="audio-btn">
                    {isPlaying ? <FaVolumeMute size={40} color="#05f5f5" /> : <FaVolumeUp size={40} color="#05f5f5" />}
                </button>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="volume-slider"
                />
            </div>
        </header>
    );
};

export default Header;
