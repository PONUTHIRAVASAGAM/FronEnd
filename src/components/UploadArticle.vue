<template>
   <div>
       <div>    
         <NavBar />
       </div>
       
       <div>    
         <b-container>
           <h1>Upload articles</h1><br>
           <h2>Select a file to upload:</h2><br><br>
         </b-container>
       </div>
     
             <b-form-file
      v-model="file1"
      :state="Boolean(file1)"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
    ></b-form-file>
       <div class="text-center" id="rr">
           <b-button href="#" type="button" variant="outline-success ">Upload</b-button>
           <b-button type="button" variant="outline-danger " class="mx-3"> <router-link to="/AfterCollege"> <span>Back</span> </router-link></b-button>
       </div><br><br><br>
      
       
     <div>  
       <Footer />
     </div>
  </div>
</template>
<script>

import NavBar from './NavBar';
import Footer from './Footer';
  export default{
	components:{
		NavBar,
		Footer,
		
	},
  }
</script>