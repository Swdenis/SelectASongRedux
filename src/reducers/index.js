import { combineReducers } from 'redux';

const songsReducer = () => {
   return [
    {title: 'No scrubs',duration:'4:05'},
    {title: 'Gorgorod',duration:'3:40'},
    {title: 'My girl',duration:'1:15'},
    {title: 'Macarena',duration:'2:01'},];
};

const selectedSongReducer = (selectedSong= null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});