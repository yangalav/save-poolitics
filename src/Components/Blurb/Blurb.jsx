import Headline from "./Headline";
import Description from "./Description";

export default function Blurb({ headline, headlineStyles, description, descriptionStyles }) {
  return (
    <>
      {headline && 
        <Headline headline={headline} styles={headlineStyles} /> 
      }   
      {description &&
        <Description description={description} styles={descriptionStyles}/>
      }
    </>
  )
};