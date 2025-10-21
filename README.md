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

### Challenge 1: [Table-styling]

- **Problem:** [Tables are finicky to style correctly. At first no borders or border radius was working.]
- **Solution:** [Setting border-collapse: separate; as well as styling first child and last child rather than the tbody worked]
- **Learning:** [How to better style tables with custom style]

### Challenge 2: [Table-ordering-styling]

- **Problem:** [The table has an asc desc icon next to it on the active th. It needed specialised styling and also make sure it didn't have layout shift]
- **Solution:** [Created a custom component just for table headings with input signals to adjust styling]
- **Learning:** [When to use a smaller custom child component rather than make the parent more complex]

## Improvements

Given more time, I would implement the following improvements:

1. **[Feature/Improvement 1]**

   - Description: [What would be added/changed]
   - Benefit: [How this would improve the application]

2. **[Feature/Improvement 2]**

   - Description: [What would be added/changed]
   - Benefit: [How this would improve the application]

3. **[Feature/Improvement 3]**
   - Description: [What would be added/changed]
   - Benefit: [How this would improve the application]

## AI Tool Usage Reflection

### What/Which Tools

- **GitHub Copilot**: [Version/Configuration]
- **[Other AI Tool]**: [If applicable]

### Why/Where

#### Boilerplate Code Generation

- Used for: [Describe specific instances]
- Reasoning: [Why you chose to use AI here]

#### Logic Implementation

- Used for: [Describe specific instances]
- Reasoning: [Why you chose to use AI here]

#### Debugging & Problem Solving

- Used for: [Describe specific instances]
- Reasoning: [Why you chose to use AI here]

#### Documentation & Comments

- Used for: [Describe specific instances]
- Reasoning: [Why you chose to use AI here]

### Critique

#### Where AI Excelled

- **Time Savings:** [Specific examples where AI significantly sped up development]
- **Code Quality:** [Examples where AI produced good, clean code]
- **Learning Aid:** [How AI helped you understand new concepts or patterns]

#### Where AI Fell Short

- **Incorrect Code:** [Examples where AI generated buggy or incorrect code]
- **Context Limitations:** [Situations where AI didn't understand the broader context]
- **Manual Corrections:** [Specific instances requiring significant refactoring]

#### Overall Assessment

[Your overall thoughts on using AI tools for this project - was it beneficial? Would you use it again? What would you do differently?]

---

## Development Information

### Code Scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

### Running Unit Tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

### Running End-to-End Tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
