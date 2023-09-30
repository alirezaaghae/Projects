// import { Children } from 'react';

export default function Intro(prpos) {
    // let title = Children.toArray(children[0])
    // let text = Children.toArray(children[1])
    return(
        <section id="Intro">
            <div className="container">
                <h2>{prpos.title}</h2>
                <p>{prpos.text}</p>
            </div>
        </section>
    )
    
}