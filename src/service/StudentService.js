import axios from 'axios';
export default{
    putStudent: function(student){
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
                .post("/student/insert", student, config)
                .then(response => {
                alert (response.data);
                this.student.firstName = "";
                this.student.lastName = "";
                this.student.userName = "" ;
                this.student.email = "";
				this.student.passWord = "";
                this.getAllStudents();
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        }); 
	},	
    deleteStudent: function(id){
        var ax = axios.create({
            baseURL: "http://localhost:8081",
        }); 
        return new Promise((resolve, reject) => {
            ax({
                method: 'get',
                url: '/student/delete/' + id,
            }).then((response) => {                     
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });             
    },
    getStudent: function(id){
        var ax = axios.create({
            baseURL: "http://localhost:8081",
        }); 
        return new Promise((resolve, reject) => {
            ax({
                method: 'get',
                url: '/student/get/' + id,
            }).then((response) => {                     
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });             
    },
    getAllStudents: function(){
        var ax = axios.create({
            baseURL: "http://localhost:8081",
        }); 
        return new Promise((resolve, reject) => {
            ax({
                method: 'get',
                url: '/student/getAll',
            }).then((response) => {                 
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });                       
        
    },
    updateStudent: function(student){
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
                .post("/student/update", student, config)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        }); 
    }	
    }    
