import { FormEvent, useState } from 'react'
import { contactPage } from '../content/contact'

type FormState = {
  firstName: string
  lastName: string
  businessNumber: string
  companyName: string
  companyEmail: string
  projectDetails: string
  policyAccepted: boolean
}

const initialState: FormState = {
  firstName: '',
  lastName: '',
  businessNumber: '',
  companyName: '',
  companyEmail: '',
  projectDetails: '',
  policyAccepted: false,
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { form: labels } = contactPage

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
    setError(null)
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!form.policyAccepted) {
      setError('Please accept the privacy policy to continue.')
      return
    }
    // TODO: wire to API + reCAPTCHA token verification when keys are configured
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-sce-orange/30 bg-sce-orange-light p-8 text-center">
        <p className="text-lg font-semibold text-slate-950">{labels.successMessage}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="form-label">
            {labels.firstName.label}
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            className="form-input"
            placeholder={labels.firstName.placeholder}
            value={form.firstName}
            onChange={(e) => updateField('firstName', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName" className="form-label">
            {labels.lastName.label}
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            className="form-input"
            placeholder={labels.lastName.placeholder}
            value={form.lastName}
            onChange={(e) => updateField('lastName', e.target.value)}
          />
        </div>
      </div>

      <div>
        <label htmlFor="businessNumber" className="form-label">
          {labels.businessNumber.label}
        </label>
        <input
          id="businessNumber"
          name="businessNumber"
          type="tel"
          required
          autoComplete="tel"
          className="form-input"
          placeholder={labels.businessNumber.placeholder}
          value={form.businessNumber}
          onChange={(e) => updateField('businessNumber', e.target.value)}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="companyName" className="form-label">
            {labels.companyName.label}
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            required
            autoComplete="organization"
            className="form-input"
            placeholder={labels.companyName.placeholder}
            value={form.companyName}
            onChange={(e) => updateField('companyName', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="companyEmail" className="form-label">
            {labels.companyEmail.label}
          </label>
          <input
            id="companyEmail"
            name="companyEmail"
            type="email"
            required
            autoComplete="email"
            className="form-input"
            placeholder={labels.companyEmail.placeholder}
            value={form.companyEmail}
            onChange={(e) => updateField('companyEmail', e.target.value)}
          />
        </div>
      </div>

      <div>
        <label htmlFor="projectDetails" className="form-label">
          {labels.projectDetails.label}
        </label>
        <textarea
          id="projectDetails"
          name="projectDetails"
          required
          rows={5}
          className="form-input resize-y"
          placeholder={labels.projectDetails.placeholder}
          value={form.projectDetails}
          onChange={(e) => updateField('projectDetails', e.target.value)}
        />
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
        <div className="flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded border border-slate-300 bg-white">
            <svg className="size-5 text-slate-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
            </svg>
          </div>
          <div className="text-xs text-slate-500">
            <span className="font-medium text-slate-700">reCAPTCHA</span> — {contactPage.recaptcha.note}
          </div>
        </div>
        <input type="hidden" name="g-recaptcha-response" value="" aria-hidden="true" />
      </div>

      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          name="policyAccepted"
          required
          checked={form.policyAccepted}
          onChange={(e) => updateField('policyAccepted', e.target.checked)}
          className="mt-1 size-4 rounded border-slate-300 text-sce-orange focus:ring-sce-orange"
        />
        <span className="text-sm text-slate-600">
          {labels.policy.before}
          <a href={labels.policy.href} className="font-medium text-sce-orange hover:underline">
            {labels.policy.linkText}
          </a>
          {labels.policy.after}
        </span>
      </label>

      {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}

      <button type="submit" className="btn-primary w-full rounded-xl px-6 py-3 sm:w-auto">
        {labels.submitLabel}
      </button>
    </form>
  )
}
