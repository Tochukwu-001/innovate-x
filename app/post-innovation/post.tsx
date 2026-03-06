"use client";
import { prototype } from "events";
import{ Formik, Form, Field, ErrorMessage } from "formik"
import { title } from "process";
import { FaRegPaperPlane } from "react-icons/fa";
import * as Yup from 'yup';
 

export default function PostForm(){
    const initVal={
        title:"",
        problem:"",
        materials:"",
        prototype:"",
        impact:""
    }

    const valSchma= Yup.object()
        title: Yup.string().max(20,"Max 20 characters")
        Problem: Yup.string()
        Materials: Yup.string().max(20,"Max 80 characters")
        prototype: Yup.string().min(10,"Min 20 characters")
        prototype: Yup.string().min(10,"Min 10 characters")
    
    return(
        <main className="min-h-dvh"> 
        <h1>Contribute to our ever growing communinty of Innovators</h1>
        <blockquote>
            <Formik
            initialValues={initVal}
            validationSchema={valSchma}
            onSubmit={()=>{console.log("Submitted");
            }}>
                <Form>
                    <div>
                        <label> Innovation Title</label>
                        <Field type="text" name="title" placeholder="Enter Innovation title..."/>
                        <ErrorMessage/>
                    </div>
               
                    <div>
                        <label> Community Problem </label>
                        <Field as= "textarea" type="text" name="materials" placeholder="Enter Community Problems..."/>
                    </div>

                     <div>
                        <label> Material Required</label>
                        <Field type="text" name="materials" placeholder="Enter Matrials Required..."/>
                    </div>

                    <div>
                        <label> Community Problem </label>
                        <Field as= "textarea" type="text" name="prototype" placeholder="Enter Innovation title..."/>
                    </div>
                    <div>
                        <label> Projected Impact</label>
                        <Field as= "textarea" type="text" name="Impact" placeholder="Enter Innovation title..."/>
                    </div>
                    <button type="submit">Post Innovation <FaRegPaperPlane /></button>
               
                </Form>
            </Formik>
            


        </blockquote>
        </main>
    
    )
}