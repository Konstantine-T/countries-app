import './Hero.css'

const Hero = () => {
  return (
    <div className="hero-image">
      <div className="hero-text">
        <h1>Some cool Hero section</h1>
        <p>Some cool hero section descriprion here</p>
        <button onClick={() => {console.log('I told you i log stuff')}}>I just log stuff</button>
      </div>
    </div>
  );
};

export default Hero;
