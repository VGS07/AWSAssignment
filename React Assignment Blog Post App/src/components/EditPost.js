import React, { useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { redirect,useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


const EditPost=()=>{

    const [title,setTitle] = useState("");
    const [category,setCategory] = useState("");
    const [description,setDescription] = useState("");
    const {id} = useParams();

    const posts = useSelector(state=>state);
    const navigate = useNavigate();
    const currentPost = posts.find((post)=>post.id===parseInt(id));

    useEffect(()=>
    {
        if(currentPost){
          setTitle(currentPost.title);
          setCategory(currentPost.category);
          setDescription(currentPost.description)
        }
    },[currentPost]);

    const dispatch = useDispatch();
    const handleSubmit = (e) =>{
      e.preventDefault();

      if(!title || !category || !description){
          return toast.error('All fields are required', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              })
      }
      const data ={
          id:parseInt(id),
          title,
          category,
          description
      }
      console.log(data);
      dispatch({type:"UPDATE_POST",payload:data});
      toast.success('Post Updated successfully!!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
          navigate('/');
  };

    return(
        <div className='container mt-5'>
            {
              currentPost ?(
                <>
                  <div className='row'>
                <div className='col-md-6 shadow mx-auto'>
                <Form className='m-4' onSubmit={handleSubmit}>
                <h3 className='text-center'>Edit Post {id}</h3><hr/>
        <FormGroup>
          <Label>Title</Label>
          <Input type="text" name="title" placeholder="Enter title here..." value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </FormGroup>
        
        
        <FormGroup>
          <Label for="exampleSelect">Categories</Label>
          <Input type="select" name="select" id="exampleSelect" value={category} onChange={(e)=>setCategory(e.target.value)}>
            <option>Technology</option>
            <option>Lifestyle</option>
            <option>Food</option>
            <option>Travel</option>
            <option>Programming</option>
          </Input>
        </FormGroup>
        
        <FormGroup>
          <Label for="exampleText">Description</Label>
          <Input type="textarea" name="text" id="exampleText" value={description} onChange={(e)=>setDescription(e.target.value)} />
        </FormGroup>
        
        <Button type='submit' color='primary' className='m-2'>Update</Button>
        <Link to="/"  className="btn btn-danger">Cancel</Link>

      </Form>
                </div>
            </div>
                </>
              ):<h2 className='text-center display-3 my-5'>Page Not Found <br/>404 Error</h2>
            }
        </div>
    );
}

export default EditPost;