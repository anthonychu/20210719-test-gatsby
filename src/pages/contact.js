import * as React from "react"

import Layout from "../components/layout"

const ContactPage = ({ data, location }) => {
    const [message, setMessage] = React.useState("")

    const sendEmail = React.useCallback(() => {
        alert(message)
    }, [message])

    return (
        <Layout location={location} title="Contact me">
            <div>
                <label>
                    Message<br />
                    <textarea name="message" id="message" onChange={e => setMessage(e.target.value)} rows="5" />
                </label>
            </div>
            <div>
                <button onClick={sendEmail}>Send</button>
            </div>
        </Layout>
    )
}

export default ContactPage