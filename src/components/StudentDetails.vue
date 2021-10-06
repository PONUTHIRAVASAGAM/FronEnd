<template>
    <div>
<nav-bar />
    <b-table striped hover :items="items" :fields="fields"></b-table>	
        <h1>College Details</h1>
    <div>
        <b-table-simple>
            <b-row>
                <b-col>Id</b-col>			
                <b-col>College Name</b-col>
                <b-col>User Name</b-col>
                <b-col>Mobile Number</b-col>
                <b-col>Address</b-col>
                <b-col>Actions</b-col>
            </b-row>
            <b-row v-for="s in student" v-bind:key="s.id">
                <b-col>{{s.id}}</b-col>
                <b-col>{{s.collegeName}}</b-col>
                <b-col>{{s.userName}}</b-col>
                <b-col>{{s.mobileNumber}}</b-col>
                <b-col>{{s.address}}</b-col>
                <b-col>
                    <span><b-icon icon="trash-fill" aria-hidden="true" @click="deleteCollege(s.id)"></b-icon></span>
                    <span><b-icon icon="pencil-fill" aria-hidden="true" @click="getCollege(s.id)"></b-icon></span>
                </b-col>
            </b-row>            
        </b-table-simple>
    </div>        
<Footer />	
    </div>
</template>
<script>
import CollegeService from '../service/CollegeService'
import Footer from './Footer';
import NavBar from './NavBar';
export default {
    name: "CollegeDetails",
    data(){
        return{
            college: {
                id: "",
                collegeName:"",
                userName: "",
                mobileNumber:"",
				address:"",
            },
            colleges: null,
        }
    },
    mounted(){
        this.getAllColleges();
    },
    methods:{
        getAllColleges: function(){
            return new Promise((resolve, reject) => {
                CollegeService.getAllColleges()
                .then((response) => {    
                    this.college = response.data;             
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });              
        },
        putCollege: function(){
            return new Promise((resolve, reject) => {
                CollegeService.putCollege(this.college)
                .then((response) => {    
                    this.college = response.data;             
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });             
        },
        deleteCollege: function(id){
            return new Promise((resolve, reject) => {
                CollegeService.deleteCollege(id)
                .then((response) => {    
                    this.college = response.data; 
                    this.getAllColleges();            
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });              
        },
        getCollege: function(id){
            return new Promise((resolve, reject) => {
                CollegeService.getCollege(id)
                .then((response) => {    
                    console.log("College is ", response.data)    
                    this.college = response.data;                 
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });              
        }                
        
    },
		components:{
		NavBar,
		Footer,
	}	
}
</script>