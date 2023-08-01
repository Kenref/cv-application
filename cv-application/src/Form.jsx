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

function ExperienceInputFields({ handleExperienceChange }) {
    return (
        <>
            <br />
            <label htmlFor="company">Company: </label>
            <br />
            <input type="text" id="company" onChange={(e) => handleExperienceChange("company", e.target.value)} />
            <br />

            <label htmlFor="position">Position: </label>
            <br />
            <input type="text" id="position" onChange={(e) => handleExperienceChange("position", e.target.value)} />
            <br />

            <label htmlFor="date">Date: </label>
            <br />
            <input type="text" id="date" onChange={(e) => handleExperienceChange("date", e.target.value)} />
            <br />
        </>
    );
}


export function Form({ setName, setTitle, setAbout, experience, setExperience, skills, setSkills }) {
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
                <ExperienceInputFields
                    key={index}
                    experience={exp}
                    handleExperienceChange={(fieldname, value) => handleExperienceChange(index, fieldname, value)}
                />
            ))}

            <br />
            <button type="button" onClick={addSkill}>
                Add Skill
            </button>
            <br />
            <br />
            {skills.map((index) => (
                    <SingleInputField key={index} field={`skill ${index + 1}`} onChange={(e) => handleSkillChange(index, e.target.value)} />
            ))}
        </form>
    );
}
