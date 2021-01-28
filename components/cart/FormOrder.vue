<template>
    <form class="cart-form" @submit.prevent="submitHandler">
        <div class="cart-form__title">Оформить заказ</div>
        <div class="cart-form__contact">
            <input 
                type="text" 
                class="cart-form__name"
                placeholder="Ваше имя"
                v-model="userName"
                ref="name"
            >
            <input 
                type="phone" 
                class="cart-form__phone"
                placeholder="Телефон"
                v-model="userPhone"
                ref="phone"
                v-maska="'+# ### ### ## ##'"
            >
            <input 
                type="text" 
                class="cart-form__address"
                placeholder="Адрес"
                v-model="userAddress"
                ref="address"
            >
        </div>
        <div class="cart-form__submit">
            <CartBtn type="submit" class="cart-form__btn">
                Отправить
            </CartBtn>
        </div>
        <div class="cart-form__error" v-if="$v.user.$anyError">
            <p>Все поля обязательные.</p>
            <p>После удачной отправки формы содержимое корзины очистится</p>
        </div>
    </form>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import { required } from 'vuelidate/lib/validators'
import { maska } from 'maska'
import CartBtn from '@/components/cart/CartBtn'
export default {
    name: 'FormOrder',
    components: {
        CartBtn
    },

    data: () => ({
        user: {
            name: '',
            phone: '',
            address: ''
        },
    }),

    validations: {
        user: {
            name: {required},
            phone: {required, validatePhone: val => !!val.match(/\+7\s\d{3}\s\d{3}\s\d{2}\s\d{2}/)},
            address: {required}
        }
    },

    directives: { maska },

    computed: {
         ...mapGetters({
            cartProducts: "cart/GET_PRODUCTS_FROM_CART"
        }),
        userName: {
            get() {
                return this.user.name
            },
            set(name) {
                name = name.replace(/\d/g, '')
                this.$refs.name.value = name
                this.user.name = name.trim()
            }
        },
        userPhone: {
            get() {
                return this.user.phone
            },
            set(phone) {
                this.$refs.phone.value = phone
                this.user.phone = phone
            }
        },
        userAddress: {
            get() {
                return this.user.address
            },
            set(address) {
                this.$refs.address.value = address
                this.user.address = address.trim()
            }
        }
    },

    methods: {
        ...mapActions({
            sendUserData: 'cart/sendUserData',
            clearCart: 'cart/clearCart'
        }),
        submitHandler() {
            if (this.$v.user.$invalid) {
                this.$v.$touch()
                return
            }
            const userData = {
                username: this.userName,
                userPhone: this.userPhone,
                userAddress: this.userAddress,
                products: this.cartProducts
            }
            this.sendUserData(userData)

            this.user.name = '',
            this.user.phone = '',
            this.user.address = '',

            this.clearCart()

            this.$emit('nextstep')
        }
    }
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
    &__error
        margin-top: 32px


</style>