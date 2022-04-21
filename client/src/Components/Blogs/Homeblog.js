import React,{useEffect, useState} from 'react'
import '../../css/bloghome.css'


const Homeblog = ()=> {   
const[blogs,setblogs] = useState([{
    title:'',
    
    description:'',
    username:''
}])



useEffect(()=>{
    fetch("http://localhost:5000/api/blogs")
    .then(res=>{
        if(res.ok){
            return res.json()
        }
    }).then(data=>{
            setblogs(data)
            console.log(data);
    }).catch(err=>{
        console.log(err);
    });
},[])


    return (
    <div>
     
    <div class="home-container">
        
        <div class="home-blogs-container">
            <div class="blog-container-heading">
                <h1>Better-Wellness Blogs</h1>
                <p>Read and Write Blogs!</p>
            </div>
            <div class="home-blog-start-heading">
                <h1>Blogs!</h1>
            </div>
            
             
            <div class="blogs-wrapper">
            {(blogs || []).map(blog=>(
                <div class="blog-box-style">
                    <a class="blog-box-link" href="/view-blog">
                    <input type="hidden" name="id" value={blog} key={blog.title} />
                    
                    <div class="blog-box-heading">
                        <h1>{blog.title}</h1>
                    </div>
                    <div class="blog-box-desc">
                        <p>
                           {blog.description} 
                        </p>
                    </div>
                    </a>
        
                    <div class="box-buttons">
                        
                    <a href="/update-blog?id=<%= blog[i]._id%>" class="box-btn-link">
                        <span class="box-btn"><i class="fas fa-edit fa-lg"></i></span>
                    </a>

                    <a class="box-btn-link delete" data-id="">
                        <span class="box-btn"><i class="fas fa-trash-alt fa-lg"></i></span>
                    </a>      
                    </div>
                </div> 
                ))}         
            </div>
            
        </div>
    </div>
    </div>
  )
}
export default Homeblog;