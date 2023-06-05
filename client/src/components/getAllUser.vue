<template>
    <div>
     <h1>Usúarios Cadastrados</h1>
        <form @submit.prevent="getUsers">
            <button type="submit">Mostrar todos</button>
            <p>{{ message }}</p>
        </form>
        <ul v-if="users.length">
            <li v-for="user in users" :key="user.id">{{ user.nome }} - {{ user.email }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: '',
            users: []
        }
    },
    methods: {
        async getUsers() {
            try {
                const response = await fetch('http://localhost:3001/api/getUsers');
                const data = await response.json();
                this.users = data;
            } catch (error) {
                this.message = error.message;
            }
        }
    },
}
</script>

<style scoped>

button {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #010101;
  margin-top: 5px;
  border-color: #010101;
}
button:hover {
  border-color: #646cff;
  background-color: #acb1ea;
}

</style>