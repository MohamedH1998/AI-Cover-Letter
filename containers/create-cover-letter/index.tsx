import { CSSProperties, useEffect, useState } from "react";
import { toast } from "react-toastify";
import GridLoader from "react-spinners/GridLoader";
import "react-toastify/dist/ReactToastify.css";
import Form from "../../components/form";
import Modal from "../../components/modal";

const CoverLetter = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [coverLetter, setCoverLetter] = useState("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (coverLetter && !showModal) {
      setShowModal(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coverLetter]);

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    zIndex: "9999",
  };

  const handleSubmitForm = async (coverLetterInfo: FormFields) => {
    setLoading(true);
    toast("My API key ran out, but I promise it works 🤣", { type: "success" });
    setLoading(false);
    setSubmitted(true);
    // const resp = await fetch('/api/form', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(coverLetterInfo)
    // })
    // if (!resp.ok) {
    //   toast("Something went wrong", { type: "error" })
    // }
    // const data = await resp.json();
    // setCoverLetter(data.result)
    // setLoading(false)
  };

  return (
    <div className="relative mt-10">
      <Form
        handleSubmitForm={handleSubmitForm}
        loading={loading}
        submitted={submitted}
      />
      {loading && (
        <div className="absolute w-full h-full top-0 z-50 px-10 py-10 left-0 flex items-center justify-center bg-black-metal opacity-50">
          <div>
            <GridLoader
              color="#F5F3EC"
              loading={true}
              size={50}
              cssOverride={override}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </div>
      )}
      <Modal
        title="Your Cover Letter"
        showModal={showModal}
        setShowModal={setShowModal}
        text={coverLetter}
      />
    </div>
  );
};

export default CoverLetter;
