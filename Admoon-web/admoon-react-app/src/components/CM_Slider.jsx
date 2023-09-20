import OwlCarousel from 'react-owl-carousel2';
import '../owl.theme.default.css';
import {people, getImageUrl} from './Data';

const CM_Slider = () => {
    const options = {
        loop:true,
        dots:false,
        nav:true,
        // rtl:true,
        autoplay: true,
        autoplayHoverPause: true,
        singleItem:true,
        autoplayTimeout: 6000,
        navText : ["<img src='assets/images/leftArrowSlider.svg' width='54px'/>","<img src='assets/images/rightArrowSlider.svg' width='54px'/>"],
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1
            }
            }
    }
    const events = {
        // onDragged: function(event) { console.log('onDragged: ' + event.type); },
        // onChanged: function(event) { console.log('onChanged: ' + event.type); },
        // onTranslate: function(event) { console.log('onTranslate: ' + event.type); }
    }

    const listItems = people.map(person =>
        <div className="item" key={person.id}>
            <div className="stars">
            {Array.from(Array(person.star), (e, i) => {
                return <img key={i} src="assets/images/starIcon.svg" alt="star" width="25" height="25" className="star"/>
            })}
            </div>
            <p>{person.comment}</p>
            <div className="profile">
                <div className="img"><img src={getImageUrl(person)} alt={person.name} title={person.name+' '+person.field}/></div>
                <div className="info">
                    <span className="name">{person.name}</span>
                    <span className="field">{person.field}</span>
                </div>
            </div>
        </div>
    );

        return (
            <OwlCarousel className='owl-carousel' options={options} events={events}>
                {listItems}
            </OwlCarousel>
        )
}

export default CM_Slider;