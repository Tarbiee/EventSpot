# EventSpot
This Event Management System is designed to facilitate event creation, ticket management, and user reservations. It provides administrators with the tools to add, edit, or remove events, specify ticket prices and types, and set maximum attendee limits. Users can view event details, reserve tickets (both VIP and regular), and receive email notifications upon successful reservation.

# Features
# Event Management
- Admins can add, edit, or remove events.
- Each event can specify ticket prices for both VIP and regular tickets.
- Admins can set the maximum number of attendees for each event.
 
 # User Interaction
- Users can view event details.
- Users can reserve tickets (up to 5 per user).
- Users receive email notifications for successful reservations.

# SetUp

1. Clone the repository
```git clone git@github.com:Tarbiee/EventSpot.git```

2. Backend Setup
- Navigate to the server directory
- Install dependancies:
  composer install
- Configure database settings in the .env file.
- Generate an application key:
  php artisan key:generate
- Run database migrations:
  php artisan migrate
- Start the Laravel development server:
  php artisan serve

3. Fontend Setup:
- Navigate to the client directory.  
- Install dependencies:
  npm install
- Start the React development server:
  npm run dev
4. Accessing the Application:
   Open your browser and navigate to the specified URL


# Usage 
1. Administrator Actions:

Log in as an administrator.
Navigate to the admin dashboard.
Add, edit, or remove events.
Specify ticket prices and types for each event.
Set maximum attendee limits.

2. User Actions:

Sign up or log in as a user.
View event details.
Reserve tickets (up to 5 per user).
Receive email notifications for successful reservations.

# Technologies Used
- Frontend: React
- Backend: Laravel
- Database: MySQL

# Author
Tabitha Luvuno

# Licence
This project is licensed under the MIT License.

