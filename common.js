// common.js

// Sample user information (you should fetch this from your user authentication system)
const userInfo = {
    name: "John Doe",
    college: "Sample College"
};

function includeNavbar() {
    const navbarContainer = document.createElement('div');
    navbarContainer.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="index.html">P S P</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="peers.html">Peers</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="project-support.html">Project Support</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="my-projects.html">My Projects</a> <!-- Add "My Projects" tab -->
                    </li>
                </ul>
            </div>
            
            <!-- Display user name and college -->
            <span class="navbar-text ml-auto mr-3">
                <small>${userInfo.name}</small><br>
                <small>${userInfo.college}</small>
            </span>
            
            <!-- Logout button -->
            <button class="btn btn-danger ml-2" id="logoutBtn">Logout</button>
        </nav>
    `;

    // Insert the navigation bar at the beginning of the body
    document.body.prepend(navbarContainer);

    // Add an event listener to the logout button
    const logoutButton = document.getElementById('logoutBtn');
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            // Handle logout logic here
            // Redirect to the registration page after logout
            window.location.href = 'registration.html';
        });
    }
}

// Call the function to include the navigation bar
includeNavbar();
