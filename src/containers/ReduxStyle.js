import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReduxStyle extends Component {
	render(){
		const studentArray = [];
		this.props.students.map((student, index)=>{
			studentArray.push(<li key={student.name}>{student.name} - {student.seat}</li>)
			return studentArray;
		});
		this.props.students2.map((student2, index)=>{
			studentArray.push(<li key={student2.name}>{student2.name} - {student2.seat}</li>)
			return studentArray;
		});
		return(
			<div className="App">
				{studentArray}
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		students: state.students,
		students2: state.students2
	}
}

export default connect(mapStateToProps)(ReduxStyle);