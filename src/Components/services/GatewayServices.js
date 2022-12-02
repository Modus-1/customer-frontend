import axios from "axios";

const MODUS_SESSION_TYPE = {
    /**
     * A normal user session.
     */
    USER: 0
};

/**
 * Gets a session from the Gateway that is linked to the tableNumber and/or session cookie.
 * @param {MODUS_SESSION_TYPE} type The access type requested.
 * @param {Number} tableNumber The tableNumber to get the session for.
 */
async function getSession(tableNumber, type = MODUS_SESSION_TYPE.USER) {

    if (typeof tableNumber !== 'number' || tableNumber <= 0) {
        throw new Error("Invalid table number, expected a number above 0.");
    }
    
    if (!Object.values(MODUS_SESSION_TYPE).includes(type)) {
        throw new Error("Invalid session type.");
    }

    const parameters = {
        "type": type,
        "tableNumber": tableNumber
    };

    const response = await axios.post("/session/init", parameters);

    if (response.status == 200) {
        return response.data;
    }

    throw new Error(response.data);
}

export { getSession, MODUS_SESSION_TYPE };