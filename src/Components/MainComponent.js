import React from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import StaffList from './StaffListComponents';
import Staff from './StaffComponent';
import Department from './Departments';
import Salary from './SalaryComponent';
import { Routes, Route, useParams } from 'react-router-dom';
// import { STAFFS, DEPARTMENTS } from '../Shared/staffs';
import { connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    staffs: state.staffs,
    departments: state.departments,
    value: state.value
  }
}

class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            // staffs: STAFFS,
            // departments: DEPARTMENTS,
            // value: null,
            staffs: props.staffs,
            departments: props.departments,
            value: props.value,
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

export default connect(mapStateToProps)(Main);