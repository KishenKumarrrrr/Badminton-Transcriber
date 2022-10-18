import React from "react";
import { Col, Row, Space, Typography, Select, Divider, Button } from "antd"
import ScoreBoard from "./Scoreboard";
import PlayerPosition from "./PlayerPosition";


function Court(props) {
    return (
        <>
            <Row>
                <Space direction="horizontal" size="large" style={{ display: 'flex', justifyItems: 'center', paddingTop: 40}}>
                    <div>
                        <Col span={4} offset={2}>
                            <Typography.Title level={5} style={{ width: '200px' }}>    
                                Camera
                            </Typography.Title>
                            <Select style={{ width: '200px' }} onSelect={(input) => props.setCameraPosition(input)}>
                                <Select.Option key={"near"} value={"near"}>
                                    Player Near
                                </Select.Option>
                                <Select.Option key={"opp"} value={"opp"}>
                                    Player Opp
                                </Select.Option>
                            </Select>
                        </Col>
                    </div>
                    <div>
                        <Col span={4}>
                            <ScoreBoard scoreBoard={props}/>
                        </Col>
                    </div>
                </Space>
            </Row>
            <Divider></Divider>
            <Row style={{justifyContent:'center'}}>
                <PlayerPosition playerPosition={props}/>
            </Row>
            <Row>
            <div>
                <Col span={4} offset={2} style={{paddingTop:40}}>
                    <Typography.Title level={5} style={{ width: '200px' }}>    
                        Player Action
                    </Typography.Title>
                    <Space direction="horizontal" size="large">
                        <Button onClick={() => props.setPlayerAction('bh')}>
                            Backhand
                        </Button>
                        <Button onClick={() => props.setPlayerAction('fh')}>
                            Forehand
                        </Button>
                        <Button onClick={() => props.setPlayerAction('error')}>
                            Error
                        </Button>
                    </Space>
                </Col>
            </div>
            </Row>
        </>
    )
}

export default Court;