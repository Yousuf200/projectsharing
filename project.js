// project.js

document.addEventListener("DOMContentLoaded", function () {
    // Function to extract the project ID from the URL
    function getProjectIdFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get("projectId");
    }

    const projectId = getProjectIdFromURL();

    // Replace the following with actual project data retrieval logic (e.g., fetch from a server)
    const projectData = {
        1: {
            title: "Project Title 1",
            author: "John Doe",
            documentation: "Project documentation for Project 1...Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente assumenda doloremque illum repellat aut perferendis fugiat ducimus quod esse laborum deleniti, aspernatur corporis. Sint, autem veniam! Alias ipsum numquam expedita.<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus blandit dolor, a varius quam tempus molestie. In vitae ipsum sit amet ipsum feugiat rutrum id a nunc. Nam non orci est. Aenean dignissim, purus ut varius varius, sapien tortor sodales mauris, aliquam porta enim mauris at ex. Morbi sodales fringilla pretium. In varius quam nulla, nec auctor nibh semper vel. Nam sodales dapibus ultrices. Sed erat odio, dignissim et posuere sit amet, tincidunt non quam. Duis consequat nibh a maximus ultrices. Pellentesque commodo urna volutpat erat eleifend imperdiet. Donec ut aliquam nisi.<br>            Etiam eget nisl odio. Nulla eget tortor ut magna mollis sagittis sit amet vel ligula. Quisque eget porttitor leo. Donec pharetra, arcu sed convallis commodo, nisi magna tristique metus, ac blandit sapien nunc quis est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed at massa mauris. Nunc fringilla dui sit amet tellus vulputate vehicula. Vivamus vel lectus auctor, placerat nunc vitae, ornare augue. Suspendisse facilisis arcu odio, nec rhoncus sapien ullamcorper non. Duis in nunc diam. Fusce elementum commodo dui nec lobortis. Proin porta a neque venenatis convallis. Nulla turpis mauris, accumsan a risus eget, eleifend egestas orci. Quisque fermentum sagittis diam, non varius nibh volutpat at. Curabitur in tristique nibh. Fusce sed tempus nisi, in varius velit",
            questions: [
                {
                    question: "How did you implement feature X?",
                    answer: "I used technology Y for implementing feature X.",
                },
                // Add more questions and answers as needed
            ],
        },
        2: {
            title: "Project Title 2",
            author: "Jane Smith",
            documentation: "Project documentation for Project 2...Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente assumenda doloremque illum repellat aut perferendis fugiat ducimus quod esse laborum deleniti, aspernatur corporis. Sint, autem veniam! Alias ipsum numquam expedita.<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus blandit dolor, a varius quam tempus molestie. In vitae ipsum sit amet ipsum feugiat rutrum id a nunc. Nam non orci est. Aenean dignissim, purus ut varius varius, sapien tortor sodales mauris, aliquam porta enim mauris at ex. Morbi sodales fringilla pretium. In varius quam nulla, nec auctor nibh semper vel. Nam sodales dapibus ultrices. Sed erat odio, dignissim et posuere sit amet, tincidunt non quam. Duis consequat nibh a maximus ultrices. Pellentesque commodo urna volutpat erat eleifend imperdiet. Donec ut aliquam nisi.<br>            Etiam eget nisl odio. Nulla eget tortor ut magna mollis sagittis sit amet vel ligula. Quisque eget porttitor leo. Donec pharetra, arcu sed convallis commodo, nisi magna tristique metus, ac blandit sapien nunc quis est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed at massa mauris. Nunc fringilla dui sit amet tellus vulputate vehicula. Vivamus vel lectus auctor, placerat nunc vitae, ornare augue. Suspendisse facilisis arcu odio, nec rhoncus sapien ullamcorper non. Duis in nunc diam. Fusce elementum commodo dui nec lobortis. Proin porta a neque venenatis convallis. Nulla turpis mauris, accumsan a risus eget, eleifend egestas orci. Quisque fermentum sagittis diam, non varius nibh volutpat at. Curabitur in tristique nibh. Fusce sed tempus nisi, in varius velit",
            questions: [
                // Questions and answers for Project 2
                {
                    question: "How did you implement feature X?",
                    answer: "I used technology Y for implementing feature X.",
                },
            ],
        },
        // Add data for more projects as needed
        2: {
            title: "Project Title 3",
            author: "Red Jhon",
            documentation: "Project documentation for Project 3...Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente assumenda doloremque illum repellat aut perferendis fugiat ducimus quod esse laborum deleniti, aspernatur corporis. Sint, autem veniam! Alias ipsum numquam expedita.<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus blandit dolor, a varius quam tempus molestie. In vitae ipsum sit amet ipsum feugiat rutrum id a nunc. Nam non orci est. Aenean dignissim, purus ut varius varius, sapien tortor sodales mauris, aliquam porta enim mauris at ex. Morbi sodales fringilla pretium. In varius quam nulla, nec auctor nibh semper vel. Nam sodales dapibus ultrices. Sed erat odio, dignissim et posuere sit amet, tincidunt non quam. Duis consequat nibh a maximus ultrices. Pellentesque commodo urna volutpat erat eleifend imperdiet. Donec ut aliquam nisi.<br>            Etiam eget nisl odio. Nulla eget tortor ut magna mollis sagittis sit amet vel ligula. Quisque eget porttitor leo. Donec pharetra, arcu sed convallis commodo, nisi magna tristique metus, ac blandit sapien nunc quis est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed at massa mauris. Nunc fringilla dui sit amet tellus vulputate vehicula. Vivamus vel lectus auctor, placerat nunc vitae, ornare augue. Suspendisse facilisis arcu odio, nec rhoncus sapien ullamcorper non. Duis in nunc diam. Fusce elementum commodo dui nec lobortis. Proin porta a neque venenatis convallis. Nulla turpis mauris, accumsan a risus eget, eleifend egestas orci. Quisque fermentum sagittis diam, non varius nibh volutpat at. Curabitur in tristique nibh. Fusce sed tempus nisi, in varius velit",
            questions: [
                // Questions and answers for Project 3
                {
                    question: "How did you implement feature X?",
                    answer: "I used technology Y for implementing feature X.",
                },
            ],
        },
    };

    // Populate project details on the page
    if (projectData.hasOwnProperty(projectId)) {
        const project = projectData[projectId];
        document.getElementById("project-title").textContent = project.title;
        document.getElementById("project-author").textContent = "Author: " + project.author;
        document.getElementById("project-documentation").textContent = project.documentation;

        // Populate previous questions and answers
        const previousQuestionsList = document.getElementById("previous-questions-list");
        project.questions.forEach((qa) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<strong>${qa.question}</strong><br>${qa.answer}`;
            previousQuestionsList.appendChild(listItem);
        });

        // Add functionality to the "Ask a Question" button (e.g., open a modal or redirect to a contact page)
        const askQuestionButton = document.getElementById("ask-question-button");
        askQuestionButton.addEventListener("click", function () {
            // Implement your logic for handling questions here
            // This can include opening a modal or redirecting to a contact page
        });
    } else {
        // Handle the case where the project ID is not found
        alert("Project not found.");
    }
});
