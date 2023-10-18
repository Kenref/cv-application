import { useState } from "react";
import { Form } from "./Form.jsx";

export default function App() {
	const [picture, setPicture] = useState("src/assets/profile-image2.jpg");
	const [name, setName] = useState("John Smith");
	const [title, setTitle] = useState("Developer");
	const [about, setAbout] = useState(
		"Consequat qui cillum ipsum qui quis ullamco amet officia aute nisi sit dolor laborum proident minim."
	);
	const [experience, setExperience] = useState([
		{ company: "Company", position: "Position", date: "Dates" },
	]);
	const [skills, setSkills] = useState(["Coding", "Web design"]);
	const [education, setEducation] = useState([
		{
			institution: "Institution",
			areaOfStudy: "Area of study",
			date: "Dates",
		},
	]);
	const [phoneNumber, setPhoneNumber] = useState("Phone Number");
	const [email, setEmail] = useState("Email");
	const [linkedIn, setLinkedIn] = useState("LinkedIn");

	return (
		<div
			className="main-container"
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				maxWidth: "2000px",
				gap: "200px",
			}}
		>
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

			<div
				className="resume-display"
				style={{
					display: "flex",
					flexDirection: "row",
					height: "90vh",
					width: "50vw",
					maxWidth: "1000px",
					minWidth: "600px",
					margin: "3vh 20px 20px 20px",
					boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
					backgroundColor: "aliceblue",
				}}
			>
				<div
					className="left-side display"
					style={{
						backgroundColor: "#FFFFFF",
						width: "100%",
						padding: "50px 30px 5px 80px",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<img
						src={picture}
						alt="profile image"
						id="image"
						style={{
							width: "200px",
							borderRadius: "30px",
							marginBottom: "20px",
							marginLeft: "50px",
						}}
					/>
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
				<div
					className="right-side display"
					style={{
						backgroundColor: "#F8EDE7",
						width: "100%",
						padding: "50px 0 5px 80px",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<div>
						<h1>{name}</h1>
						<h3>{title}</h3>
					</div>
					<div>
						<h3>Experience</h3>
						<ul>
							{experience.map((exp, index) => (
								<div key={index}>
									<li>{exp.company}</li>
									<li>{exp.position}</li>
									<li>{exp.date}</li>
								</div>
							))}
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
