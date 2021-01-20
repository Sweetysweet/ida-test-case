<template>
    <div class="menu">
        <MenuList />
    </div>
</template>

<script>
import MenuList from '@/components/catalog/MenuList'
export default {
    name: 'Menu',
    components: {
      MenuList
    }
}
</script>

<style lang="sass">
.menu
  &__list
    margin-top: -8px
  &__item
    padding:
        top: 8px
        bottom: 8px
  &__link
    text-decoration: none
    color: $grey-light
    transition: color .3s ease-in-out
    &--active
      color: #000
      text-decoration: underline
    &:hover
      color: $grey
</style>