import People from "./People";

const PeopleList = () => {
    const peopleList=[{
        avatar :"",
        name:"Maria Milton",
        LastMessage:"how are u? bro.."
    },{
        avatar :"",
        name:"Agnal",
        LastMessage:"how about today college? bro.."
    },{
        avatar :"",
        name:"Ruban",
        LastMessage:"where are going?"
    },{
        avatar :"",
        name:"Siddiq",
        LastMessage:"how about learning? bro.."
    }]
    return (
        <>
            <div className="p-3">
                {
                 peopleList.map((people,i)=>(
                      <People People={people} key={i}/>    
                 ))
                }
            </div>            
        </>
    );
};

export default PeopleList;