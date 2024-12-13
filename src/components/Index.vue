<script setup>

</script>

<template>

  <q-layout view="lHh lpr lFf" container style="height: 100vh;overflow: hidden" class="shadow-2 rounded-borders">
    <q-header elevated>
      <q-tabs
          inline-label
          class="bg-primary text-white shadow-2"
      >
        <q-route-tab to="/Code_Gen" name="code" icon="view_in_ar" label="代码生成器"/>
        <q-route-tab to="bye" name="xxx" icon="lock" label="广告位招租"/>
      </q-tabs>
    </q-header>


    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>

</template>

<style scoped>


</style>