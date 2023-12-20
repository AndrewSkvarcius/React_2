### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

React Router is a library for React apps that manages navigation and rendering of components in sync with the Url. It enables the creation of single page apps where different views are render as the user navigates, with out the need for full page loads. 


- What is a single page application?

A Spa is a web app or website that interacts with the user by dynamically rewriting the current page rather then loading and entire new one from a server. This approach results in a more fluid user experience. 


- What are some differences between client side and server side routing?

Client Side 

Occurs in browser no request sent to server for new page
Uses Js uses quick transitions more app like feel
can result in intial loading delay 

Server side 

request is sent to server new page is sent in response
can be faster for intial page load
can result in full page reload making for less seamless experience 

- What are two ways of handling redirects with React Router? When would you use each?

Redirect component

Component that renders a redirect to new location 
useful in render methods within switch statements

useHistory / useNavigation Hook 

navigate by pushing a new entry onto history stack
Ideal for redirects in response to events, like form submission

- What are two different ways to handle page-not-found user experiences using React Router? 

Default Route

A catch all route that renders a "Not Found" component

useHistory to navigate 

Redirecting user to a specific "Not Found" page or the home page for unrecognized routes

- How do you grab URL parameters from within a component using React Router?

The useParams hook can access URL paramaters from within a component.

- What is context in React? When would you use it?

Context provides a way to pass data through the component tree without have to pass props down manually at every level. Its used for data that can be considered "global" for a tree of REACT components, such as current user.

- Describe some differences between class-based components and function
  components in React.

Syntax and Declarations

Class components are declared using Es6 classes, while functional components are just Js fuctions 

State and lifecycle methods

Class components have local state and life cycle methods. Functional components , traditionally stateless can use hooks to manage state and lifecycle events.

this Keyword

Class components make use of this to access props and state. Functional components receive props as arguments and don't use this keyword.

- What are some of the problems that hooks were designed to solve?

Reuseability of stateful logic

Before hooks sharing stateful logic between components required complex patterns like render props or higher- order componenets 

Complex Components

Managing the state in class components, especialy in large components can become unwieldy

Confusing Classes 

Js classes can be confusing for both new and old developers, the use of this can lead to bugs

Boiler plate code

class components often require more boilerplate code then functional components with hooks.