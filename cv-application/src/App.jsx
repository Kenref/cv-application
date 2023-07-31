import { useState } from "react";
import { Form } from "./Form.jsx";



export default function App() {
    const [pic, setPic] = useState("/src/assets/profile-image.jpg");
    

	const [name, setName] = useState("Name")
	const [title, setTitle] = useState("Title")
    const [about, setAbout] = useState("Provide some information about yourself")
    const [experience, setExperience] = useState([{ company: "Company", position: "Position", date: "Date" }])

    const [skills, setSkills] = useState([])

	return (
        <div className="main-container">

            <Form
                name={name} setName={setName}
                title={title} setTitle={setTitle} about={about} setAbout={setAbout}
                experience={experience} setExperience={setExperience} skills={skills} setSkills={setSkills}
            />

            <div className="resume-display">
                <div className="left-side">
                    <img src={pic} alt="profile image" id="image" />
                    <div>
                        <h3>About Me</h3>
                        <p>{about}</p>
                    </div>
                    <div>
                        <h3>Skills</h3>
                        <ul>
                            {skills.map((skill, index) => (
                                <div key={index}>
                                    <li>{skill}</li>
                                </div>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3>Contact</h3>
                        <ul>
                            <li>Phone Number</li>
                            <li>Email</li>
                            <li>linkedIn</li>
                        </ul>
                    </div>
                </div>
                <div className="right-side">
                    <div>
                        <h1>{name}</h1>
                        <h3>{title}</h3>
                    </div>
                    <div>
                        <h3>Experience</h3>
                        <ul>
                            {
                                experience.map((exp, index) => (
                                    <div key={index}>
                                        <li>{exp.company}</li>
                                        <li>{exp.position}</li>
                                        <li>{exp.date}</li>
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <h3>Education</h3>
                        <ul>
                            <li>universtity</li>
                            <li>high school</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

