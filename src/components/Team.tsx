import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Glide from '@glidejs/glide';
import {
  Panel,
  PanelInner as PI,
  SectionTitle as ST,
  Gradient
} from './styled-components';
import { BiRightArrow } from 'react-icons/bi';
import { BiLeftArrow } from 'react-icons/bi';

import Misty from 'assets/misty.jpg';
import Nyaumon from 'assets/nyaumon.jpg';
import Yosan from 'assets/yosan.png';
import Lex from 'assets/lex.jpg';

interface TeamMemberProps {
  name: string;
  imgSrc: string;
  twitterHandle: string;
  title: string;
  intro: string;
}

const theTeam: TeamMemberProps[] = [
  {
    name: 'MistyBayou',
    imgSrc: Misty,
    twitterHandle: 'MistyBayouNFT',
    title: 'Founder &amp; Tech Lead',
    intro: `
      Misty started out in traditional finance as a software engineer, where he worked mostly on FX. He moved into a full-time freelance position in 2016, working on crypto as well as non-crypto contracts.<br/><br/>
      Previous work in the NFT space includes a founder & CTO role at Kitten Coup, lead developer role on The Chimpions, and a lore/ideation role at Famous Foxes.
    `
  },
  {
    name: 'Nyaumon',
    imgSrc: Nyaumon,
    twitterHandle: 'nyaumon',
    title: 'Founder &amp; Creative Lead',
    intro: `
      Nyaumon has significant artistic experience, including prior work in the gaming space, most notably for Neopets, but also for other organizations in the sector.<br/><br/>
      Previous experience in the NFT space include founding and leading the art on Kitten Coup, as well as creating banners for Famous Fox Federation.
    `
  },
  {
    name: 'Yosan',
    imgSrc: Yosan,
    twitterHandle: '_yhwhy',
    title: 'Community Lead',
    intro: `
      Yosan is a recent Computer Science graduate with a keen interest in fashion and streetwear. He's primarily experienced in customer-facing roles with companies like Amazon & HSBC, and plans to start a streetwear brand of his own in the near future.<br/><br/>
      Previous experience in the NFT space includes moderating & community organization for Kitten Coup and Samurai Army.
    `
  },
  {
    name: 'Lex',
    imgSrc: Lex,
    twitterHandle: 'kufimbank',
    title: 'Marketing &amp; Partnerships Lead',
    intro: `
      Currently at university studying hospitality management & accounting, Lex has experience growing Instagram & TikTok pages to 100,000+ followers, and more than 8 years of programming experience. He's also a keen sportsman and has competed at international level.<br/><br/>
      Previous experience in the NFT space includes moderating & promotional work for Kitten Coup and Samurai Army.
    `
  }
];

const SectionTitle = styled(ST)`
  border: 6px solid #222;
`;

const Wrapper = styled(Gradient)`
  padding: 4rem 0;
  a {
    color: #333;
    &:hover,
    &:focus {
      color: #444;
    }
    &:visited,
    &:active {
      color: #333;
    }
  }
  & > div {
    max-width: 1199px;
    margin: 0 auto;
    @media screen and (max-width: 1199px) {
      max-width: 90%;
    }
    @media screen and (max-width: 1199px) {
      max-width: 100%;
    }
  }
  .glide__arrow {
    color: rgba(255, 255, 255, 0.5);
    text-shadow: 0 0.25em 0.5em rgb(0 0 0 / 10%);
  }
  @media screen and (max-width: 767px) {
    text-align: center;
  }
`;

const PanelInner = styled(PI)`
  display: flex;
  gap: 1rem;
  align-items: center;
  & > div {
    flex: 1;
  }
  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

const Pfp = styled.img`
  height: 300px;
  @media screen and (max-width: 991px) {
    height: 250px;
  }
`;

const Name = styled.div`
  padding-bottom: 0.5rem;
  font-weight: 600;
`;

function decodeHtml(html: string) {
  var txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  imgSrc,
  twitterHandle,
  title,
  intro
}) => {
  return (
    <li className="glide__slide">
      <Panel>
        <PanelInner>
          <Pfp src={imgSrc} alt="" />
          <div>
            <Name>
              <a
                href={`https://twitter.com/${twitterHandle}`}
                target="_blank"
                rel="noreferrer"
              >
                {name}
              </a>
              <br />
              <span dangerouslySetInnerHTML={{ __html: decodeHtml(title) }} />
            </Name>
            <div dangerouslySetInnerHTML={{ __html: decodeHtml(intro) }} />
          </div>
        </PanelInner>
      </Panel>
    </li>
  );
};

const Team: React.FC = () => {
  const [glideHasMounted, setGlideHasMounted] = useState(false);
  useEffect(() => {
    if (!glideHasMounted && document.querySelector('.glide')) {
      new Glide('.glide', {
        breakpoints: {
          767: {
            peek: 50
          }
        },
        peek: 100,
        perView: 1
      }).mount();
      setGlideHasMounted(true);
    }
  }, [glideHasMounted]);
  return (
    <>
      <SectionTitle id="team">
        <h2>The Team</h2>
      </SectionTitle>
      <Wrapper>
        <div>
          <div className="glide">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                {theTeam.map((m) => (
                  <TeamMember
                    key={m.name}
                    name={m.name}
                    imgSrc={m.imgSrc}
                    twitterHandle={m.twitterHandle}
                    title={m.title}
                    intro={m.intro}
                  />
                ))}
              </ul>
            </div>
            <div className="glide__arrows" data-glide-el="controls">
              <button
                className="glide__arrow glide__arrow--left"
                data-glide-dir="<"
              >
                <BiLeftArrow title="Previous" />
              </button>
              <button
                className="glide__arrow glide__arrow--right"
                data-glide-dir=">"
              >
                <BiRightArrow title="Next" />
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Team;
