import React, {useEffect, useState} from 'react';
import '../App.css';
import img from "../Images/background.jpg";
import Circle from './Circle'


const BlockGame = () => {

    let [counter, changeCounter] = useState(0)
    let [indexRandom, changeIndex] = useState(0)
    let [level, changeLevel] = useState(1)
    let items = [0, 1, 2, 3, 4, 5, 6, 7, 8]

    let getRandomImageIndex = () => {
        let random = Math.floor(Math.random() * 9)
        changeIndex(() => random)
    }

    useEffect(() => {
        getRandomImageIndex()
    }, [])

    let CircleItemElements = items.map(index => <Circle id={index}/>)


    return (
        <div className="wrapperGame" style={{backgroundImage: img}}>
            <div style={{fontSize: '20px'}}>
                Level {level}
            </div>
            <div className={'centralSection'}>
                {CircleItemElements}
            </div>
            <div className={'counter'}>
                <span>{counter}</span>
            </div>
        </div>
    );
}

export default BlockGame;
