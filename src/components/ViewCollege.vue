<template>
    <div>
<nav-bar />
           <b-button type="button" variant="outline-danger " class="mx-3"> <router-link to="/AfterAdmin"> <span>Back</span> </router-link></b-button>
    <b-table striped hover :items="items" :fields="fields"></b-table>	
        <h1>College Details</h1>
    <div>
        <b-table-simple hover responsive>
            <b-row>
                <b-col>Id</b-col>			
                <b-col>College Name</b-col>
                <b-col>User Name</b-col>
                <b-col>Mobile Number</b-col>
                <b-col>Address</b-col>
                <b-col>Actions</b-col>
            </b-row>
            <b-row v-for="s in college" v-bind:key="s.id">
                <b-col>{{s.id}}</b-col>
                <b-col>{{s.collegename}}</b-col>
                <b-col>{{s.username}}</b-col>
                <b-col>{{s.mobilenumber}}</b-col>
                <b-col>{{s.address}}</b-col>
                <b-col>
                    <span><b-icon icon="trash-fill" aria-hidden="true" @click="deleteCollege(s.id)"></b-icon></span>
                    <span><b-icon icon="pencil-fill" aria-hidden="true" @click="getCollege(s.id)" v-b-modal.modal-center6></b-icon></span>
                </b-col>
            </b-row>            
        </b-table-simple>
    </div>
<div>
<b-modal id="modal-center6" centered title="Update" hide-footer>
  <!-- Default form register -->
 
    <p class="h4 text-center mb-4">Update College </p>
    <label for="defaultFormRegisterNameEx" class="grey-text">College Name</label>
    <input type="text" id="defaultFormRegisterEmailEx" class="form-control" placeholder="College Name" v-model="college.collegename" required/>
    <br/>
    <label for="defaultFormRegisterNameEx" class="grey-text">User Name</label>
    <input id="defaultFormRegisterEmailEx" class="form-control" type="text" placeholder="User Name" v-model="college.username" required/>
    <br/>
    <label for="defaultFormRegisterNameEx" class="grey-text">Mobile Number</label>
    <input id="defaultFormRegisterEmailEx" class="form-control" type="number" placeholder="Mobile Number" v-model="college.mobilenumber" required/>
    <br/>	
    <label for="defaultFormRegisterEmailEx" class="grey-text">Address</label>
    <input id="defaultFormRegisterEmailEx" class="form-control" type="text" placeholder="Address" v-model="college.address" required/>
    <br/>
    <label for="defaultFormRegisterPasswordEx" class="grey-text">Your Password</label>
    <input id="defaultFormRegisterEmailEx" class="form-control" type="password" placeholder="Password" v-model="college.password" required/>
    <div class="text-center mt-4">
      <button class="btn btn-danger"  @click="updateCollege()">Update</button>
    </div>
  <!-- Default form register -->
  </b-modal>
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
                collegename:"",
                username: "",
                mobilenumber:"",
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
        updateCollege: function(){
            return new Promise((resolve, reject) => {
                CollegeService.updateCollege(this.college)
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