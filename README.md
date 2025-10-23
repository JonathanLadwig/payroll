# Payroll

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.4.

## Setup Instructions

### Prerequisites

- Node.js (v18 or later recommended)
- npm (comes with Node.js)
- Angular CLI version 20.3.4

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd payroll
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   ng serve
   ```

4. **Access the application**
   - Open your browser and navigate to `http://localhost:4200/`
   - The application will automatically reload when you modify source files

Build artifacts will be stored in the `dist/` directory.

### Running Tests

```bash
ng test
```

## Time Spent

| Task                          | Time Spent  |
| ----------------------------- | ----------- |
| Project Setup & Configuration | 5 minutes   |
| Payroll Service               | 20 minutes  |
| Payroll Table                 | 55 minutes  |
| Employee Info                 | 80 minutes  |
| Navbar                        | 20 minutes  |
| Action Menu                   | 0 minutes   |
| **Total**                     | **3 hours** |

## Challenges

### Challenge 1: Table-styling

- **Problem:** Tables are finicky to style correctly. At first no borders or border radius was working.
- **Solution:** Setting border-collapse: separate; as well as styling first child and last child rather than the tbody worked
- **Learning:** How to better style tables with custom style

### Challenge 2: Table-ordering-styling

- **Problem:** The table has an asc desc icon next to it on the active th. It needed specialised styling and also make sure it didn't have layout shift
- **Solution:** Created a custom component just for table headings with input signals to adjust styling
- **Learning:** When to use a smaller custom child component rather than make the parent more complex

## Improvements

Given more time, I would implement the following improvements:

1. **Better Value Sorting**

   - Description: Curently sorting includes empty values in it, filtering them to the bottom for sorting would be better
   - Benefit: No more empty values appearing at the top during sorting

2. **Pagination for Large Datasets**

   - Description: Pagination to display a limited number of records per page with controls to navigate between pages
   - Benefit: It would enhance performance and usability when dealing with hundreds or thousands of employee records, but then ideally sorting and searching would need to be done on the backend.

3. **Better Accessibility**
   - Description: Since I was under time constraints I didn't always implement the correct html elements or aria-labels
   - Benefit: Good html semantics help accessibility through screen readers and keyboard navigatiion. They also helo with SEO, which is not applicable in this application.

## AI Tool Usage Reflection

### What/Which Tools

- **GitHub Copilot**
- **ChatGPT**

### Why/Where

#### Boilerplate Code Generation

- Used for: Generating the base html templates and empty nested scss
- Reasoning: It is a huge timesaver and as long as its prmpoted right does a good job. The empty nested scss especially is a huge timesaver and ensures every element/class is taken into account.

#### Logic Implementation

- Used for: Sorting and filtering the earnings signal
- Reasoning: It's a common task and the AI handles it well enough

#### Debugging & Problem Solving

- Used for: Correcting resource 401 failure
- Reasoning: In a time sensitive task I didn't have the time to debug it manually

### Critique

AI does not handle modern angular techniques well and still uses old syntax (like ngFor) when generating code unless given some reference to modern best practices. It also does not take into account the correct HTML semantics all the time (like when to use <a> versus a <button>), since it trained off popular code, not always correct code. AI also currently is lackluster at styling. If you need a product to match a specific design you need to manually style it.

#### Where AI Excelled

- **Time Savings:** SCSS and HTML generation
- **Code Quality:** Sorting and filtering in computed signals it handled well
- **Learning Aid:** None provided in this assessment, but a 'best practices' md file helps.

#### Where AI Fell Short

- **Incorrect Code:** Generating rxResources is something it repeatidly struggles with
- **Context Limitations:** Copilot does not have access to images outside the project for reference
- **Manual Corrections:** Using modern angular syntax, correcting html elements to best practice semantics

#### Overall Assessment

AI is great at generating base code For implementing modern angular code it is still best to correct manually, or give the AI a 'best practice' document to better implement code. You could also theoretically train a LORA on the best practices which would help with code quality. As far as styling goes this is AI's greatest weakpoint. It generates based on guesses and estimates, which frequently produce incorrect unresponsive UI's.

---
