# Things to consider

**This is a non-exhaustive list of pointers that we have found help my the Fullstack project run much smoother**

#### 1. Be sure, double sure, triple sure that you do not have `rails 6` installed on your project
#### 2. Get a CSS Reset file first thing
#### 3. We're going to use SCSS so learn a bit about it (it's exactly the same as CSS but with some extra features)
#### 4. Don't be really specific with your CSS selectors (use classes 90% of the time and go more specific only as needed)
#### 5. Don't write all of your CSS in the `application.css` file. Make separate CSS files for related components
#### 6. Make sure the window magnification of your localhost:3000 on Chrome is 100% (do a cmd + 0 on macs)
#### 7. Don't underestimate CSS! You will spend 50%-80% of your time on it
#### 8. Finish one MVP (including styling!) before moving on to the next (please don't try and build the whole backend first)
#### 9. Be sure to checkout the FullStack Resources on a/A Open (Modal and AWS instructions are there)
#### 10. No Jquery or Vanilla DOM manipulation in your React components at all! Use local state of that component
#### 11. Try and make your components small. Each component can have a single responsibility. (A component can just render text. That's okay)
#### 12. Avoid implicit `return`'s to make debugging easier
#### 13. Avoid html `<br>` tags in React. Use CSS to get the desired positioning
#### 14. Be sure to leave lots of time to seed. It will take a while.
#### 15. Be sure to put the ruby gem `bcrypt` in the top portion of your gemfile. We need it in dev, prod, and test environments
#### 16. Remember this is about learning! You're going to learn more in these two weeks than you can image. So try stuff! If it doesn't work, learn from it
#### 17. Have fun (:


__Future TAs please add and update this list as you see fit__