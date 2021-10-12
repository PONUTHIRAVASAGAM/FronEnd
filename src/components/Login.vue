<template>
    <div>
        <b-modal id="modal-center1"  title="LOGIN" ref="modal" hide-footer>
      <div>
    <b-form-group>
               <b-form-radio-group  v-model="selected"
        >
                 <b-container>
                   <b-row>
                     <b-col>
                       <b-form-radio  id="admn" v-model="selected" v-bind:value="1" >Admin</b-form-radio>
                     </b-col>
                     <b-col>
                       <b-form-radio  id="clg" v-model="selected" v-bind:value="2" >College</b-form-radio>
                     </b-col>
                     <b-col>
                       <b-form-radio id="stud" v-model="selected" v-bind:value="3" >Student</b-form-radio>
                     </b-col>
                   </b-row>
                </b-container>
               </b-form-radio-group>
              </b-form-group>
  </div>
       <b-form-group id="username" label="User Name" >
          <b-form-input
           v-model.trim="$v.log.username.$model" :class="{'is-invalid':$v.log.username.$error, 'is-valid':!$v.log.username.$invalid}"
         >
           </b-form-input>
       </b-form-group>
          <b-form-group id="password" label="Password" >
          <b-form-input
         v-model.trim="$v.log.password.$model" :class="{'is-invalid':$v.log.password.$error, 'is-valid':!$v.log.password.$invalid}"
           type="password"
          >
           </b-form-input>
       </b-form-group>
          <div class="pt-5 ">
           <b-button   class="form-control " type="submit"  variant="outline-success" @click="login()">Submit</b-button>
          </div>
          <div class="pt-3">
          <b-button class="form-control" size="sm"   variant="outline-danger">Reset</b-button>
          </div>
  </b-modal>
    </div>
</template>
<script>
import CollegeService from '../service/CollegeService';
import StudentService from '../service/StudentService'
import AdminService from '../service/AdminService'
import { required, minLength,maxLength} from "vuelidate/lib/validators";
export default {
  name: 'Login',
  data() {
      return {
          selected: '1',
          log:{
            username:'',
            password:''
          },
      };
    },
    validations: {
      log:{
            username: {
                required,
                minLength: minLength(5),
                maxLength: maxLength(20)
            },
            password: {
                required,
                minLength: minLength(5),
            }
      }
    },
     methods: {
     login: function(){
        this.$v.$touch()
                if(this.$v.$invalid){
                    this.submitstatus = "FAIL"
                }
                else {
                    this.submitstatus = "SUCCESS"
    if(this.selected==3)
        return new Promise((resolve, reject) => {
            StudentService.loginStudent(this.log)
                .then(response => {
                    alert("login successfully")
                   localStorage.setItem('name', this.log.username)
                   localStorage.setItem('status','Verified')
                   localStorage.setItem('role','Student')
                   this.$router.push({name:'AfterStudent'});
                   this.log.username="",
                   this.log.password=""
                   resolve(response);
                })
                .catch(err => {
                   alert("login failed")
                    localStorage.setItem('status','NotVerified')
                    this.log.username="",
                   this.log.password=""
                    reject(err);
                });
        });
        else if(this.selected==1)
        return new Promise((resolve, reject) => {
            AdminService.loginAdmin(this.log)
                .then(response => {
                    alert("login successfully")
                   localStorage.setItem('name', this.log.username)
                   localStorage.setItem('status','Verified')
                   localStorage.setItem('role','Admin')
                   this.$router.push({name:'AfterAdmin'});
                   this.log.username="",
                   this.log.password=""
                   resolve(response);
                })
                .catch(err => {
                   alert("login failed")
                    localStorage.setItem('status','NotVerified')
                    this.log.username="",
                   this.log.password=""
                    reject(err);
                });
        });
        else if(this.selected==2)
        return new Promise((resolve, reject) => {
            CollegeService.loginCollege(this.log)
                .then(response => {
                    alert("login successfully")
                   localStorage.setItem('name', this.log.username)
                   localStorage.setItem('status','Verified')
                   localStorage.setItem('role','College')
                   this.$router.push({name:'AfterCollege'});
                   this.log.username="",
                   this.log.password=""
                   resolve(response);
                })
                .catch(err => {
                   alert("login failed")
                    localStorage.setItem('status','NotVerified')
                    this.log.username="",
                   this.log.password=""
                    reject(err);
                });
        });
    }
     }
     }
     }
</script>