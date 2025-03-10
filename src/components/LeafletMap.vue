<template>
  <div
    class="map-container"
    ref="map"
    style="width: 100%; border-radius: 10px; overflow: hidden"
  ></div>
</template>

<script>
import * as L from 'leaflet'

export default {
  data() {
    return {
      latitude: 40.471786,
      longitude: 23.096967,
    }
  },
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      const map = L.map(this.$refs.map).setView([this.latitude, this.longitude], 15)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(map)
      L.marker([this.latitude, this.longitude]).addTo(map)
    },
  },
}
</script>

<style>
.map-container {
  max-width: 400px;
  margin: auto;
  border-radius: 10px;
  height: 450px;
  @media (width < 768px) {
    height: 300px;
  }
}
</style>
