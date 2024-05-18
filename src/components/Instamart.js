import {useState,useEffect} from 'react';
const Section = ({ title, description, isVisible, setIsVisible}) => {
    // const [isVisible,setIsVisible] = useState(false);
  return (

    <div className="border border-black m-2 p-2">
      <h1 className="text-3xl m-2 p-2">{title}</h1>      
      {isVisible?(
      <>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 mx-4 rounded" onClick={()=>{
        setIsVisible(false);
      }}>
            Hide
        </button>
      </>):(<><button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 mx-4 rounded" onClick={()=>{
        setIsVisible(true);
      }}>
        Show
      </button></>)}
      {isVisible && <div>{description}</div> }
    </div>
  );
};

const Instamart = () => {
    const [sectionConfig, setSectionConfig] = useState({
        "showAbout":false,
        "showTeam":false,
        "showCareers":false,
    });
  return (
    <>
      <Section
        title="About Instamart" isVisible={sectionConfig.showAbout} setIsVisible={(b)=>setSectionConfig({
          "showAbout":b,
          "showTeam":false,
          "showCareers":false,
      })}
        description={
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
        }
      />
      <Section
        title="Team Instamart" isVisible={sectionConfig.showTeam} setIsVisible={(b)=>setSectionConfig({
          "showAbout":false,
          "showTeam":b,
          "showCareers":false,
      })}
        description={
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
        }
      />
      <Section
        title="Careers Instamart" isVisible={sectionConfig.showCareers} setIsVisible={(b)=>setSectionConfig({
          "showAbout":false,
          "showTeam":false,
          "showCareers":b,
      })}
        description={
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
        }
      />
    </>
  );
};
export default Instamart;

// setIsVisible={()=>{setSectionConfig({
//   "showAbout":true,
//   "showTeam":false,
//   "showCareers":false,
// })}}

