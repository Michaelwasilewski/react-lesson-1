function DefaultProfilePic({altText}){
    console.log(altText)
    return (
        <div>
            <img src="https://raw.githubusercontent.com/heshamelmasry77/lesson-task-js-frameworks-module1-homework-1/master/example.png" alt={altText}/> 
        </div>
    );
}

export default DefaultProfilePic;

// Create two components, ProfileName and DefaultProfilePic.

// ProfileName should receive one prop called name and return it inside an <h4> element.

// DefaultProfilePic should import an image and return it using an <img> element. The component should also receive and use one prop, altText.

// Place both these components in an appropriate folder.

// Import and render both components in src/App.js, passing appropriate prop values in.

// Styling is not important but you can place any styles in src/App.css, making sure you have that imported in src/App.js.