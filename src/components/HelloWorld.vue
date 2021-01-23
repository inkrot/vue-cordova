<template>
    <v-ons-page>
        <v-ons-toolbar>
        <div class="center">Form input</div>
        </v-ons-toolbar>
    
        <v-ons-list>
            <v-ons-list-item>
                <v-ons-input v-model="something" />
            </v-ons-list-item>
            <v-ons-list-item>
                <v-ons-input type="date" />
            </v-ons-list-item>
            <v-ons-list-item>
                <v-ons-input type="time" />
            </v-ons-list-item>
        </v-ons-list>
    
        <input type="file" ref="file" style="display: none">
        <button @click="$refs.file.click()">open file dialog</button>
        
    </v-ons-page>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            something: ''
        }
    },
    mounted() {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
