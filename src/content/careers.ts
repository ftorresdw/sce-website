export const careersPage = {
  meta: {
    title: 'Careers | Service Complete Electric',
    description: 'Join Service Complete Electric. View open positions and learn about our benefits.',
  },
  headline: 'Careers at Service Complete Electric',
  benefits: {
    title: 'Benefits & Eligibility',
    intro: [
      'Service Complete Electric offers a range of benefits to support employees and their families. Eligibility begins on the first day of the month following 60 days of continuous employment. Benefits are subject to change and eligibility requirements.',
      'Benefits may include:',
    ],
    items: [
      'Medical, Dental, and Vision Insurance',
      '401(k) with Profit Sharing',
      'Paid Time Off (PTO)',
      'Voluntary Life Insurance',
      'Short-Term & Long-Term Disability',
      'Employee Assistance Program (EAP)',
      'Travel Assistance',
      'Will Preparation Services',
      'Hearing Discount Program',
      'Identity Theft Protection',
      'Critical Illness Coverage',
      'Cancer Protection',
      'Accident Insurance',
    ],
  },
  apply: {
    title: 'Interested in Joining Our Team?',
    body: 'Please submit your application through our online portal.',
    hrLabel: 'For questions, contact Human Resources:',
    phone: '407-679-3500 ext. 244',
    email: 'Recruiting@SCEFlorida.com',
  },
  bamboohr: {
    domain: import.meta.env.VITE_BAMBOOHR_DOMAIN as string | undefined,
  },
}
