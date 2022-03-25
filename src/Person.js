import React, { Component } from 'react'; //라이브러리 호출

class Person extends Component {
  render(){  //메서드 => component에서 무조건 들어가야 되는 메서드
    //component에 필요한 데이터
    const name ='김은영';
    const age = 26;
    //ES5이하 => var 변수   ==> 이렇게 되면 변수를 바꿀때마다 다른값이 씌어지므로 let을 대신 많이 쓴다
    //ES6이상 => const는 상수 , let은 변수

    //HTML 템플릿 
    return (
      <React.Fragment>
        <h3>{name}</h3>
        <h4>{age}</h4>
      </React.Fragment>
    )
  }
}
//결과를 내보내기해야 함
export default Person;