# Development

### Link to Deployed Website
[https://sleepypenguin367.github.io/development/](https://sleepypenguin367.github.io/development/)
### Goal and Value of the Application
The goal of the application is to let users choose and buy milk teas in a milk tea shop. Users are able to filter their desired drinks by ingredients and toppings based on a choice of caffeine preference. They can also sort the drinks by popularity, which is the default, ratings, and prices. They can add drinks to the shopping cart with the ability to add and delete the number of each drink. The application is aimed to provide a better experience when buying milk tea from a milk tea shop. 
### Usability Principles Considered
Usability: I made each section clearly distinguishable from each other with a flow. Users can work by sorting/filtering from the left, choosing the drinks in the middle, and checking out at the right. 
Learnability: I made distinctions between different features using different inputs: radio and checkbox. Users are able to learn that the sorting radio group and the caffeine or caffeine-free radio group both only allow one radio button to be selected at the same time, whereas the ingredients and toppings part allows for multiple checkboxes to be checked to use the filtering feature. 
### Organization of Components
The main app uses three components: topbar, menu, cart, and item. The menu component also has four different components, in which each representing a feature of sorting/filtering. 
### How Data is Passed Down Through Components
All data passes down through components using props. The app passes state and set state items to the menu component, and the menu components send these props to its sub-components to perform the changes in state, including caffeine group, sorting, ingredients group, and toppings group. Data from JSON are passed to the item component for each item. The cart array and total are passed to the cart component. 
### How the User Triggers State Changes
For sorting, the state uses a string to decide which sorting way to use, and it is triggered by the radio group in the sorting component. For caffeine, the state uses a boolean since there are only two mutually exclusive groups. For ingredients and toppings, the state uses a list of strings to track the ingredients and toppings selected through the checkbox. For the cart, the users use add to cart button and also the plus and minus from the cart to trigger the state, in which it uses a list of dictionaries to sort the name and number of items added. 
