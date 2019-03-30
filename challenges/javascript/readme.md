# Front-End challenges

Welcome to my workshop about how to become a Front-End developer. The best way to learn is by practicing and resolve some exercises about the topics that we have seen.

___

### 2. JavaScript Challenge

You have to create a repo in your profile named **javascript-challenge** and you must to [create a Pull Request](https://help.github.com/articles/creating-a-pull-request/) and assign me as reviewer in order to give you a feedback.

For the second project, you should create a simple campaign card builder. You can take as reference the next design:

![campaign card](resources/campaign-card.png?raw=true "campaign card")

We should create a functionality to build dynamically campaign cards, taking into considerations the general information about a campaign like type, name, date, tag, description and author.

We have to build as a campaign card the following campaigns:
___

**name:** Campaign A

**date:**  27/04/2019

**description:** This is a fake description about Campaign A

**tag:** grooming

**author:** Michael Scofield

___

**name:** Campaign B

**date:**  07/05/2019

**description:** This is a fake description about Campaign B

**tag:** training

**author:** Lincoln Burrows

___

We have to send the information given and our logic has to output a markup of the card, for instance:

```js
function campaignCard(name,  description) {
  return (
    "<article>" +
     "<h1>" +  name + "</h1>" +
     "<p>" + description + "</p>" +
    "</article>"
  );
}
```

**Points to evaluate:**

- objects
- arrays
- functions
- prototypes
- closures
- reusable code
