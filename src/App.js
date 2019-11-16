import React, {Component} from 'react';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
import './App.css'


class App extends Component {
  state = {
    courses : [
      {name : "HTML"},
      {name : "PHP"},
      {name : "JQuery"},
    ],
    current : ''
  }

//UpadteCourse
updateCourse = (e) => {
  //console.log(e.target.value)
  this.setState(
   { current : e.target.value}
  )
}

//addCourse
addCourse = (e) => {
  e.preventDefault();
  //console.log("Update Corse")
  let current = this.state.current
  let courses = this.state.courses
  if (current){
  courses.push ({name : current})
  this.setState ({
    courses,
    current : ''
  })}
}

//deleteCourse
deleteCourse = (index) => {
  let courses = this.state.courses
  courses.splice(index, 1 )
  this.setState ({
    courses
  })


}

//editCourse
editCourse = (index,value) => {
  let courses = this.state.courses;
  let course = courses [index];
  course['name'] = value ;
  this.setState({
    courses 
  })
    

}


render() {
  const courses = this.state.courses
  const courseList = courses.map ((course, index ) => {
    return <CourseList  details={course} key={index} update={this.handleChange} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse}/>
  }

  )
      return (
    <section className="App">
      <h2>Add Courses</h2>
      <CourseForm current={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse} />
      <ul>{ this.state.courses.length > 0 ? courseList : <p> No Courses To Show! Please Add New Course.</p>}</ul>
      
    </section>
  );
}
}
export default App;
