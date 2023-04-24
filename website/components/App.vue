<template>
    <div class="container animated fadeIn one">
        <Header />
        <WorkExperience />
        <div class="spacer48"></div>
        <Education />
        <div class="spacer48"></div>
        <Certification />
    </div>
</template>


<script>
import Header from "../components/Header.vue";
import WorkExperience from "../components/WorkExperience.vue";
import Education from "../components/Education.vue";
import Certification from "../components/Certification.vue";
import {checkAuthentication} from "../js/authentication/authentication";

export default {
    name: "App",
    components: {
        Header,
        WorkExperience,
        Education,
        Certification,
    },
    mounted() {
        checkAuthentication();
    },
};
</script>

<style>
/* Inserisci qui eventuali stili CSS globali per la tua applicazione */
</style>
