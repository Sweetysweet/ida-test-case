<template>
  <ul class="menu__list">
    <li class="menu__item" v-for="category in categories" :key="category.id">
      <NuxtLink
        :to="`/${category.id}`"
        :class="{
          'menu__link--active': +$route.params.category === category.id,
        }"
        class="menu__link"
      >
        {{ category.name }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      categories: "category/GET_CATEGORIES",
    }),
  },
};
</script>