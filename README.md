# RenameApp

This project is an implementation of a design project done in Adobe XD.
Available [here](https://xd.adobe.com/view/d5ebd28d-6810-45e1-438a-5a0cc273410c-a3da/) for preview.

## Project contribution
Any changes to the project's master branch will have to be made through a PR explaining the contribution.
Please follow the following flow before making a PR.
1. Fork the repo for yourself on github
2. Clone the repo on your local computer
3. Pull from master
3. Create a branch from master with your own name
4. Publish your branch

After working in your branch
1. Switch to master and sync with this repo's master
2. Switch back to your branch and merge master *into* it
3. Push your changes to your remote branch
4. Make a PR from your remote branch to this repo's master

`Note: This is the standard flow of contributing to open source projects, so please try to follow it`

## Angular App design
### Components
There are 4 components in this angular app, namely:
1. Side menu
2. Filename builder
3. Elements area
4. Preview (Big)
5. Preview (Small)
These are layed out in a grid format using css.
### File object structure
```
{
    "name": "string",
    "ext": "string",
    "geoLocation": {
        "longitude": "string",
        "latitude": "string"
    },
    "size": {
        "value": "number",
        "unit": "string"
    },
    "owner": "string",
    "lastModifiedTimeStamp": "string"
}
```

## Angular documentation
### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
