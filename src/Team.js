import React from 'react';
import p from "./img/p1.png";
import linkedin from "./img/linkedin.svg"
import facebook from "./img/facebook.svg";
function Team() {

    const team = [
        {
            "name": "ABXXXX",
            "pos": "Webe",
            "linkedin": "https://github.com/",
            "facebook": "https://github.com/",
            "img": p,
        },
        {
            "name": "ABXXXX",
            "pos": "Webe",
            "linkedin": "https://github.com/",
            "facebook": "https://github.com/",
            "img": p,
        },
        {
            "name": "ABXXXX",
            "pos": "Webe",
            "linkedin": "https://github.com/",
            "facebook": "https://github.com/",
            "img": p,
        },
        {
            "name": "ABXXXX",
            "pos": "Webe",
            "linkedin": "https://github.com/",
            "facebook": "https://github.com/",
            "img": p,
        },
        {
            "name": "ABXXXX",
            "pos": "Webe",
            "linkedin": "https://github.com/",
            "facebook": "https://github.com/",
            "img": p,
        },
        {
            "name": "ABXXXX",
            "pos": "Webe",
            "linkedin": "https://github.com/",
            "facebook": "https://github.com/",
            "img": p,
        },
        {
            "name": "ABXXXX",
            "pos": "Webe",
            "linkedin": "https://github.com/",
            "facebook": "https://github.com/",
            "img": p,
        },
        {
            "name": "ABXXXX",
            "pos": "Webe",
            "linkedin": "https://github.com/",
            "facebook": "https://github.com/",
            "img": p,
        },
        {
            "name": "ABXXXX",
            "pos": "Webe",
            "linkedin": "https://github.com/",
            "facebook": "https://github.com/",
            "img": p,
        },
        {
            "name": "ABXXXX",
            "pos": "Webe",
            "linkedin": "https://github.com/",
            "facebook": "https://github.com/",
            "img": p,
        },
    ];

    const teamcards = team.map((teamember, index)=>{
        return (
            <div className="team-card" key={index}>
                <img src={teamember.img} alt="profileImg"/>
                <div className="team-des">
                    <h5>{teamember.name}</h5>
                    <p>{teamember.pos}</p>
                </div>
                <ul className="team-social">
                    <li><a rel="noreferrer" href={teamember.linkedin} target="_blank"><img src={linkedin} alt="linkedin" /></a></li>
                    <li><a rel="noreferrer" href={teamember.facebook} target="_blank"><img src={facebook} alt="linkedin" /></a></li>
                </ul>
            </div>
        )
    })

    return (
        <div className="team">
            <h1>Meet My Team</h1>
            <section className="team-grid">
                {teamcards}
            </section>
        </div>
    );
}

export default Team;