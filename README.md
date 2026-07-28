# Contributing to Property Rental Platform (Team)

Welcome! This guide explains how our team will collaborate on the **Property Rental Platform**. Please read it before you start coding to ensure everyone follows the same workflow and we avoid unnecessary conflicts.

---

# 1. Project Overview

## Objective

Build a responsive **Property Rental Platform** using React that demonstrates:

- React Components
- React Router
- State Management
- CRUD Operations
- Form Validation
- Search, Filter & Sort
- Responsive Design
- Clean Component Structure

---

## Required Pages

- Landing Page
- Browse Properties
- Property Details
- Enquiry Form

---

## Core Features

- Responsive UI
- Search by Title/Location
- Filter by Price/Property Type
- Sort by Name/Price
- CRUD Operations
- Form Validation
- Favourite Property (Optional)

---

# 2. Getting Set Up

## Step 1: Get Repository Access

Ask the **Team Lead** to add you as a collaborator on GitHub.

---

## Step 2: Clone the Repository

```bash
git clone <repository-url>
```

Move into the project folder:

```bash
cd property-rental-platform
```

---

## Step 3: Install Dependencies

```bash
npm install
```

---

## Step 4: Start the Development Server

```bash
npm run dev
```

You should see something similar to:

```
http://localhost:5173
```

Open it in your browser to verify the project is running correctly.

---

# 3. Install Required Packages

If you're setting up the project from scratch, install:

```bash
npm install react-router-dom
```

```bash
npm install react-icons
```

Tailwind CSS (v4):

```bash
npm install tailwindcss @tailwindcss/vite
```

---

# 4. Project Folder Structure

```
src
│
├── assets
│   ├── images
│   └── icons
│
├── components
│   ├── common
│   ├── layout
│   ├── property
│   └── ui
│
├── pages
│
├── routes
│
├── context
│
├── hooks
│
├── services
│
├── data
│
├── utils
│
├── styles
│
├── constants
│
├── App.jsx
│
├── master.jsx
│
└── index.css
```

Do **not** create unnecessary folders or files without discussing it with the team.

---

# 5. Team Responsibilities

## Team Lead – UI & Project Management

Responsible for:

- Repository management
- Project setup
- Routing
- Navbar
- Footer
- Landing Page
- Responsive Layout
- Pull Request reviews
- Merging into `master`

---

## Member 2 – Property Listing

Responsible for:

- Property Cards
- Browse Page
- Search
- Filter
- Sort

---

## Member 3 – Property Details & Forms

Responsible for:

- Property Details Page
- Enquiry Form
- Form Validation
- Success Modal

---

## Member 4 – State Management & CRUD

Responsible for:

- Property Data
- Context API
- Add Property
- Edit Property
- Delete Property
- Global State

---

# 6. Branch Naming Convention

These are the branches that should be created

master - This is the master branch PLS no one should merge directly into this branch and also this has been created alrready.

ui-layout
Bash

# git checkout -b <yourname>-ui-layout

browse-page

# git checkout -b <yourname>-browse-properties

property-details

# git checkout -b <yourname>-property-details

crud-feature

# git checkout -b <yourname>-crud-feature

FOR YOUR FIRST RIME PUSH USE THIS

# git push -u origin <yourname>-<feature>

Always branch from the latest MASTER.

This is the process to do that

```bash
git checkout master
git pull origin master
git checkout -b <yourname>-<feature>
```

Never commit directly to MASTER.

---

# 7. Working on Your Task

Before starting work each day:

```bash
git checkout master
git pull origin master
git checkout <your-branch>
git push -u origin <your-branch>
```

Only work on the files assigned to you.

Avoid modifying another member's files unless the team has agreed.

## Keep your branch focused on **one feature**.

# 8. File Ownership

## Team Lead

Owns:

```
App.jsx

master.jsx

Navbar.jsx

Footer.jsx

Home.jsx

routes/
```

---

## Member 2

Owns:

```
BrowseProperties.jsx

PropertyCard.jsx

SearchBar.jsx

FilterPanel.jsx

SortDropdown.jsx
```

---

## Member 3

Owns:

```
PropertyDetails.jsx

Enquiry.jsx

Modal.jsx
```

---

## Member 4

