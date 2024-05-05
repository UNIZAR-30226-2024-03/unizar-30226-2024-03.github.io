<script>
export default {
    props:{
        artistProps: {
            type: Array,
            default: () => []
        }
    }
} 
</script>
<script setup>
import { ref } from 'vue';
import { addArtistToAudio } from '@/utils/addArtistToAudio';

const props = defineProps({
    artistProps: {
        type: Array
    }});
console.log("props",props.artistProps);

let artistName = ref('');
let artistList = ref(props.artistProps); // A list of artist objects
let error = ref('')

console.log("props",artistList.value);



const addArtist = async () => {
    try{
        const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
        const response = await addArtistToAudio(artistName.value, token);
        if(response.status === 200){
            console.log('Artist added successfully');
            console.log(response.data);
            artistList.value.push({
                name: artistName.value,
                id:response.data.idUsuario 
            });
            console.log(artistList.value);
            artistName.value = ''; // Clear the input field
            const lista = artistList.value.map(artist => artist.id)
            document.cookie = `artistList=${JSON.stringify(lista)}`;
        }else{
            console.log('Failed to add artist');
        }
    }catch(e){
        error.value = 'No existe el usuario';
    }
    
};

const changeArtist = () => {
    error.value = '';
};


const removeArtist = (id) => {
    console.log("Removing artist with id: ", id)
    artistList.value = artistList.value.filter(artist => artist.id !== id);
    const lista = artistList.value.map(artist => artist.id)
    document.cookie = `artistList=${JSON.stringify(lista)}`;
};

</script>
<template>
    <div class="flex flex-row gap-4">
        <input 
            type="text"
            name="artistName"
            class="w-80 h-10 rounded-md bg-[#333] border-2 border-[#c5c5c5] text-white p-2 outline-none" 
            placeholder="Usuario"
            v-model="artistName" @change="changeArtist"
        />
        <button 
            type="button" 
            class="bg-bluePB rounded-md p-2"
            @click="addArtist" 
        >
            Añadir
        </button>
        <p v-if="error" class=" bg-[#ff0202] bg-opacity-60 rounded-md border-1 border-[#ff0202]">{{  error}}</p>
        <!-- Displaying list of artists -->
        <div v-for="artist in artistList" :key="artist.id" class="text-white bg-bluePB rounded-lg p-2 g-4 flex flex-row">
            <span >{{ artist.name }}</span>
            <button type="button" @click="removeArtist(artist.id)" >
                <svg   xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>            
            </button>
            <!-- Optionally, you may add a button to remove an artist -->
            <!-- <button 
                class="bg-[#ff0202] text-white p-1 rounded"
                @click="removeArtist(artist.id)" 
            >
                X
            </button> -->
        </div>
    </div>
</template>
