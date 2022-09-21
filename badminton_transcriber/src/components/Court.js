import React from "react";
import { Col, Row, Space, Typography, Select, Divider } from "antd"
import ScoreBoard from "./Scoreboard";
import PlayerPosition from "./PlayerPosition";


function Court(props) {
    return (
        <>
            <Row>
                <Space direction="horizontal" size="large" style={{ display: 'flex', alignItems:'center', alignContent:'center' }}>
                    <div>
                        <Col span={4}>
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
                    <div>
                        <Col span={4}>
                            <Typography.Title level={5} style={{ width: '200px' }}>    
                                Player Action
                            </Typography.Title>
                            <Select style={{ width: '200px' }} onSelect={(input) => props.setPlayerAction(input)}>
                                <Select.Option key={"none"} value={"none"}>
                                    None
                                </Select.Option>
                                <Select.Option key={"bh"} value={"bh"}>
                                    Backhand
                                </Select.Option>
                                <Select.Option key={"fh"} value={"fh"}>
                                    Forehand
                                </Select.Option>
                                <Select.Option key={"error"} value={"error"}>
                                    Error
                                </Select.Option>
                            </Select>
                        </Col>
                    </div>
                </Space>
            </Row>
            <Divider></Divider>
            <Row>
                <PlayerPosition playerPosition={props}/>
            </Row>
        </>
    )
}

export default Court;