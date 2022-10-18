const ERROR = 'error'
const DOWNLINE = "d"
const CROSSCOURT = "c"

const FRONT_COURT = "f"
const MID_COURT = "m"
const REAR_COURT = "d"

const SHORT = "s"
const MID = "m"
const DEEP = "d"

const DE_R = "de_r"
const DE_M = "de_m"
const DE_F = "de_f"
const AD_F = "ad_f"
const AD_M = "ad_m"
const AD_R = "ad_r"

const CROSS_SHORT = 'cs'
const CROSS_MID = 'cm'
const CROSS_DEEP = 'cd'
const DOWN_SHORT = 'ds'
const DOWN_MID = 'dm'
const DOWN_DEEP = 'dd'


export function getState(playerPosition, action, resultPosition) {
    if (action === ERROR) {
        return `(${playerPosition, action})`
    }
    return `(${playerPosition}, ${getShotType(playerPosition, action, resultPosition)}, ${getResultPosition(resultPosition)})`
}


function getShotType(playerPostion, action, resultPosition) {
    const SHOT_FROM_SIDE = playerPostion.slice(0, 3)
    const SHOT_TO_SIDE = resultPosition.slice(0, 3)

    // Court sides are reflected accross the net so if the court side is the same its crosscourt
    const SHOT_TYPE = SHOT_FROM_SIDE !== SHOT_TO_SIDE ? DOWNLINE : CROSSCOURT

    const SHOT_TO_ZONE = resultPosition.slice(3)

    const SHOT_DEPTH = SHOT_TO_ZONE === FRONT_COURT ? SHORT : SHOT_TO_ZONE === MID_COURT ? MID : DEEP

    return `${action}_${SHOT_TYPE}${SHOT_DEPTH}`
}

function getResultPosition(resultPosition) {
    switch (resultPosition) {
        case DE_R:
            return "1"
        case AD_R:
            return "2"
        case DE_M:
            return "3"
        case AD_M:
            return "4"
        case DE_F:
            return "5"
        case AD_F:
            return "6"
    }

}

export function getServeDefState(servePosition, serveDefAction, serveDefResult) {
    const ballPos = getBallPos(servePosition, serveDefResult)
    return `(s_def, ${servePosition}, ${serveDefAction}, ${ballPos})`
}

function getBallPos(servePosition, serveDefResult) {
    if (servePosition === 'de') {
        switch (serveDefResult) {
            case CROSS_SHORT:
                return "6"
            case CROSS_MID:
                return "4"
            case CROSS_DEEP:
                return "2"
            case DOWN_SHORT:
                return "5"
            case DOWN_MID:
                return "3"
            case DOWN_DEEP:
                return "1"
        }
    } else {
        switch (serveDefResult) {
            case CROSS_SHORT:
                return "5"
            case CROSS_MID:
                return "3"
            case CROSS_DEEP:
                return "1"
            case DOWN_SHORT:
                return "6"
            case DOWN_MID:
                return "4"
            case DOWN_DEEP:
                return "2"
        }
    }
}