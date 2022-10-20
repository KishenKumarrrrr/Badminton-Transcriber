import React, { useState } from "react";
import { Row, Col, Space, Button, Select } from "antd"

function ServeButtons(props) {

    const [isAttack, setIsAttack] = useState(true);
    const [currStatus1, setCurrStatus1] = useState("")
    const [currStatus2, setCurrStatus2] = useState("")
    const [currStatus3, setCurrStatus3] = useState("")
    const [currStatus4, setCurrStatus4] = useState("")

    function setServeType(input) { 
        if (input === 's_att') {
            setIsAttack(true)
            setCurrStatus1("error")
            setCurrStatus2("error")
        } else if (input === 's_def'){
            setIsAttack(false)
            setCurrStatus1("error")
            setCurrStatus3("error")
            setCurrStatus4("error")
        }
    }

    function addServe() {
        props.processServe()
        setCurrStatus1("error")
        setCurrStatus2("error")
        setCurrStatus3("error")
        setCurrStatus4("error")

    }

    return (
        <Row>
            <Col>
                <Space direction="vertical">
                    <Select style={{ width: '200px' }} 
                    onSelect={(input) => { 
                        props.setServeType(input); 
                        setServeType(input)}
                    } 
                    placeholder="Serve Type"
                    >
                        <Select.Option key={"s_att"} value={"s_att"}>
                            Player Attacking
                        </Select.Option>
                        <Select.Option key={"s_def"} value={"s_def"}>
                            Player Defending
                        </Select.Option>
                    </Select>
                    <Select style={{ width: '200px' }} 
                        onSelect={(input) => {
                            props.setServePosition(input)
                            setCurrStatus1("")
                        }}
                        placeholder="Player Position"
                        status={currStatus1}
                    >
                        <Select.Option key={"ad"} value={"ad"}>
                            Player in Ad court
                        </Select.Option>
                        <Select.Option key={"de"} value={"de"}>
                            Player in De court
                        </Select.Option>
                    </Select>
                    { isAttack 
                        ?  
                        <Select style={{ width: '200px' }} 
                            placeholder="Serve Direction"
                            onSelect={input => {
                                props.setServeAttDirection(input)
                                setCurrStatus2("")
                            }}
                            status={currStatus2}
                        >
                            <Select.Option key={"narrow"} value={"narrow"}>
                                Narrow
                            </Select.Option>
                            <Select.Option key={"wide"} value={"wide"}>
                                Wide
                            </Select.Option>
                            <Select.Option key={"body"} value={"body"}>
                                Body
                            </Select.Option>
                            <Select.Option key={"error"} value={"error"}>
                                Error
                            </Select.Option>
                        </Select>
                        : 
                        <>
                        <Select style={{ width: '200px' }} 
                            placeholder="Player Action"
                            onSelect={input => {
                                props.setServeDefAction(input)
                                setCurrStatus3("")
                            }}
                            status={currStatus3}
                        >
                            <Select.Option key={"fh"} value={"fh"}>
                                Fronthand
                            </Select.Option>
                            <Select.Option key={"bh"} value={"bh"}>
                                Backhand
                            </Select.Option>
                            <Select.Option key={"error"} value={"error"}>
                                Error
                            </Select.Option>
                        </Select>
                        <Select style={{ width: '200px' }} 
                            placeholder="Result"
                            onSelect={input => {
                                props.setServeDefResult(input)
                                setCurrStatus4("")
                            }}
                            status={currStatus4}
                        >
                            <Select.Option key={"cs"} value={"cs"}>
                                Cross Short
                            </Select.Option>
                            <Select.Option key={"cm"} value={"cm"}>
                                Cross Mid
                            </Select.Option>
                            <Select.Option key={"cd"} value={"cd"}>
                                Cross Deep
                            </Select.Option>
                            <Select.Option key={"ds"} value={"ds"}>
                                Down Short
                            </Select.Option>
                            <Select.Option key={"dm"} value={"dm"}>
                                Down Mid
                            </Select.Option>
                            <Select.Option key={"dd"} value={"dd"}>
                                Down Deep
                            </Select.Option>
                        </Select>
                        </>}
                    <Button onClick={addServe}>Add Serve</Button>
                </Space>
            </Col>
        </Row>
    )

}

export default ServeButtons;