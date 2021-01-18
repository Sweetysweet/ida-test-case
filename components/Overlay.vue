<template>
    <div class="overlay"></div>
</template>

<style lang="sass">
.overlay
    @include fixed($top:0, $left: 0)
    width: 100%
    height: 100%
    background-color: rgba(#fff, 0.8)
    z-index: 3
</style>