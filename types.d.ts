interface ImageSection {
    title: string;
    text: string;
    btnContent: string;
    btnStyle: string;
    src: string;
    reverse?: boolean;
    ref?: MutableRefObject<HTMLDivElement | null>
}


interface Accordion {
    title: string;
    description: string;
}

interface FormFields {
    fullName: string;
    yearsOfExperience: number;
    nameOfCompany: string;
    nameOfRole: string;
    reasonForApplying: string;
    greatestStrength: string
}