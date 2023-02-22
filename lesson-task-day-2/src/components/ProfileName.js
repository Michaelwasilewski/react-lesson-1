function ProfileNamePic({name}){
    console.log(name)
    return (
        <div>
            <h4>Hi my name is {name}</h4>
        </div>
    );
}

export default ProfileNamePic;

// Create two components, ProfileName and DefaultProfilePic.

// ProfileName should receive one prop called name and return it inside an <h4> element.

// DefaultProfilePic should import an image and return it using an <img> element. The component should also receive and use one prop, altText.

// Place both these components in an appropriate folder.

// Import and render both components in src/App.js, passing appropriate prop values in.

// Styling is not important but you can place any styles in src/App.css, making sure you have that imported in src/App.js.