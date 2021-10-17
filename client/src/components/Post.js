import Card from 'react-bootstrap/Card'

const Post = () =>{
    const PostItem = [
        {
            title: "Jai",
            content: "Just Writing a proficient Web Blog for the first time"
    
        },
        {
            title: "Veeru",
            content: "Just Writing a proficient Web Blog for the first time"
    
        },
        {
            title: "Connection",
            content: "Just Writing a proficient Web Blog for the first time"
    
        },

]
    return(
        <>
        
            <Card border="light" style={{ width: '18rem' }}>
                <Card.Header>{PostItem[0].title}</Card.Header>
                <Card.Body>
                    <Card.Text>
                    {PostItem[0].content}
                </Card.Text>
                </Card.Body>
            </Card>
            

        </>
    )

}
export default Post;