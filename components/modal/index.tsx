import React, { Dispatch, ReactElement, SetStateAction, useEffect } from "react";

interface Props {
  title: string
    showModal: boolean
    setShowModal:Dispatch<SetStateAction<boolean>>;
    text: string
}
export default function Modal({title, showModal, setShowModal, text}: Props):ReactElement {

  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : 'unset'
  }, [showModal])
  return (
    <>
      {showModal ? (
        <>
        <div
className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
>
<div className="relative w-auto my-6 mx-auto max-w-3xl">
<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
<div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
      <h3 className="text-xl font-semibold text-black-metal">
        {title}
      </h3>
      <button
        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
        onClick={() => setShowModal(false)}
      >
        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
          ×
        </span>
      </button>
    </div>
    
    <div className="">
      <blockquote suppressContentEditableWarning={true} contentEditable="true" className="my-4 whitespace-pre-line text-slate-500 text-sm leading-relaxed p-4 m-4">
        {text}
      </blockquote>
    </div>
    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
      <button
        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(false)}
      >
        Close
      </button>
    </div>
</div>
</div>
</div>

          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}