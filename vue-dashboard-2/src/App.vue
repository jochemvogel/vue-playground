<template>
  <div id="app" :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}">
    <router-view/>
  </div>
</template>

<script>
import 'animate.css'

export default {
  name: 'App',
  computed: {
    isDarkMode () {
      return this.$store.getters.isDarkMode
    }
  },
  mounted () {
    const isDarkMode = this.$store.getters.isDarkMode
    document.body.style.background = isDarkMode ? '#212c4f' : '#f0f3f5'
  }
}
</script>

<style lang="scss">
* {
  transition: .8s cubic-bezier(.2, .8, .2, 1);
}

body {
  background-color: $dark-blue;
  margin: 0;
}

 line, text {
    opacity: .2;
  }

h1 {
  @include heading-1;
}

p {
  @include large-text-bold($purple);
}

a {
  text-decoration: none;
}

#app {
  font-family: $system-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $white;
}

// Theme
.light-background {
  background-color: $light-grey;

  line, text {
    stroke: $black;
  }

}

.dark-background {
  background-color: $dark-blue;

  line, text {
    stroke: $light-grey;
  }

}

.light-text {
  color: $white;
}

.dark-text {
  color: $black;
}

.light-field {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: $white; // Werkt nog niet

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

.dark-field {
  background: rgba(198, 208, 235, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: $black; // Werkt nog niet

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
}

.light-link {
  color: rgba(255, 255, 255, 0.3);
}

.dark-link {
  color: rgba(0, 0, 0, 0.3);
}

.light-box {
  background: rgba(255, 255, 255, .1);
  border: 2px solid rgba(255, 255, 255, .1);
}

.dark-box {
  background: rgba(0, 0, 0, .1);
  border: 2px solid rgba(255, 255, 255, .1);
}

</style>
