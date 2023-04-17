<template>
  <section>
    <div>
      <input type="file" @change="onFileSelected">
      <p>upload here</p>
    </div>
  </section>
</template>

<script>
import "../Firebase";
export default {
  name: 'UploadPrescription',
  data () {
    return{
      selectedFile: null
    }
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0]
    }
  }
}
</script>

<style>

</style>