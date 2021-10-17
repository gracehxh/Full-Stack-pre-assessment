# Senior Engineer - Full Stack Web

## Technical Assignment

Make sure to document your **technical decisions and assumptions** you have made during this technical assignment. **e.g. why did you choose to use a particular heavy js package, reasoning behind the choice of state management technique etc.**

- Do not forget to add instructions on how to build and run the code.
- Put your code on a public repository on github for us to clone.
- You are allowed to use as many assumptions as you like, but don't forget to explain it.
  Please submit the pre-assessment and email to cedric_loy@ensigninfosecurity.com within 5 calendar days.

### Assignment 1

Implement given design (`design.png`) in HTML and CSS.

Try to come up with your own solution and do not use any CSS framework. The content can be hardcoded and you can use any font and images.

Solution:
Mimicked the design as much as I could. I noticed that the design pretty similar to a kanban board.

Assumption:
That I have to implement the solution as close to the design as possible without questioning certain components. Most of the assumptions would involve at least some form of javascript, not a requiurement, thus not worked upon further.
- What would be the expected behaviour when a text in the search bar is entered
- Creation/Modification (task/context/assigned user)/Deleting of task
- Changing of task status is done by drag-and-drop mechanism
- As no CSS framework can be used, bootstrap for responsiveness was also not considered

Technologies: plain HTML, plain CSS

How to run:
- Go to assignment1Design
- Double click on index page (`index.html`)

Difficulty:
- Unable to reuse task component as it involves javascript code, not too sure if there is another way to go about it

### Assignment 2

(`Create a shopping cart`)

Shopping Cart Requirements

- A ​main page​ that show multiple products
- When product page is clicked, it will go to a separate product ​detail page​
- Product ​detail page​ will have add to cart
- When "​Add to cart button​" is clicked, it will update the cart icon to have number of the product in the cart
- A ​cart page​ will list the products which are added to the cart
- Cart page will calculate the total amount needed to be paid
- Cart will allow the change of quantity and removal of products
- Please use ReactJs for this assignment
- Please use https://fakestoreapi.com for retrieval of products

Bonus

- Write meaningful test cases only on cart page using jest and react-testing-library.
- Persist data of shopping cart even when browser is closed and reopen.
- Beautify the UI using tailwindcss framework
- Surprise Us :)

Solution:
- Throughout the application, there would be
    - Home button to also go back to the root url
    - Shopping cart icon to go to the shopping cart page
    - Shopping cart badge to ensure that users can view the current amount of items added to the cart
- The main page would be a listing of all the products from https://fakestoreapi.com/products
    - Product image
    - Product name
    - Product price
    - Quick access button to add product to shopping cart
- Access to a separate product details page is via clicking the product's image, name and price
    - Additional details like description and summarised reviews are display with its relevant data extracted from https://fakestoreapi.com/products/id
- The shopping cart page will list 
- Ways to add product to cart. Any successful attempt is as evidenced by the updated shopping cart badge
    - Main page for each product
    - Product detail page
    - Shopping cart (for removal of product as well)

Technologies:
- UI: React 17 
    - Downloaded modules through `npx create-react-app` just because it has all the needed dependencies
- CSS: Tailwindcss
    - To be honest, my initial attempt of the code was done in material ui first as that is what I'm more familiar with. After the base code was completed, then I attempted converting the css to tailwindcss
    - Initialy material ui was chosen because of its user experience and ready-available design components. Its user experience is also based on years of research from their designers. However as compared to tailwindcss it is known for its relatively slower performance
    - Tailwincss does have a potential drawback in which its mainly assists in styling thus one would need to write the components first before making use of tailwindcss. However, using its styling is relatively quick to implement
    - Personally, the bulk of the time was focused on implementing with tailwindcss but I realised that it allows customisation of themes much easier than material ui
- State management: 
    - React Hooks
        - Choice was between using class components and its lifecycles to management its local state or to use functional components 
        - Functional components reduces lines of boilerplate codes making less hassle when it comes to refactoring (sometimes scenarios like binding or including similar codes for componentDidMount and componentWillUnmount lifecycle for class components tends to be missed)
        - From my knowledge, redux tends to be a popular global state management, however usually used when there are alot of components requiring the states, which for this assignment, to me it is not as big or memory intensive to require it
    - React-query
        - Bulk of data storage in the application is mainly on calling the api and displaying its response
            - This can be done through a useEffect (api request, asynchronous in nature) and useState (set the api response) hook, usually requiring additional states like `isItLoading` and `isThereAnError`, quite involves lines of codes
        - Reduces boilerplate code
- Navigation: React-router-dom
    - Navigation between different pages with history tracking. Just because alot of users tend to be so used to the browser back button despite most modern application being a single page application. Thus even attempts to disable it might make users think there's some user experience awkwardness. Thus react-router-dom and history.push() is used