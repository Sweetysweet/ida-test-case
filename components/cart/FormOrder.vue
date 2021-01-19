<template>
    <div class="cart-form">
        <div class="cart-form__title">Оформить заказ</div>
        <div class="cart-form__contact">
            <input 
                type="text" 
                class="cart-form__name"
                placeholder="Ваше имя"
                v-model="name"
            >
            <input 
                type="phone" 
                class="cart-form__phone"
                placeholder="Телефон"
                v-model="phone"
            >
            <input 
                type="text" 
                class="cart-form__address"
                placeholder="Адрес"
                v-model="address"
            >
        </div>
        <div class="cart-form__submit">
            <CartBtn @click.native="submitHandler" class="cart-form__btn">
                Отправить
            </CartBtn>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="sass">
.cart-form
    width: 100%
    &__title
        color: $grey
        margin: 32px 0 16px
    &__contact
        margin-bottom: 24px
    input
        width: 364px
        height: 50px
        background-color: $grey-extra-light
        border-radius: 8px
        border: none
        margin-bottom: 16px
        padding: 14px
        display: block
        width: 100%

</style>