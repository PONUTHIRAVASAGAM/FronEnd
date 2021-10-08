<template>
<div>
<b-modal id="modal-center1" centered title="Login" hide-footer>
       <b-form-group id="log-grp-2" label="User Name" label-for="un">
          <b-form-input id="un"
          name="un"
          v-model="cl.username"
          >
           </b-form-input>
         
         
       </b-form-group>
          <b-form-group id="log-grp-2" type="password" label="Password" label-for="pw">
          <b-form-input id="pw"
          name="pw"
          v-model="cl.password"
          >
           </b-form-input>
       
       </b-form-group>
          <div class="text-center mt-5 ">
           <b-button  size="sm" id="submit"  @click="loginCollege()" variant="outline-success">Submit</b-button>
          <b-button class="mx-3" size="sm" id="cancel" @click="resetForm()"  variant="outline-danger">Reset</b-button>
          </div>

  </b-modal>
</div>
</template>
<script>
import CollegeService from '../service/CollegeService'
export default {
  name: 'Login',
  data() {
      return {        
	
          cl:{
            username:'',
            password:''
           }
}
},		   
	methods: {
     loginCollege: function(){
        return new Promise((resolve, reject) => {
            CollegeService.loginCollege(this.cl)
                .then(response => {
                    alert("login successfully")
                    resolve(response);
                })
                .catch(err => {
                   alert("login failed")
                    reject(err);
                });
        });        
    }
	},
	}
</script>