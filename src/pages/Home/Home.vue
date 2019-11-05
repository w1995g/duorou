<template>
  <div>
    <Search></Search>
    <Banner></Banner>
    <Navc></Navc>
    <Classify></Classify>
    <router-view></router-view>
  </div>
</template>
<script>
import Navc from './Navc';
import Banner from './Banner';
import Search from '../../components/Search';
import Classify from './Classify';

export default {
  components: {
    Navc,
    Banner,
    Search,
    Classify
  }

}
</script>
<style>
</style>