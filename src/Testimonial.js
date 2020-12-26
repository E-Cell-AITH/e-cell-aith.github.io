import React, { useState, useEffect } from 'react';
import arpit from "./img/Arpit.jpg";
import dilnawaz from "./img/Dilnawaz.jpg"

function Testimonial() {
    
    const [active, setActive] = useState(0);
    const testmonial = [
        {
            id: 1,
            "name": "Dilnawaz Khan",
            "about": "The response I received by the audience was spectacular. The webinar was properly managed by the E-Cell team and I look forward to more such events.", 
            "des": "Founder at Codesign Labs & Power Deck Ex-CIIE. CO, Mentor- AIM, TEDx Speaker",
            "img": dilnawaz,
        },
        {
            id: 2,
            "name": "Arpit Vijay",
            "about": "Lorem ipsum dolor sit amet,  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            "des": "Founder & CEO of YOUU, Member of International Youth Exchange, Past volunteer of Indian Red Cross Society and The JAX Foundation",
            "img": arpit,
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActive(active => (active + 1)%2 );
        }, 5000);
        return () => clearInterval(interval);
    }, [active]);

    return (
        <React.Fragment>
            <section id="testim" className="testim">
            <h2>Testimonial</h2>
            <div className="br"></div>
            <div className="wrap">
                <ul id="testim-dots" className="dots">
                    <li className={"dot " + (active === 0 ? "active": "")}></li>
                    <li className={"dot " + (active === 1 ? "active": "")}></li>
                </ul>
                <div id="testim-content" className="cont">   
                    <div key={testmonial[active].id} className="active">
                        <div className="img"><img src={testmonial[active].img} alt="Name" /></div>
                        <h2>{testmonial[active].name}</h2>
                        <p className="des">{testmonial[active].des}</p>
                        <p>{testmonial[active].about}</p>                    
                    </div>
                </div>
            </div>
            </section>
        </React.Fragment>
    );
}

export default Testimonial;
