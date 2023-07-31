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

export function Form({ setName, setTitle, setAbout, experience, setExperience }) {

    const addExperience = () => {
        setExperience([...experience, { company: "Experience", position: "Position", date: "Date" }]);
    };

    const handleExperienceChange = (index, fieldName, value) => {
        const newExperience = [...experience]
        newExperience[index][fieldName] = value
        setExperience(newExperience)
    }


    return (
        <form action="">
            <SingleInputField field="name" onChange={(e) => setName(e.target.value)} />

            <SingleInputField field="title" onChange={(e) => setTitle(e.target.value)} />

            <SingleInputField field="about" onChange={(e) => setAbout(e.target.value)} />

            {
                experience.map((exp, index) => (
                    <ExperienceInputFields
                        key={index}
                        experience={exp}
                        handleExperienceChange={(fieldname, value) => handleExperienceChange(index, fieldname,value)}
                    />
                ))
            }

            <button type="button" onClick={addExperience}>
                Add Experience
            </button>
        </form>
    );
}
