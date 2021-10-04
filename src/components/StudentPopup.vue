<template>
<div>
<b-modal id="modal-center4" centered title="Register" hide-footer>
  <!-- Default form register -->
 
    <p class="h4 text-center mb-4">Student Registration</p>
    <label for="defaultFormRegisterNameEx" class="grey-text">First Name</label>
    <input type="text" id="defaultFormRegisterEmailEx" class="form-control" placeholder="First Name" v-model="student.firstname" required/>
    <br/>
    <label for="defaultFormRegisterNameEx" class="grey-text">Last Name</label>
    <input id="defaultFormRegisterEmailEx" class="form-control" type="text" placeholder="Last Name" v-model="student.lastname" required/>
    <br/>
    <label for="defaultFormRegisterNameEx" class="grey-text">User Name</label>
    <input id="defaultFormRegisterEmailEx" class="form-control" type="text" placeholder="User Name" v-model="student.username" required/>
    <br/>	
    <label for="defaultFormRegisterEmailEx" class="grey-text">Your email</label>
    <input id="defaultFormRegisterEmailEx" class="form-control" type="email" placeholder="Email Id" v-model="student.email" required/>
    <br/>
    <label for="defaultFormRegisterPasswordEx" class="grey-text">Your password</label>
    <input id="defaultFormRegisterEmailEx" class="form-control" type="password" placeholder="Password" v-model="student.password" required/>
    <div class="text-center mt-4">
      <button class="btn btn-primary"  @click="putStudent()">Register</button>
    </div>
  <!-- Default form register -->
  </b-modal>
</div>
</template>
<script>
import StudentService from '../service/StudentService'
export default {
    name: "StudentPopup",
    data(){
        return{
            student: {
                firstname: '',
                lastname: '',
                username: '',				
                email:'',
                password: '',
            },
        }
    },
	methods: {
        putStudent: function(){
            return new Promise((resolve, reject) => {
                StudentService.putStudent(this.student)
                .then((response) => {                 
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });             
        }
		}
		}
		
</script>