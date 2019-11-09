<template>
<<<<<<< HEAD
  <div class="wrapper0">
=======
  <div>
    <span>肉多多</span>
>>>>>>> 453fabc0b8d639b8ee1222cecc3b55449159711c
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