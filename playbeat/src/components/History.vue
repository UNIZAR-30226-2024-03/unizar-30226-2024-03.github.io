<script setup>
import { onMounted } from 'vue';
import {ref, computed } from 'vue'

let historial = ref([])
const getHistorial = () => {
    const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
    console.log("token" + token)
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
}

getHistorial()

onMounted(() => {


    window.addEventListener("historialChange", (event) => {
        getHistorial()   
    })
    
})

</script>

 
<template >
    
<ul class="flex flex-col px-3 mt-4 items-start ">
    <li v-for="item of historial" class="grid grid-cols-8 items-center w-full mt-6 first-of-type:mt-0">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-playlist col-span-2 " width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M17 17v-13h4" /><path d="M13 5h-10" /><path d="M3 9l10 0" /><path d="M9 13h-6" /></svg> 
        <span class="col-span-4">{{item.Audio.titulo}}</span>
        <span class="col-span-2">{{item.Audio.duracionSeg}}</span>
    </li>

</ul>
    
</template>

