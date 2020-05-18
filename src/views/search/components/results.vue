<template>
<div class="search-results">
<van-cell
  v-for="(result, index) in results"
  :key="index"
>
  <div slot="title">{{ result.title }}</div>
</van-cell>
</div>
</template>

<script>
export default {
  name: 'results',
  props: {
    results: {
      type: Array,
      required: true
    }
  },
  components: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  methods: {},
  mounted () {},
  beforeDestroy () {}
}
</script>

<style lang='less' scoped>

</style>
