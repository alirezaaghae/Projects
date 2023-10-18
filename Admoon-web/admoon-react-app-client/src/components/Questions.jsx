import {questions} from './Data'

export default function Questions(props) {
    let x = questions[props.name]
    return(
        <section id="Questions">
                <div className="container">
                    <h2>{props.title}</h2>
                        <div className="items">
                            <div className="panel-group" id="accordion">
                                {x.map((item,key) => (
                                    <div key={key} className="panel panel-default">
                                        <div>
                                            <h4 className="panel-title">
                                                <a data-toggle="collapse" data-parent="#accordion" href={"#collapse"+key} className="collapsed" aria-expanded="false"><div><span>{item.question}</span><img src="assets/images/PolygonIcon.svg" alt="" title=""/></div></a>
                                            </h4>
                                        </div>
                                    <div id={"collapse"+key} className="panel-collapse collapse" aria-expanded="false" style={{height: '0px'}}>
                                        <div className="panel-body"><p>{item.answer}</p></div>
                                    </div>
                                </div>
                                ))}
                            </div> 
                        </div>
                </div>
        </section>
    )
}