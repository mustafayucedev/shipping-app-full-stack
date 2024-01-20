import httpClient from "../../service/axios"
import router from "../../router";
import { notification } from "../../plugins/notification";

export default {

  async getCompany() {
      try {
          const res = await httpClient.get();
          this.company = res.data;
      } 
      catch (err) {
          console.error(err);
      }
  },

  async getPosts() {
      try {
          const res = await httpClient.get("/post");
          this.post = res.data.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
      } 
      catch (err) {
          console.error(err);
      }
  },

  async getCity() {
      try {
          const res = await httpClient.get("/city");
          this.city = res.data;
      } 
      catch (err) {
          console.error(err);
      }
  },

  async login() {
      try {
          const user = this.company.find((c) => c.email === this.companyLogin.email);
          
          if (user && user.password === this.companyLogin.password) {
              notification(`Hoşgeldin ${user.name}`, 2000, "succsess");
              this.postCreate.companyId = user.id
              setTimeout(() => {
                  this.isLogin = true;
                  router.push({name: "PostCreate"});
              }, 1500);
          }
          else {
              notification("Yanlış E-Posta veya Şifre!", 1500, "error");
          }
      } 
      catch (err) {
          console.error(err);
      }
  },

  async createPost() {
      try {
          if
          (
              this.postCreate.title === null || this.postCreate.title === "" ||
              this.postCreate.fromWhere === null || this.postCreate.fromWhere === "" ||
              this.postCreate.toWhere === null || this.postCreate.toWhere === "" ||
              this.postCreate.carType === null || this.postCreate.carType === "" ||
              this.postCreate.weight === null || this.postCreate.weight === "" ||
              this.postCreate.paymentMethod === null || this.postCreate.paymentMethod === "" ||
              this.postCreate.price === null || this.postCreate.price === ""
          )
          {
              notification("Lütfen Alanları Doldurunuz!", 1500, "error");
          }
          else {
              const res = await httpClient.post("/post-create", this.postCreate);
              if(res.status === 200){
                  notification("İlan Oluşturuldu", 3000, "succsess");
                  setTimeout(() => {
                      router.push({name: "Home"});
                      this.postCreate = {
                          title: null,
                          fromWhere: null,
                          toWhere: null,
                          carType: null,
                          weight: null,
                          paymentMethod: null,
                          price: null
                      }
                  }, 2000);
              }
          }
      } 
      catch(err) {
          console.log(err)
      }
  },

  async createRegister() {
      try {
          const user = this.company.find((c) => c.email === this.companyRegister.email);

          if
          (
              this.companyRegister.name === null || this.companyRegister.name === "" ||
              this.companyRegister.email === null || this.companyRegister.email === "" ||
              this.companyRegister.password === null || this.companyRegister.password === "" ||
              this.companyRegister.phone === null || this.companyRegister.phone === "" ||
              this.companyRegister.since === null || this.companyRegister.since === "" ||
              this.companyRegister.facebook === null || this.companyRegister.facebook === "" ||
              this.companyRegister.instagram === null || this.companyRegister.instagram === "" ||
              this.companyRegister.twitter === null || this.companyRegister.twitter === "" ||
              this.companyRegister.linkedin === null || this.companyRegister.linkedin === "" ||
              this.companyRegister.youtube === null || this.companyRegister.youtube === ""
          )
          {
              notification("Lütfen Alanları Doldurunuz!", 1500, "error");
          }
          else {
              if(user && user.email === this.companyRegister.email) {
                notification("Böyle bir e-posta adresine kayıtlı üyelik mevcut", 3000, "warning");
                return false
              }

              const res = await httpClient.post("/company", this.companyRegister);
              
              if(res.status === 200){
                notification("Firma Üyeliği Oluşturuldu", 3000, "succsess");
                setTimeout(() => {
                    router.push({name: "Login"});
                    this.companyRegister = {
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
                    }
                }, 2000);
            }
          }
      } 
      catch(err) {
          console.log(err)
      }
  },

  companyIdRelation(){
      const company = this.company.find((c) => c.email === this.companyLogin.email);
      this.postCreate.companyId = company.id
  },

  getCompanyName(post) {
      const company = this.company.find((c) => c.id === post.companyId);
      return company ? company.name : null;
  },

  getCompanyPhone(post) {
      const company = this.company.find((c) => c.id === post.companyId);
      return company ? company.phone : null;
  },
  
  toggleMenu(){
      return this.mobileMenu = !this.mobileMenu
  }
};