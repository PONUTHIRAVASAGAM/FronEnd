<template>
<div>
<nav-bar />
<container>
<table class="table" hover responsive>
  <thead class="thead-dark">
    <tr>
      <th scope="col">Id</th>
      <th scope="col">College Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Mobile Number</th>
      <th scope="col">Address</th>  
    </tr>
  </thead>
  <tbody>
    <tr v-for="s in college" v-bind:key="s.id">
	<td>{{s.id}}</td>
    <td>{{s.collegename}}</td>
    <td>{{s.username}}</td>
    <td>{{s.mobilenumber}}</td>
	<td>{{s.address}}</td>
    </tr>
  </tbody>
</table>
</container>
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
    },
		components:{
		NavBar,
		Footer,
	}	
}
</script>
