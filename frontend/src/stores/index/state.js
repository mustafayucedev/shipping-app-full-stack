export default () => {
    return {
        isLogin: false,
        mobileMenu: false,
        company: [],
        companyLogin: {
            email: null,
            password: null
        },
        companyRegister: {
            name: null,
            email: null,
            password: null,
            phone: null,
            since: null,
            facebook: null,
            instagram: null,
            twitter: null,
            linkedin: null,
            youtube: null
        },
        post: [],
        postCreate: {
            title: null,
            fromWhere: null,
            toWhere: null,
            carType: null,
            weight: null,
            paymentMethod: null,
            price: null,
            companyId: null
        },
        city: []
    };
  };