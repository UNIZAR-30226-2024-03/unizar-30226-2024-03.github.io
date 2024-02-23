import {create} from "zustand";
import create from 'vue-zustand'



export const usePlayerState = create(set => ({
    play: false,
    currSong: { playlist: null, song: null, songs: [] },
    audio: null,
    shuffle: false,
    loop: false,
    queue: false,
    volume: 0.9,
    setVolume: (volume) => set((state) => ({volume})),
    setPlay: (play) => set((state) => ({play})),
    setCurrSong: (currSong) => set((state) => ({currSong})),
    setAudio: (audio) => set((state) => ({audio})),
    setShuffle: (shuffle) => set((state) => ({shuffle})),
    setLoop: (loop) => set((state) => ({loop})),
    setQueue: (queue) => set((state) => ({queue})),
    onClickHandlerPlay: () => {
        set((state) => ({play: !state.play}))
        if (state.play) {
            state.audio.pause()
        } else {
            state.audio.play()
        }
    }
}))


// const {volume} = usePlayerState();


export const useStore = create(set => ({
    
    bears: 1,
  increase: () => set(state => ({ bears: state.bears + 1 })),
}))

