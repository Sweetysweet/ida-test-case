<template>
 <section class="pt-32">
    <div class="container">
      <h1 class="h1">Каталог</h1>
      <NuxtChild />
    </div>
  
  </section>
</template>
<script>
export default {
  middleware: ['fetchData']
}
</script>