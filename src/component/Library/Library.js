import React from 'react';
import classes from "./Library.module.css";
import MusicItem from "./MusicItem";
import { MdClose } from "react-icons/md";

const Library = ({data, songs, setSongs, setOffMusic, audioOn, onMusic, navShow, seetNavShow}) => {
    return (
        <div className={`${classes.Library} ${navShow ? classes.Active : " "}`}>
            <h1>Library 
                <span onClick={() => seetNavShow(!navShow)} className={classes.Close}><MdClose /></span>
            </h1>
            <div className={classes.LibraryConent}>
                {data.map((item,index) => {
                    return <MusicItem 
                                key={item.id}
                                data={item} 
                                songs={songs}
                                infoData={data}
                                setSongs={setSongs}
                                setOffMusic={setOffMusic}
                                audioOn={audioOn}
                                onMusic={onMusic}  
                />
                })}
            </div>
        </div>
    )
}

export default Library;
