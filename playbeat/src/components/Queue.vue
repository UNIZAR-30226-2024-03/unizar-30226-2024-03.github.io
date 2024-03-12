

<script setup>
import { onMounted } from 'vue';
import {ref, computed } from 'vue'

let canciones = ref([])



onMounted(() => {
    window.addEventListener("storageChange", (event) => {   
        canciones.value = JSON.parse(window.localStorage.getItem('songsQueue'))
        
    })
    
})


const todosSeleccionado = computed(() => canciones.value.length > 1 && canciones.value.every(cancion => cancion.checked))

const eliminar = () => {
    canciones.value = canciones.value.filter(cancion => !cancion.checked)
    window.localStorage.setItem('songsQueue', JSON.stringify(canciones.value))

}
const seleccionarTodos = () => {
  canciones.value.forEach(cancion => cancion.checked = true)
}
const deseleccionarTodos = () => {
  canciones.value.forEach(cancion => cancion.checked = false)
}
</script>


<template >
    <section class="flex w-full h-full flex-col justify-between">
        <button v-if="!todosSeleccionado" @click="seleccionarTodos" class=" self-end w-max mt-2 px-5 hover:underline">Seleccionar todos</button>
        <button v-else @click="deseleccionarTodos" class=" self-end w-max mt-2 px-5 hover:underline">Deseleccionar todos</button>

        <ul class="flex flex-col px-3 mt-4 h-[90%] overflow-y-scroll items-start ">
            <li v-for="item of canciones" class="grid grid-cols-9 items-center w-full mt-6 first-of-type:mt-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-playlist col-span-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M14 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M17 17v-13h4" />
                        <path d="M13 5h-10" />
                        <path d="M3 9l10 0" />
                        <path d="M9 13h-6" />
                    </svg>
                    <span class="col-span-4">{{ item.nombre }}</span>
                    <span class="col-span-2">{{item.duracion}}</span>
                    <input type="checkbox" class="col-span-1 rounded-full" v-model="item.checked"/>
            </li>
        </ul>
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
