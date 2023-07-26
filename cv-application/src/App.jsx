
import { useState } from "react";

const ExperienceList = () => {
	const [experienceItem, setExperienceItem] = useState("<li><h4>Role</h4><p>Company</p><p>Dates</p></li>");

	const addExperience = () => {
		setExperienceItem([...experienceItem, ""]);
	};

	return (
		<div>
			<button onClick={addExperience}>More space</button>
		</div>
	)

}

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
            <form action="" id="form">
                <label htmlFor="profile-image">Profile Image: </label>
                <br />
                <input type="file" id="profile-image" onChange={(e) => setPic(e.target.value)} />
                <br />
                <br />

                <label htmlFor="name">Name: </label>
                <br />
                <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
                <br />

                <label htmlFor="title">Title: </label>
                <br />
                <input type="text" id="title" onChange={(e) => setTitle(e.target.value)} />
                <br />

                <label htmlFor="about">About: </label>
                <br />
                <input type="text" id="about" onChange={(e) => setAbout(e.target.value)} />
                <br />
                <br />

                <label htmlFor="experience">Experience: </label>
                <br />
                <input type="text" id="experience" onChange={(e) => setExperience(e.target.value)} />
                <br />
                <br />

                <label htmlFor="skills">Skills: </label>
                <br />
                <input type="text" id="skills" onChange={(e) => setSkills(e.target.value)} />
                <br />
                <br />

                <label htmlFor="education">Education: </label>
                <br />
                <input type="text" id="education" onChange={(e) => setEducation(e.target.value)} />
                <br />
                <br />

                <label htmlFor="contact">Contact:</label>
                <br />
                <input type="text" id="contact" onChange={(e) => setContact(e.target.value)} />
            </form>

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

