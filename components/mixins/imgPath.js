export default {
    methods: {
        getImgPath(url) {
            return `${process.env.BASE_PRODUCTION}${url}`
        }
    }
}