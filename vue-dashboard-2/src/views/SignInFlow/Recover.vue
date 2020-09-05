<template>
  <div class="container" :class="{'light-background' : !isDarkMode, 'dark-background': isDarkMode}">
    <RequestAccount />
    <div class="login">
      <img src="@/assets/logo.png" alt="Logo vue">
      <h4 :class="{'light-text' : isDarkMode, 'dark-text': !isDarkMode}">Recover account</h4>
      <form @submit.prevent='onSubmit'>
      <input :class="{'light-field': isDarkMode, 'dark-field': !isDarkMode}" type="email" placeholder="Email" v-model='email' required>
      <button>Send Email</button>
      <router-link to="/signin" :class="{'light-link': isDarkMode, 'dark-link' : !isDarkMode}">Already have an account? Sign in now.</router-link>
      <!-- <ThemeSwitch /> -->
      </form>
    </div>
  </div>
</template>

<script>
import RequestAccount from '@/components/RequestAccount'
// import ThemeSwitch from '@/components/ThemeSwitch'
import { auth } from '@/main'

export default {
  name: 'Recover',
  components: {
    RequestAccount
    // ThemeSwitch
  },
  data () {
    return {
      email: null,
      password: null,
      hasText: false,
      text: ''
    }
  },
  computed: {
    isDarkMode () {
      return this.$store.getters.isDarkMode
    }
  },
  methods: {
    toggleDarkMode () {
      this.$store.commit('toggleDarkMode')
    },
    onSubmit () {
      const email = this.email

      auth.requestPasswordRecovery(email).then(() => {
        this.$router.push({
          name: 'SignIn',
          params: {
            userRecoverdAccount: true,
            email
          }
        })
      }).catch(error => {
        alert('Error: ' + error)
      })
    }
  },
  mounted () {
    const params = this.$route.params
    if (params.userLoggedOut) {
      this.hasText = true
      this.text = 'You have logged out!'
    }
  }
}
</script>

<style lang="scss" scoped>

.light-background {
  background-color: $light-grey;
}

.dark-background {
  background-color: $dark-blue;
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

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

.dark-field {
  background: rgba(198, 208, 235, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
}

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

.container {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
}

.login {
  width: 400px;
  text-align: center;
}

h4 {
  margin: 0;
  line-height: 34px;
  font-size: 24px;
  text-align: center;

  color: #fff;
}

input {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  height: 60px;
  width: 100%;
  font-size: 20px;
  color: white;
  padding-left: 20px;
  margin-top: 20px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

button {
  background: #56ccf2;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  border: none;

  height: 60px;
  width: 100%;

  font-size: 20px;
  color: #fff;
  margin-top: 20px;
  margin-bottom: 40px;
}

a {
  line-height: 25px;
  font-size: 16px;
  text-align: center;

  text-decoration: none;
}

.light-link {
  color: rgba(255, 255, 255, 0.3);
}

.dark-link {
  color: rgba(0, 0, 0, 0.3);
}

</style>
