import React, { useState } from "react"
import { Row, Col } from "antd"
import Court from "./Court";
import Controls from "./Controls";

function Main() {

    const [scoreOne, setScoreOne] = useState(0)
    const [scoreTwo, setScoreTwo] = useState(0)
    const [cameraOppPos, setCameraOppPos] = useState('')
    const [cameraNearPos, setCameraNearPos] = useState('')
    const [cameraPosition, setCameraPosition] = useState('')
    const [playerAction, setPlayerAction] = useState('none')


    return (
        <>  
        <Row>
            <Col span={12}>
                <Controls
                    scoreOne={scoreOne} 
                    scoreTwo={scoreTwo} 
                    setScoreOne={setScoreOne} 
                    setScoreTwo={setScoreTwo} 
                    cameraOppPos={cameraOppPos}
                    cameraNearPos={cameraNearPos}
                    setCameraNearPos={setCameraNearPos}
                    setCameraOppPos={setCameraOppPos}
                    cameraPosition={cameraPosition}
                    playerAction={playerAction}
                    setPlayerAction={setPlayerAction}
                />
            </Col>
            <Col span={12}>
                <Court 
                    scoreOne={scoreOne} 
                    scoreTwo={scoreTwo} 
                    setScoreOne={setScoreOne} 
                    setScoreTwo={setScoreTwo} 
                    cameraOppPos={cameraOppPos}
                    cameraNearPos={cameraNearPos}
                    setCameraNearPos={setCameraNearPos}
                    setCameraOppPos={setCameraOppPos}
                    setCameraPosition={setCameraPosition}
                    setPlayerAction={setPlayerAction}
                />
            </Col>
        </Row>
        </>
    )
}

export default Main;