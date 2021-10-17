import Categories from "./Categories";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Post from './Post'



function Posts() {
    return (
        <>
            <Container>
                <Row>
                    <Col sm={2}>
                        <Categories />
                    </Col>

                    <Col sm={8}><Post/></Col>

                    
                </Row>
            </Container>
            
            
        </>
    );
}
export default Posts;