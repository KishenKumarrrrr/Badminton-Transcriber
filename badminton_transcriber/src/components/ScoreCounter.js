import React from 'react'
import {Space, Typography, Row, Button} from 'antd'


function ScoreCounter(props) {
    const {score, setScore} = props
    return (
        <Space direction="vertical" style={{display:'flex', alignItems:'center'}}>
            <Row>
                <Typography.Title level={5}>
                    {score}
                </Typography.Title>
            </Row>
            <Row>
                <Button onClick={() => (setScore(score + 1))}>+</Button>
                <Button onClick={() => (setScore(score - 1))}>-</Button>
            </Row>
        </Space>
    )
}

export default ScoreCounter;