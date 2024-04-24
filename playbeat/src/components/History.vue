<script setup>
import { onMounted } from 'vue';
import {ref, computed } from 'vue'

let historial = ref([])

const getHistorial = () => {
    const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
    fetch('https://playbeat.uksouth.cloudapp.azure.com/usuario/lastAudios/10', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Uncomment this line if you need to send a bearer token
        },
        })
        .then(response => response.json())
        .then((data) => {historial.value = data.cancion; console.log(data.cancion);})
        .catch((error) => {
        console.error('Error:', error);
        });
    historial.value.map((cancion) => {
        cancion.isClicked = false
    })
}

const añadirACola = (item) => {
    let songsQueue = JSON.parse(localStorage.getItem('songsQueue') || "null");
	if(songsQueue === null){
		songsQueue = []
	}
	const obj = {id: item.Audio.idAudio, titulo: item.Audio.titulo, duracionSeg: item.Audio.duracionSeg};
	songsQueue.push(obj);

	localStorage.setItem('songsQueue', JSON.stringify(songsQueue));

	window.dispatchEvent(new Event('storageChange'));
    item.isClicked = !item.isClicked
    setTimeout(() => {
        item.isClicked = !item.isClicked
    }, 700)

}
const playSong = (item) => {
    let songsQueue = JSON.parse(localStorage.getItem('songsQueue') || "null");
	if(songsQueue === null){
		songsQueue = []
	}
	const obj = {id: item.Audio.idAudio, titulo: item.Audio.titulo, duracionSeg: item.Audio.duracionSeg};
	songsQueue.unshift(obj);
    console.log(songsQueue)
	localStorage.setItem('songsQueue', JSON.stringify(songsQueue));

	window.dispatchEvent(new Event('storageChange'));
    window.dispatchEvent(new Event('nextSong'));
	setTimeout(() => {
			var event = new Event("playSong");
			document.dispatchEvent(event);	
			setTimeout(()=> {
				window.dispatchEvent(new Event('historialChange'))
			}, 5000)		
		}, 1300);
}

getHistorial()

onMounted(() => {


    window.addEventListener("historialChange", (event) => {
        getHistorial()   
    })
    
})

</script>

 
<template >
    
<ul class="flex flex-col  items-start ">
    <li v-for="item of historial" class="grid grid-cols-9 items-center w-full p-3  hover:bg-[#262626]">
        <svg @dblclick="playSong(item)" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-playlist col-span-2 " width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M17 17v-13h4" /><path d="M13 5h-10" /><path d="M3 9l10 0" /><path d="M9 13h-6" /></svg> 
        <span @dblclick="playSong(item)" class="col-span-4 select-none cursor-default">{{item.Audio.titulo}}</span>
        <span @dblclick="playSong(item)" class="col-span-2 selection-none cursor-default">{{item.Audio.duracionSeg}}</span>
        <button @click="añadirACola(item)" class="col-span-1">
            <div class="relative w-full h-6" >
                <transition name="fade" mode="out-in">
                    <svg v-if="!item.isClicked" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-plus absolute"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-check absolute"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>
                </transition>
            </div>
        </button>
    </li>

</ul>
    
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.05s;
}
.fade-enter, .fade-leave-to {
  opacity: 0.5;
}
</style>

