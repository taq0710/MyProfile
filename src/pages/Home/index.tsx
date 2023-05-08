
import About from 'components/layout/About';
import Info from 'components/layout/Info';
import NavBar from 'components/layout/Navbar';
import Skills from 'components/layout/Skills';
import React, { useState } from 'react';

export interface HomeProps {
}
export default function Home(props: HomeProps) {
  const [isToggled, setIsToggled] = useState(false);
  const [language, setLanguage] = React.useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  }

  const handleSetlanguage = () => {
    setLanguage(!language);
  }

  return (
    <div className={`${isToggled ? 'bg-bgdark' : 'bg-white'} h-screen bg-[url('/public/bgimg.jpg')] bg-cover bg-repeat`}>
      <NavBar isToggled={isToggled} onToggle={handleToggle} language={language} setlanguage={handleSetlanguage} />
      <Info isToggled={isToggled} language={language} />
      <About isToggled={isToggled} language={language} />
      <Skills />
    </div>
  );
}
