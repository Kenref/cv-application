
function SingleInputField({ field, onChange }) {

    return (
        <>
            <label htmlFor={field}>{field}: </label>
            <br />
            <input type="text" id={field} onChange={onChange} />
            <br />
        </>
    )
}

function MultipleInputFields() {


    return (
        <>
            <label htmlFor={field}>{field}: </label>
            <br />
            <input type="text" id={field} onChange={onChange} />
            <br />
        </>
    );
}

export function Form({ name, setName, title, setTitle, about, setAbout }) {
    
    return (
        <form action="">
            <SingleInputField field="name" value={name} onChange={(e) => setName(e.target.value)}></SingleInputField>

            <SingleInputField field="title" value={title} onChange={(e) => setTitle(e.target.value)}></SingleInputField>

            <SingleInputField field="about" value={about} onChange={(e) => setAbout(e.target.value)}></SingleInputField>




        </form>
    );
}


















// export default function Form() {




//     return (

//             <form action="" id="form">
//                 <label htmlFor="profile-image">Profile Image: </label>
//                 <br />
//                 <input type="file" id="profile-image" onChange={(e) => setPic(e.target.value)} />
//                 <br />
//                 <br />

//                 <label htmlFor="name">Name: </label>
//                 <br />
//                 <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
//                 <br />

//                 <label htmlFor="title">Title: </label>
//                 <br />
//                 <input type="text" id="title" onChange={(e) => setTitle(e.target.value)} />
//                 <br />

//                 <label htmlFor="about">About: </label>
//                 <br />
//                 <input type="text" id="about" onChange={(e) => setAbout(e.target.value)} />
//                 <br />
//                 <br />

//                 <label htmlFor="experience">Experience: </label>
//                 <br />
//                 <input type="text" id="experience" onChange={(e) => setExperience(e.target.value)} />
//                 <br />
//                 <br />

//                 <label htmlFor="skills">Skills: </label>
//                 <br />
//                 <input type="text" id="skills" onChange={(e) => setSkills(e.target.value)} />
//                 <br />
//                 <br />

//                 <label htmlFor="education">Education: </label>
//                 <br />
//                 <input type="text" id="education" onChange={(e) => setEducation(e.target.value)} />
//                 <br />
//                 <br />

//                 <label htmlFor="contact">Contact:</label>
//                 <br />
//                 <input type="text" id="contact" onChange={(e) => setContact(e.target.value)} />
//             </form>
//     )
// }






