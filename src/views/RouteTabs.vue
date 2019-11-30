<template>
  <div class="route-tabs">
    <div class="side-nav">
      <div class="side-nav__list">
        <router-link
          class="side-nav__list-link"
          v-for="route in routes"
          :key="route.name"
          :to="`/route-tabs/${route.to}`"
          v-text="route.name"
        />
      </div>
    </div>
    <div class="route-tabs__main">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      routes: [
        {
          name: "Products",
          to: "products"
        },
        {
          name: "Clients",
          to: "clients"
        }
      ]
    };
  },
  methods: {}
};
</script>
<style scoped>
.route-tabs {
  min-height: 100vh;
  width: 100%;
  display: flex;
}
.side-nav {
  flex: 1 1 20%;
  background: #090a23;
  padding: 20px 0px;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
}
.route-tabs__main {
  padding: 20px 30px;
}
.route-tabs__main {
  flex: 1 80%;
}
.side-nav__list {
  list-style-type: none;
}
.side-nav__list-link {
  min-height: 30px;
  justify-content: center;
  align-items: center;
  display: flex;
  text-transform: uppercase;
  display: flex;
  padding: 10px 20px;
  color: white;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
}
.side-nav__list-link:hover::after,
.router-link-exact-active::after {
  transform: translateX(20px);
  opacity: 1;
}
.side-nav__list-link:hover,
.router-link-exact-active {
  background: yellow;
  color: #090a23;
}
.side-nav__list-link::after {
  content: "->";
  color: #090a23;
  transition: all 0.5s ease-out;
  opacity: 0;
}
.router-link-exact-active::after {
  opacity: 1 !important;
}

.side-nav__list-link {
  text-decoration: none;
  flex: 1;
  text-align: center;
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
