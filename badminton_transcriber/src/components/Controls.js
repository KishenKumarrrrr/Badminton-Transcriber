import React, { useState, useEffect } from "react"
import { Row, Col, Button, Divider, Typography, Space, Steps, message} from "antd"
import ButtonGroup from "antd/lib/button/button-group";
import styles from "./Controls.css"
import { getState, getServeDefState } from "../stateCalculator";
import ServeButtons from "./ServeButtons";

function Controls(props) {

    const {
        scoreOne, 
        scoreTwo,
        setScoreOne,
        setScoreTwo,
        cameraOppPos,
        cameraNearPos,
        setCameraNearPos,
        setCameraOppPos, 
        cameraPosition,
        playerAction,
        setPlayerAction
    } = props 

    const [pointState, setPointState] = useState("")
    const [gameState, setGameState] = useState("")
    const [currTuple, setCurrTuple] = useState("")
    const [container, setContainer] = useState(null);
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState('wait')
    const [playerOneSet, setPlayerOneSet] = useState(0);
    const [playerTwoSet, setPlayerTwoSet] = useState(0);
    const [disableButtons, setDisableButtons] = useState(false)

    const [serveType, setServeType] = useState();
    const [servePosition, setServePosition] = useState();
    const [serveAttDirection, setServeAttDirection] = useState();
    const [serveDefAction, setServeDefAction] = useState();
    const [serveDefResult, setServeDefResult] = useState();


    function processServe() {
        const isValidAttackServe = serveType === 's_att' && servePosition !== undefined && serveAttDirection != undefined;
        const isValidDefServe = serveType === 's_def' && ((serveDefAction !== undefined && serveDefResult !== undefined) || (serveDefAction === 'error'))

        if (isValidAttackServe && isValidDefServe) {
            message.error("Both serve states detected. Please click 'clear' and try again");
            return
        }

        if (isValidAttackServe) {
            const serveAtTuple = `(${serveType}, ${servePosition}, ${serveAttDirection})`
            setPointState(`${pointState}${pointState === "" ? "" : ","}${serveAtTuple}`)
            clearTuple()
            message.success("Attacking serve added to point")
        } else {
            const serveDefTuple = getServeDefState(servePosition, serveDefAction, serveDefResult)
            setPointState(`${pointState}${pointState === "" ? "" : ","}${serveDefTuple}`)
            clearTuple()
            message.success("Defending serve added to point")
        }

    }


    function clearTuple() {
        setCameraNearPos("")
        setCameraOppPos("")
        setProgress(null)
        setStatus("wait")
        setPlayerAction("none")
        setServeType()
        setServePosition()
        setServeAttDirection()
        setServeDefAction()
        setServeDefResult()
    }

    function commitMove() {
        const resultPosition = playerAction === 'error' ? "-" : cameraPosition === "near" ? cameraOppPos : cameraNearPos
        const playerPosition = cameraPosition === "near" ? cameraNearPos : cameraOppPos

        console.log(playerPosition)
        console.log(resultPosition)

        const MOVE_TUPLE = getState(playerPosition, playerAction, resultPosition)

        setPointState(`${pointState}${pointState === "" ? "" : ","}${MOVE_TUPLE}`)
        clearTuple()
        message.success("Action added to point")
    }

    function addPoint() {
        const POINT_MESSAGE = `Match Score: ${scoreOne} - ${scoreTwo}    Play: ${pointState}\n`
        setGameState(`${gameState}\n${POINT_MESSAGE}`)
        setPointState("")
        clearTuple()
        message.success("Point added")
    }

    function addSet() {
        if (scoreOne === scoreTwo) {
            message.error("Can't add a set if the scores are equal")
            return
        }
        if (scoreOne > scoreTwo) {
            setPlayerOneSet(playerOneSet + 1);
        } else {
            setPlayerTwoSet(playerTwoSet + 1);
        }
        const SET_ENDED_MESSAGE = `END OF SET. SET SCORE: ${playerOneSet} - ${playerTwoSet}\n`
        setGameState(`${gameState}\n ${SET_ENDED_MESSAGE}`)
        message.success("Set added")
        clearTuple();
    }

    useEffect(() => {
        if (playerPosition === "" || playerAction === "none" || playerAction === "") {
            setDisableButtons(true)
        }
        if (cameraPosition === '') return
        const resultPosition = playerAction === 'error' ? "-" : cameraPosition === "near" ? cameraOppPos : cameraNearPos
        const playerPosition = cameraPosition === "near" ? cameraNearPos : cameraOppPos
        setCurrTuple(`(${playerPosition}, ${playerAction}, ${resultPosition})`)
        if (playerPosition !== "") {
            setProgress(1)
        }
        if (playerPosition !== "" && playerAction !== "none") {
            setProgress(2)
        }
        if (playerPosition !== "" && (playerAction !== "none" && resultPosition !== "") || (playerPosition !== "" && playerAction === "error")) {
            setProgress(2)
            setStatus('finish')
            setDisableButtons(false)
        }

    }, [cameraNearPos, cameraOppPos, cameraPosition, playerAction])


    return (
        <>
            <Row>
                <Col offset={2}>
                    <Space direction="vertical">
                        <Typography.Title>Serve</Typography.Title>
                        <ServeButtons 
                            setServeType={setServeType}
                            setServePosition={setServePosition}
                            setServeAttDirection={setServeAttDirection}
                            setServeDefAction={setServeDefAction}
                            setServeDefResult={setServeDefResult}
                            processServe={processServe}
                        />
                    </Space>
                    <Divider type="vertical"/>
                    <Space direction="vertical">
                        <Typography.Title>Action</Typography.Title>
                        <Steps direction="vertical" current={progress} status={status}>
                            <Steps.Step title="Player Position" description="Which zone the player was in" />
                            <Steps.Step title="Player Action" description="What action the player performed" />
                            <Steps.Step title="Result Position" description="Which zone the shuttlecock moved to. (non-error only)" />
                        </Steps>
                        <>
                        <Typography.Title level={5}>Current State</Typography.Title>
                        {currTuple}
                        </>
                    </Space>
                </Col>
            </Row>
            <Divider/>
            <Row>
                <Space size="middle">
                    <Button onClick={clearTuple}>Clear</Button>
                    <Button disabled={disableButtons} onClick={commitMove}>Commit</Button>
                    <Button onClick={addPoint}>Add Point</Button>
                    <Button onClick={addSet}>Add Set</Button>
                    <Button>Generate</Button>
                </Space>
            </Row>
            <Divider/>
            <Row>
                <div className="scrollable-container" ref={setContainer}>
                        <Typography.Paragraph 
                            level={5}
                            editable = {{
                                onChange: (updatedString) => setGameState(updatedString)
                            }}
                        >
                        {gameState}
                        </Typography.Paragraph>
                </div>
            </Row>
        </>
    )

}

export default Controls;