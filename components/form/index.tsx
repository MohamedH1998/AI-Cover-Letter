import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

interface Props {
  handleSubmitForm: (coverLetterInfo: FormFields) => Promise<void>;
  loading: boolean
}

const Form = ({ handleSubmitForm, loading }: Props) => {
  const { register, handleSubmit } = useForm();

  return (
    <>
    <form className="flex flex-col space-y-4 text-black-metal"onSubmit={handleSubmit((data) => handleSubmitForm(data as FormFields))}>
      <input className="p-2 rounded-md" {...register("fullName")} placeholder="Full name" />
<div className="flex-col md:flex-row flex space-between w-full">
      <input className="p-2 rounded-md mr-4 mb-4 md:my-0 w-full md:w-4/12" type="number" placeholder="Years of experience" {...register('yearsOfExperience')} />
      <input className="p-2 rounded-md md:flex-grow" type="text" {...register('nameOfCompany')} placeholder="Name of Company" />
      </div>
      <input className="p-2 rounded-md" type="text" {...register('nameOfRole')} placeholder="Role you’re applying for" />
      <textarea className="p-2 rounded-md" {...register("reasonForApplying")} placeholder="Why are you excited to work for said company?" />
      <textarea className="p-2 rounded-md" {...register("greatestStrength")} placeholder="Your greatest strength" />
      <input disabled={loading} type="submit" className="py-2 px-4 md:px-8 md:py-3  my-4 bg-ice-cold-stare w-[180px] text-black" />
    </form>
    </>
  );
}

export default Form