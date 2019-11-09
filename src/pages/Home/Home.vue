<template>
  <div class="wrapper0">
    <Search></Search>
    <Banner></Banner>
    <Navc></Navc>
    <Classify></Classify>
    <Lists></Lists>
    <router-view></router-view>
  </div>
</template>
<script>
import Navc from './Navc';
import Banner from './Banner';
import Search from '../../components/Search';
import Classify from './Classify';
import Lists from './Lists';

export default {
  components: {
    Navc,
    Banner,
    Search,
    Classify,
    Lists
  }
}
</script>
<style>

</style>