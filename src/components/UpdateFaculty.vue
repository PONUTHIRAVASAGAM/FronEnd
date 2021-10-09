<template>
<div>
<b-modal id="modal-center2" centered title="Add Faculty" hide-footer>
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
</template>
<script>
import FacultyService from '../service/FacultyService'
export default {
    name: "AddFaculty",
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