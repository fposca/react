
import React from "react";
import Test from "../../Test";
const TestContainer = () => {

    const [displayTest, setDisplayTest] = useState(true);

    return (
        <div>
            <h1>Este es el componente Test Container</h1>
            {displayTest ? <Test setDisplayTest= {setDisplayTest}/> : null}
        </div>
    )
}

export default TestContainer;