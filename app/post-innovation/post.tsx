"use client"
import { useState } from 'react'; // Added useState
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaRegPaperPlane, FaSpinner, FaCheckCircle } from "react-icons/fa"; 
import * as Yup from 'yup';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '@/config/firebase';

 interface ViewProps {
        session?: any
    }

export default function PostForm ({session}: ViewProps){
    const [successMsg, setSuccessMsg] = useState(false); // Success state

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
        prototype: Yup.string().min(10, "Minimum 10 characters").required("This is a required field"),
        impact: Yup.string().min(10, "Minimum 10 characters").required("This is a required field")
    })

    return (
        <main className="relative min-h-dvh md:p-10 p-3">
            {/* Success Overlay */}
            {successMsg && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm transition-all">
                    <div className="flex flex-col items-center animate-bounce">
                        <FaCheckCircle className="text-green-600 text-6xl mb-4" />
                        <h2 className="text-3xl font-bold text-green-700">Innovation Posted!</h2>
                        <p className="text-gray-600">Your contribution has been saved.</p>
                    </div>
                </div>
            )}

            <h1 className='mb-10 text-center font-semibold text-2xl text-gray-800'>Contribute to our ever growing community of Innovators</h1>
            
            <blockquote className='shadow-md md:w-1/2 mx-auto px-3 py-5 rounded-md bg-white'>
                <Formik
                    initialValues={initVal}
                    validationSchema={valSchema}
                    onSubmit={async (values, { resetForm, setSubmitting }) => {
                        try {
                            const details = {
                                ...values,
                                userId: session?.user?.id,
                                userName: session?.user?.name || "Anonymous",
                                userImage: session?.user?.image || "",
                                timestamp: new Date().toLocaleString() 
                            }
                            
                            const docRef = await addDoc(collection(db, "innovations"), details);
                            
                            // Clear form and show success UI
                            resetForm();
                            setSuccessMsg(true);

                            // Hide the success message after 2 seconds
                            setTimeout(() => setSuccessMsg(false), 2000);

                        } catch (error) {
                            console.error("Error:", error);
														alert("Oops, an error occurred")
                        } finally {
                            setSubmitting(false);
                        }
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className='flex flex-col justify-center gap-5'>
                            {/* Input Fields (Shortened for brevity) */}
                            <div className='w-full'>
                                <label className='text-xs text-gray-700 font-medium'>Innovation Title</label>
                                <Field type="text" name="title" placeholder="Enter title..." className="w-full px-4 py-2 outline-none border border-gray-200 rounded-md focus:border-sky-500 transition-colors" />
                                <ErrorMessage name="title" component={"p"} className='text-sm text-red-600' />
                            </div>

                            <div className='w-full'>
                                <label className='text-xs text-gray-700 font-medium'>Community Problem</label>
                                <Field as="textarea" name="problem" placeholder="What problem are you solving?" className="w-full px-4 py-2 outline-none border border-gray-200 rounded-md focus:border-sky-500 transition-colors" />
                                <ErrorMessage name="problem" component={"p"} className='text-sm text-red-600' />
                            </div>

                            <div className='w-full'>
                                <label className='text-xs text-gray-700 font-medium'>Materials Required</label>
                                <Field type="text" name="materials" placeholder="e.g. Solar panels, Arduino..." className="w-full px-4 py-2 outline-none border border-gray-200 rounded-md focus:border-sky-500 transition-colors" />
                                <ErrorMessage name="materials" component={"p"} className='text-sm text-red-600' />
                            </div>

                            <div className='w-full'>
                                <label className='text-xs text-gray-700 font-medium'>Prototype Description</label>
                                <Field as="textarea" name="prototype" placeholder="Describe how it works..." className="w-full px-4 py-2 outline-none border border-gray-200 rounded-md focus:border-sky-500 transition-colors" />
                                <ErrorMessage name="prototype" component={"p"} className='text-sm text-red-600' />
                            </div>

                            <div className='w-full'>
                                <label className='text-xs text-gray-700 font-medium'>Projected Impact</label>
                                <Field as="textarea" name="impact" placeholder="How will this change lives?" className="w-full px-4 py-2 outline-none border border-gray-200 rounded-md focus:border-sky-500 transition-colors" />
                                <ErrorMessage name="impact" component={"p"} className='text-sm text-red-600' />
                            </div>

                            <button 
                                type='submit' 
                                disabled={isSubmitting}
                                className={`bg-sky-600 text-white w-full items-center rounded-md justify-center flex gap-2 py-3 font-semibold transition-all duration-200 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-sky-700 cursor-pointer'}`}
                            >
                                {isSubmitting ? (
                                    <>Submitting... <FaSpinner className="animate-spin text-2xl " /></>
                                ) : (
                                    <>Post Innovation <FaRegPaperPlane/></>
                                )}
                            </button>
                        </Form>
                    )}
                </Formik>
            </blockquote>
        </main>
    )
}