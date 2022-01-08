import React, { useRef, useState } from 'react';
import classes from "./Players.module.css";
import { FaPlay, FaPause, FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { MdRepeatOne,MdRepeat } from 'react-icons/md';
import Library from '../Library/Library';

const Players = ({songs, setSongs, data, navShow, seetNavShow}) => {
    const [onMusic, setOffMusic] = useState(true);
    const audioOn = useRef();
    const [restart, setRestart] = useState(false);

    const onOffMusic = () => {
        if(onMusic) {
            audioOn.current.play();
        } else {
            audioOn.current.pause();
        }
        setOffMusic(!onMusic);
    }

    const [current, setCurrent] = useState({
        currentTime: 0,
        duration: 0
    });

    const getCurrentTime = (e) => {
        setCurrent({...current, currentTime: e.target.currentTime, duration: e.target.duration});
        if(restart) {
            if(e.target.currentTime === e.target.duration) {
                audioOn.current.play();
            } 
        }
        else {
            if(e.target.currentTime === e.target.duration) {
                data.filter((item, index) => { 
                    if(item.id === songs.id) {
                        let ind = index + 1;
                        if(ind < data.length) {
                            const selectData = [data[ind]];
                            setSongs(selectData);
                        } else {
                            const selectData = [data[0]];
                            setSongs(selectData);
                        }
                        setOffMusic(onMusic);
                    }
                });
                if(onMusic === false) {
                    setTimeout(() => {
                        audioOn.current.play();
                    },1);
                }
            }
        }
    }   
    
    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + (("0") + Math.floor(time % 60)).slice(-2)
        )
    }

    const inputHendler = (e) => {
        audioOn.current.currentTime = e.target.value;
        setCurrent({...current, currentTime: e.target.value});
    }

    // Next and prev music control

    const nextMusicHendler = () => {
        data.filter((item, index) => { 
            if(item.id === songs.id) {
                let ind = index + 1;
                if(ind < data.length) {
                    const selectData = [data[ind]];
                    setSongs(selectData);
                } else {
                    const selectData = [data[0]];
                    setSongs(selectData);
                }
                setOffMusic(onMusic);
            }
        });
        if(onMusic === false) {
            setTimeout(() => {
                audioOn.current.play();
            },1);
        }
    }

    const prevMusicHendler = () => {
        data.filter((item, index) => { 
            if(item.id === songs.id) {
                let ind = index - 1;
                if(ind < data.length && ind > -1) {
                    const selectData = [data[ind]];
                    setSongs(selectData);
                } else {
                    const selectData = [data[(data.length - 1)]];
                    setSongs(selectData);
                }
                setOffMusic(onMusic);
            }
        });
        if(onMusic === false) {
            setTimeout(() => {
                audioOn.current.play();
            },1);
        }
    }

    return (
        <div className={classes.Players}>
            <div className={classes.SongInfo}>
                <p>{getTime(current.currentTime)}</p>
                <input 
                    onChange={inputHendler}
                    value={current.currentTime}  
                    max={`${current.duration}`}
                    min="0"
                    type="range" />
                <p>{getTime(current.duration)}</p>
            </div>
            <div className={classes.SongsControlIcon}>
                    <span 
                        onClick={() => setRestart(!restart)} 
                        className={`${classes.ResIcon} ${restart ? " " : classes.Active} `}>
                        <MdRepeat />
                    </span>
                    <span onClick={prevMusicHendler}>
                        <FaAngleLeft />
                    </span>
                    <span onClick={onOffMusic}>
                        {onMusic ? <FaPlay /> : <FaPause /> }
                    </span>
                    <span onClick={nextMusicHendler}>
                         <FaAngleRight />
                    </span>
                    <span 
                        onClick={() => setRestart(!restart)} 
                        className={`${classes.ResIcon} ${restart ? classes.Active : " "} `}>
                        <MdRepeatOne />
                    </span>
            </div>
            <audio  
                    onLoadedMetadata={getCurrentTime}   
                    onTimeUpdate={getCurrentTime}
                    ref={audioOn} src={songs.urlMusic} ></audio>
            <Library 
                data={data} 
                songs={songs}
                setSongs={setSongs}
                setOffMusic={setOffMusic}
                audioOn={audioOn}
                onMusic={onMusic}
                navShow={navShow}
                seetNavShow={seetNavShow}  />
        </div>
    )
}

export default Players;
