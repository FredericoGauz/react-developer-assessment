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
## View

You can see the sample project **live** in this link[] and the **storybook** here[].
### Missing

Besides some easy to spot things, like proper handling different (loading, error) component states. I didn't persist the filter queries to the URI. I will do so if I manage to find some time.


### Other Notes

* Bumped `Create React App` to version @4.0.2 (actually only @4.0.1 was needed) to fix `#9869 Fix react-jsx error (@benneq)`
    * Note: In a real production situation, where I would be working with a team,  I would not do something like that before discussing with them. I would do this to prevent possible breaking changes in the project I could not be aware of.

* [Git] I would usually push the commits much more frequently, but due to the nature of the exercise I decided to keep them local as much as possible.

* I imported more then one font to try some styles out during dev.