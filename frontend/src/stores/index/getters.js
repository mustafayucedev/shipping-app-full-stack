export default {
    getterIsLogin() {
        return this.isLogin
    },
    getterPhoneLink: (state) => (post) => {
        const phone = state.getCompanyPhone(post);
        return phone ? `tel:${phone}` : null;
    }
};