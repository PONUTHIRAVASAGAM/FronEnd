import axios from 'axios';
export default{
    putCollege: function(college){
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
                .post("/college/insert", college, config)
                .then(response => {
                alert (response.data);
                this.college.collegeName = "";
                this.college.userName = "";
                this.college.mobileNumber = "" ;
                this.college.address = "";
				this.college.passWord = "";
                this.getAllColleges();
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        }); 
    },
    getAllColleges: function(){
        var ax = axios.create({
            baseURL: "http://localhost:8081",
        }); 
        return new Promise((resolve, reject) => {
            ax({
                method: 'get',
                url: '/college/getAll',
            }).then((response) => {                 
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });                       
        
    },
    getCollege: function(id){
        var ax = axios.create({
            baseURL: "http://localhost:8081",
        }); 
        return new Promise((resolve, reject) => {
            ax({
                method: 'get',
                url: '/college/get/' + id,
            }).then((response) => {                     
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });             
    },
    deleteCollege: function(id){
        var ax = axios.create({
            baseURL: "http://localhost:8081",
        }); 
        return new Promise((resolve, reject) => {
            ax({
                method: 'get',
                url: '/college/delete/' + id,
            }).then((response) => {                     
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });             
    },
    updateCollege: function(college){
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
                .post("/college/update", college, config)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        }); 
    },
loginCollege: function(log){
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
                .post("/college/login",log, config)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        }); 
    }
    
}
