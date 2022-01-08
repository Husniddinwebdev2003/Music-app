import React,{useState} from 'react';
import SongInfo from "../SongInfo/SongInfo";
import Players from "../Player/Players";
import Data from "../Data/Data";
import Nav from '../Nav/Nav';
import classes from "./Layout.module.css";




const Layout = () => {
    const [data, setData] = useState(Data)
    const [songs, setSongs] = useState(data);
    const [navShow, seetNavShow] = useState(false);
    return (
        <>
            <Nav 
                setData={setData}
                seetNavShow={seetNavShow}
                navShow={navShow}/>
            <main className={classes.Main}>
                <SongInfo 
                    songs={songs[0]} />
                <Players 
                    navShow={navShow}
                    seetNavShow={seetNavShow}
                    songs={songs[0]} 
                    setSongs={setSongs} 
                    data={data}/>
            </main>
        </>
    )
}
export default Layout;
