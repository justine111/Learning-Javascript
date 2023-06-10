    //for validayion
    let form = document.getElementById("form");
    let input = document.getElementById("input");
    let msg = document.getElementById("msg");
    let posts = document.getElementById("posts");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("button clicked");

        formValidation();
    });

    let formValidation = () => {
        if (input.value === "") {
            msg.innerHTML = "Please Input text";
            console.log("kailangan mag input text");
        } else {
            console.log("success");
            msg.innerHTML = "";
            acceptData();
        }
    };

    //for data insert
    let data = {};
    let acceptData = () => {
        data["text"] = input.value;
        console.log(data);
        createPost();
    };

    //post the data
    let createPost = () => {
        posts.innerHTML += `
        <div>
            <p>${data.text}</p>
            <span class="options">
                <i onClick="editPost(this)" class="fas fa-edit"></i>
                <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
            </span>
        </div>
        `;
        input.value = "";
    };

    //delete post
    let deletePost = (e) => {
        e.parentElement.parentElement.remove();
    };
    
    //edit post
    let editPost = (e) => {
        input.value = e.parentElement.previousElementSibling.innerHTML;
        e.parentElement.parentElement.remove();
    };