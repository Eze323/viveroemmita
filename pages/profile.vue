<template>
  <div class="profile">
    <h1 class="profile__title">Perfil de usuario</h1>
    <form class="profile__form" @submit.prevent="updateProfile">
      <div class="profile__field">
        <label for="name" class="profile__label">Nombre:</label>
        <input type="text" id="name" v-model="user.name" class="profile__input" />
      </div>
      <div class="profile__field">
        <label for="email" class="profile__label">Email:</label>
        <input type="email" id="email" v-model="user.email" class="profile__input" />
      </div>
      <button type="submit" class="profile__button">
        <span>Actualizar perfil</span>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'Alberto Ezequiel Irace',
        email: 'a.ezequielirace@gmail.com'
      }
    }
  },
  methods: {
    updateProfile() {
      // Lógica para actualizar el perfil del usuario
    }
  }
}
</script>

<style scoped>
.profile {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.profile__title {
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.profile__form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.profile__field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.profile__label {
  color: #4a5568;
  font-size: 0.9rem;
  font-weight: 500;
}

.profile__input {
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s;
}

.profile__input:focus {
  outline: none;
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.2);
}

.profile__button {
  background-color: #4299e1;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 1rem;
}

.profile__button:hover {
  background-color: #3182ce;
}
</style>