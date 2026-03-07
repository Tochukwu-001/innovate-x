"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaRegPaperPlane } from "react-icons/fa";
import * as Yup from "yup";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { useState } from "react";
import { FiLoader } from "react-icons/fi";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FaRegCircleCheck } from "react-icons/fa6";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function PostForm({ session }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // console.log(session);

  const [submitting, setSubmitting] = useState(false);

  const initVal = {
    title: "",
    problem: "",
    materials: "",
    prototype: "",
    impact: "",
  };

  const valSchema = Yup.object({
    title: Yup.string()
      .max(20, "Max 20 characters")
      .required("This is a required field"),
    problem: Yup.string().required("This is a required field"),
    materials: Yup.string()
      .max(80, "Max 80 characters")
      .required("This is a required field"),
    prototype: Yup.string()
      .min(10, "Min 10 characters")
      .required("This is a required field"),
    impact: Yup.string()
      .min(10, "Min 10 characters")
      .required("This is a required field"),
  });

  return (
    <main className="min-h-dvh md:p-10 p-3">
      <h1 className="mb-10 text-center font-semibold text-2xl text-gray-800">
        Contribute to our ever growing community of Innovators
      </h1>
      <blockquote className="shadow-md md:w-1/2 mx-auto px-3 py-5 rounded-md">
        <Formik
          initialValues={initVal}
          validationSchema={valSchema}
          onSubmit={async (values, { resetForm }) => {
            setSubmitting(true);
            try {
              const details = {
                ...values,
                userName: session?.user?.name,
                userImage: session?.user?.image,
                timestamp: new Date().toLocaleDateString(),
              };

              // add data to db
              const docRef = await addDoc(
                collection(db, "innovations"),
                details,
              );
              resetForm();
              setSubmitting(false);
              handleOpen()
            } catch (error) {
              console.error("An error occurred >>>", error);
              alert("Oops, an error occurred");
            }
          }}
        >
          <Form className="flex flex-col items-center justify-center gap-5">
            <div className="w-full">
              <label className="text-xs text-gray-700">Innovation Title</label>
              <Field
                type="text"
                name="title"
                placeholder="Enter Innovation title..."
                className="w-full px-4 py-2 outline-none border border-gray-200 rounded-md"
              />
              <ErrorMessage
                name="title"
                component={"p"}
                className="text-sm text-red-600"
              />
            </div>
            <div className="w-full">
              <label className="text-xs text-gray-700">Community Problem</label>
              <Field
                as="textarea"
                type="text"
                name="problem"
                placeholder="Enter Comunity problem..."
                className="w-full px-4 py-2 outline-none border border-gray-200 rounded-md"
              />
              <ErrorMessage
                name="problem"
                component={"p"}
                className="text-sm text-red-600"
              />
            </div>
            <div className="w-full">
              <label className="text-xs text-gray-700">
                Materials Required
              </label>
              <Field
                type="text"
                name="materials"
                placeholder="Enter Materials required..."
                className="w-full px-4 py-2 outline-none border border-gray-200 rounded-md"
              />
              <ErrorMessage
                name="materials"
                component={"p"}
                className="text-sm text-red-600"
              />
            </div>
            <div className="w-full">
              <label className="text-xs text-gray-700">
                Prototype Description
              </label>
              <Field
                as="textarea"
                type="text"
                name="prototype"
                placeholder="Enter Prototype description..."
                className="w-full px-4 py-2 outline-none border border-gray-200 rounded-md"
              />
              <ErrorMessage
                name="prototype"
                component={"p"}
                className="text-sm text-red-600"
              />
            </div>
            <div className="w-full">
              <label className="text-xs text-gray-700">Projected Impact</label>
              <Field
                as="textarea"
                type="text"
                name="impact"
                placeholder="Enter Projected impact..."
                className="w-full px-4 py-2 outline-none border border-gray-200 rounded-md"
              />
              <ErrorMessage
                name="impact"
                component={"p"}
                className="text-sm text-red-600"
              />
            </div>

            <button
              className={`bg-sky-600 text-white w-full rounded-md py-2 hover:bg-sky-700 transition-all duration-200 flex items-center justify-center gap-2 ${submitting ? "cursor-not-allowed" : "cursor-pointer"}`}
              type="submit"
              disabled={submitting}
            >
              {submitting ? (
                <FiLoader className="text-2xl animate-spin" />
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Post Innovation <FaRegPaperPlane />
                </span>
              )}
            </button>
          </Form>
        </Formik>
      </blockquote>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <div className="mx-auto bg-green-200 p-5 w-fit rounded-full"><FaRegCircleCheck className="text-green-700 text-5xl" /></div>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }} className="text-center">
              Your innovation has been SUCCESSFULLY posted
            </Typography>
          </Box>
        </Modal>
      </div>
    </main>
  );
}
