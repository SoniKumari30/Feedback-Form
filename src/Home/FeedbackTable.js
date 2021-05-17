import React from "react"
import { Table, Container } from "react-boots//trap"

function FeedbackTable(){////
    const table= JSON.parse(localStorage.getItem('array') || "[undefined,undefined]")
    const name = table.length >= 1 ? true : false
    const array = typeof table =='undefined' ? 0 : table
    return (
        <div className="fluid-container" style={{height:"100%", width: "100%",backgroundColor:" red",backgroundImage:"linear-gradient(#F4F8F9,#B7F4C9,#E4C4F9 )"}}>
             <Container>
            <h1 className='pt-5 pb-2'>All Feedback</h1>
            <Table striped bordered hover responsive>
            <thead className='thead-dark'>
                    <tr>
                    <th>Text field</th>
                    <th>Phone field</th>
                    <th>Email field</th>
                    <th>Radio button</th>
                    <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        
                       name ? table.map(ele => {
                            return (
                                <tr>
                                    <td>{ele.text}</td>
                                    <td>{ele.phone}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.rating}</td>
                                    <td>{ele.name}</td>
                                </tr>
                            )
                        }) : ""
                    }
                </tbody>
                </Table>
                </Container>
        </div>
    )
}

export default FeedbackTable