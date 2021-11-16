import React from "react";
import styled from "styled-components";

const trendingItems = [
  {
    image_src:
      "https://external-preview.redd.it/QHqAPxz6yCSpYUqAGnl5Z9Ieo0LsWImRsY5XDWe-ZZc.png?format=pjpg&auto=webp&s=f8ac7112eab67060df31700dbaf2a51b653a650a",
    title: "NYC Marathon",
    description: "This duck running in the NY marathon with his own little",
    subreddit: {
      image_src:
        "https://styles.redditmedia.com/t5_2qh1o/styles/communityIcon_6fzlk8ukx6s51.jpg?width=256&s=871966d25df80daff1c74ee9a4eb4033bea5c301",
      name: "aww and more",
    },
  },

  {
    image_src:
      "https://external-preview.redd.it/8ajHj9xobdDnxXh06WekK2Sb8-UUZ1fchuMM_mxjGKY.jpg?auto=webp&s=8a2b08438aa1be68fe72d60be7bdb859f208f8bb",
    title: "Nikola Jokic",
    description:
      "[Highlight] Nikola Jokic shoves Markieff Morris to the ground from behind",
    subreddit: {
      image_src:
        "https://styles.redditmedia.com/t5_2qo4s/styles/communityIcon_1podsfdai4301.png?width=256&s=90f8734cee5cfb8e06306013d830d43e31d68f27",
      name: "nba and more",
    },
  },

  {
    image_src:
      "https://external-preview.redd.it/NgURSektFb4IOPIVIxjDUrVrx1xWUPrKaxUI0wSva1A.jpg?auto=webp&s=9f5fade7e7aa170d08553870aace0b370c1ab408",
    title: "Dean Stockwell",
    description: "Dean Stockwell Dies: ‘Quantum Leap’ Star Was 85",
    subreddit: {
      image_src:
        "https://styles.redditmedia.com/t5_2qh3s/styles/communityIcon_oy4mm1w4ron61.jpg?width=256&s=e18c0d65c6b9159c5c34de859861d4a0cb99804d",
      name: "movies and more",
    },
  },

  {
    image_src:
      "https://external-preview.redd.it/iSvSnHtyj-cuIKt-15xOirCHUqT-ZDPgvCRqHQcHScY.jpg?auto=webp&s=495908bd838ab02c019dc9940d002f7b7c1420c0",
    title: "Travis Scott",
    description:
      "Travis Scott cancels Day N Vegas Festival appearance as online petitions call for performance bans",
    subreddit: {
      image_src:
        "https://a.thumbs.redditmedia.com/E0Bkwgwe5TkVLflBA7WMe9fMSC7DV2UOeff-UpNJeb0.png",
      name: "news and more",
    },
  },
];

export const TrendingToday = () => {
  return (
    <MainDiv>
      <span style={{ color: "gray" }} className="title">
        Trending today
      </span>
      <div className="elems">
        {trendingItems.map((item, index) => (
          <div
            key={index}
            className="trending hoverable"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 35%, transparent), url(${item.image_src})`,
            }}
          >
            <div className="context">
              <span className="title">{item.title}</span>
              <br />
              <span className="description">{item.description}</span>
              <div className="subreddit">
                <img src={item.subreddit.image_src} alt="" />
                <span>r/{item.subreddit.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MainDiv>
  );
};

const MainDiv = styled.div`
  height: auto;
  max-width: 1020px;
  margin: auto;
  margin-top: 10px;
  & .title {
    font-size: 15px;
    font-weight: 600;
    color: white;
  }

  & .elems {
    margin-top: 15px;
    display: flex;
  }
  & .elems .trending {
    margin: 0px 5px;
    width: 100%;
    height: 180px;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    color: white;
    position: relative;
  }
  & .elems .trending:first-child {
    margin-left: 0px;
  }

  & .elems .trending:last-child {
    margin-right: 0px;
  }

  & .elems .trending .context {
    position: absolute;
    bottom: 0px;
    padding-left: 15px;
    padding-bottom: 10px;
  }
  & .elems .trending .context .title {
    font-size: 18px;
    font-weight: bold;
  }
  & .elems .trending .context .description {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  & .elems .trending .context .subreddit {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  & .elems .trending .context .subreddit img {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin-right: 10px;
    border: 1px solid green;
  }
`;
