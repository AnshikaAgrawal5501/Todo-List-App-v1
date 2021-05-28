function deleteItem(ind) {



    const data = {
        index: ind
    }

    console.log(data)

    // const url = `/delete`;

    // const options = {
    //     method: "POST",
    //     body: JSON.stringify(data),
    // };

    // https.request(url, options, function(response) {

    //     response.on("data", function(data) {
    //         console.log(JSON.parse(data));
    //     });
    // });

    fetch("/delete", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    });

}