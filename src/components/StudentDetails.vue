loginCollege: function(cl){
        var axis = axios.create({
            baseURL: "http://localhost:8080",
        });
        let config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        return new Promise((resolve, reject) => {
            axis
                .post("/College/login",cl, config)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        }); 
    }
	
	name: 'Login',
  data() {
      return {
          cl:{
            username:'',
            password:''
          },
      };
    },
     methods: {
     loginCollege: function(){
        return new Promise((resolve, reject) => {
            CollegeService.loginCollege(this.cl)
                .then(response => {
                    alert("login successfully")
                    resolve(response);
                })
                .catch(err => {
                   alert("login failed")
                    reject(err);
                });
        });        
    },