Owns:

```
PropertyContext.jsx

properties.js

utils/
```

If you need to edit someone else's file, notify them first.

---

# 9. Coding Standards

- Use meaningful variable names.
- Create reusable components whenever possible.
- Keep components small and focused.
- Do not duplicate code.
- Use consistent indentation and formatting.
- Remove unused imports and variables before committing.
- Test your feature before pushing.

---

# 10. Commit Messages

Keep commit messages short and descriptive.

Examples:

```
Add responsive navbar

Create property card component

Implement property search

Add property filter

Implement sort dropdown

Create enquiry form

Add form validation

Implement CRUD operations

Fix routing issue

Improve mobile responsiveness
```

Avoid messages like:

```
Update

Fix

Done

Work

Changes
```

---

# 11. Before Opening a Pull Request

Before creating a Pull Request, make sure you:

- Pull the latest `master`
- Merge `master` into your branch
- Resolve any conflicts
- Test your feature locally
- Ensure there are no console errors
- Confirm the application still runs correctly

```bash
git checkout master
git add pull origin master
git checkout <your-branch>
git push -u origin <your-branch>
```

---

# 12. Opening a Pull Request

Push your branch:

```bash
git push origin <your-branch>
```

Open a Pull Request into:

```
master
```

Fill in the Pull Request template.

Example:

## What changed

- Added property search functionality
- Added search input component
- Connected search to property listing

---

## How I tested it

- Tested search by property title
- Tested search by location
- Verified empty search displays all properties
- Checked responsive behavior

---

## Checklist

- [ ] Branch is up to date with master
- [ ] No console errors
- [ ] Responsive on mobile
- [ ] Tested feature manually

---

Tag the **Team Lead** as the reviewer.

Notify the team in your communication channel (WhatsApp, Slack, etc.) that your PR is ready.

---

# 13. Review & Merge Process

- Only the **Team Lead** merges into `master`.
- Every Pull Request must be reviewed before merging.
- Use **Squash and Merge** to keep the Git history clean.
- If your branch has merge conflicts:
  1. Pull the latest `master`.
  2. Merge it into your branch.
  3. Resolve conflicts locally.
  4. Push the updated branch.

- Ask for help only if you cannot resolve the conflict after attempting it.

---

# 14. Testing Checklist

Before submitting your work, verify that:

- The application starts without errors.
- Your feature works as expected.
- No existing features are broken.
- The UI is responsive.
- Navigation works correctly.
- Forms validate input correctly.
- Search, filter, and sort behave correctly (if applicable).
- CRUD operations work as expected (if applicable).

---

# 15. Communication Rules

At the end of each work session, share a quick update with the team:

- **Completed:** What did you finish today?
- **Working on:** What will you do next?
- **Blocked:** Are you facing any issues?
- **Files Changed:** Which files did you modify?

This helps everyone stay informed and reduces the chances of duplicate work.

---

# 16. Final Deliverables

Before the project is submitted, ensure the repository contains:

- ✅ Responsive React application
- ✅ GitHub repository with clean commit history
- ✅ Fully working CRUD functionality
- ✅ Search, filter, and sort features
- ✅ Form validation
- ✅ Clean component structure
- ✅ Well-written `README.md`
- ✅ Ready-to-present

Integration Responsibilities

| Feature            | Owner                         | Reviewer |
| ------------------ | ----------------------------- | -------- |
| Project Setup      | Member 1                      | Member 4 |
| Landing Page       | Member 1                      | Member 2 |
| Routing            | Member 1                      | Member 3 |
| Browse Page        | Member 2                      | Member1  |
| Search             | Member 2                      | Member 4 |
| Filter             | Member 2                      | Member 3 |
| Sort               | Member 2                      | Member1  |
| Property Details   | Member 3                      | Member 2 |
| Enquiry Form       | Member 3                      | Member 4 |
| Form Validation    | Member 3                      | Member1  |
| Data Structure     | Member 4                      | Member 2 |
| Context API        | Member 4                      | Member1  |
| CRUD Operations    | Member 4                      | Member 3 |
| Responsive Testing | Everyone                      | Everyone |
| README             | Member1 (with input from all) | Everyone |
| Final Demo         | Everyone                      | Everyone |
