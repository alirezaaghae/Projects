import {allSteps} from './Data';

export default function Steps(props) {
    let x = allSteps[props.name]
    return(
        <section id="Steps">
            <div className="container">
                <h2>{props.children}</h2>
                <div className="content">
                    <ul>
                        {Object.keys(x).map((step,i) => (
                            <li key={i}>
                                <div className="title"><strong className="desktop">{x[step].title}</strong></div>    
                                <div className="number"><b>{step}</b></div>    
                                <div className="text"><div className="paragraph"><strong className="mobile">{x[step].title}</strong><p>{x[step].text}</p></div></div>    
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}