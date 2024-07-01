
import './App.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Card,Row,Col, Container} from 'react-bootstrap'
import { useState } from 'react';
function App() {
  const [reminders,setReminders]=useState([]);
  const [reminder,setReminder]=useState('');
  const [editIndex,setEditIndex]=useState(null);
  const handleSubmit=(event)=>{
    event.preventDefault();
  
  
    if(editIndex !== null){
      const newRemind=[...reminders];
      newRemind[editIndex]={ reminder}
     setReminders(newRemind)
     setEditIndex(null)
     
    }else{
      setReminders([...reminders,{reminder}])
    }
    setReminder('')
   }
  
   const handleDelete=(index)=>{
    const newRemind=[...reminders];
    newRemind.splice(index,1);
    setReminders(newRemind);
   }
  
   const handleEdit=(index)=>{
    setReminder(reminders[index].reminder);
    setEditIndex(index);
 }

  return (
    <>
  <Container>

  <Row>
    <Col>
     
     <Form onSubmit={handleSubmit}> 
      <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingrese recordatorio" value={reminder} onChange={(e)=>setReminder(e.target.value)}  />
      </Form.Group>
        
        <Button type="submit">Agregar recordatorio</Button>

      </Form>
    </Col>
  </Row>
   <Row>
    {
      reminders.map((remind,index)=>(
      <Col sm={6} key={index}>
            <Card style={{ width:'18rem',marginTop:'20px'}}>
          
                <Card.Body>
                  <Card.Title>Datos de recordatorio</Card.Title>
                  <Card.Text>Nombre:{remind.reminder}</Card.Text>
                  <Button variant="eliminar" onClick={() => handleDelete(index)}>
                    Eliminar
                  </Button>
                <Button variant="editar recordatorio" onClick={() => handleEdit(index)} style={{ marginLeft: '10px' }}>Editar</Button>
                
                </Card.Body>
            </Card>
      </Col>
      ))
    }
   </Row>
       
  </Container>
    </>
  )
}

export default App
