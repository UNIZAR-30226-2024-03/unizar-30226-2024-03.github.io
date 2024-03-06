<script lang="ts">
    const horaAct = new Date().getHours()

    let saludos = "Buenos días"

    if(horaAct > 19){
        saludos = "Buenas noches"
    }else if ( horaAct >14){
        saludos = "Buenas tardes"
    }
    
     
</script>

<h1 class="text-bluePB text-5xl font-semibold ml-10">{saludos}, Miguel</h1>