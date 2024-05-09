

<script setup>
import { onMounted, onUnmounted } from 'vue';
import {ref, computed } from 'vue'

let canciones = ref([])
let playlist = ref([])



onMounted(() => {
    canciones.value = JSON.parse(window.localStorage.getItem('songsQueue'))
    playlist.value = JSON.parse(window.localStorage.getItem('playlistQueue'))

    window.addEventListener("storageChange", (event) => {   
        canciones.value = JSON.parse(window.localStorage.getItem('songsQueue'))
        
    })

    window.addEventListener("playlistChange", (event) => {   

        playlist.value = JSON.parse(window.localStorage.getItem('playlistQueue'))
        

    })

    window.addEventListener("nextSong",(event) => {
        if (canciones.value.length > 0) {
            const primerElemento = canciones.value.shift();
            window.localStorage.setItem('songsQueue', JSON.stringify(canciones.value));
            localStorage.setItem("cancion", JSON.stringify(primerElemento));
			document.dispatchEvent(new Event("playSong"));	
            return primerElemento;
        }
    })

    window.addEventListener("nextSongPlaylist",(event) => {
        if (playlist.value.length == 0) {

            const pl = JSON.parse(window.localStorage.getItem('playlist'));
            playlist.value = pl
        }
        const primerElemento = playlist.value.shift();
        window.localStorage.setItem('playlistQueue', JSON.stringify(playlist.value));
        localStorage.setItem("cancion", JSON.stringify(primerElemento));
        document.dispatchEvent(new Event("playSong"));	

    })
    // if (!window.previousSongAdded) {
    window.addEventListener("previousSong", previousSong);
    // window.previousSongAdded = true;
    // }
    
})
onUnmounted(() => {
    window.removeEventListener("previousSong", previousSong);

})
const playSong = (index) => {
    canciones.value = canciones.value.slice(index)
    window.localStorage.setItem('songsQueue', JSON.stringify(canciones.value))
	window.dispatchEvent(new Event('storageChange'));
    window.dispatchEvent(new Event('nextSong'));
	setTimeout(() => {
			var event = new Event("playSong");
			document.dispatchEvent(event);	
			window.dispatchEvent(new Event('historialChange'))
		}, 1300);
}

const playSongPlaylist = (item,index) => {
    playlist.value = playlist.value.slice(index+1)
    localStorage.setItem("playlistQueue", JSON.stringify(playlist.value))
    let songsQueue = JSON.parse(localStorage.getItem('songsQueue') || "null");
	if(songsQueue === null){
		songsQueue = []
	}
	const obj = {id: item.id, titulo: item.titulo, duracionSeg: item.duracion};
	songsQueue.unshift(obj);
	localStorage.setItem('songsQueue', JSON.stringify(songsQueue));

	window.dispatchEvent(new Event('storageChange'));
    window.dispatchEvent(new Event('nextSong'));
	setTimeout(() => {
			var event = new Event("playSong");
			document.dispatchEvent(event);	
			window.dispatchEvent(new Event('historialChange'))
		}, 1300);
}

const previousSong = () => {
    let entirePlaylist = JSON.parse(localStorage.getItem('playlist'));
    let playlistQueue = JSON.parse(localStorage.getItem('playlistQueue')) || [];
    let cancion = JSON.parse(localStorage.getItem('cancion'));
    let bucle = JSON.parse(localStorage.getItem('loop'))

    if(!bucle && (entirePlaylist.length -1- playlistQueue.length )%entirePlaylist.length <= 0){
        document.dispatchEvent(new Event('stopSong'))
    }else{


        playlistQueue.unshift(cancion)
        cancion = entirePlaylist[(((entirePlaylist.length -1- playlistQueue.length )%entirePlaylist.length) + entirePlaylist.length) % entirePlaylist.length]
        localStorage.setItem('playlistQueue', JSON.stringify(playlistQueue))
        localStorage.setItem('cancion', JSON.stringify(cancion))
        playlist.value = playlistQueue
        var event = new Event("playSong");
        document.dispatchEvent(event);	
        window.dispatchEvent(new Event('historialChange'))
    }

    

}


