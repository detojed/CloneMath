import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(amount);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

// Competition Details - centralized for consistency across components
export const competitionDetails = {
  date: 'March 15, 2024',
  region: 'West Midlands Schools',
  entryFee: 3,
  registrationDeadline: 'March 1, 2024',
  email: '21GSovetkin@bromsgrove-school.co.uk',
};

// Team members
export const teamMembers = [
  {
    id: 1,
    name: 'Gleb Sovetkin',
    position: 'IB1 Student',
    bio: 'Mathematics enthusiast with a passion for problem-solving and competition organization.',
    initials: 'GS',
  },
  {
    id: 2,
    name: 'Mikhail Voronetskiy',
    position: 'IB1 Student',
    bio: 'Dedicated to creating challenging mathematical content for competition participants.',
    initials: 'MV',
  },
  {
    id: 3,
    name: 'Veronika Koretskaya',
    position: 'IB1 Student',
    bio: 'Focused on outreach and communications with schools across the West Midlands.',
    initials: 'VK',
  },
  {
    id: 4,
    name: 'Arsenii Cherkashyn',
    position: 'IB1 Student',
    bio: 'Responsible for logistics and ensuring smooth competition operations.',
    initials: 'AC',
  },
];

// FAQs
export const faqs = [
  {
    id: 1,
    question: 'Who can participate in the competition?',
    answer: 'The competition is open to all secondary school students in the West Midlands region. It is particularly suited for students who enjoy mathematics and problem-solving. The difficulty level is similar to UKMT Senior Challenge with some questions approaching BMO1 level.'
  },
  {
    id: 2,
    question: 'How does the registration and payment process work?',
    answer: 'Schools can register using the form on this website. After registration, we will contact you with payment details. The entry fee is £3 per student, and all profits will be donated to the UK Mathematics Trust. Payment must be completed before the registration deadline.'
  },
  {
    id: 3,
    question: 'Where and when will the competition take place?',
    answer: `The competition will take place on ${competitionDetails.date}. It will be held within participating schools, with papers sent to schools in advance along with instructions for invigilators. Schools will be responsible for returning completed papers for marking.`
  },
  {
    id: 4,
    question: 'What is the format of the competition?',
    answer: 'The competition consists of 10 challenging mathematical problems to be solved in 90 minutes. Questions will require full written solutions, not just answers. Calculators are not permitted. The difficulty level is between the UKMT Senior Challenge and BMO1.'
  },
  {
    id: 5,
    question: 'How are the results determined and what are the prizes?',
    answer: 'Papers will be marked by our team. Gold, Silver, and Bronze certificates will be awarded to top-performing students based on their scores. Special recognition will be given to the highest-scoring school. All participants will receive participation certificates, and there will be prizes for top individual performers.'
  }
];