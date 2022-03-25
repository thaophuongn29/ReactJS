import React from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import StaffList from './StaffListComponent';
import Staff from './StaffComponent';
import Department from './Departments';
import Salary from './SalaryComponent';
import { Routes, Route, useParams } from 'react-router-dom';
import { STAFFS, DEPARTMENTS } from '../Shared/staffs';

class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            staffs: STAFFS,
            departments: DEPARTMENTS,
            value: null,
        
        }
    }

    
    render() {
        const StaffInfo = () => {
            const {id} = useParams();
            return(
                <Staff staff={this.state.staffs.find((staff) => staff.id === Number(id))}/>
            )
        }


        return(
            <div>
                <Header onClick={(value) => this.setState({value: value})}/>
                <Routes>
                    <Route exact path='/staffs' element={<StaffList staffs={this.state.staffs} value= {this.state.value} onClick={(value) => this.setState({value: value})} onSubmit={(value) => this.setState({staffs: value})}/>} />
                    <Route exact path='/staffs/:id' element={<StaffInfo />} />
                    <Route exact path='/department' element={<Department departments={this.state.departments} />} />
                    <Route exact path='/salary' element={<Salary staffs={this.state.staffs} />} />
                    <Route path='*' element={<StaffList staffs={this.state.staffs} value= {this.state.value} onClick={(value) => this.setState({value: value})} onSubmit={(value) => this.setState({staffs: value})}/>} />
                </Routes>
                <Footer />
            </div>
        )
    }

}

export default Main;