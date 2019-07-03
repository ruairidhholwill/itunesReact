import React from "react";

const SongSelect = (props) => {

    const options = props.songs.map((song, index) => {
        return (
            <option value={index} key={index}>{song.title.label}</option>
        )
        
    })

    function handleChange(event){
        props.onSongSelected(event.target.value)
    }

    return (
        <select id="song-selecter" defaultValue="default" onChange={handleChange}>
            <option disabled value="default">Choose a Song!</option>
            {options}
        </select>
    )
}

export default SongSelect;