# MugtomE

[Live Demo](https://mug-tome.herokuapp.com/)

Mugtome is a social media website people from around the world can use to come together and connect, inspired by Facebook. It makes use of a Rails/PostgreSQL backend with React.js and Redux on the frontend.

The project was designed and build within a two-week timeframe, though I plan to continue adding improvements over time.

## Features
* Secure frontend to backend user authentication using BCrypt.
* Users can create posts that show up on their timeline.

### Creating posts
Posts are added to the users' timelines dynamically on their profile page using React and Redux's render and subscription features, respectively. Because of this, changes in state are reflected immediately upon request completion, without any need for additional DOM manipulation

This README would normally document whatever steps are necessary to get the
application up and running.

## Project Design
MugtomE was designed with simplicity and elegance as its primary goals. Considering the two-week time period, it was decided to focus on a core set of features that ran smoothly and bug-free. Keeping code manageable was prioritized over cloning every major feature of the target app, in the interest of providing a solid codebase to build upon for the future.

## Technologies
Rails was chosen due to its out-of-the-box support for relational databases and RESTful architecture. As this project was a smaller-scale portfolio piece being built in a relatively short timeframe, convenience and speed was prioritized over scalability. For this reason, the chosen technologies (Heroku, Rails, etc.) were determined to be adequate for the predicted load.

Frontend Redux states are set up in a way such that there are separate reducers and actions for stories, comments, likes, follows, users, and errors. This keeps the state normalized, easing the task of keeping things up-to-date with changes in the database.

In addition to the included packages, Rails Active Storage and Amazon's AWS service were used in conjunction to accomplish image uploading.

### Additional Resources
* [API Endpoints](backend-routes)
* [Database Schema](schema)

## Possible future features
In the future I would like to add:
* A component that presents users the current user might know and want to friend
* Search bar to find users
* Option to friend users
* An index page that contains a news feed (posts from friended users ordered by time created)
* Create/Edit/Delete comments
* Create/Delete likes
* Convert form to create post into modal
* Convert names in individual post items to active links to corresponding user's profile pages
* Update profile picture
* Create/Delete photos and photo albums
