import React from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import StaffList from './StaffListComponent';
import Staff from './StaffComponents';
import Department from './Departments';
import Salary from './SalaryComponent';
import DepartmentStaffs from './DepartmentStaffs';
import Loading from './LoadingComponent';
import { Routes, Route, useParams, useLocation } from 'react-router-dom';
import { connect} from 'react-redux';
import { fetchStaffs, fetchDepartments, searchStaffs, fetchDepartmentsStaffs, postStaff, deleteStaff, patchStaff, fetchSalary} from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
  return {
    staffs: state.staffs,
    departments: state.departments,
    departmentStaffs: state.departmentStaffs,
    salary: state.salary
  }
}

const mapDispatchToProps = dispatch => ({
    fetchStaffs: () => dispatch(fetchStaffs()),
    fetchDepartments: () => dispatch(fetchDepartments()),
    postStaff: (staff) => dispatch(postStaff(staff)),
    searchStaffs: (staffs) => dispatch(searchStaffs(staffs)),
    fetchDepartmentsStaffs: (id) => dispatch(fetchDepartmentsStaffs(id)),
    deleteStaff: (id) => dispatch(deleteStaff(id)),
    patchStaff: (id, newField) => dispatch(patchStaff(id, newField)),
    fetchSalary: () => dispatch(fetchSalary())
})

class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        }      
    }
    
    componentDidMount () {
        this.props.fetchStaffs();
        this.props.fetchDepartments();
        this.props.fetchDepartmentsStaffs('Dept01');
        this.props.fetchSalary();
    }
    
    render() {

        const StaffInfo = () => {
            const {id} = useParams();
            const staff=this.props.staffs.staffs.find((staff) => staff.id === Number(id))
            if (staff !== undefined) {
                return <Staff staff={staff} patchStaff={this.props.patchStaff} />
            } else{
                return <Loading></Loading>
            }  
        }
        
        const Animation = () => {
            const location = useLocation();
            return(
                <TransitionGroup>
                    <CSSTransition key={location.key} classNames="page" timeout={500}>
                        <Routes>
                            <Route exact path='/staffs' element={<StaffList staffs={this.props.staffs.staffs} postStaff={this.props.postStaff} searchStaffs={this.props.searchStaffs} errMess={this.props.staffs.errMess} deleteStaff={this.props.deleteStaff}/>} />
                            <Route exact path='/staffs/:id' element={<StaffInfo/>} />
                            <Route exact path='/department' element={<Department departments={this.props.departments.departments} fetchDepartmentsStaffs={this.props.fetchDepartmentsStaffs}/>} />
                            <Route exact path='/department/:id' element={<DepartmentStaffs departmentStaffs={this.props.departmentStaffs}/>} />
                            <Route exact path='/salary' element={<Salary salary={this.props.salary.salary} />} />
                            <Route path='*' element={<StaffList staffs={this.props.staffs.staffs} postStaff={this.props.postStaff} searchStaffs={this.props.searchStaffs} errMess={this.props.staffs.errMess} deleteStaff={this.props.deleteStaff}/>} />
                        </Routes>
                    </CSSTransition>
                </TransitionGroup>
            )
        }  
            
        return(
            <div>
                <Header/>
                <Animation />
                <Footer/>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);