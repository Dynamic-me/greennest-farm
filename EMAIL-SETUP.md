# Eid Reservation Email Setup

The Eid reservation form is wired to EmailJS so it can send the booking request to Green Nest Farm and send an automatic confirmation email to the customer.

## 1. Create an EmailJS account and connect an email service

Create an EmailJS account, then connect the email account/service that should receive the farm's booking requests.

## 2. Create the main booking template

Create one email template for the farm. The template should receive these variables:

- `{{name}}`
- `{{email}}`
- `{{phone}}`
- `{{animal}}`
- `{{city}}`
- `{{notes}}`
- `{{title}}`
- `{{message}}`

Set the main template's recipient to the farm email:
`greennestfarm.pk@gmail.com`

## 3. Create the customer confirmation template

Create a second template for the automatic confirmation. Set its **To Email** field to:

`{{email}}`

A simple confirmation can say:

Hello {{name}},

Thank you for your Eid qurbani request with Green Nest Farm.

We received your request for: {{animal}}

We will contact you on {{phone}} to confirm availability and the remaining details.

Jazak Allah,
Green Nest Farm

Then link this template to the main booking template using EmailJS's Auto-Reply / Linked Template feature.

## 4. Add the three public values to your local environment

Copy `.env.example` to `.env` and replace the placeholders:

`VITE_EMAILJS_PUBLIC_KEY=...`
`VITE_EMAILJS_SERVICE_ID=...`
`VITE_EMAILJS_TEMPLATE_ID=...`

Do not put private API keys or passwords into `VITE_*` variables.

## 5. Rebuild and deploy

After adding the values, run:

`npm install`
`npm run build`

Then deploy the resulting site normally.
