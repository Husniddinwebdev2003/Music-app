import React from 'react';
import classes from "./Library.module.css";
import { FaPlay, FaPause } from "react-icons/fa";

const MusicItem = ({data, songs, setSongs, infoData, setOffMusic, audioOn, onMusic}) => {
    const musicSlect = (id) => {
        setSongs(infoData.filter((item) => item.id === id));
        setOffMusic(false);
        setTimeout(() => {
            audioOn.current.play();
        },1);
        if(songs.id === id) {
            setTimeout(() => {
                audioOn.current.currentTime = 0;
            },1);
        }
    }
    return (
        <div 
            onClick={() => musicSlect(data.id)}
            className={`${classes.MusicItem} ${(data.id === songs.id ? classes.Active : "")}`}>
            <img src={data.urlImg} alt={data.urlImg}/>
            <div className={classes.MusicItemDesc}>
                <h3>{data.musicName}</h3>
                <h4>{data.artist}</h4>
                {(data.id === songs.id) ? <span className={classes.OnMusic}>{onMusic ? <FaPlay /> : <FaPause />}</span> : ""}
            </div>
        </div>
    )
}
export default MusicItem;
