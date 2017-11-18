<template lang="html">
  <div class="container">
    <section class="section">
      <div class="container">
        <h1 class="title">Harvest Checkin - Form 330</h1>

        <p>All hunter checkins should be entered into this form.</p>
      </div>
    </section>

    <form @submit.prevent>
      <div class="field">
        <label for="tagNumber" class="label">Tag Number</label>
        <div class="control">
          <!-- I like to organize inputs option per line to better organize the code -->
          <input  type="text" 
                  class="input"
                  placeholder="hunter tag number"
                  v-model="tagNumber" >
        </div>
        <p class="help">What is the hunters tag number?</p>
      </div>
    </form>

    <hr />

    <pre><code>{{ $data }}</code></pre>

  </div>
</template>

<script>
export default {
  name: 'CheckinForm',

  data () {
    return {
      tagNumber: null
    }
  }

}
</script>

<style lang="css" scoped>

</style>
