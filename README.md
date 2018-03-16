![jurassic-mart](https://user-images.githubusercontent.com/25888207/37524921-9421118e-28e8-11e8-83ef-6e61cc1c132b.png)

Done as a hackathon MERN project in WDI-17 of General Assembly. 

#### Creators: [Emily Garrett](https://github.com/egarrett94) and [Michael Hammer](https://github.com/HamMike/jurassic-mart)

#### Technologies Used: 
* React.js
* BCrypt
* React-Router 
* HTML5/CSS3/JavaScript
* jQuery
* Materialize
* Express.js
* MongoDB / Mongoose
* Node.js

## Getting Started:

We were offered the topic of "Prehistoric e-Commerce" as our inspiration for this particular hackathon. Before anything, we thought of the products we would be trying to sell. We quickly decided upon dinosaur pet supplies, and dove straight into the user stories! 

### User Stories: 

* I am a single cavewoman who needs a companion for my cave home. I need to make sure my new scaly friend has everything they need! 

* I am an actual caveman and do not know how to use a computer. Please make my shopping experience bearable.

* I am a family-oriented cavedweller and want to know more about my future dinosaur pet before making any kind of a purchase. 

#### How'd that work out? 

We used the user stories as a more finite inspiration for what we should be building and how to do it, so we fleshed out some wireframes as well. 

![img_8820](https://user-images.githubusercontent.com/25888207/37528735-9a7d75f4-28f2-11e8-9353-330dc3fbf4a6.JPG)
![img_8821](https://user-images.githubusercontent.com/25888207/37528737-9a9008cc-28f2-11e8-9b11-aaa1f254310a.JPG)

## Initial Struggles:

One of the bigger struggles we faced, honestly, was wrestling with Git. This being our first experience with Git collaboration, it was a bit of a learning curve that became much easier to fix and understand with the more we used it. 

We also couldn't decide on which boilerplate to use at first, and after a couple flip flops, we decided to use a boilerplate that we created initially as a test for authenticating a user. 

### First steps: 

After that rocky start, we were able to dive right in. I started building out the front end and styling here and there, while Mike took charge of refactoring the boilerplate to be more within the range of what we'd need for MVP. 

We were considering building an external JSON file to import and use for our products list, but ended up simply hard-coding it into our Products component for simplicity's sake. 

Our component hierarchy for this particular app was simple. 

* App 
  - Products --> IndivProduct
  - Cart 
  - Checkout
  - Login
  - Sign Up
  
### UX Considerations:

We wanted the app to be simple and straightforward. (So easy a caveman could do it...wasn't that an advertisement slogan? Was that a weird fever dream?) We also wanted to reflect the hackathon's topic in the design. The obvious answer was to incorporate Jeff Goldblum into it. 

But in all seriousness, the color palette is bold enough to be fun and engaging for the user without it being like you accidentally walked into a Toys 'R' Us. (RIP) The buttons are a slightly lighter shade of the nav bar, which is fixed to the top of each "page". To do this at first, I simply hardcoded a Materialize Nav bar into the index.html, but upon realizing the routing wouldn't work quite right with that, I built it into a component and rendered it wherever necessary. 

### Screenshots 

![screen shot 2018-03-16 at 8 18 44 am](https://user-images.githubusercontent.com/25888207/37528862-e38831a8-28f2-11e8-94ba-eb0cd66cc64e.png)
![screen shot 2018-03-16 at 8 19 02 am](https://user-images.githubusercontent.com/25888207/37528863-e39bd44c-28f2-11e8-9cad-a45dc47bd475.png)
![screen shot 2018-03-16 at 8 19 17 am](https://user-images.githubusercontent.com/25888207/37528864-e3ae061c-28f2-11e8-9a14-f91f2736a294.png)
![screen shot 2018-03-16 at 8 19 45 am](https://user-images.githubusercontent.com/25888207/37528866-e3c407e6-28f2-11e8-9569-d559ffdcd8db.png)

### Struggles Throughout: 

* For me, routing and handling state is really difficult to grasp still. I'm pleased that we had an opportunity to hone our skills through -suffering- repetition and refactoring, but I'll personally have to do a lot more research. Michael has a great grasp on the subject and was a huge help when handling the back-end code. 
* Again, doing Git collaboration was a bit of a learning curve and an interesting experience. I'm glad to have had struggles with it though, I feel much more confident with it now. 

### Ideas for the future: 

* Adding a section to buy actual dinosaurs.
* Adding little badges that pop up when 'Add to Cart' is clicked to notify the user that it worked.
* Delete from cart function. 
* More Jeff Goldblum. 
