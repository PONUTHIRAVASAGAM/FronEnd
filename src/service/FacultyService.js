import axios from 'axios';
export default{
    putFaculty: function(faculty){
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
                .post("/faculty/insert", faculty, config)
                .then(response => {
                alert (response.data);
                this.faculty.facultyname = "";
                this.faculty.qualification = "";
                this.faculty.experience = "" ;
                this.faculty.skilset = "";
                this.getAllFaculty();
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        }); 
    },
    getAllFaculty: function(){
        var ax = axios.create({
            baseURL: "http://localhost:8081",
        }); 
        return new Promise((resolve, reject) => {
            ax({
                method: 'get',
                url: '/faculty/getAll',
            }).then((response) => {                 
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });                       
        
    },
    getFaculty: function(id){
        var ax = axios.create({
            baseURL: "http://localhost:8081",
        }); 
        return new Promise((resolve, reject) => {
            ax({
                method: 'get',
                url: '/faculty/get/' + id,
            }).then((response) => {                     
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });             
    },
    deleteFaculty: function(id){
        var ax = axios.create({
            baseURL: "http://localhost:8081",
        }); 
        return new Promise((resolve, reject) => {
            ax({
                method: 'get',
                url: '/faculty/delete/' + id,
            }).then((response) => {                     
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });             
    },
    updateFaculty: function(faculty){
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
                .post("/faculty/update", faculty, config)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        }); 
    },   
}
