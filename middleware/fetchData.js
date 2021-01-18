export default async ({ store, route, redirect }) => {
  const categories = store.getters['category/GET_CATEGORIES']

  if (categories.length === 0) {
    await store.dispatch('category/getCategories')
  }
}