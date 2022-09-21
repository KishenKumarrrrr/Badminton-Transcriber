import React, {useEffect, useState} from "react";
import { Row, Col, Button, Divider, Space} from "antd"
import styles from "./PlayerPosition.css"


function PlayerPosition(props) {

    const { cameraOppPos, cameraNearPos, setCameraOppPos, setCameraNearPos } = props.playerPosition

    const [cameraOppDisabled, setCameraOppDisabled] = useState(false)
    const [cameraNearDisabled, setCameraNearDisabled] = useState(false)

    const DE_R = "de_r"
    const DE_M = "de_m"
    const DE_F = "de_f"
    const AD_F = "ad_f"
    const AD_M = "ad_m"
    const AD_R = "ad_r"

    useEffect(() => {
        if (cameraNearPos === '') {
            setCameraNearDisabled(false)
        } else {
            setCameraNearDisabled(true)
        }
    }, [cameraNearPos])

    useEffect(() => {
        if (cameraOppPos === '') {
            setCameraOppDisabled(false)
        } else {
            setCameraOppDisabled(true)
        }
    }, [cameraOppPos])

    return (<>
        <div>
            <Row>
                <Space size={100} className="courtSection">
                    <Col span={12}>
                        <Button disabled={cameraOppDisabled} onClick={() => setCameraOppPos(DE_R)} className="courtButton">de_r</Button>
                    </Col>
                    <Col span={12}>
                        <Button disabled={cameraOppDisabled} onClick={() => setCameraOppPos(AD_R)} className="courtButton">ad_r</Button>
                    </Col>
                </Space>
            </Row>
            <Row>
                <Space size={100} className="courtSection">
                    <Col span={12}>
                        <Button disabled={cameraOppDisabled} onClick={() => setCameraOppPos(DE_M)} className="courtButton">de_m</Button>
                    </Col>
                    <Col span={12}>
                        <Button disabled={cameraOppDisabled} onClick={() => setCameraOppPos(AD_M)} className="courtButton">ad_m</Button>
                    </Col>
                </Space>
            </Row>
            <Row>
                <Space size={100} className="courtSection">
                    <Col span={12}>
                        <Button disabled={cameraOppDisabled} onClick={() => setCameraOppPos(DE_F)} className="courtButton">de_f</Button> 
                    </Col>
                    <Col span={12}>
                        <Button disabled={cameraOppDisabled} onClick={() => setCameraOppPos(AD_F)} className="courtButton">ad_f</Button>
                    </Col>
                </Space>
            </Row>
        </div>
        <Divider>Net</Divider>
        <div>
            <Row>
                <Space size={100} className="courtSection">
                    <Col span={12}>
                        <Button disabled={cameraNearDisabled} onClick={() => setCameraNearPos(AD_F)} className="courtButton">ad_f</Button>
                    </Col>
                    <Col span={12}>
                        <Button disabled={cameraNearDisabled} onClick={() => setCameraNearPos(DE_F)} className="courtButton">de_f</Button>
                    </Col>
                </Space>
            </Row>
            <Row>
                <Space size={100} className="courtSection">
                    <Col span={12}>
                        <Button disabled={cameraNearDisabled} onClick={() => setCameraNearPos(AD_M)} className="courtButton">ad_m</Button>
                    </Col>
                    <Col span={12}>
                        <Button disabled={cameraNearDisabled} onClick={() => setCameraNearPos(DE_M)} className="courtButton">de_m</Button>
                    </Col>
                </Space>
            </Row>
            <Row>
                <Space size={100} className="courtSection">
                    <Col span={12}>
                        <Button disabled={cameraNearDisabled} onClick={() => setCameraNearPos(AD_R)} className="courtButton">ad_r</Button> 
                    </Col>
                    <Col span={12}>
                        <Button disabled={cameraNearDisabled} onClick={() => setCameraNearPos(DE_R)} className="courtButton">de_r</Button>
                    </Col>
                </Space>
            </Row>
        </div>
    </>)
}

export default PlayerPosition;