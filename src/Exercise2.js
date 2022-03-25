import React from 'react'

class Exercise2 extends React.Component{
    state = {
        name: 'sunrise',
        age: '23',
        friends: [
            'Victoria',
            'Daniel',
            'Hanna'
        ]
    }
    render(){
        console.log (this.state)
        return(
            <div>
                <button onClick={
                    () => {
                        alert(this.state.name);
                        }
                    }>신상정보 확인하기</button>
            </div>
        )
    }
}
export default Exercise2;