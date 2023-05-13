export function createAboutPage(){
    const aboutPage = document.createElement('div');
    aboutPage.innerHTML = `
        <h1>About Page</h1>
        <p>This is the about page</p>
    `;
    return aboutPage;
}