# Next.js & Tailwind CSS App

This is a Next.js application with Tailwind CSS integration. The app fetches data from a provided API and displays the search results. It includes a search bar and an home page, plus result page with a search bar and pagination components, displaying 10 results per page.

## Installation

Use the following steps to get the application up and running:

1. Clone the repository.
2. Run `npm install` to install the required packages.

## Running the App

You can start the development server using the following command:

`npm run dev`

This command will enable you to access the application in your web browser.

## Running Cypress Tests

To run Cypress tests, use the following command:

`npx cypress open`

This command will open the Cypress Test Runner, allowing you to select and run your Cypress tests interactively.


## Usage

1. Go to the home page of the application.
2. Utilize the search bar to enter your desired search query (as it doesn't really perform any search, results would be same for any query).
3. The app will make a request to the provided API and redirect you to the results page.
4. The results will be displayed, with 10 results per page, along with pagination functionality.

## Technologies Used

- Next.js
- Tailwind CSS
- npm

## Credits

This application was developed by Katharina Schreiber for coding challenge. Contributions are welcome through pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
