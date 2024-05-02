<template>
    <div class="background">

        <div class="left-bar">
            <img class="left-img" src="/public/image/Frame.png">
            <h4>Username</h4>
            <p>career</p>
            <p><i class="fa-solid fa-location-dot"></i> Location</p>
            <p>status description</p>
            <div class="follow">
                <div class="shots">
                    <p>0</p>
                    <p>Shots</p>
                </div>
                <div class="shots" id="follower">
                    <p>0</p>
                    <p>Followers</p>
                </div>
                <div class="shots">
                    <p>0</p>
                    <p>Following</p>
                </div>
            </div>

            <div class="profile-btn">
                <a href="#">Edit Profile</a>
                <a href="#">Share Profile</a>
            </div>

            <div class="photo-like">
                <p>Photos</p>
                <p>Likes</p>
            </div>
            <div class="photo-img">
                <img src="/public/image/chess.png">
                <img src="/public/image/chess.png">
            </div>

        </div>

        <div class="center-bar">

            <h1>Community</h1>
            <input type="text" id="search" placeholder=" Search">
            <div class="my-vibes">
                <h1>My vibes</h1>
                <a href="#"><i class="fa-regular fa-comments"></i> Chat</a>
            </div>

            <img class="my-vibes-img" src="/public/image/chess.png">

            <div class="posts">
                <h1><i class="fa-solid fa-bullhorn"></i> Posts</h1>
                <a href="#">See All</a>
            </div>
            <div class="post-con" id="post-con1">
                <div class="post-con1-nav">
                    <div class="pcon1-top">
                        <div class="avatar-con">
                            <img class="avatar" src="/public/image/Frame.png">
                            <div class="post-con-nav-text">
                                <p>Username</p>
                                <p>online status</p>
                            </div>
                        </div>
                        <label><a href="#">Follow</a></label>
                    </div>
                    <input type="text" id="share" placeholder="Share your thoughts">
                </div>
                <div class="post-con1-footer">
                    <a href="#"><i class="fa-solid fa-tower-broadcast"></i> Live</a>
                    <a href="#"><i class="fa-regular fa-images"></i> Picture/Video</a>
                    <a href="#"><i class="fa-regular fa-face-grin-squint"></i> Feeling</a>
                </div>
            </div>

            <div class="post-con" id="post-con2">
                <div class="post-con1-nav" id="post-con2-nav">
                    <div class="pcon1-top">
                        <div class="avatar-con">
                            <img class="avatar" src="/public/image/Frame.png">
                            <div class="post-con-nav-text">
                                <p>Username</p>
                                <p>online status</p>
                            </div>
                        </div>
                        <label><a href="#">Follow</a></label>
                    </div>
                    <img class="pcon2-img" src="/public/image/chess.png">
                </div>

            </div>
            <div class="pcon2-footer">
                <h3>Comments</h3>
                <div class="pcon2-comment">
                    <img class="avatar" id="avatar2" src="/public/image/Frame.png">
                    <input type="text" id="comment" placeholder="Write a comment">
                    <a href="#"><i class="fa-solid fa-paper-plane"></i></a>
                </div>
            </div>
        </div>

        <div class="right-bar">
            <div class="top-chat">
                <h1>Chat</h1>
                <a href="#"><i class="fa-solid fa-user-plus"></i></a>
            </div>
            <div class="chat-con">
                <div class="a-con">
                    <img src="/public/image/Frame.png">
                    <div class="chat-text">
                        <p id="chat-user-name">User name</p>
                        <p>message</p>
                    </div>
                    <p>Date,Time</p>
                </div>
                <div class="a-con">
                    <img src="/public/image/Frame.png">
                    <div class="chat-text">
                        <p>User name</p>
                        <p>message</p>
                    </div>
                    <p>Date,Time</p>
                </div>

                <div class="create-group-chat">
                    <a href="#">Create a group chat</a>
                </div>


            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: "TrendyTreehugger | คอมมูนิตี้",
    meta: [
        { name: "description", content: "ร้านค้าเเฟชั่น" }
    ]
})
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.background {
    display: flex;
    background-color: #fff9ed;
}

