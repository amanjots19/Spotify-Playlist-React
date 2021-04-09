import React from 'react'

const Playlist = () => {

    const getPlayListName = () => {
        let plyList =  JSON.parse(sessionStorage.getItem("savedPlaylist"))
        if (plyList && plyList.length) {
            if (plyList[0].playlist && plyList[0].playlist.length)
                return plyList[0].playlist[0].name;
        }
    }
    return (
        <div>
            <p> Saved Playlist:- <br></br>
                {getPlayListName()}</p>
        </div>
    )
}
export default Playlist;