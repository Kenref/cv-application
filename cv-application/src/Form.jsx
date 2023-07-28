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

function ExperienceInputFields({ field1, field2, field3, onChangeCompany, onChangePosition, onChangeDate }) {
    return (
        <>
            <label htmlFor={field1}>{field1}: </label>
            <br />
            <input type="text" id={field1} onChange={onChangeCompany} />
            <br />

            <label htmlFor={field2}>{field2}: </label>
            <br />
            <input type="text" id={field2} onChange={onChangePosition} />
            <br />

            <label htmlFor={field3}>{field3}: </label>
            <br />
            <input type="text" id={field3} onChange={onChangeDate} />
            <br />
        </>
    );
}

export function Form({ name, setName, title, setTitle, about, setAbout, experience, setExperience }) {
    return (
        <form action="">
            <SingleInputField field="name" onChange={(e) => setName(e.target.value)} />

            <SingleInputField field="title" onChange={(e) => setTitle(e.target.value)} />

            <SingleInputField field="about" onChange={(e) => setAbout(e.target.value)} />

            <ExperienceInputFields
                field1="company"
                onChangeCompany={(e) => setExperience({ ...experience, company: e.target.value })}
                field2="position"
                onChangePosition={(e) => setExperience({ ...experience, position: e.target.value })}
                field3="date"
                onChangeDate={(e) => setExperience({ ...experience, date: e.target.value })}
            />

            <button type="button" onClick={ExperienceInputFields}>
                Add Experience
            </button>
        </form>
    );
}
