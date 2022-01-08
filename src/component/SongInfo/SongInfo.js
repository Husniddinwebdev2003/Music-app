import React from 'react';
import classes from "./SongInfo.module.css";

const SongInfo = ({songs}) => {
    return (
        <div className={classes.Dfc}>
            <div className={classes.SongImg}>
                <img src={songs.urlImg} alt="img" />
            </div>
            <div className={classes.SongName}>
                <h2>{songs.musicName}</h2>
            </div>
            <div className={classes.SongArtist}>
                <h3>{songs.artist}</h3>
            </div>
        </div>
    )
}

export default SongInfo;
