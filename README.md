# Friends Of Churn Creek (In Progress)

<!-- ## Checkout The Live Project: [HERE!](https://photosnap-tc.netlify.app/) -->

<!-- ## Table of contents

- [Overview](#overview)
  - [The Project](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview -->

### The Project

I volunteered my time to rebuild the Friends Of Churn Creek (non-profit) website.

Features that were added:

- Netlify CMS connection for full control over page content
- Mobile responsiveness
- Full redesign
- Modern best practises
- Online contact form & donation/membership submissions

<!-- 
## Screenshots
### Desktop Version

<img src="./screenshots/desktop.png" width="400" />

### Tablet Version

<img src="./screenshots/tablet.png" width="400" />

### Mobile Version

<img src="./screenshots/mobile.png" width="200"/> -->
<!-- 
### Links

- Live Site URL: [Netlify](https://photosnap-tc.netlify.app/)

## My process

### Built with

- Flexbox
- CSS Grid
- Mobile-first workflow
- [Next.js](https://nextjs.org/) - React framework
- [Node.js](https://nodejs.org/en/) - JS Runtime
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework

### What I learned

#### Building a JSON Data file from scratch

```json
{ "title": "The Mountains", "images": { "desktop":
"./assets/stories/desktop/mountains.jpg", "mobile":
"./assets/stories/mobile/mountains.jpg", "tablet":
"./assets/stories/tablet/mountains.jpg" }, "date": "April 16th 2020",
"photographer": "John Appleseed", "isHomepage": true, "id": 2 },
```

#### Using the Fill CSS property to fill a SVG

```css
#tw:hover {
  fill: url(#gradientTW);
}
```

#### Using Map and Filter together to populate cards using the JSON data

```js
{
  storiesItemsData
    .filter((media) => !media.isHomepage && !media.isMainCard)
    .map((media) => (
      <StoriesCards
        title={media.title}
        mobile={media.images.mobile}
        desktop={media.images.desktop}
        tablet={media.images.tablet}
        date={media.date}
        photographer={media.photographer}
        key={media.id}
      />
    ));
}
```

#### Using state to toggle between classes for tailwind styling and displaying text

```js
const [isActive, setActive] = useState(false);

const toggleClass = () => {
  setActive(!isActive);
```

### Continued development

I would like to learn more about working with JSON data in React & NextJS projects. I would also like to gain more experience creating reusable components.

### Useful resources

- [Grid Template Cols - TailwindCSS](https://tailwindcss.com/docs/grid-template-columns) - This helped me with creating the layouts to ensure they were responsive and taking up their required space. Tailwind has really great documentation that makes using their framework a breeze.

- [Kevin Powell - Are you writing responsive CSS the wrong way?](https://www.youtube.com/watch?v=0ohtVzCSHqs) - This is an amazing video that really helped me understand that less is more when working with CSS and responsiveness.

## Author

- Website - [Tyrell Curry](https://www.tyrellcurry.io)
- Frontend Mentor - [LinkedIn](https://www.linkedin.com/in/tyrellcurry/)
- Twitter - [@Tyrell_io](https://twitter.com/Tyrell_io)

## Acknowledgments

Special thanks to [Rodderick Garland](https://github.com/zencoder24) for collaborating on the project. -->