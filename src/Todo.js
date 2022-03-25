import React, { Component } from 'react'

class Todo extends Component {
    constructor(props){
        super(props) //부모로부터 전달받는 데이터
        //데이터 초기화
        this.state= { //객체의 멤버 변수
                name: 'cleaning',
                done: false,
                description: 'cleaning my room on weekends'
            }
        }

    //이벤트핸들러 함수
    //화살표함수(ES6이상)
    changeName= () => { 
        this.setState({name:"learning react"})
    }

    render(){
        //비구조화 할당 (destructing assignment)
        const { name, done, description} = this.state;
        //HTML 템플릿 => JSX 문법
        return (
            <>
                <h3>name: {name}</h3>
                <h4>done: {done? "finished": "ongoing" }</h4>
                <p>description:{description}</p>
                <button type="button" onClick={this.changeName}>이름 변경하기</button>
            </>
        )
    }
}
export default Todo;