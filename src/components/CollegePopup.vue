<template>
<div>
<b-modal id="modal-center5" centered title="Register" hide-footer>
  <!-- Default form register -->
 
    <p class="h4 text-center mb-4">College Registration</p>
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
      <button class="btn btn-primary"  @click="putCollege()">Register</button>
    </div>
  <!-- Default form register -->
  </b-modal>
</div>
</template>
<script>
import CollegeService from '../service/CollegeService'
export default {
    name: "CollegePopup",
    data(){
        return{
            college: {
                collegename: '',
                username: '',
                mobilenumber: '',				
                address:'',
                password: '',
            },
        }
    },
	methods: {
        putCollege: function(){
            return new Promise((resolve, reject) => {
                CollegeService.putCollege(this.college)
                .then((response) => {                 
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
        },		
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
        }
		}
		}
		
</script>