<template>
    <div>
        <h1>Atualizar Cadastro</h1>
        <form @submit.prevent="putUser">
            <div>
                <label>Nome: </label>
                <input type="text" v-model="nome"/>
            </div>
            <div>
                <label>Email: </label>
                <input type="email" v-model="email"/>
            </div>
            <div>
                <label>Senha: </label>
                <input type="password" v-model="senha"/>
            </div>
            <button type="submit">Atualizar</button>
        </form>
        <p>{{ message }}</p>
    </div>
</template>

<script>
    export default {
        nome: 'PutUser',
        data() {
            return {
                nome: '',
                email: '',
                senha: '',
                message: '',
            }
        },
        methods: {
            putUser(){
                const data = {
                    nome: this.nome,
                    email: this.email,
                    senha: this.senha
                }
                console.log(data);
                fetch('http://localhost:3001/api/putUser', {
                    method: 'PUT',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(data)
                })
                    .then(async (res) => {
                        this.message = await res.text();
                    })

                    .catch(async (error) => {
                        this.message = error.message;
                    })
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