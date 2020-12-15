export const checkMixin = {
    data() {
        return {
            isCheck: false,
        }
    },
    methods: {
        check() {
            this.isCheck = !this.isCheck;
        }
    },
}