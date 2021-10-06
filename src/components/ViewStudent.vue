<template>
    <div>
<nav-bar />
    <b-table striped hover :items="items" :fields="fields"></b-table>	
        <h1>Students Details</h1>
    <div>
        <b-table-simple>
            <b-row>
                <b-col>Id</b-col>
				<b-col>College</b-col>
                <b-col>FirstName</b-col>
                <b-col>LastName</b-col>
                <b-col>UserName</b-col>
                <b-col>Email Id</b-col>
                <b-col>Actions</b-col>
            </b-row>
            <b-row v-for="s in student" v-bind:key="s.id">
                <b-col>{{s.id}}</b-col>
				<b-col>{{s.college}}</b-col>
                <b-col>{{s.firstName}}</b-col>
                <b-col>{{s.lastName}}</b-col>
                <b-col>{{s.userName}}</b-col>
                <b-col>{{s.email}}</b-col>
                <b-col>
                    <span><b-icon icon="trash-fill" aria-hidden="true" @click="deleteStudent(s.id)"></b-icon></span>
                    <span><b-icon icon="pencil-fill" aria-hidden="true" @click="getStudent(s.id)" v-b-modal.modal-center7></b-icon></span>
                </b-col>
            </b-row>            
        </b-table-simple>
    </div> 
<div>
<b-modal id="modal-center7" centered title="Update" hide-footer>
  <!-- Default form register -->
 
    <p class="h4 text-center mb-4">Update Student</p>
    <label for="defaultFormRegisterNameEx" class="grey-text">First Name</label>
    <input type="text" id="defaultFormRegisterEmailEx" class="form-control" placeholder="First Name" v-model="student.firstName" required/>
    <br/>
    <label for="defaultFormRegisterNameEx" class="grey-text">Last Name</label>
    <input id="defaultFormRegisterEmailEx" class="form-control" type="text" placeholder="Last Name" v-model="student.lastName" required/>
    <br/>
    <label for="defaultFormRegisterNameEx" class="grey-text">User Name</label>
    <input id="defaultFormRegisterEmailEx" class="form-control" type="text" placeholder="User Name" v-model="student.userName" required/>
    <br/>	
    <label for="defaultFormRegisterEmailEx" class="grey-text">Your email</label>
    <input id="defaultFormRegisterEmailEx" class="form-control" type="email" placeholder="Email Id" v-model="student.email" required/>
    <br/>
    <label for="defaultFormRegisterPasswordEx" class="grey-text">Your Password</label>
    <input id="defaultFormRegisterEmailEx" class="form-control" type="password" placeholder="Password" v-model="student.passWord" required/>
	<br/>
		<b-form-group label="College:">
                <b-form-select class="form-control" v-model="student.college" :options="colleges"></b-form-select>
            </b-form-group>
    <div class="text-center mt-4">
      <button class="btn btn-danger"  @click="putStudent()">Update</button>
    </div>
  <!-- Default form register -->
  </b-modal>
</div>	
<Footer />	
    </div>
</template>
<script>
import StudentService from '../service/StudentService'
import Footer from './Footer';
import NavBar from './NavBar';
export default {
    name: "StudentDetails",
    data(){
        return{
		colleges: [
          { value: 'Indus', text: 'Indus' },
          { value: 'Karunya', text: 'Karunya' },
          { value: 'PSG', text: 'PSG' },
        ],
            student: {
                id: "",
                firstName:"",
                lastName: "",
                userName:"",
				email:"",
            },
            students: null,
        }
    },
    mounted(){
        this.getAllStudents();
    },
    methods:{
        getAllStudents: function(){
            return new Promise((resolve, reject) => {
                StudentService.getAllStudents()
                .then((response) => {    
                    this.student = response.data;             
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });              
        },
        putStudent: function(){
            return new Promise((resolve, reject) => {
                StudentService.putStudent(this.student)
                .then((response) => {    
                    this.student = response.data;             
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });             
        },
        deleteStudent: function(id){
            return new Promise((resolve, reject) => {
                StudentService.deleteStudent(id)
                .then((response) => {    
                    this.student = response.data; 
                    this.getAllStudents();            
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });              
        },
        getStudent: function(id){
            return new Promise((resolve, reject) => {
                StudentService.getStudent(id)
                .then((response) => {    
                    console.log("Student is ", response.data)    
                    this.student = response.data;                 
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