<script setup>

import { onMounted } from 'vue';
import {ref, computed } from 'vue'
const  nombreFilters = ["All", "Cancion", "Podcast", "Usuario", "Album", "Playlist"];
const filters = ["all", "canciones", "podcasts", "usuarios", "albums", "listas"]

const busqueda = ref()
const filter = ref("all")

onMounted(() => {
    window.addEventListener("buscar", () => {
        console.log("buscando")
        busqueda.value = JSON.parse(localStorage.getItem("busqueda"))
    })
})
const changeFilter = (item, index) => {
    filter.value = filters[index];
    console.log(filter.value);
}

</script>

<template>
    <section class="searching flex-col mt-12">

        <form  class="flex flex-row justify-between w-[460px] ml-10"> 
            <template v-for="(item, index) in nombreFilters">
                <input type="radio" :id="item" name="filter" class="inputRadio hidden" />
                <label :for="item" @click='() => {changeFilter(item, index)}' class="text-white font-medium border-2 border-[#6985C0] w-max rounded-md px-2 py-1 filter" :class="{' bg-bluePB' : filter === filters[index]}">
                    <span>{{item}}</span>
                </label>
            </template>

        </form>
        <!-- <div v-for="item of Canciones" class="all">
            <Carrousel info={{item}} />
        </div> -->
        <div  class="canciones h-full flex flex-row flex-wrap ml-8 mt-6"> 
                <li v-if="busqueda != null && filter == 'All'" v-for="item of busqueda.canciones" class="flex flex-col p-2 text-sm w-[300px] ">
                    <a href="'/library/'+item.audio" class="  relative inline-block imagen ">
                        <img src="cancion.jpg" :class="{ 'w-full rounded-md mb-1 hover:brightness-90': true }"/>
                        <div class="rounded-full w-10 h-10 hidden items-center justify-center botones">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play-filled" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" stroke-width="0" fill="currentColor" /></svg>
                        </div>
                    </a>
                    <a href="/library/playlist1" class=" w-max hover:underline">
                        <p class="text-base hover:underline">{{item.titulo}}</p>
                    </a>
                    <a href="'/artist/'+item.descripcion" class="w-max hover:underline"><p class=" text-gray-400">{{item.idAudio}}</p></a>

                </li>
        </div>
        <div  class="canciones h-full flex flex-row flex-wrap ml-8 mt-6"> 
                <li v-if="busqueda != null && filter != 'All'" v-for="item of busqueda[filter]" class="flex flex-col p-2 text-sm w-[300px] ">
                    <a :href="filter === 'canciones' 
                    ? '/creator/audio/' + item.idAudio 
                    : filter === 'usuarios' 
                    ? '/user/' + item.idUsuario 
                    : filter === 'listas' 
                    ? '/library/' + item.idLista 
                    : ''"  class="relative inline-block imagen ">
                        <img src="cancion.jpg" :class="{ 'w-full rounded-md mb-1 hover:brightness-90': true }"/>
                        <div class="rounded-full w-10 h-10 hidden items-center justify-center botones">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play-filled" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" stroke-width="0" fill="currentColor" /></svg>
                        </div>
                    </a>
                    <a href="/library/playlist1" class=" w-max hover:underline">
                        <p class="text-base hover:underline">
                            {{ filter === 'canciones' 
                            ? item.titulo 
                            : filter === 'usuarios' 
                            ? item.nombreUsuario 
                            : filter === 'listas' 
                            ? item.nombre 
                            : '' 
                            }}
                        </p>
                    </a>
                    <a href="'/artist/'+item.descripcion" class="w-max hover:underline"><p class=" text-gray-400">
                        {{ filter === 'canciones' 
                        ? item.idAudio 
                        : filter === 'usuarios' 
                        ? item.idUsuario 
                        : filter === 'listas' 
                        ? item.idLista 
                        : '' 
                        }}
                    </p></a>

                </li>
        </div>

    </section>
</template>