import React, {Component} from 'react'; //라이브러리 호출
/* import Person from './Person'; */
/* import Todo from './Todo'; */
/* import Animal from './Animal';  */
/* import  Exercise1 from './Exercise1'; */
import  Exercise2 from './Exercise2';


/********** exercise1에 대한 내용************/
/* class App extends Component {
  //export default class App extends Component { 라인6에 15를 합쳐서 이렇게 써도됨
  render(){ //메서드 => 컴포넌트에서 무조건 들어가야 되는 메서드
    return (
    <>
      <Exercise1 name='Victoria' age='13' city='Seoul'></Exercise1>
      <Exercise1 name='Sun' age='13' city='Seoul'></Exercise1>
      <Exercise1 name='Johseb' age='13' city='Seoul'></Exercise1>
      <Exercise1 name='syleemomo' age='13' city='Seoul'></Exercise1>
      <Exercise1 name='hannah' age='13' city='Seoul'></Exercise1>
      <Exercise1 name='shara' age='13' city='Seoul'></Exercise1>
      <Exercise1 name='martin' age='13' city='Seoul'></Exercise1>
      <Exercise1 name='gorgia' age='13' city='Seoul'></Exercise1>
      <Exercise1 name='nana' age='13' city='Seoul'></Exercise1>
      <Exercise1 name='dannel' age='13' city='Seoul'></Exercise1>
    </>
    )
  }
}

//결과 내보내기
export default App;
 */

/********** exercise2에 대한 내용************/
function App() {
    return(
    <>
      <div className='App'>
        <Exercise2/>
      </div>
    </>
    );
  }
export default App;