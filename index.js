fetch("https://api.jsonbin.io/v3/b/674eff3de41b4d34e45f0a94")
    .then(response => response.json())
    .then(data => {
        const userComments = data['record']['comments'].map((comment) => {
            let userName = comment['user']['username']
            // let userImg = comment['user']['image']['webp']
            let userImg = comment['user']['image']['png']
            let dateCreated = comment['createdAt']
            let userScore = comment['score']
            let content = comment['content']
            let comReplies = comment["replies"]
            // if (comReplies == "") {
            //     return
            // } else {
            //     let commentReplies = comReplies.map((reply) =>{
            //         let newReply = reply.content
            //         return `<p>${newReply}</p>`
            //     })
            //     const replyCont = document.getElementById('replies-container')
            //     replyCont.innerHTML = commentReplies.join('') 
            // }
            
            return `<div class="comment">
                <div class="score-div left">
                    <p class="rating">+</p>
                    <p class="score">${userScore}</p>
                    <p class="rating">-</p>
                </div>
                <div class="rest-div right">
                    <div class="user-header">
                        <img class="user-img" src="${userImg}">
                        <p class="username">${userName}</p>
                        <p class="date">${dateCreated}</p>
                    </div>
                    <p class="content">${content}</p>
                </div>
            </div>`
        })
        const commentCont = document.getElementById('commentsContainer')
        commentCont.innerHTML = userComments.join('') 
    })
    .then(data => {
        const currentUser = data['record']['currentUser']
        const userImg = currentUser['image']['png']
        document.getElementsByClassName("user-img").src = userImg;
        console.log(userImg)
    })