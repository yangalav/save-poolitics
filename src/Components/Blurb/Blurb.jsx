import Headline from "./Headline";
import Description from "./Description";

export default function Blurb({ headline, description, descriptionStyles }) {
  return (
    <>
      {headline && 
        <Headline headline={headline} /> 
      }   
      {description &&
        <Description description={description} styles={descriptionStyles}/>
      }
    </>
  )
};