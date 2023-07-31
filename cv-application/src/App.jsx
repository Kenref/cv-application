import { useState } from "react";
import { Form } from "./Form.jsx";



export default function App() {
    const [pic, setPic] = useState("/src/assets/profile-image.jpg");
    

	const [name, setName] = useState("Name")
	const [title, setTitle] = useState("Title")
    const [about, setAbout] = useState("Provide some information about yourself")
    const [experience, setExperience] = useState([{ company: "s", position: "d", date: "df" }])
    experience.forEach((exp => (
        console.log(exp.company)
    )))

	return (
        <div className="main-container">

            <Form
                name={name} setName={setName}
                title={title} setTitle={setTitle} about={about} setAbout={setAbout}
                experience={experience} setExperience={setExperience}
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
                            <li>programming</li>
                            <li>designing</li>
                            <li>writing</li>
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
                                experience.forEach((index => (
                                    <>
                                        <li>{index.company}</li>
                                        <li>{index.position}</li>
                                        <li>{index.index}</li>
                                    </>
                                )))
                            }
                            <li>{experience.company}</li>
                            <li>{experience.position}</li>
                            <li>{experience.date}</li>
                            <li>
                                <h4>Role</h4>
                                <p>Company</p>
                                <p>Dates</p>
                            </li>
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

