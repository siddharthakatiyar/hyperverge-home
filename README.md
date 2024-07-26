# HyperVerge Home

Welcome to the HyperVerge Home project! This repository contains the code for a Chrome extension that transforms your new tab page into a digital collaboration tool. This extension includes various widgets such as a clock, quote of the day, Google Slides, Pomodoro timer, music widget, polling, and task management, among others.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Widgets](#widgets)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Clock Widget:** Displays current time and a greeting message.
- **Quote Widget:** Fetches and displays a quote of the day.
- **Pomodoro Timer:** Helps in managing work and break intervals.
- **Music Widget:** Embedded Spotify playlist.
- **Polling Widget:** Allows users to vote on various polls.
- **Tasks Widget:** Manage and track daily tasks.
- **Google Slides Widget:** Displays slides for presentations.
- **Google Forms Widget:** Embedded Google Forms.
- **Google Sheets Widget:** Displays data from Google Sheets.
- **Search Widget:** Google Custom Search.
- **Announcements Widget:** Displays important announcements with a scrollable view.

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/hyperverge-home.git
    cd hyperverge-home
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Build the project:**
    ```bash
    npm run build
    ```

4. **Copy manifest:**
    - Copy the manifest.json file in the `build` folder

5. **Load the extension in Chrome:**
    - Open Chrome and go to `chrome://extensions/`
    - Enable "Developer mode"
    - Click "Load unpacked" and select the `build` folder

## Usage

Once installed, open a new tab in Chrome to see the HyperVerge Home extension in action. The initial view includes the clock and quote widgets. Scroll down to see other widgets like the Pomodoro timer, music widget, Google Slides, etc.

## Widgets

### Clock Widget
Displays the current time and a greeting message based on the time of day.

### Quote Widget
Fetches and displays a random quote of the day from the Quotable API.

### Pomodoro Timer
Helps you manage work and break intervals with customizable time settings.

### Music Widget
Embedded Spotify playlist for background music.

### Polling Widget
Allows users to vote on polls fetched from Google Sheets.

### Tasks Widget
Manage and track your daily tasks with local storage support.

### Google Slides Widget
Displays Google Slides for easy presentation access.

### Google Forms Widget
Embedded Google Forms for quick form filling.

### Google Sheets Widget
Displays data from Google Sheets.

### Search Widget
Google Custom Search for quick web searches.

### Announcements Widget
Displays important announcements in a scrollable view.

## Customization

You can customize the background, widget styles, and other UI elements by modifying the CSS and components in the `src` directory.

## Contributing

We welcome contributions to improve this project. To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

Please make sure to follow the [contributing guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.