const todosSeleccionado = computed(() => canciones?.value?.length >= 1 && canciones.value.every(cancion => cancion.checked))

const eliminar = () => {
    canciones.value = canciones.value.filter(cancion => !cancion.checked)
    window.localStorage.setItem('songsQueue', JSON.stringify(canciones.value))
    playlist.value = playlist.value.filter(cancion => !cancion.checked)
    window.localStorage.setItem('playlistQueue', JSON.stringify(playlist.value))
}
const seleccionarTodos = () => {
  canciones.value.forEach(cancion => cancion.checked = true)
  
}
const deseleccionarTodos = () => {
  canciones.value.forEach(cancion => cancion.checked = false)
}
</script>

 
<template >
    <section class="flex w-full h-full flex-col ">
        <div class="h-[98%] mb-4 flex flex-col overflow-y-scroll ">
            <div  v-if="canciones && canciones.length > 0" class="flex flex-row justify-between mx-[10%]">
                <h4 class="self-end">Cola</h4>
                <button v-if="!todosSeleccionado" @click="seleccionarTodos" class=" self-end w-max mt-2 hover:underline">Seleccionar</button>
                <button v-else @click="deseleccionarTodos" class=" self-end w-max mt-2 hover:underline">Deseleccionar</button>
            </div>
            <div  v-if=" canciones && canciones.length > 0" class="h-[1px] min-h-[1px] w-[80%] bg-white bg-opacity-80 self-center" :class="{'mb-10' : canciones && canciones.length == 0}" ></div>
            <ul v-if="canciones && canciones.length > 0" class="flex flex-col mt-4 items-center ">
                <li v-if="canciones" v-for="(item,index) of canciones" @dblclick="playSong(index)" class="grid grid-cols-9 items-center w-full p-3 hover:bg-[#262626] select-none cursor-default">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-playlist col-span-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M14 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                            <path d="M17 17v-13h4" />
                            <path d="M13 5h-10" />
                            <path d="M3 9l10 0" />
                            <path d="M9 13h-6" />
                        </svg>
                        <span class="col-span-5 mx-2 overflow-x-hidden">{{ item.titulo }}</span>
                        <span class="col-span-2">{{item.duracionSeg}}</span>
                        <input type="checkbox" class="col-span-1 rounded-full" v-model="item.checked"/>
                </li>
            </ul>
            
            <div  v-if="playlist && playlist.length > 0"class="flex flex-row justify-between mx-[10%] mt-6">
                <h4 class="self-end">Playlist</h4>
            </div>
            <div  v-if="playlist && playlist.length > 0" class="h-[1px] min-h-[1px]  w-[80%] bg-white bg-opacity-80 self-center" ></div>
            <ul v-if="playlist && playlist.length > 0" class="flex flex-col  mt-4 h-[90%] items-center ">
                <li v-for="(item,index) of playlist"  @dblclick="playSongPlaylist(item, index)" class="grid grid-cols-9 items-center w-full p-3 hover:bg-[#262626] select-none cursor-default">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-playlist col-span-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M14 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                            <path d="M17 17v-13h4" />
                            <path d="M13 5h-10" />
                            <path d="M3 9l10 0" />
                            <path d="M9 13h-6" />
                        </svg>
                        <span class="col-span-5 mx-2 overflow-x-hidden">{{ item.titulo }}</span>
                        <span class="col-span-2">{{item.duracion}}</span>
                        <input type="checkbox" class="col-span-1 rounded-full" v-model="item.checked"/>
                </li>
            </ul>
        </div>
        <button @click="eliminar" class=" self-center w-max py-1 px-5 border-2 rounded-md hover:border-[#fc0307] transition-colors">Eliminar</button>
    </section>
    
</template>
<style scoped>
    input[type="checkbox"] {
    width: 20px;
    height: 20px;
    margin-left: 2px;
    border: 2px solid rgb(219, 219, 219); 
    appearance: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    }

    input[type="checkbox"]:checked {
    background-color: rgb(219, 219, 219);

    }
</style>
