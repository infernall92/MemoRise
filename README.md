# MemoRise

This is a front-end project of mine created with React.
It's similar to Notes app on your phone.

## Installation

To view the app locally, clone the repository in your local environment and run:

```npm install --legacy-peer-deps```

and then 

```npm start```

## More info

```--legacy-peer-deps``` flag is needed because React and React-dom versions are downgraded.
That was required by Material UI elements, because they weren't compatible with the latest React version.

The app is still work-in-progress. There's still much more to be done. In the future I will add an `edit` option, so the user can edit existing notes.

Also at the moment it doesn't save any data. No back-end at all.
