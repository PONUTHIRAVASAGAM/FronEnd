import axios from 'axios';
export default{
    putAdmin: function(admin){
        var ax = axios.create({
            baseURL: "http://localhost:8081",
        });
        let config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        return new Promise((resolve, reject) => {
            ax
                .post("/admin/insert", admin, config)
                .then(response => {
                alert (response.data);
                this.college.userName = "";
				this.college.passWord = "";
                this.getAllAdmins();
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        }); 
    },
loginAdmin: function(log){
        var ax = axios.create({
            baseURL: "http://localhost:8081",
        });
        let config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        return new Promise((resolve, reject) => {
            ax
                .post("/admin/login",log, config)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        }); 
    }
    
}
