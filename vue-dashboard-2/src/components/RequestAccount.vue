<template>
   <transition name="slide-in-right" enter-active-class='animate__animated animate__slideInRight'>
      <div v-show="show" class="request" :class="{'light-request' : isDarkMode, 'dark-request' : !isDarkMode}">
        Don't have an account yet? <router-link to="/request">Request an account</router-link>
      </div>
    </transition>
</template>

<script>
export default {
  name: 'RequestAccount',
  data () {
    return {
      show: false
    }
  },
  mounted () {
    this.show = true
  },
  computed: {
    isDarkMode () {
      return this.$store.getters.isDarkMode
    }
  }
}
</script>

<style lang="scss" scoped>
.light-request {
  color: rgba(255, 255, 255, 0.3);

  a {
    color: white;
  }
}

.dark-request {
  color: rgba(0, 0, 0, 0.3);

  a {
    color: $black;
  }
}

.request {
  position: absolute;
  top: 40px;
  right: 40px;
}
</style>
