import {services} from './Data';

export default function Services(props) {
    let x = services[props.name]
    let customClass = props.name == 'AdsManage' ? 'col-xl-8 col-lg-8 col-md-12 col-sm-24 col-24' : 'col-xl-6 col-lg-6 col-md-12 col-sm-24 col-24';
    return(
        <section id="WhyChooseOurService">
                <div className="container">
                    <h2>{props.title}</h2>
                    {props.text && <p>{props.text}</p>} 
                    <div className="items">
                        <ul className="row">
                            {x.map((item,key) => (
                                <li key={key} className={customClass}>
                                    <div className="box">
                                        <div className="img"><img src={item.imgUrl} alt={item.title} title={item.title}/></div>
                                        <div className="text">
                                            <h3>{item.title}</h3>
                                            <p>{item.text}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
    )
}