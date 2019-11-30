<template>
  <div class="tabs">
    <div class="tabs-header">
      <div
        class="tabs-header__tab"
        :class="{ 'tabs-header__tab--active': tab.component === active }"
        v-for="tab in tabs"
        :key="tab.name"
        v-text="tab.name"
        @click="active = tab.component"
      />
    </div>
    <div class="tabs-main">
      <transition name="slide-fade" mode="out-in">
        <component v-if="active in $options.components" :is="active" />
        <h1 v-else>Component not found</h1>
      </transition>
    </div>
  </div>
</template>
<script>
import profile from "../components/Tabs/Profile";
import about from "../components/Tabs/About";
export default {
  components: {
    profile,
    about
  },
  data() {
    return {
      active: "profile",
      tabs: [
        {
          name: "Profile",
          component: "profile"
        },
        {
          name: "About",
          component: "about"
        },
        {
          name: "Contacts",
          component: "contacts"
        }
      ]
    };
  }
};
</script>
<style scoped>
.tabs {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}
.tabs-main {
  padding: 15px 20px;
  flex: 1;
}
.tabs-header {
  height: 64px;
  display: flex;
  background: #090a23;
}
.tabs-header__tab {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 5px;
  color: lightgray;
  transition: all 0.5s ease-in-out;
  position: relative;
  /* overflow: hidden; */
  cursor: pointer;
  opacity: 0.5;
}
.tabs-header__tab--active {
  color: white;
  opacity: 1;
}
.tabs-header__tab::after {
  content: "";
  height: 3px;
  background: yellow;
  width: 100%;
  position: absolute;
  bottom: 0px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out 0.5s;
}
.tabs-header__tab--active::after {
  opacity: 1;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
