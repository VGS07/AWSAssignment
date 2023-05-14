import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Toast } from 'reactstrap';
import { useSelector, connect } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { redirect,useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const AddPost=()=>{

    const [title,setTitle] = useState("");
    const [category,setCategory] = useState("");
    const [description,setDescription] = useState("");

    const navigate = useNavigate();

    const posts = useSelector((state)=>state);
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
            id:posts[posts.length-1].id+1,
            title,
            category,
            description
        }
        console.log(data);
        dispatch({type:"ADD_POST",payload:data});
        toast.success('Post added successfully!!', {
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
            <div className='row'>
                <div className='col-md-6 shadow mx-auto'>
                <Form className='m-4' onSubmit={handleSubmit}>
                <h3 className='text-center'>Add Post</h3><hr/>
        <FormGroup>
          <Label>Title</Label>
          <Input type="text" name="title" placeholder="Enter title here..." value={title} onChange={(e)=>setTitle(e.target.value)} />
        </FormGroup>
        
        
        <FormGroup>
          <Label for="exampleSelect">Categories</Label>
          <Input type="select" name="select" placeholder='Select Category' id="exampleSelect" value={category} onChange={(e)=>setCategory(e.target.value)}>
            <option>Technology</option>
            <option>Lifestyle</option>
            <option>Food</option>
            <option>Travel</option>
            <option>Programming</option>
          </Input>
        </FormGroup>
        
        <FormGroup>
          <Label for="exampleText">Description</Label>
          <Input type="textarea" name="text" id="exampleText" value={description} onChange={(e)=>setDescription(e.target.value)}/>
        </FormGroup>
        
        <Button type='submit' color='primary' className='m-2'>Submit</Button>
        <Button type='reset' color='danger'>Cancel</Button>

      </Form>
                </div>
            </div>
        </div>
    );
}

export default AddPost;