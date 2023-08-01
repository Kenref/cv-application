import { useState } from "react";
import { Form } from "./Form.jsx";



export default function App() {
    const [picture, setPicture] = useState("/src/assets/profile-image.jpg");
	const [name, setName] = useState("Name")
	const [title, setTitle] = useState("Title")
    const [about, setAbout] = useState("Provide some information about yourself")
    const [experience, setExperience] = useState([{ company: "Company", position: "Position", date: "Date" }])
    const [skills, setSkills] = useState([])
    const [education, setEducation] = useState([{institution: "Institution", areaOfStudy: "Area of Study", date: "Date"}])
    const [phoneNumber, setPhoneNumber] = useState("Phone Number")
    const [email, setEmail] = useState("Email")
    const [linkedIn, setLinkedIn] = useState("LinkedIn")

	return (
        <div className="main-container">

            <Form
                name={name}
                setName={setName}
                title={title}
                setTitle={setTitle}
                about={about}
                setAbout={setAbout}
                experience={experience}
                setExperience={setExperience}
                skills={skills}
                setSkills={setSkills}
                education={education}
                setEducation={setEducation}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                email={setEmail}
                setEmail={setEmail}
                linkedIn={linkedIn}
                setLinkedIn={setLinkedIn}
                setPicture={setPicture}
            />

            <div className="resume-display">
                <div className="left-side display">
                    <img src={picture} alt="profile image" id="image" />
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
                            <li>{phoneNumber}</li>
                            <li>{email}</li>
                            <li>{linkedIn}</li>
                        </ul>
                    </div>
                </div>
                <div className="right-side display">
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
                            {education.map((edu, index) => (
                                <div key={index}>
                                    <li>{edu.institution}</li>
                                    <li>{edu.areaOfStudy}</li>
                                    <li>{edu.date}</li>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

