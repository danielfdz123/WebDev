import '../App.css'
import './home.css'

export function Home() {
    return ( 
    <>
        <div class = "HomePage">   
            <h1 class = "hometitle"> "The Hangout" Minecraft Server </h1> 
            <div class = "aboutHome">
                <u> <h2 class = "heading"> ABOUT </h2> </u>
                <b class = "text"> Welcome to <i>"<u>The Hangout!</u>"</i> This server is a place where creativity, adventure, and teamwork come together. 
                Regardless if you're a casual player, or an experienced player there is something for everyone here! 
                At <i>"<u>The Hangout</u>"</i>, our main goal here is simple, to have fun and express yourself, along with exploring the world to see what these new updates brought us.
                Join us and become part of a growing community where every player is valued. Let's build, explore, and have a good time! 
                </b>
            </div> 

            {/* div needed to set up horizaontal boxes */}
            <div class = "horizontal"> 
                <div class = "hBOX">
                    <u> <h2 class = "heading"> JOIN THE TEAM! </h2> </u>
                    <b class = "text"> TEAM STUFF GOES HERE </b>
                </div> 
                <div class = "hBOX">
                    <u> <h2 class = "heading"> OUR GOALS </h2> </u>
                    <b class = "text"> (dicuss server goals/tasks here) </b>
                </div> 
            </div>
        </div>
    </>
    )
}

export default Home