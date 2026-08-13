# ShowFinder - Quick Interview Reference

This document is designed to help you prepare for an interview where you might present or discuss the **ShowFinder** project. It provides a grounded, realistic guide on how to demonstrate the project and answer technical questions without exaggerating its complexity.

## 1. Project Overview (The "Elevator Pitch")

**How to describe it:**
"ShowFinder is a frontend React application that allows users to search for movies using the OMDB API and save their favorite selections locally. It was built to practice core React concepts like component architecture, state management with the Context API, routing, and interacting with external APIs."

**Key Features to Highlight:**

- **Search Functionality:** Real-time fetching of movie data based on user input.
- **Favorites System:** Ability to 'like' movies, persisting them across sessions.
- **Routing:** Navigation between the home page, individual movie details, and the favorites list.

## 2. How to Demonstrate the Project (Step-by-Step)

_Keep the demonstration focused and honest. Don't claim it's a massive enterprise app; frame it as a solid learning project._

1.  **Start at the Home Page:** Show the default loading state and the popular movies grid. Mention that it fetches a default list so the user isn't met with an empty screen.
2.  **Search for a Movie:** Type a query into the search bar.
    - _Insight:_ Mention that this makes an asynchronous call to the OMDB API and updates the state.
3.  **View Movie Details:** Click on a movie card to navigate to the details page.
    - _Insight:_ Briefly mention that you use React Router (`useNavigate` and URL parameters) to handle this transition and pass the movie ID.
4.  **Add to Favorites:** Click the heart icon on a movie card.
    - _Insight:_ Explain that this interaction stops event propagation (so it doesn't trigger the card click) and updates the global state.
5.  **Go to the Favorites Page:** Navigate to the favorites view. Refresh the page to show that the favorites are still there.
    - _Insight:_ Highlight that you used `localStorage` synced with the React Context API to ensure data persists across browser reloads.

## 3. Expected Interview Questions & How to Answer

### Q1: How did you manage state across different components?

**Answer:** "I used React's Context API (`FavoritesContext`). Since the favorite movies need to be accessed by the Home page, the Movie Cards, and the Favorites page, passing props down (prop drilling) would have been messy. Context provided a clean way to manage the `addFavorite`, `removeFavorite`, and the `favorites` array globally."

### Q2: How did you handle data persistence?

**Answer:** "I integrated `localStorage` directly into the Context provider. When the app initializes, a `useEffect` hook reads from `localStorage` to set the initial state. Whenever a favorite is added or removed, I update the React state and simultaneously write the updated array back to `localStorage` using `JSON.stringify()`."

### Q3: What were some challenges you faced, and how did you solve them?

**Answer:** _You can bring up the exact bugs we fixed!_
"One interesting challenge was handling click events on the movie cards. I had a 'heart' button sitting inside a card that was also clickable. Initially, clicking the heart would accidentally navigate the user to the details page. I solved this by learning about Event Bubbling and using `e.stopPropagation()` on the button's onClick handler. I also had to fix a CSS z-index issue where the content div was physically overlapping the button, making it unclickable."

### Q4: How do you handle asynchronous operations in React?

**Answer:** "I used `async/await` syntax inside my fetching service (`omdb.js`) and my component handlers. I also managed a `loading` state variable (boolean) to provide visual feedback to the user while waiting for the OMDB API to return results."

### Q5: What would you improve if you had more time?

_(Having a realistic answer here shows maturity)_
**Answers you can use:**

- "I would add debouncing to the search input so it doesn't make an API call on every single keystroke if I implement live search."
- "I would add pagination or infinite scrolling, as currently, it only shows the first page of search results."
- "I would improve the error handling, perhaps adding toast notifications if the API fails or limits are reached."

## 4. Final Tips for the Interview

- **Be honest:** If you followed a tutorial or got help (like using an AI assistant for debugging), it's okay to say so. Frame it as "I ran into a bug with event propagation, researched it, and learned how to use `stopPropagation`."
- **Know your code:** Before the interview, quickly read through `FavoritesContext.jsx`, `MovieCard.jsx`, and `Home.jsx`. These contain the core logic.
- **Focus on the 'Why':** Interviewers care more about _why_ you chose a technology (e.g., Context API vs Redux) than the code itself.
