import React from 'react';
import '../about/About.css';
import Pillars from '../components/ourpillars/Pillars';

const About = () => {
  return (
    <div className='abt'>
      <div className="abt-title">
        <h3>About Us</h3>
        <hr className='abt-divider' />
      </div>
      <div className="abt-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quod asperiores sed minima porro. Ea in, eius dolores incidunt, tempore est sunt cupiditate qui porro aliquam deserunt sapiente quibusdam rem eligendi ex nostrum officia! Aperiam odio aliquam vitae expedita odit nostrum rerum. Sunt, aspernatur, eius vero nesciunt, quaerat quas tempore aliquid dignissimos nisi accusamus unde ex! Ratione nobis nulla inventore dignissimos cumque a dolores saepe eos, quis esse voluptates exercitationem obcaecati, quia vero porro molestiae incidunt, sint mollitia magnam labore! Nihil eos eveniet odio nostrum quisquam quos, officiis ipsam, laboriosam dolorum temporibus hic eaque pariatur? Hic fuga voluptas eius aliquid amet iusto sunt, eveniet libero repellendus fugiat eligendi expedita? Est architecto voluptatum blanditiis officiis aliquam laborum earum amet maxime repudiandae. Consequuntur ut magnam ea optio distinctio fuga eaque tenetur accusamus incidunt? Nemo eum, impedit quis placeat quod beatae, commodi odio esse ut, tenetur enim dolores excepturi quia? Aliquid sapiente, pariatur quibusdam illo culpa enim quod est repellendus quasi quia dolorem cupiditate amet possimus aut explicabo, ex corrupti repudiandae, exercitationem ab ad accusamus vero sint debitis! Similique eius quo commodi? Autem placeat quaerat quisquam iure. Provident non beatae consequuntur unde tenetur nisi vel delectus, quo dolor eligendi? Tempora quam dolorum omnis?</p>
      </div>

      <div className="our-pillars">
        <Pillars />
      </div>
    </div>
  )
}

export default About
