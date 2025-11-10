// IN THIS CODE I WIIL PASS THE PROPS TO THE STUDENT COMPONENT FROM APP.JSX FILE
import React from 'react'

const StudentProps = (props) => {
  return (
    <div>
            <div className="flex flex-col items-center bg-gray-200 min-h-screen py-8">
        <h2 className="text-2xl font-bold mb-6">Student Props Component</h2>
        <p>Name: {props.name}</p>
        <p>Age : {props.age}</p>
        <p>Student : {props.isStudent ? "Yes" : "No" }</p>
        </div>
    </div>
  )
}

export default StudentProps;