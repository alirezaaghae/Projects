// import { Children } from 'react';

export default function Intro({ children }) {
    // let title = Children.toArray(children[0])
    // let text = Children.toArray(children[1])
    return(
        <section id="Intro">
            <div className="container">
            {children}
            </div>
        </section>
    )
    
}