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

      <div class="field">
        <div class="control is-expanded">
          <label class="label">Species</label>
          <div class="select is-fullwidth">
            <select name="species"
                    v-model="species">
              <option value="desert bighorn">desert bighorn</option>
              <option value="California bighorn">Califronia bighorn</option>
              <option value="Rocky Mountain bighorn">Rocky Mountain bighorn</option>
              <option value="mountain goat">mountain goat</option>
            </select>
          </div>
          <p class="help">What species is the hunter checking in?</p>
        </div>
      </div>

      <div class="field">
        <label for="samples" class="checkbox">
          <input  type="checkbox"
                  v-model="samples">
            Samples?
        </label>
        <p class="help">Where samples collected?`</p>
      </div>

      <div class="field">
        <label class="label">Comments</label>
        <textarea v-model="comments" class="textarea"></textarea>
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
      tagNumber: '',
      species: '',
      samples: false,
      comments: ''
    }
  }

}
</script>

<style lang="css" scoped>

</style>
