import { useState } from "react";

function SingleInputField({ field, onChange }) {
    const id = field.replace(/\s/g, "-");
    return (
        <>
            <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}: </label>
            <br />
            <input type="text" id={id} onChange={onChange} />
            <br />
        </>
    );
}

function TripleInputField({ handleChange, field1, field2, field3 }) {
    const id1 = field1.replace(/\s/g, "-");
    const id2 = field2.replace(/\s/g, "-");
    const id3 = field3.replace(/\s/g, "-");
    // displays are the labels that are shown on screen
    return (
        <>
            <br />
            <label htmlFor={field1}>{field1.charAt(0).toUpperCase() + field1.slice(1)}: </label>
            <br />
            <input type="text" id={id1} onChange={(e) => handleChange(field1, e.target.value)} />
            <br />

            <label htmlFor={field2}>{field2.charAt(0).toUpperCase() + field2.slice(1)}: </label>
            <br />
            <input type="text" id={id2} onChange={(e) => handleChange(field2, e.target.value)} />
            <br />

            <label htmlFor={field3}>{field3.charAt(0).toUpperCase() + field3.slice(1)}: </label>
            <br />
            <input type="text" id={id3} onChange={(e) => handleChange(field3, e.target.value)} />
            <br />
        </>
    );
}

export function Form({
    setName,
    setTitle,
    setAbout,
    experience,
    setExperience,
    skills,
    setSkills,
    education,
    setEducation,
    setPhoneNumber,
    setEmail,
    setLinkedIn,
    setPicture,
}) {
    const handlePictureUpload = (e) => {
        const file = e.target.files[0];
        const imageURL = URL.createObjectURL(file);
        setPicture(imageURL);
    };

    const addExperience = () => {
        setExperience([...experience, { company: "Experience", position: "Position", date: "Date" }]);
    };

    const handleExperienceChange = (index, fieldName, value) => {
        const newExperience = [...experience];
        newExperience[index][fieldName] = value;
        setExperience(newExperience);
    };

    const addSkill = () => {
        setSkills([...skills, ""]);
    };

    const handleSkillChange = (index, value) => {
        const newSkills = [...skills];
        newSkills[index] = value;
        setSkills(newSkills);
    };

    const addEducation = () => {
        setEducation([...education, { institution: "", areaOfStudy: "", date: "" }]);
    };

    const handleEducationChange = (index, fieldName, value) => {
        const newEducation = [...education];
        newEducation[index][fieldName] = value;
        setEducation(newEducation);
    };

        function formatFieldName(fieldName) {
            return fieldName.split(" ").join("");
        }

    return (
        <form action="" id="form-container" style={{ marginTop: "50px" }}>
            <h1 id="header" style={{ paddingBottom: "50px" }}>
                Create Your resume
            </h1>
            <label htmlFor="profile-picture">Profile Picture</label>
            <input id="profile-picture" type="file" accept="image/*" onChange={handlePictureUpload} />
            <SingleInputField field="name" onChange={(e) => setName(e.target.value)} />
            <SingleInputField field="title" onChange={(e) => setTitle(e.target.value)} />
            <SingleInputField field="about" onChange={(e) => setAbout(e.target.value)} />
            <SingleInputField field="phone number" onChange={(e) => setPhoneNumber(e.target.value)} />
            <SingleInputField field="email" onChange={(e) => setEmail(e.target.value)} />
            <SingleInputField field="linkedIn" onChange={(e) => setLinkedIn(e.target.value)} />
            <button type="button" onClick={addExperience}>
                Add Experience
            </button>
            {experience.map((exp, index) => (
                <TripleInputField
                    key={index}
                    field1="company"
                    field2="position"
                    field3="date"
                    handleChange={(fieldname, value) => handleExperienceChange(index, fieldname, value)}
                />
            ))}
            <button type="button" onClick={addEducation}>
                Add Education
            </button>
            {education.map((edu, index) => (
                <TripleInputField
                    key={index}
                    field1="institution"
                    field2="area Of Study"
                    field3="date"
                    handleChange={(fieldname, value) => handleEducationChange(index, formatFieldName(fieldname), value)}
                />
            ))}
            <button type="button" onClick={addSkill}>
                Add Skill
            </button>
            {skills.map((skill, index) => (
                <SingleInputField
                    key={index}
                    field={`skill ${index + 1}`}
                    onChange={(e) => handleSkillChange(index, e.target.value)}
                />
            ))}
        </form>
    );
}