.left-bar {
    width: 25%;
    text-align: center;
}

.left-img {
    padding-top: 80px;
    padding-right: 15px;
}

.follow {
    display: flex;
    justify-content: center;
    padding: 20px;
    margin-left: 35px;
}

.shots {
    padding: 10px;
}

#follower {
    border-left: 1px solid #544238;
    border-right: 1px solid #544238;
}

.profile-btn {
    margin-bottom: 30px;
    margin-left: 20px;
    margin-right: 20px;
    border-bottom: 1px solid #544238;
    padding-bottom: 50px;
    padding-top: 30px;
}

.profile-btn a {
    margin: 0px 20px;
    text-decoration: none;
    background-color: #6B705C;
    color: #fff;
    padding: 10px 15px;
    border-radius: 10px;
}

.photo-like {
    display: flex;
    justify-content: center;

    & p {
        margin: 0 40px;
    }

}

.photo-img {
    display: flex;
    justify-content: center;

    & img {
        width: 25%;
        margin: 30px 10px;
    }
}

.center-bar {
    padding: 0 40px;
    padding-top: 40px;
    width: 50%;
    border-left: 1px solid #544238;
    border-right: 1px solid #544238;
}

#search {
    margin: 20px 0px;
    width: 100%;
    height: 30px;
}

.my-vibes {
    display: flex;
    justify-content: space-between;

    & a {
        color: #333;
        text-decoration: none;
    }
}

.my-vibes-img {
    margin: 20px 0;
}

.posts {
    display: flex;
    justify-content: space-between;

    & a {

        color: #333;
    }

}

.post-con {
    background-color: rgba(82, 82, 82, 21%);
    padding: 10px 10px;
    border-radius: 10px;
    margin: 20px 0;
}

.post-con1-nav {
    border-bottom: 1px solid #544238;
    padding: 20px;
}

.pcon1-top {
    display: flex;
    justify-content: space-between;

    & a {
        text-decoration: none;
        background-color: #fff;
        color: #333;
        padding: 5px;
        border-radius: 3px;
        border: 1px solid #333;
    }
}

.avatar-con {
    display: flex;
}

.post-con-nav-text {
    margin: 10px;
}

#share {
    width: 100%;
    height: 37px;
    border-radius: 15px;
    border: none;
    padding-left: 10px;
    margin: 10px 0px;
}

.avatar {
    width: 50px;
    height: 50px;
}

.post-con1-footer {
    text-align: center;
    margin: 30px 10px;

    & a {
        margin: 10px;
        color: #333;
        text-decoration: none;
        background-color: #fff;
        padding: 10px 30px;
        border-radius: 20px;
    }
}

#post-con2-nav {
    border: none;
}

.pcon2-img {
    width: 100%;
    height: auto;
    padding: 40px;
}

.pcon2-footer {
    background-color: #fff;
    margin-top: -30px;
    padding: 30px;

    & h3 {
        margin-bottom: 20px;
    }

    & a {
        color: #333;
    }
}

#avatar2 {
    margin-bottom: -20px;
}

#comment {
    margin-left: 10px;
    margin-right: 10px;

    width: 303px;
    height: 36px;
    padding: 0 10px;
}

.right-bar {
    width: 25%;
}

.top-chat {
    margin: 40px;
    display: flex;
    justify-content: space-between;

    & a {
        color: #333;
        font-size: 1.5rem;
    }
}

.a-con {
    padding: 10px 5px;
    background-color: #fff;
    display: flex;
    margin: 20px;
    border-radius: 10px;
    justify-content: space-between;
    align-items: center;

    & img {
        width: 50px;
        height: 50px;
    }
}

.chat-text {
    margin-left: -100px;
}

.create-group-chat {
    text-align: center;
    margin: 40px;

    & a {
        text-decoration: none;
        color: #fff;
        background-color: #6B705C;
        padding: 5px 10px;
        border-radius: 10px;
    }
}
</style>