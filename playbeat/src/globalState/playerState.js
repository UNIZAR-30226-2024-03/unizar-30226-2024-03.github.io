import {create} from "zustand";



export const usePlayerState = create(set => ({
    play: false,
    currSong: { playlist: null, song: null, songs: [] },
    audio: null,
    shuffle: localStorage.getItem("shuffle") === "true" ? true : false,
    loop: localStorage.getItem("loop") === "true" ? true : false,
    queue: false,
    volume: 0.9,
    setVolume: (volume) => set(() => ({volume})),
    setPlay: (play) => set(() => ({play})),
    setCurrSong: (currSong) => set(() => ({currSong})),
    setAudio: (audio) => set(() => ({audio})),
    setShuffle: (shuffle) => set(() => ({shuffle})),
    setLoop: (loop) => set(() => ({loop})),
    setQueue: (queue) => set(() => ({queue})),
    onClickHandlerPlay: () => {
        set((state) => ({play: !state.play}))
        if (state.play) {
            state.audio.pause()
        } else {
            state.audio.play()
        }
    }
}))