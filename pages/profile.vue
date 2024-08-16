<template>
  <div class="profile">
    <h1 class="profile__title">Perfil de usuario</h1>
    <form class="profile__form" @submit.prevent="updateProfile">
      <label for="name" class="profile__label">Nombre</label>
      <input type="text" id="name" v-model="user.name" class="profile__input" />
      <label for="email" class="profile__label">Email</label>
      <input type="email" id="email" v-model="user.email" class="profile__input" />
      <button type="submit" class="profile__button">Actualizar perfil</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        email: ''
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