"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaRegPaperPlane } from "react-icons/fa";
import * as Yup from 'yup';


export default function PostForm (){
    const initVal = {
        title: "",
        problem: "",
        materials: "",
        prototype: "",
        impact: ""
    }

    const valSchema = Yup.object({
        title: Yup.string().max(20, "Max 20 characters"),
        problem: Yup.string(),
        materials: Yup.string().max(80, "Max 80 characters"),
        prototype: Yup.string().min(10, "Min 10 characters"),
        impact: Yup.string().min(10, "Min 10 characters")
    })

    return (
        <main className='min-h-dvh'>
            <h1>Contribute to our ever growing community of Innovators</h1>
            <blockquote>
                <Formik
                    initialValues={initVal}
                    validationSchema={valSchema}
                    onSubmit={()=> {console.log("Submitted");}}
                >
                    <Form>
                        <div>
                            <label>Innovation Title</label>
                            <Field type="text" name="title" placeholder="Enter Innovation title..."/>
                            <ErrorMessage name="title" component={"p"}/>
                        </div>
                        <div>
                            <label>Community Problem</label>
                            <Field as="textarea" type="text" name="problem" placeholder="Enter Comunity problem..."/>
                        </div>
                        <div>
                            <label>Materials Required</label>
                            <Field type="text" name="materials" placeholder="Enter Materials required..."/>
                        </div>
                        <div>
                            <label>Prototype Description</label>
                            <Field as="textarea" type="text" name="prototype" placeholder="Enter Prototype description..."/>
                        </div>
                        <div>
                            <label>Projected Impact</label>
                            <Field as="textarea" type="text" name="impact" placeholder="Enter Projected impact..."/>
                        </div>

                        <button type="submit">Post Innovation <FaRegPaperPlane /></button>
                    </Form>
                </Formik>
            </blockquote>
        </main>
    )
}