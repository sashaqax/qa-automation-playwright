# QA Automation Portfolio: Playwright + API Tests

Automation testing project for web UI and API validation, built with Playwright and JavaScript/TypeScript.

This repository demonstrates practical QA automation skills that are relevant for Junior/Middle QA Automation Engineer roles:

- UI end-to-end testing with Playwright
- API testing with Playwright request context
- Page Object Model for maintainable UI test structure
- Test data and fixture usage
- Auth setup with saved browser state
- Smoke and regression test separation
- CI execution with GitHub Actions

## Project Overview

The project covers core user flows of a demo car-management application:

- user sign in
- registration flow
- garage page checks
- profile page checks
- expenses-related scenarios
- API validation for authentication and garage/cars endpoints

The goal of the repository is to show how test automation can be organized in a readable and scalable way, not just to store individual test scripts.

## Tech Stack

- Playwright
- TypeScript
- JavaScript
- Node.js
- Cypress
- GitHub Actions

## Repository Structure

```text
tests/               UI and API test cases
tests/api/           API test coverage
tests/setup/         Authentication setup for storage state
pom/                 Page Object Model classes
pages/               Additional page abstractions
controllers/         API controllers
utils/               Fixtures and helper utilities
test-data/           Test users and saved state
.github/workflows/   CI pipeline configuration
```

## Implemented Testing Practices

- Separation of smoke and regression suites via tags and Playwright projects
- Reusable page objects for UI flows
- API controller layer for request handling
- Shared fixtures for authenticated scenarios
- Failure diagnostics with screenshots, videos, and traces
- Environment-driven configuration via `.env`

## Available Scripts

```bash
npm test
npm run test:chrome
npm run test:ui
npm run test:smoke
npm run test:regression
npm run cypress:run:firefox
```

## Local Setup

```bash
npm install
```

Create a local `.env` file based on `.env.example` and provide the required environment variables.

Example:

```env
BASE_URL=https://qauto.forstudy.space
HTTP_CREDENTIALS_USERNAME=guest
HTTP_CREDENTIALS_PASSWORD=welcome2qauto
```

## How to Run

Run the full Playwright suite:

```bash
npm test
```

Run only smoke tests:

```bash
npm run test:smoke
```

Run tests with Playwright UI mode:

```bash
npm run test:ui
```

## CI

The repository includes a GitHub Actions workflow that runs:

- Cypress tests in Docker
- Playwright smoke tests in Docker
- artifact upload for reports, screenshots, and videos

## What This Repository Demonstrates

- ability to build and maintain UI/API automation
- understanding of test architecture and reuse
- practical work with selectors, fixtures, auth, and assertions
- readiness to present automation work in a structured, reviewable form

## Next Improvements

- expand API assertions and negative cases
- add reporting summary to CI
- improve test naming consistency
- add linting and formatting checks

## Author

QA Automation portfolio project prepared for showcasing test engineering skills on GitHub.
