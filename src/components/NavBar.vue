<template>
  <div>
  
   <h1>Welcome To Akka University</h1>
	
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#"> <img rounded="circle" src="https://upload.wikimedia.org/wikipedia/commons/a/af/Akka_baseline_logo-RVB400px.png" class="d-inline-block align-top" height="30px" width="30px" alt="Akka University"> Akka University</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="#" >About</b-nav-item>
      </b-navbar-nav>

<div>
        <b-nav-item-dropdown text="Login" left>
          <b-dropdown-item href="#" v-b-modal.modal-center1>Admin</b-dropdown-item>
          <b-dropdown-item href="#"  v-b-modal.modal-center2>College</b-dropdown-item>
          <b-dropdown-item href="#"  v-b-modal.modal-center3>Student</b-dropdown-item>
          <!-- <b-dropdown-item href="#">FA</b-dropdown-item> -->
        </b-nav-item-dropdown>
</div>
        <b-nav-item-dropdown left>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>Service</em>
          </template>
          <b-dropdown-item href="#" v-b-modal.modal-center4>Student Registration</b-dropdown-item>
          <b-dropdown-item href="#" v-b-modal.modal-center5>College Registration</b-dropdown-item>
        </b-nav-item-dropdown>
        
      <!-- Right aligned nav items -->
      <!-- <b-navbar-nav class="ml-auto" >
        <b-nav-form right>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav> -->
    </b-collapse>
  </b-navbar>
</div>
<div>
<StudentPopup />
</div>
<div>
  <b-img center src="https://upload.wikimedia.org/wikipedia/commons/a/af/Akka_baseline_logo-RVB400px.png" height="150%" width="150%" alt="Center image"></b-img>
</div>
</div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
<script>
import StudentPopup from './StudentPopup';
export default{
	components:{
		StudentPopup
		
	},
  }
</script>
