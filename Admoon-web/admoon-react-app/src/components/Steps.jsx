import {allSteps} from './Data';

export default function Steps(props) {
    let item = props.name
    console.log(allSteps)
    return(
        <section id="Steps">
            <div className="container">
                <h2>{props.children}</h2>
                <div className="content">
                    <ul>
                        {/* {allSteps.tuneup.map((step,key) => 
                            <li key={key}>
                                <div className="title"><strong className="desktop">{step.title}</strong></div>    
                                <div className="number"><b>{key}</b></div>    
                                <div className="text"><div className="paragraph"><strong className="mobile">{step.title}</strong><p>{step.text}</p></div></div>    
                            </li>
                        )} */}
                    </ul>
                </div>
            </div>
        </section>
    )
}