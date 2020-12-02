<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h2>{{ selectedCoach.hourlyRate }}€ / heure</h2>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Intéressé ? Entrez en contact !</h2>
        <base-button link :to="contactLink">Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge v-for="area in selectedCoach.areas" :key="area" :title="area" :type="area"></base-badge>
      <p>{{ selectedCoach.description }}</p>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedCoach: null
    }
  },
  computed: {
    fullName() {
      const { firstName, lastName } = this.selectedCoach
      return firstName + ' ' + lastName
    },
    contactLink() {
      return `/coaches/${this.id}/contact`
    }
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(coach => coach.id === this.id)
  }
}
</script>

<style></style>
