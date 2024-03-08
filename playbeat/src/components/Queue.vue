

<script setup>
import {ref} from 'vue'

const canciones = ref([{nombre: 'Cancion 1', duracion: '3:20'}, {nombre: 'Cancion 2', duracion: '3:20'}, {nombre: 'Cancion 3', duracion: '3:20'}, {nombre: 'Cancion 4', duracion: '3:20'}, {nombre: 'Cancion 5', duracion: '3:20'}, {nombre: 'Cancion 6', duracion: '3:20'}, {nombre: 'Cancion 7', duracion: '3:20'}, {nombre: 'Cancion 8', duracion: '3:20'}, {nombre: 'Cancion 9', duracion: '3:20'}, {nombre: 'Cancion 10', duracion: '3:20'}, {nombre: 'Cancion 11', duracion: '3:20'}, {nombre: 'Cancion 12', duracion: '3:20'}, {nombre: 'Cancion 13', duracion: '3:20'}, {nombre: 'Cancion 14', duracion: '3:20'}, {nombre: 'Cancion 15', duracion: '3:20'}, {nombre: 'Cancion 16', duracion: '3:20'}, {nombre: 'Cancion 17', duracion: '3:20'}, {nombre: 'Cancion 18', duracion: '3:20'}, {nombre: 'Cancion 19', duracion: '3:20'}, {nombre: 'Cancion 20', duracion: '3:20'}, {nombre: 'Cancion 21', duracion: '3:20'}, {nombre: 'Cancion 22', duracion: '3:20'}, {nombre: 'Cancion 23', duracion: '3:20'}, {nombre: 'Cancion 24', duracion: '3:20'}, {nombre: 'Cancion 25', duracion: '3:20'}, {nombre: 'Cancion 26', duracion: '3:20'}, {nombre: 'Cancion 27', duracion: '3:20'}, {nombre: 'Cancion 28', duracion: '3:20'}, {nombre: 'Cancion 29', duracion: '3:20'}, {nombre: 'Cancion 30', duracion: '3:20'}, {nombre: 'Cancion 31', duracion: '2.10'}])

 
</script>
<template >
    <section class="flex w-full h-full flex-col justify-between">
        <ul class="flex flex-col px-3 mt-6 h-[90%] overflow-y-scroll items-start">
            <li v-for="item of canciones" class="grid grid-cols-8 items-center w-full mt-6 first-of-type:mt-0 px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-playlist col-span-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M14 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M17 17v-13h4" />
                        <path d="M13 5h-10" />
                        <path d="M3 9l10 0" />
                        <path d="M9 13h-6" />
                    </svg>
                    <span class="col-span-4">{{ item.nombre }}</span>
                    <span class="col-span-1">{{item.duracion}}</span>
                    <input type="checkbox" class="col-span-1 " />
            </li>
        </ul>
        <button @click="canciones.pop()" class=" self-center w-max py-1 px-5 border-2 rounded-md hover:border-[#fc0307] transition-colors">Eliminar</button>
    </section>
    
</template>