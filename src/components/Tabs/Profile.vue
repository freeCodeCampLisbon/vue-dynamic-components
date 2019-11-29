<template>
  <div class="profile">
    <div class="profile-avatar">
      <div class="profile-avatar__image" />
      <div class="profile-avatar__info">
        <h2 class="profile-avatar__info-name">
          Maurilio
        </h2>
        <p class="profile-avatar__info-profession">Frontend developer</p>
      </div>
    </div>
    <div class="profile-skills">
      <h2>Skills</h2>
      <div class="profile-skills_list">
        <chip v-for="skill in skills" :key="skill" :text="skill" />
      </div>
    </div>
  </div>
</template>
<script>
import Chip from "../../components/Chip";
export default {
  components: {
    Chip
  },
  data() {
    return {
      skills: ["vue", "react", "js", "es6", "html", "css"]
    };
  },
  methods: {}
};
</script>
<style scoped>
.profile-avatar {
  display: flex;
  align-items: flex-start;
  text-align: left;
}
.profile-avatar__image {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-image: url("https://s3.amazonaws.com/uifaces/faces/twitter/michaelkoper/128.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.profile-avatar__info {
  padding: 0px 20px;
}
.profile-skills {
  padding-top: 20px;
}
.profile-skills_list {
  max-width: 200px;
  margin-left: -5px;
  margin-right: -5px;
}
</style>
