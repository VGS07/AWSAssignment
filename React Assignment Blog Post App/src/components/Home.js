import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom'
import { useSelector} from 'react-redux';
import { Card, Button, CardTitle, CardText } from 'reactstrap';


const Home = ()=>{

    const posts = useSelector(state=>state);
    return(
        <div className='float-left'>
            <Container>
                <Row>
                    <Col md={12} className="text-right float-left">
                        <Link tag="a" to="/add" className='btn btn-outline-primary m-3 float-left'>Add Post</Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    
                        {
                            posts.map((post,id)=>(
                                
                                <Card key={id} body className='shadow mb-3'>
                                    
                                <CardTitle ><h3>{post.title}</h3></CardTitle><hr/>
                                <CardText><i>Category : {post.category}</i></CardText>
                                
                                
                                <Link to={`/post/${post.id}`} className='btn btn-warning'>Read</Link>
                                
                                </Card>
                                
                            ))
                        }
                    

      
                    </Col>                    
                </Row>
            </Container>
        </div>
    );
}

export default Home;