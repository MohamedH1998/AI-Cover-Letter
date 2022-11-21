interface ImageSection {
    title: string;
    text: string;
    btnContent: string;
    btnStyle: string;
    src: string;
    reverse?: boolean;
    exampleRef?: MutableRefObject<HTMLDivElement | null>;
    onClick?: () => void
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