  import { defineStore } from "pinia";
  import axios from "axios";
  
  const axiosClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  });


const useStore = defineStore ('storeId', {
    state: () => ({
        count: 0,
        user: {
            data: {  },
            //token : '2222',
            token : localStorage.getItem("TOKEN"),
            //token : sessionStorage.getItem("TOKEN"),
        }
    }),
    getters: {
      doubleCount(state) {
        return state.count * 2;
      },
    },
    //Actions
    actions: {  
      async register(user) {
        try {
          const { data } = await axiosClient.post('/register', user);
          //this.user = data.user; // Asigna los datos del usuario al estado
          return data;
        } catch (error) {
          console.error("Errors: ", error.response.data.errors);
          throw error; // Relanza el error si necesitas manejarlo más adelante
        }
      },

      async login(user) {
        try {
          const {data} = await axiosClient.post('/login', user);
          
          this.setUser(data.message);
          this.setToken(data.token);

          return data;
        } catch (error) {
          console.error("Errors: ", error.response.data.errors);
          throw error; // Relanza el error si necesitas manejarlo más adelante
        }
      },
          
        
      //Before were Mutations
      logout(){
        this.user.data = {};
        this.user.token = null;
        localStorage.removeItem("TOKEN")

      },
      setUser(user) {
        this.user.data = user;
      },
      setToken(token) {
        this.user.token = token;
        localStorage.setItem('TOKEN', token);
        //sessionStorage.setItem('TOKEN', token);
      }
    },
});

export default useStore;