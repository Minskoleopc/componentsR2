import React from "react";
import ReactDOM from "react-dom";
import CommentDetails from './CommentDetails'
import Profile from './Profile'


let element = document.querySelector('#root')
let root = ReactDOM.createRoot(element)
function App() {
    return (
        <div>
            <Profile>
                <CommentDetails
                    name="chinmay"
                    city="pune"
                    learning="I am learning js"
                />
            </Profile>
            <Profile>
                <CommentDetails
                    name="poorva"
                    city="ujjain"
                    learning="I am learning python"
                />
            </Profile>

            <Profile>
                <CommentDetails
                    name="amol"
                    city="nagpur"
                    learning="sql"

                />
            </Profile>






            {/* jsx */}

            {/* repeat code */}
            {/* <div style={{border:"1px solid black"}}>
                <h1>chinmay deshpnade</h1>
                <h1>pune</h1>
                <h2>I am learning JS</h2>
            </div>
            <div style={{border:"1px solid black"}}>
                <h1>chinmay deshpnade</h1>
                <h1>pune</h1>
                <h2>I am learning JS</h2>
            </div>
            <div style={{border:"1px solid black"}}>
                <h1>chinmay deshpnade</h1>
                <h1>pune</h1>
                <h2>I am learning JS</h2>
            </div> */}




        </div>
    )
}

root.render(<App />);


