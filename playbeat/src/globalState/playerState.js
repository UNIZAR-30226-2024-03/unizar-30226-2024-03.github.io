import {create} from "zustand";



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