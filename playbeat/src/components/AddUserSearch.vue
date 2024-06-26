<script>
import { addArtistToAudio } from '@/utils/addArtistToAudio';

export default {
    props: {
        artistProps: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            artistName: '',
            artistList: [...this.artistProps], // Use spread to initialize artistList from artistProps
            error: ''
        };
    },
    methods: {
        async addArtist() {
            try {
                // Retrieve token
                const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];

                // Send request to add artist
                const response = await addArtistToAudio(this.artistName, token);
                if (response.status === 200) {
                    console.log('Artist added successfully');
                    const newArtist = {
                        nombreUsuario: this.artistName,
                        idUsuario: response.data.idUsuario
                    };
                    this.artistList.push(newArtist);

                    // Clear the input field
                    this.artistName = '';

                    // Update artist list in the cookie
                    const lista = this.artistList.map(artist => artist.idUsuario);
                    document.cookie = `artistList=${JSON.stringify(lista)}`;
                } else {
                    console.log('Failed to add artist');
                }
            } catch (e) {
                this.error = 'No existe el usuario';
            }
        },
        changeArtist() {
            this.error = ''; // Clear error when input changes
        },
        removeArtist(idUsuario) {
            // Filter artistList to remove the specified artist
            this.artistList = this.artistList.filter(artist => artist.idUsuario !== idUsuario);

            // Update artist list in the cookie
            const lista = this.artistList.map(artist => artist.idUsuario);
            document.cookie = `artistList=${JSON.stringify(lista)}`;
        }
    },
    mounted() {
        console.log('Artist list: ', this.artistList);
        const lista = this.artistList.map(artist => artist.idUsuario);
        document.cookie = `artistList=${JSON.stringify(lista)}`;
    }
};


</script>

<template>
    <div class="flex flex-row gap-4">
        <input 
            type="text"
            name="artistName"
            class="w-80 h-10 rounded-md bg-[#333] border-2 border-[#c5c5c5] text-white p-2 outline-none" 
            placeholder="Usuario"
            v-model="artistName"
            @change="changeArtist"
        />
        <button 
            type="button" 
            class="bg-bluePB rounded-md p-2"
            @click="addArtist" 
        >
            Añadir
        </button>
        <p v-if="error" class="bg-[#ff0202] bg-opacity-60 rounded-md border-1 border-[#ff0202]">
            {{ error }}
        </p>

        <!-- Displaying list of artists -->
        <div v-for="artist in artistList" :key="artist.idUsuario" class="text-white bg-bluePB rounded-lg p-2 g-4 flex flex-row">
            <span>{{ artist.nombreUsuario }}</span>
            <button type="button" @click="removeArtist(artist.idUsuario)">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M18 6l-12 12" />
                    <path d="M6 6l12 12" />
                </svg>
            </button>
        </div>
    </div>
</template>
