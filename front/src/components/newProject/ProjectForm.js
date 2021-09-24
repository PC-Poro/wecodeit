import Submit from '../Buttons/Submit'
import classes from './ProjectForm.module.css'

import {useState} from 'react'
import { TagsInput } from "react-tag-input-component";
import { Link } from "react-router-dom"
import Header from '../Header/header'
import Footer from '../Footer/footer'

function ProjectForm(props) {
  const [tags, setTags] = useState([])

    return (
        <div className={classes.container}>
            <Header />
            <form className={classes.formInput}>
                <select>
                    <option>Current project</option> 
                    <option>new project</option>
                </select>
                <label>Titre du projet</label>
                <input type="text" />
                <label>Description du projet</label>
                <textarea />
                <label>Importer vos fichiers</label>
                <input type="file" />
                <label>Deadline</label>
                <input type="date" />
                <label>Technologies</label>
                <TagsInput
        value={tags}
        onChange={setTags}
        name="fruits"
        onBlur={()=>console.log("blur")}
        seprators="Enter"
        placeHolder="enter fruits"
      />
                <Submit value="Proposez votre projet" onClick={(e) => e} redirect="/dashboard" />
            </form>
            <Footer />
        </div>
    )
}

export default ProjectForm