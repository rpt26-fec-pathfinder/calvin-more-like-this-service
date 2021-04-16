import {HoverContainer, HoverBox, HoverContent, HoverGame, HoverTitle, HoverReleaseDate, HoverScreenshotsContainer, HoverScreenshots, HoverBody, HoverReviewSummary, HoverRecommendation, HoverClear, HoverTagRow, HoverTag} from '../styledComponents/styled.hover.jsx';


const Hover = ({game, hover}) => {

  return (
    <React.Fragment>
      {hover && <HoverContainer>
        <HoverBox>
          <HoverContent>
            <HoverGame>
              <HoverTitle>
                {game.title}
              </HoverTitle>
              <HoverReleaseDate>
                <span>{game.releaseDate}</span>
              </HoverReleaseDate>
              <HoverScreenshotsContainer>
                <HoverScreenshots style={{backgroundImage: `url(${game.gallery[0]})`}}></HoverScreenshots>
                <HoverScreenshots style={{backgroundImage: `url(${game.gallery[1]})`}}></HoverScreenshots>
                <HoverScreenshots style={{backgroundImage: `url(${game.gallery[2]})`}}></HoverScreenshots>
                <HoverScreenshots style={{backgroundImage: `url(${game.gallery[3]})`}}></HoverScreenshots>
              </HoverScreenshotsContainer>
              <HoverBody>
                <HoverReviewSummary>
                  <div>Overall user reviews:</div>
                  <HoverRecommendation>{game.reviewRating}</HoverRecommendation>
                  {` (${game.reviewCount} reviews)`}
                </HoverReviewSummary>
                <HoverClear/>
              </HoverBody>
              <HoverBody>
                User tags:
                <HoverTagRow>
                  <HoverTag>{game.tags[0]}</HoverTag>
                  <HoverTag>{game.tags[1]}</HoverTag>
                  <HoverTag>{game.tags[2]}</HoverTag>
                  <HoverTag>{game.tags[3]}</HoverTag>
                  <HoverTag>{game.tags[4]}</HoverTag>
                </HoverTagRow>
              </HoverBody>
            </HoverGame>
          </HoverContent>
        </HoverBox>
      </HoverContainer>}
    </React.Fragment>
  );
};

export default Hover;