import React, {Component, Fragment} from 'react';




class CourseList extends Component { 

    state = {
        isEdit : false
    }

    renderCourse = () => {
        return (
            <li>
                    <span>{this.props.details.name}</span>
                    <button onClick={ () =>{this.toggleEdit()}}>Edit Course</button>
                    <button onClick={ () => {this.props.deleteCourse(this.props.index)}}>Delete Course</button>
            </li>
        )
    }

    //toggleEdit
    toggleEdit = () => {
        let {isEdit} = this.state;
        this.setState({
            isEdit: !isEdit
        })
    }

    updateCourseItem = (e) => {
        e.preventDefault();
        console.log(this.props.index)
        console.log(this.input.value)
        this.props.editCourse(this.props.index, this.input.value);
        this.toggleEdit();   
    }


    //render update Form
    renderUpdateCourse = () => {
        return (
            <form onSubmit={this.updateCourseItem}>
                <input type="text" ref={(v)=>{this.input = v}}  defaultValue={this.props.details.name}/>
                <button>Update Course</button>
            </form>
        )
    }

  render () {
        let {isEdit} = this.state
        return (
                    <Fragment>
                        { isEdit ? this.renderUpdateCourse() : this.renderCourse()}
                    </Fragment>
                );
            }
}

export default CourseList;
