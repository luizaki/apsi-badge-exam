
# APSI Badge Exam Git Workflow Guide

This document outlines our Git workflow, including branching strategy and commit message conventions, to ensure consistency and collaboration across the team.

---


* [📚 Table of Contents](#TableofContents)
* [📁 Branching Strategy](#BranchingStrategy)
    * [`main`](#main)
    * [`staging`](#staging)
    * [`features/<feature-name>`](#featuresfeature-name)
    * [`fix/<feature-name>`](#fixfeature-name)
* [🛠️ Creating a New Branch](#CreatingaNewBranch)
* [✍️ Commit Message Guidelines](#CommitMessageGuidelines)
    * [✅ `feat:`](#Add)
    * [🐛 `fix:`](#Fix)
    * [♻️ `refactor/perf:`](#Update)
    * [🗑️ `build:`](#Delete)
* [🔑 Commit Message Tips](#CommitMessageTips)
* [📑 Pull Request Process](#PullRequestProcess)


---

##  2. <a name='BranchingStrategy'></a>📁 Branching Strategy

We follow a structured Git branching model to keep development organized and production-ready.

###  2.1. <a name='main'></a>🔹 `main`
- **Production branch**
- Contains the final, stable, and deployable version of the code.

###  2.2. <a name='staging'></a>🔹 `staging`
- **Staging branch**
- Used for integration and testing before merging into `main`.

###  2.3. <a name='featuresfeature-name'></a>🔹 `features/<feature-name>`
- **Feature branches**
- Used to develop new features in isolation.
- Keeps the codebase modular and reduces the risk of conflicts.

###  2.4. <a name='fixfeature-name'></a>🔹 `fix/<feature-name>`
- **Fix branches**
- Used to develop bug fixes or patches for specific features.

---

##  3. <a name='CreatingaNewBranch'></a>🛠️ Creating a New Branch

To create a new **feature** branch:

```bash
git checkout -b features/<feature-name>
```

To create a new **fix** branch:

```bash
git checkout -b fix/<feature-name>
```

Replace `<feature-name>` with a clear, concise name that reflects the purpose of the branch.

---

##  4. <a name='CommitMessageGuidelines'></a>✍️ Commit Message Guidelines

We use a consistent commit message format to keep history clear and meaningful. Use the following prefixes:

###  4.1. <a name='feat:'></a>✅ `feat:`
Use when adding, adjusting, or removing a feature to the API or UI.

**Example:**
```
feat: add user authentication middleware
```

###  4.2. <a name='fix:'></a>🐛 `fix:`
Use when fixing bugs or correcting code behavior.  

**Example:**
```
fix: fix incorrect login validation on the frontend
```

###  4.3. <a name='refactor/perf:'></a>♻️ `refactor/perf:`
Use `refactor` for commits that rewrite or restructure code without altering API or UI behavior. On the other hand, `perf` is a special type of `refactor` commits that specifically improve performance.

**Example:**
```
refactor: implement fibonacci number calculation as recursion

perf: decrease memory footprint for determine unique visitors by using HyperLogLog
```

###  4.4. <a name='build:'></a>🛠 `build:`
Use when using commits that affect build-related components such as build tools, dependencies, project version, CI/CD pipelines.  

**Example:**
```
build: update dependencies
build(release): bump version to 1.0.0
```

---

##  5. <a name='CommitMessageTips'></a>🔑 Commit Message Tips

- Use the **imperative mood** (e.g., "Add", not "Added").
- Keep messages **short but descriptive**.
- Focus on **what** changed, not **how** or **why**—that belongs in the pull request or code review.
- Be consistent to make collaboration easier for everyone.

---

##  6. <a name='PullRequestProcess'></a>📑 Pull Request Process

Once your feature branch (`features/<feature-name>`) is fully developed and ready for integration:

1. **Push your branch** to the remote repository:
    ```bash
    git push origin features/<feature-name>
    ```

2. **Create a Pull Request (PR)**:
    - Navigate to your repository on GitHub.
    - Go to the "Pull Requests" tab and click "New Pull Request".
    - Select your feature branch (`features/<feature-name>`) and compare it against the `staging` branch.
    - Add a clear description of the changes made, why they were made, and any relevant context.

3. **Request a Review**:
    - Assign the PR to another developer for review.
    - The reviewer will check for any issues, bugs, or improvements.
    - Address any feedback or required changes before approval.

4. **Merge the PR**:
    - Once the PR has been reviewed and approved, merge it into the `staging` branch.

5. **Clean up**:
    - After the PR is merged, delete the feature branch both locally and remotely to keep the repository clean:

    ```bash
    git branch -d features/<feature-name>
    git push origin --delete features/<feature-name>
    ```




