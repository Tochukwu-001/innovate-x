"use client"
import { timeStamp } from 'console';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaRegPaperPlane } from "react-icons/fa";
 import * as Yup from 'yup';

export default function PostForm ({session}){
    // console.log(session);

    const initVal = {
        title: "",
        problem: "",
        materials: "",
        prototype: "",
        impact:""
    }

    const valSchema = Yup.object({
        title: Yup.string().max(20, "Maximum of 20 characters").min(3,"Minimum of 3 characters").required("This is a required field"),
        problem: Yup.string().required("This is a required field"),
        materials: Yup.string().max(80, "Max 80 characters").required("This is a required field"),
        prototype: Yup.string().min(10, "Max 80 characters").required("This is a required field"),
        impact: Yup.string().min(10, "Max 80 characters").required("This is a required field")
    })

    return (
        <main className="min-h-dvh md:p-10 p-3">
            <h1 className='mb-10 text-center font-semibold text-2xl text-gray-800'>Contribute to our ever growing community of Innovators</h1>
            <blockquote className='shadow-md md:w-1/2 mx-auto px-3 py-5 rounded-md'>
                <Formik
                    initialValues={initVal}
                    validationSchema={valSchema}
                    onSubmit={(values)=>{
                        const details = {
                            ...values,
                            userName: session?.user?.name,
                            userImage: session?.user?.image,
                            timestamp: new Date().toLocaleDateString()
                        }
                        console.log(details);
                    }}
                >
                    <Form className='flex flex-col justify-center gap-5'>
                        <div className='w-full'>
                            <label htmlFor="" className='text-xs text-gray-700'>Innovation Title</label>
                            <Field type="text" name="title" placeholder="Enter Innovation title..." className="w-full px-4 py-2 outline-none border border-gray-200 rounded-md" />
                            <ErrorMessage name="title" component={"p"} className='text-sm text-red-600' />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="" className='text-xs text-gray-700'>Community Problem</label>
                            <Field as="textarea" type="text" name="problem" placeholder="Enter Community problem..." className="w-full px-4 py-2 outline-none border border-gray-200 rounded-md" />
                            <ErrorMessage name="problem" component={"p"} className='text-sm text-red-600' />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="" className='text-xs text-gray-700'>Materials Required</label>
                            <Field type="text" name="materials" placeholder="Enter Materials required..." className="w-full px-4 py-2 outline-none border border-gray-200 rounded-md" />
                            <ErrorMessage name="materials" component={"p"} className='text-sm text-red-600' />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="" className='text-xs text-gray-700'>Prototype Description</label>
                            <Field as="textarea" type="text" name="prototype" placeholder="Enter Prototype description..." className="w-full px-4 py-2 outline-none border border-gray-200 rounded-md" />
                            <ErrorMessage name="prototype" component={"p"} className='text-sm text-red-600' />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="" className='text-xs text-gray-700'>Projected Impact</label>
                            <Field as="textarea" type="text" name="impact" placeholder="Enter Projected impact..." className="w-full px-4 py-2 outline-none border border-gray-200 rounded-md" />
                            <ErrorMessage name="impact" component={"p"} className='text-sm text-red-600' />
                        </div>

                        <button type='submit' className='bg-sky-600 text-white w-full items-center rounded-md justify-center flex gap-2 py-2 hover:bg-sky-700 transition-all duration-200 cursor-pointer'  >Post Innovation <FaRegPaperPlane/></button>
                    </Form>
                </Formik>
            </blockquote>
        </main>
    )
}