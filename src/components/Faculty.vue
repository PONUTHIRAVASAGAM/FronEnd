<template>
<nav-bar />
<div Container>
  <b-jumbotron>
    <template #header>Faculty Management</template>
    <hr class="my-4">
  <b-button v-b-modal.modal-center2 variant="primary">Add Faculty</b-button>	
<div>
<AddFaculty />
</div>
  </b-jumbotron>
  </div><br><br><br>
  <div Container>

    <b-table striped hover :items="items" :fields="fields"></b-table>	
        <h1>College Details</h1>
    <div>
        <b-table-simple hover responsive>
            <b-row>
                <b-col>Id</b-col>			
                <b-col>Faculty Name</b-col>
                <b-col>Qualification</b-col>
                <b-col>Experience</b-col>
                <b-col>Skill Set</b-col>
                <b-col>Actions</b-col>
            </b-row>
            <b-row v-for="s in college" v-bind:key="s.id">
                <b-col>{{s.id}}</b-col>
                <b-col>{{s.facultyname}}</b-col>
                <b-col>{{s.qualification}}</b-col>
                <b-col>{{s.experience}}</b-col>
                <b-col>{{s.skilset}}</b-col>
                <b-col>
                    <span><b-icon icon="trash-fill" aria-hidden="true" @click="deleteFaculty(s.id)"></b-icon></span>
                    <span><b-icon icon="pencil-fill" aria-hidden="true" @click="getFaculty(s.id)" v-b-modal.modal-center3></b-icon></span>
                </b-col>
            </b-row>            
        </b-table-simple>
    </div>
	<div>
<b-modal id="modal-center3" centered title="Add Faculty" hide-footer>
  <!-- Default form register -->
 
    <p class="h4 text-center mb-4">Add Faculty</p>
    <label for="defaultFormRegisterNameEx" class="grey-text">Faculty Name</label>
    <input type="text" id="defaultFormRegisterEmailEx" class="form-control" placeholder="Faculty Name" v-model="faculty.facultyname" required/>
    <br/>
    <label for="defaultFormRegisterNameEx" class="grey-text">Qualification</label>
    <input id="defaultFormRegisterEmailEx" class="form-control" type="text" placeholder="Qualification" v-model="faculty.qualification" required/>
    <br/>
    <label for="defaultFormRegisterNameEx" class="grey-text">Experience</label>
    <input id="defaultFormRegisterEmailEx" class="form-control" type="text" placeholder="Experience" v-model="faculty.experience" required/>
    <br/>
    <label for="defaultFormRegisterNameEx" class="grey-text">Skill Set</label>
    <input id="defaultFormRegisterEmailEx" class="form-control" type="text" placeholder="Skill Set" v-model="faculty.skillset" required/>
    <br/>		
    <div class="text-center mt-4">
      <button class="btn btn-primary"  @click="putFaculty()">Add</button>
    </div>
  <!-- Default form register -->
  </b-modal>
</div>
 <Footer />
</div>
</template>

<script>
import FacultyService from '../service/FacultyService'
import AddFaculty from './AddFaculty';
import Footer from './Footer';
import NavBar from './NavBar';
  export default {
      name: "UpdateFaculty",
    data(){
        return{
            faculty: {
                facultyname: '',
                qualification: '',
                experience: '',				
                skillset:'',
            },
        }
    },
		components:{
		NavBar,
		Footer,
		AddFaculty,
	},
	methods: {
        putFaculty: function(){
            return new Promise((resolve, reject) => {
                FacultyService.putFaculty(this.faculty)
                .then((response) => {                 
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });             
        },
		getFaculty: function(id){
            return new Promise((resolve, reject) => {
                FacultyService.getFaculty(id)
                .then((response) => {    
                    console.log("Faculty is ", response.data)    
                    this.faculty = response.data;                 
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });              
        },		
        getAllFaculties: function(){
            return new Promise((resolve, reject) => {
                FacultyService.getAllFaculties()
                .then((response) => {    
                    this.faculty = response.data;             
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });              
        },
        updateFaculty: function(){
            return new Promise((resolve, reject) => {
                FacultyService.updateFaculty(this.faculty)
                .then((response) => {    
                    this.faculty = response.data;             
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });             
        },		
        deleteFaculty: function(id){
            return new Promise((resolve, reject) => {
                FacultyService.deleteFaculty(id)
                .then((response) => {    
                    this.faculty = response.data; 
                    this.getAllFaculty();            
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });              
        }
		}	
  }
</script>
