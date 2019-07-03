import React, {Component} from "react"
import SongDetail from '../Components/SongDetail'
import SongSelect from '../Components/SongSelect'

class ItunesContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            songs: [],
            currentSong: null
        }
        this.handleSongSelected = this.handleSongSelected.bind(this)
    }

    componentDidMount(){
        const url="https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
        fetch(url)
            .then(res => res.json())
            .then(songs => this.setState({songs: songs.feed.entry}))
            .catch(err => console.error)
    }

    handleSongSelected(index){
        const selectedSong = this.state.songs[index]
        console.log(selectedSong)
        this.setState({currentSong: selectedSong})
    }

    render(){
        return (
            <div className="songs">
                <h2>Itunes Container</h2>
                <SongSelect
                songs={this.state.songs}
                onSongSelected={this.handleSongSelected}
                />
                <SongDetail song={this.state.currentSong}/>
            </div>
        )
    }
}

export default ItunesContainer