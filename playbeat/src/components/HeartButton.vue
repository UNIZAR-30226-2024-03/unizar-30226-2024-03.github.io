<script>
import { followLista } from "@/utils/followLista";
import { unfollowLista } from "@/utils/unfollowLista";

export default {
    props: {
        id: {
            type: String,
            default: "0"
        },
        seguida: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            esSeguida: this.seguida,
            error: null,
        };
    },
    methods: {
        getCookie(name) {
            const cookieArr = document.cookie.split("; ");
            for (const cookie of cookieArr) {
                const [cookieName, cookieValue] = cookie.split("=");
                if (name === cookieName) {
                    return decodeURIComponent(cookieValue);
                }
            }
            return null;
        },
        async follow() {
            try {
                const token = this.getCookie("token");
                const response = await followLista(token, this.id);
                console.log(response);
                if (response.status === 201) {
                    this.esSeguida = true;
                    console.log('List followed successfully');
                } else {
                    console.error('Failed to follow list');
                }
            } catch (e) {
                this.error = 'No existe el usuario';
                console.error(e);
            }
        },
        async unfollow() {
            try {
                const token = this.getCookie("token");
                const response = await unfollowLista(token, this.id);
                if (response.status === 204) {
                    this.esSeguida = false;
                    // console.log('List unfollowed successfully');
                } else {
                    // console.error('Failed to unfollow list');
                }
            } catch (e) {
                this.error = 'No existe el usuario';
                console.error(e);
            }
        },
    }
};
</script>

<template>
    <div>
        <button v-if="!esSeguida" class="bg-[#6985C0] flex flex-row items-center p-1 px-3 gap-1 w-max rounded-md" @click="follow">
            <p class="font-semibold">AÑADIR</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" fill="white" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
            </svg>
        </button>
        
        <button v-if="esSeguida" class="bg-[#6985C0] flex flex-row items-center p-1 px-3 gap-1 w-max rounded-md" @click="unfollow">
            <p class="font-semibold">ELIMINAR</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" fill="white" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
            </svg>
        </button>
    </div>
</template>
