<template>
<div>
<nav-bar />
<h1> Admin Login</h1><b-button variant="danger" href="http://localhost:8080" >Logout</b-button>
<b-list-group>
  <b-list-group-item variant="primary" href="/ViewCollege"><h2>Approve Institute</h2></b-list-group-item>
  <b-list-group-item variant="primary" href="/ViewCollege"><h2>Delete Institute</h2></b-list-group-item>
  <b-list-group-item variant="primary" href="/ViewStudent"><h2>View students</h2></b-list-group-item>
  <b-list-group-item variant="primary"><h2>View complaints</h2></b-list-group-item>
</b-list-group>
<Footer />
</div>
</template>

<script>
import Footer from './Footer';
import NavBar from './NavBar';
  export default{
	components:{
		NavBar,
		Footer,
	},
  }
</script>
