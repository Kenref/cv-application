import { useState } from "react";
import { Form } from "./Form.jsx";

// const ExperienceList = () => {
// 	const [experienceItem, setExperienceItem] = useState("<li><h4>Role</h4><p>Company</p><p>Dates</p></li>");

// 	const addExperience = () => {
// 		setExperienceItem([...experienceItem, ""]);
// 	};

// 	return (
// 		<div>
// 			<button onClick={addExperience}>More space</button>
// 		</div>
// 	)

// }

export default function App() {
	const [pic, setPic] = useState("/src/assets/profile-image.jpg");
	const [name, setName] = useState("Name")
	const [title, setTitle] = useState("Title")
	const [about, setAbout] = useState("Provide some information about yourself")
	const [experience, setExperience] = useState("Experience")
	const [skills, setSkills] = useState("Skills")
	const [education, setEducation] = useState("Education")
	const [contact, setContact] = useState("Contact")






	return (
        <div className="main-container">
            {/* <form action="">
                <InputField field="name" value={name} onChange={(e) => setName(e.target.value)}></InputField>

                <InputField field="title" value={title} onChange={(e) => setTitle(e.target.value)}></InputField>
            </form> */}

            <Form name={name} setName={setName} title={title} setTitle={setTitle} about={about} setAbout={setAbout}></Form>

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
                            {/* <ExperienceList></ExperienceList> */}
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

