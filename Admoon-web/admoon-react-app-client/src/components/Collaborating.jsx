import {collaborating} from './Data';

export default function Collaborating(props) {
    let x = collaborating[props.name]
    return(
        <section id="collaborating">
                <div className="container">
                    <div className="title">
                        <h2>Start collaborating in 4 easy steps</h2>
                        <p>When it comes to receiving your data and connecting with you, we've made it hassle-free. Here are the steps:</p>
                    </div>
                    <div className="items">
                        <ul className="row">
                            {Object.keys(x).map((step,i) => (
                                <li key={i} className="col-xl-12 col-lg-12 col-md-12 col-sm-24 col-24">
                                    <div className="content">
                                        <img src={x[step].imgUrl} alt="step-Icon" title="step-Icon"/>
                                        <p>{x[step].text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
    )
}