<template>
  <Catalog />
</template>

<script>
import Catalog from "@/components/catalog";
export default {
  components: {
    Catalog,
  },

  async fetch({ store, route, redirect }) {
    const response = await store.dispatch(
      "product/getProducts",
      route.params.category
    );
    if (!response) redirect("/");
  },
};
</script>