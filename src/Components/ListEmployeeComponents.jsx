import React, { Component } from 'react';
import EmployeeService from '../Services/EmployeeService';

class ListEmployeeComponents extends Component {
    constructor(props){
        super(props)

        this.state={
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    deleteEmployee(id){
        //rest api call here
        EmployeeService.deleteEmployee(id).then( res =>{
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});

        });
        
    }
    editEmployee(id){
        this.props.history.push(`/update-employee/${id}`);    

    }
    componentDidMount(){
        EmployeeService.getEmployees().then((res)=>{
            this.setState({employees:res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee');
    }


    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>
                <div className='row'>
                    <button className='btn-btn-primary' onClick={this.addEmployee}>Add Employee</button>
                </div>
                <div className="row">
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Lirst Name</th>
                                <th>Employee Email ID</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employees =>
                                    <tr key = {employees.id}>
                                        <td>{employees.firstName}</td>
                                        <td>{employees.lastName}</td>
                                        <td>{employees.emailId}</td>
                                        <td>
                                            <button onClick={ () => this.editEmployee(employees.id)} className='btn btn-info'>Update </button>
                                            <button style={{marginLeft:"10px"}}onClick={ () => this.deleteEmployee(employees.id)} className='btn btn-danger'>Delete </button>
                                            <button style={{marginLeft:"10px"}} onClick={ () => this.viewEmployee(employees.id)} className='btn btn-info'>View </button>
                                            
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponents;