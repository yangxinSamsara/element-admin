<template>
  <div class="icon">
    <div v-for="(item, index) in iconList" :key="index" class="icon-item">
        <p><span><i class="fa" :class="item.class"></i></span></p>
        <p>{{item.name}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      iconList: [
        { class: "fa-info-circle", name: "info-circle" },
        { class: "fa-image", name: "image" },
        { class: "fa-hourglass", name: "hourglass" },
        { class: "fa-hand-spock-o", name: "hand-spock-o" },
        { class: "fa-gear", name: "gear" },
        { class: "fa-female", name: "female" },
        { class: "fa-exclamation-triangle", name: "exclamation-triangle" },
        { class: "fa-commenting", name: "commenting" },
        { class: "fa-calendar", name: "calendar" },
        { class: "fa-bicycle", name: "bicycle" },
        { class: "fa-bug", name: "bug" },
        { class: "fa-close", name: "close" },
        { class: "fa-envelope", name: "envelope" },
        { class: "fa-feed", name: "feed" },
        { class: "fa-power-off", name: "power-off" },
        { class: "fa-info-circle", name: "info-circle" },
        { class: "fa-image", name: "image" },
        { class: "fa-hourglass", name: "hourglass" },
        { class: "fa-hand-spock-o", name: "hand-spock-o" },
        { class: "fa-gear", name: "gear" },
        { class: "fa-female", name: "female" },
        { class: "fa-exclamation-triangle", name: "exclamation-triangle" },
        { class: "fa-commenting", name: "commenting" },
        { class: "fa-calendar", name: "calendar" },
        { class: "fa-bicycle", name: "bicycle" },
        { class: "fa-bug", name: "bug" },
        { class: "fa-close", name: "close" },
        { class: "fa-envelope", name: "envelope" },
        { class: "fa-feed", name: "feed" },
        { class: "fa-power-off", name: "power-off" },
        { class: "fa-info-circle", name: "info-circle" },
        { class: "fa-image", name: "image" },
        { class: "fa-hourglass", name: "hourglass" },
        { class: "fa-hand-spock-o", name: "hand-spock-o" },
        { class: "fa-gear", name: "gear" },
        { class: "fa-female", name: "female" },
        { class: "fa-exclamation-triangle", name: "exclamation-triangle" },
        { class: "fa-commenting", name: "commenting" },
        { class: "fa-calendar", name: "calendar" },
        { class: "fa-bicycle", name: "bicycle" },
        { class: "fa-bug", name: "bug" },
        { class: "fa-close", name: "close" },
        { class: "fa-envelope", name: "envelope" },
        { class: "fa-feed", name: "feed" },
        { class: "fa-power-off", name: "power-off" }
      ]
    };
  }
};
</script>
<style scoped>
.icon{
    background: #fff;
}
.icon-item{
    width: 22%;
    height: 100px;
    display: inline-block;
    text-align: center;
    background: #1be9df;
    margin: 10px
}
.icon-item p:nth-child(1){
    height: 70px;
    line-height: 70px
}
.fa{
    font-size: 2em;
    color: #1b41e9
}
</style>
