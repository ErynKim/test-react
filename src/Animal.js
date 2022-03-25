import React from 'react'

class Animal extends React.Component{
    state = {
        type: 'cat',
        name: 'meyow',
        size: 'small',
        sound: 'low',
        appearance: 'cute',
    }
    render() {
        //state나 props 값을 조회
        const {type, name, size, sound, appearance} =this.state
        return (
            <>
                <h1>동물 정보</h1>
                <h3>종류 - {type}</h3>
                <h3>크기 - {size}</h3>
                <h3>소리 - {sound}</h3>
                <h3>생김새 - {appearance}</h3>
            </>
        )
    }
}
export default Animal