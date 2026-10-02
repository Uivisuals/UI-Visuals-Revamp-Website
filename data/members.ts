export type Category = "Alumni" | "Members";

export type MembersList = {
    name: string;
    role: string;
    image:  string;
    instagram: string;
    linkedin: string;
}

export const members: MembersList[] = [
    {
        name: "Anuj Pratap Singh",
        role: "Steering Leader",
        image: "/image/anuj.jpg",
        instagram: "https://www.instagram.com",
        linkedin: "https://www.linkedin.com"
    },
    {
        name: "Lasta Maharjan",
        role: "Steering Leader",
        image: "/image/lasta.jpg",
        instagram: "https://www.instagram.com",
        linkedin: "https://www.linkedin.com"
    },
    {
        name: "Prajwal Tamang",
        role: "Creative Lead",
        image: "/image/prajwal.jpg",
        instagram: "https://www.instagram.com",
        linkedin: "https://www.linkedin.com"
    },
    {
        name: "Subham Pant",
        role: "Development Lead",
        image: "/image/subham.jpg",
        instagram: "https://www.instagram.com",
        linkedin: "https://www.linkedin.com"
    }

]
