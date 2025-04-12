import GetLatestRepoCommit from '../components/GetLatestRepoCommit.jsx';
export default function HomePage (){
    return (
        <div>
            <h1>Home</h1>
            <p>Thank you for visiting my website. I am currently working on this, so many functions are under development.</p>
            <p><a href={"https://github.com/AdamBastin/bastin.dev"} className={"font-bold underline"}>Here</a> is my GitHub page for this project.</p>
            <br /> <br />
            {GetLatestRepoCommit()}
        </div>
    )
}