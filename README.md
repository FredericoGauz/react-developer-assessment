# NetConstruct React Developer Assessment

## Overview

Following up the exercise proposed I will write here a bit about what was done and why.

The structure of the sample application is such:

1. A Sample Blog/News portal with the provided posts displaying in grid
2. I added a simple details page for each post, this detail page uses an additional MirageJS route
3. The posts can be filtered by category (I can add other types of filter, if needed) using the 'react-select' component with some custom styles and animation on.
4. The posts and the detail page are fetched as usual with useEffect and then useState. I like using react-query but for the purpose of this exercise I went without that.
5. I used axios for fetching the results instead of fetch or appsauce
6. I decided to go for styled components as a CSS IN JS option
7. I added Storybook and added some sample stories to a few components, due to time constrain, I couldn't add all.
8. I chose to make a folder for each component (to hold specific things, stories, etc) and ended up using a 'index.ts{x}' to make imports easier. It does make a bit harder to switch tabs in vscode though.  
9. I tried to keep the commit structure as simple as possible. It will be easy to follow my development story through my commits.
10. I didn't know the comment level expected at this example project, so I just wrote things that I thought critical, warnings and todos, and things that might have been difficult to grasp at first sight. But I am very open to other comment strategies, and am happy to scan the code adding some helpful explanations, with a balance between typescript self explaining things (like argument and return types) and insights into what a functions does and why some specific piece of code is there for.
11. I added support for using the mocked api for having in components that don't have a pure (container/component) proper separation. Check Initial Page/Detail Page differences. This is useful when you don't have time/motivation in separating those.
## View

You can see the sample project **live** in this [react-developer-assessment.vercel.app/](https://react-developer-assessment.vercel.app/) and the **storybook** [here](https://react-developer-assessment-storybook.vercel.app/).

`Please note that the storybook it is still in a very crude state.`
### Missing

Besides some easy to spot things, like proper handling different (loading, error) component states. I didn't persist the filter queries to the URI. I will do so if I manage to find some time.


### Other Notes

* Bumped `Create React App` to version @4.0.2 (actually only @4.0.1 was needed) to fix `#9869 Fix react-jsx error (@benneq)`
    * Note: In a real production situation, where I would be working with a team,  I would not do something like that before discussing with them. I would do this to prevent possible breaking changes in the project I could not be aware of.

* [Git] I would usually push the commits much more frequently, but due to the nature of the exercise I decided to keep them local as much as possible.

* I imported more then one font to try some styles out during dev.

#### Known Issues

* There is still lots of improvements and possibilities regarding mobile css and versions of the website (like dark/light, etc)
* Due to some tricks (like the post carousel) there are some hanging scrolls in project that I don't like.