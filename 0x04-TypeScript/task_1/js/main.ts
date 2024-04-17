interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

function createTeacher(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, otherAttributes: any = {}): Teacher {
    return {
        firstName,
        lastName,
        fullTimeEmployee,
        location,
        ...otherAttributes
    };
}

const teacher3: Teacher = createTeacher('John', 'Doe', false, 'London', { contract: false });

console.log(teacher3);
