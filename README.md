# Vanilla App Template

This project was created using Vite. To get started and configure
additional features, [refer to the documentation](https://vitejs.dev/).

## Creating a repository from a template

Use this organization repository as a template to create
your project repository. To do this, click the `«Use this template»` button and
select the `«Create a new repository»` option, as shown in the image.

![Creating repo from a template step 1](./assets/template-step-1.png)

In the next step, the page for creating a new repository will open. Fill in
the name field, make sure the repository is public, and then click the
`«Create repository from template»` button.

![Creating repo from a template step 2](./assets/template-step-2.png)

After the repository is created, you need to go to the settings
of the created repository to the `Settings` > `Actions` > `General` tab as shown
in the image.

![Settings GitHub Actions permissions step 1](./assets/gh-actions-perm-1.png)

Scroll to the bottom of the page, and in the `«Workflow permissions»` section, select
the `«Read and write permissions»` option and check the checkbox. This is necessary
to automate the project deployment process.

![Settings GitHub Actions permissions step 2](./assets/gh-actions-perm-2.png)

Now you have a personal project repository with the file and folder structure
of the template repository. From here, work with it like any other personal
repository: clone it to your computer, write code, make commits, and push
them to GitHub.

## Getting Started

1. Make sure the LTS version of Node.js is installed on your computer.
   [Download and install](https://nodejs.org/en/) it if necessary.
2. Install the project's base dependencies in the terminal using the command `npm install`.
3. Start the development mode by running the command `npm run dev` in the terminal.
4. Go to [http://localhost:5173](http://localhost:5173) in your browser. This page will automatically reload after saving changes to the project files.

## Files and Folders

- Page component markup files should be located in the `src/partials` folder and
  imported into the `index.html` file. For example, a file with header markup
  `header.html` is created in the `partials` folder and imported into `index.html`.
- Style files should be located in the `src/css` folder and imported into the HTML files
  of the pages. For example, for `index.html`, the style file is called `index.css`.
- Add images to the `src/img` folder. The builder optimizes them, but only during
  the deployment of the production version of the project. This all happens in the cloud
  so as not to overload your computer, as this can take a long time on weaker machines.

## Deployment

The production version of the project will be automatically built and deployed to GitHub
Pages, in the `gh-pages` branch, every time the `main` branch is updated. For example,
after a direct push or an accepted pull request. To do this, you need to change the
value of the `--base=/<REPO>/` flag for the `build` command in the `package.json` file,
replacing `<REPO>` with the name of your repository, and push the changes to GitHub.

```json
"build": "vite build --base=/<REPO>/",
```

Next, you need to go to the GitHub repository settings (`Settings` > `Pages`) and
set the distribution of the production version of files from the `/root` folder of the `gh-pages` branch, if this was not done automatically.

![GitHub Pages settings](./assets/repo-settings.png)

### Status deployment

The deployment status of the latest commit is displayed by an icon next to its ID.

- **Yellow color** - the project is being built and deployed.
- **Green color** - deployment completed successfully.
- **Red color** - an error occurred during linting, building, or deployment.

More detailed information about the status can be viewed by clicking on the icon and, in
the dropdown window, following the `Details` link.

![Deployment status](./assets/deploy-status.png)

### Live Page

After some time, usually a few minutes, the live page can be viewed at the
address specified in the `Settings` > `Pages` tab in the repository settings.
For example, here is the link to the live version for this repository:

[https://mrkorzun.github.io/vanilla-app-template/](https://mrkorzun.github.io/vanilla-app-template/).

If a blank page opens, make sure there are no errors in the `Console` tab
related to incorrect paths to the project's CSS and JS files (**404**).
Most likely, you have an incorrect value for the `--base` flag for the
`build` command in the `package.json` file.

## How it works

![How it works](./assets/how-it-works.png)

1. After each push to the `main` branch of the GitHub repository, a
   special script (GitHub Action) from the `.github/workflows/deploy.yml` file is launched.
2. All repository files are copied to the server, where the project is initialized and
   undergoes linting and building before deployment.
3. If all steps are successful, the built production version of the project files
   is sent to the `gh-pages` branch. Otherwise, the script execution log
   will indicate what the problem is.