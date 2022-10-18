import { Typography, Space } from "antd";
import React from "react"
import ScoreCounter from "./ScoreCounter"


function ScoreBoard(props) {
    const { scoreOne, setScoreOne, scoreTwo, setScoreTwo } = props.scoreBoard
    return (
        <Space direction="horizontal" size="large" style={{minWidth:300}}>
            <ScoreCounter score={scoreOne} setScore={setScoreOne}/>
            <Typography.Title level={5}>
                Score
            </Typography.Title>
            <ScoreCounter score={scoreTwo} setScore={setScoreTwo}/>
        </Space>
    )
}

export default ScoreBoard;