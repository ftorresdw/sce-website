export const contactPage = {
  meta: {
    title: 'Contact Us | Service Complete Electric',
    description: 'Get in touch with Service Complete Electric for your next electrical project.',
  },
  headline: "Let's Discuss Your Project",
  intro:
    'Ready to bring your vision to life? Share your project details and our team will follow up with you shortly.',
  form: {
    firstName: { label: 'First Name', placeholder: 'First name' },
    lastName: { label: 'Last Name', placeholder: 'Last name' },
    businessNumber: { label: 'Business Number', placeholder: '(555) 555-5555' },
    companyName: { label: 'Company Name', placeholder: 'Company name' },
    companyEmail: { label: 'Company Email', placeholder: 'name@company.com' },
    projectDetails: { label: 'Project Details', placeholder: 'Tell us about your project...' },
    policy: {
      before: 'I agree to the ',
      linkText: 'privacy policy',
      after:
        ' and consent to Service Complete Electric contacting me regarding my inquiry.',
      href: '/privacy',
    },
    submitLabel: 'Submit Inquiry',
    successMessage: 'Thank you for your inquiry. Our team will be in touch soon.',
  },
  recaptcha: {
    note: 'reCAPTCHA will be enabled once site keys are configured.',
  },
}
