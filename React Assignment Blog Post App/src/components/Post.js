import React, { useEffect } from 'react';
import { Container, Row, Col} from 'reactstrap';
import { useSelector} from 'react-redux';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Post=()=>{
    const [title,setTitle] = useState("");
    const [category,setCategory] = useState("");
    const [description,setDescription] = useState("");
    const [like,setLike] = useState(0);
    const [dislike,setDislike] = useState(0);
    const [likeActive,setLikeActive]= useState(false);
    const [dislikeActive,setDisLikeActive]= useState(false);
    const {id} = useParams();

    const posts = useSelector(state=>state);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const deletePost=(id)=>{
        dispatch({type:"DELETE_POST",payload:id});
        toast.success("Deleted sucessfully");
        navigate("/")
    }
    const currentPost = posts.find((post)=>post.id===parseInt(id));

    function likePost(){
        if(likeActive){
            setLikeActive(false);
            setLike(like-1)
        }
        else{
            setLikeActive(true)
            setLike(like+1)
            if(dislikeActive){
                setDisLikeActive(false)
                setLike(like+1)     
                setDislike(dislike-1)
            }
        }
    }

    
 return(
    <div>
        <Container className='mt-2'>
            <Row>
                <Col lg={9}>
                    <Link to={`/`} className='m-3 ' color="link">back to index</Link>
                </Col>
                <Col lg={1}>
                <Button onClick={likePost} className={[likeActive?'active-like':null,'button'].join('')}>Like{like}</Button>
                </Col>
                <Col lg={1}>
                <Link to={`/edit/${currentPost.id}`} className='btn btn-outline-dark m-3 float-left'>Edit</Link>
                </Col>
                <Col lg={1}>
                <Button onClick={()=>deletePost(currentPost.id)}  className='btn btn-danger m-3 float-left'>Delete</Button>
                </Col>
            </Row>
        </Container>

      <Card body className='m-5 shadow p-4'>
        <CardTitle className='mt-3'><h1>{currentPost.title}</h1></CardTitle><hr/>
        <CardText><i>{currentPost.category}</i></CardText>
        <CardText>{currentPost.description}</CardText>
        
      </Card>
      
    </div>
 );
}

export default Post;