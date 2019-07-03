import React from "react"

const SongDetail = ({song}) => {
    if (!song) return null
    return (
        <>
        <h3>{song.title.label}</h3>
        <img src={song['im:image'][2].label}/>
        </>
    )
}

export default SongDetail