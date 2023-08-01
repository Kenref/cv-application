import { useState } from "react";

function SingleInputField({ field, onChange }) {
    return (
        <>
            <label htmlFor={field}>{field}: </label>
            <br />
            <input type="text" id={field} onChange={onChange} />
            <br />
        </>
    );
}

function TripleInputField({ handleChange, field1, field2, field3, display1, display2, display3 }) {
    // displays are the labels that are shown on screen
    return (
        <>
            <br />
            <label htmlFor={field1}>{display1}: </label>
            <br />
            <input type="text" id={field1} onChange={(e) => handleChange(field1, e.target.value)} />
            <br />

            <label htmlFor={field2}>{display2}: </label>
            <br />
            <input type="text" id={field2} onChange={(e) => handleChange(field2, e.target.value)} />
            <br />

            <label htmlFor={field3}>{display3}: </label>
            <br />
            <input type="text" id={field3} onChange={(e) => handleChange(field3, e.target.value)} />
            <br />
        </>
    );
}


export function Form({ setName, setTitle, setAbout, experience, setExperience, skills, setSkills, education, setEducation, phoneNumber, setPhoneNumber, email, setEmail, linkedIn, setLinkedIn }) {
    
    const handlePictureUpload = (e) => {
        const file = e.target.files[0]
    }

    const addExperience = () => {
        setExperience([...experience, { company: "Experience", position: "Position", date: "Date" }]);
    };

    const handleExperienceChange = (index, fieldName, value) => {
        const newExperience = [...experience];
        newExperience[index][fieldName] = value;
        setExperience(newExperience);
    };

    const addSkill = () => {
        setSkills([...skills, ""])
    }

    const handleSkillChange = (index, value) => {
        const newSkills = [...skills]
        newSkills[index] = value
        setSkills(newSkills)
    }

    const addEducation = () => {
        setEducation([...education, {institution: "", areaOfStudy: "", date: ""}])
    }

    const handleEducationChange = (index, fieldName, value) => {
        const newEducation = [...education]
        newEducation[index][fieldName] = value
        setEducation(newEducation)
    }

    return (
        <form action="">



            <SingleInputField field="name" onChange={(e) => setName(e.target.value)} />

            <SingleInputField field="title" onChange={(e) => setTitle(e.target.value)} />

            <SingleInputField field="about" onChange={(e) => setAbout(e.target.value)} />

            <br />
            <button type="button" onClick={addExperience}>
                Add Experience
            </button>
            <br />
            {experience.map((exp, index) => (
                <TripleInputField
                    key={index}
                    field1="company"
                    field2="position"
                    field3="date"
                    display1="Company"
                    display2="Position"
                    display3="Date"
                    handleChange={(fieldname, value) => handleExperienceChange(index, fieldname, value)}
                />
            ))}

            <br />
            <button type="button" onClick={addSkill}>
                Add Skill
            </button>
            <br />
            <br />
            {skills.map((skill, index) => (
                <SingleInputField
                    key={index}
                    field={`skill ${index + 1}`}
                    onChange={(e) => handleSkillChange(index, e.target.value)}
                />
            ))}

            <button type="button" onClick={addEducation}>
                Add Education
            </button>

            {education.map((edu, index) => (
                <TripleInputField
                    key={index}
                    field1="institution"
                    field2="areaOfStudy"
                    field3="date"
                    display1="Institution"
                    display2="Area of study"
                    display3="Date"
                    handleChange={(fieldname, value) => handleEducationChange(index, fieldname, value)}
                />
            ))}

            <SingleInputField field="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} />
            <SingleInputField field="Email" onChange={(e) => setEmail(e.target.value)} />
            <SingleInputField field="LinkedIn" onChange={(e) => setLinkedIn(e.target.value)} />
        </form>
    );
}
