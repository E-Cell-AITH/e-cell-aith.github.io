import React from 'react';
import Shailza from "./img/Shailza.jpeg";
import linkedin from "./img/linkedin.svg";
import Anant from "./img/Anant_Vaish.jpeg";
import Pratyush from "./img/Pratyush.jpeg";
import Ashutosh from "./img/Ashutosh.jpeg";
import Aman from "./img/Aman_Mishra.jpg";
import Ajay from "./img/Ajay.jpeg";
import Mukesh from "./img/Mukesh.jpeg";
import Neha from "./img/Neha.jpg";
import Ritesh from "./img/Ritesh.jpeg";
import Sahebealam from "./img/Sahebealam.jpg";
import Saloni from "./img/Saloni.jpeg";
import Simran from "./img/Simran.jpeg";
import Vaishali from "./img/Vaishali.jpeg"

function Team() {

    const team = [
        {
            "name": "Anant Vaish",
            "pos": "Overall Coordinator",
            "linkedin": "https://www.linkedin.com/in/anantvaish/",
            "img": Anant,
        },
        {
            "name": "Pratyush Pandey",
            "pos": "Overall Coordinator",
            "linkedin": "https://www.linkedin.com/in/pratyush-pandey-/",
            "img": Pratyush,
        },
        {
            "name": "Ashutosh Kumar",
            "pos": "Overall Coordinator",
            "linkedin": "https://www.linkedin.com/in/ashutro-e-cell-aith/",
            "img": Ashutosh,
        },
        {
            "name": "Aman Mishra",
            "pos": "Event Coordinator",
            "linkedin": "https://www.linkedin.com/in/amanmishra2391/",
            "img": Aman,
        },
        {
            "name": "Ajay Gupta",
            "pos": "Designer",
            "linkedin": "https://www.linkedin.com/in/ajay-/",
            "img": Ajay,
        },
        {
            "name": "Mukesh Kumar Shah",
            "pos": "Operations",
            "linkedin": "https://www.linkedin.com/in/mukesh-shah-e-cell-aith/",
            "img": Mukesh,
        },
        {
            "name": "Neha",
            "pos": "Designer",
            "linkedin": "https://www.linkedin.com/in/neha-singh-e-cell-aith/",
            "img": Neha,
        },
        {
            "name": "Ritesh Singh",
            "pos": "Designer",
            "linkedin": "https://www.linkedin.com/in/rk-singh-e-cell-aith/",
            "img": Ritesh,
        },
        {
            "name": "Md. Sahebealam",
            "pos": "Operations",
            "linkedin": "https://www.linkedin.com/in/mdsahebealam/",
            "img": Sahebealam,
        },
        {
            "name": "Saloni Tiwari",
            "pos": "Content and Media",
            "linkedin": "https://www.linkedin.com/in/saloni-tiwary-e-cell-aith/",
            "img": Saloni,
        },
        {
            "name": "Vaishali Mishra",
            "pos": "Marketing",
            "linkedin": "https://www.linkedin.com/in/vaishali-mishra-3135b91a3/",
            "img": Vaishali,
        },
        {
            "name": "Simran Gupta",
            "pos": "Web Developer",
            "linkedin": "https://www.linkedin.com/in/-simran-gupta/",
            "img": Simran,
        },
        {
            "name": "Shailza Tiwari",
            "pos": "Content",
            "linkedin": "https://www.linkedin.com/in/shailza-tiwari-4848b0187/",
            "img": Shailza,
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