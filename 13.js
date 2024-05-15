var object = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    pages: 400,

    add: function () {
        let n = this.title
        let total = this.author
        console.log("Reading", n, "By", total)
    }
}

object.add()
