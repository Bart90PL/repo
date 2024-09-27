# Race Registration App

This is a simple web application for race registration using Flask, HTML, and CSS. The application allows users to register for a running event, with real-time validation of input fields.

## Features

- User registration form
- Real-time validation for:
  - Name and surname (letters only)
  - Age (maximum 3 digits)
  - Phone number (exactly 9 digits)
  - Password (minimum 8 characters)
- Option to select race distance (5 km, 10 km, 20 km)

## Technologies Used

- Python
- Flask
- HTML
- CSS
- JavaScript (for front-end validation)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```bash
   cd race-registration-app
   ```

3. Create a virtual environment (optional but recommended):

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

4. Install the required packages:

   ```bash
   pip install Flask
   ```

5. Run the application:

   ```bash
   python app.py
   ```

6. Open your browser and go to `http://127.0.0.1:5000/`

## Usage

- Fill out the registration form.
- Ensure all fields meet the specified validation criteria.
- Upon successful registration, you will be redirected back to the form.

## Author

Bartlomiej Niziolek
