import axios from "axios";

// fetch + .then syntax
function main1() {
    fetch("test.com").then(async (response) => {
        const json = await response.json();
    });
}

// async-await in fetch
async function main2() {
    // GET
    const response = await fetch("test.com");
    const json = await response.json();

    // PUT
    const response2 = await fetch("test.com", {
        method: "PUT", // for post fo method: "POST"
        body: {
            username: "jogeshwar",
            password: "test1234",
        },
        headers: {
            Authorization: "Bearer 123",
        },
    });
    const text = await response.text(); // assuming put request returns a text
}

// axios
async function main3() {
    // GET - here second argument will be headers, in put/post/delete second will be body and third will be headers
    const response = await axios.get("test.com");

    // PUT
    const response2 = await axios.put(
        // for post do axios.post
        "test.com?a=b", //set query params in url
        {
            username: "jogeshwar",
            passsword: "test1234",
        },
        {
            headers: {
                Authorization: "Bearer 123",
            },
        }
    );

    // write method with headers instead
    const response3 = await axios("test.com", {
        method: "GET",
        headers: {
            Authorization: "Bearer 123",
        },
    });

    // cleanest way
    const response4 = await axios("test.com", {
        url: "test.com",
        method: "POST",
        headers: {
            Authorization: "Bearer 123",
        },
        data: {
            //body
            username: "Jogeshwar",
        },
    });

    // response.data - directly get data here
}
