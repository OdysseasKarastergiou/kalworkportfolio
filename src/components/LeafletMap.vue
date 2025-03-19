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
      latitude: 40.62649,
      longitude: 22.948641,
    }
  },
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      const map = L.map(this.$refs.map).setView([this.latitude, this.longitude], 15)

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20,
      }).addTo(map)

      const customIcon = L.divIcon({
        html: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="width: 32px; height: 32px; fill: #07568e;">
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/>
          </svg>
        `,
        className: 'custom-marker',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
      })

      L.marker([this.latitude, this.longitude], { icon: customIcon }).addTo(map)
    },
  },
}
</script>

<style>
.map-container {
  max-width: 400px;
  border-radius: 10px;
  height: 450px;
  @media (width < 768px) {
    height: 300px;
  }
}

.custom-marker {
  background: transparent;
  border: none;
}
</style>
